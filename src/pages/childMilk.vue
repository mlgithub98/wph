<template>
  <div>
    <child-milk-header></child-milk-header>
    <child-milk-content></child-milk-content>
    <child-milk-detail :list="childMilkLisData"></child-milk-detail>
    <child-milk-transpond></child-milk-transpond>
  </div>
  
</template>

<script>
  import childMilkHeader from "../components/childMilk/childMilkHeader.vue"
  import childMilkContent from "../components/childMilk/childMilkContent.vue"
  import childMilkDetail from "../components/childMilk/childMilkDetail.vue"
  import childMilkTranspond from "../components/childMilk/childMilkTranspond.vue"
  import childMilkLis from "../../static/childMilkLis.json"
  export default {
    components :{
        childMilkHeader,
        childMilkContent,
        childMilkDetail,
        childMilkTranspond,
        childMilkLis
    },
    data(){
      return{
        childMilkLisData:[]
      }
    },
    methods:{
      _initData(){
        this.childMilkLisData=childMilkLis
      }
    },
    created:function(){
       this._initData()
    }
  }

</script>
<style>

</style>