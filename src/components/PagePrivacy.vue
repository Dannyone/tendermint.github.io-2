<template>
  <page-split class="page-privacy">
    <page-header
      title="Privacy Policy"
      subtitle="Learn about our privacy policy."
      type="split"
      slot="header"
      theme="tendermint">
    </page-header>
    <article-body>
      <markdown-content></markdown-content>
    </article-body>
  </page-split>
</template>

<script>
import MarkdownContent from '../../content/privacy-policy.md'
import PageHeader from '@nylira/vue-page-header'
import PageSplit from '@nylira/vue-page-split'
import ArticleBody from '@nylira/vue-article-body'
export default {
  name: 'page-privacy',
  components: {
    ArticleBody,
    PageHeader,
    PageSplit,
    MarkdownContent
  },
  mounted () {
    document.title = 'Privacy Policy - Tendermint'
  }
}
</script>
