var fs = require('fs')
var glob = require('glob')
var lib = require('./docs-helpers.js')

var docs = './content/docs/**/*.md'
var intro = './content/intro/**/*.md'

// templating
var htmlTemplate = fs.readFileSync('./build/templates/Entries.html', 'utf8')
var template = require('es6-template-strings')

// functions
function writePages (data) {
  let string = '\n'
  for (var i = 0; i < data.length; i++) {
    let d = data[i]
    if (d.elementName === 'index') {
      string +=
        `  <${d.elementName} v-if="r()"></${d.elementName}>\n`
    } else {
      string +=
        `  <${d.elementName} v-if="r('${d.routeName}')"></${d.elementName}>\n`
    }
  }
  // console.log(string)
  return string
}

function writeComponents (data) {
  let string = '\n'
  for (var i = 0; i < data.length; i++) {
    let d = data[i]
    string += `    ${d.pascalName}: require('${d.vueFilename}')`
    if (i !== data.length - 1) string += ',\n'
    else string += '\n  '
  }
  // console.log(string)
  return string
}

function writeTemplate (data, filename) {
  let pages = writePages(data)
  let components = writeComponents(data)

  let filedata = template(htmlTemplate, { pages: pages, components: components })

  fs.writeFileSync(filename, filedata, 'utf8')
  console.log(`  ✓ ${filename}`)
}

function buildAll (wildcard, filename) {
  let filenames
  glob(wildcard, function (err, files) {
    if (err) console.log(err)
    filenames = files
    let data = lib.filesToArray(filenames)
    writeTemplate(data, filename)
  })
}

module.exports = function () {
  buildAll(docs, './src/components/PageDocsEntries.vue')
  buildAll(intro, './src/components/PageIntroEntries.vue')
}
