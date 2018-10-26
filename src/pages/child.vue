<template>
  <div>
    <child-banner></child-banner>
    <child-title-lis></child-title-lis>
    <child-sub-content></child-sub-content>
  </div>
  
</template>

<script>
  import childBanner from "../components/child/childBanner.vue"
  import childTitleLis from "../components/child/childTitleLis.vue"
  import childSubContent from "../components/child/childSubContent.vue"
  export default {
    components :{
        childBanner,
        childTitleLis,
        childSubContent
    }
  }

</script>
<style>

</style>
