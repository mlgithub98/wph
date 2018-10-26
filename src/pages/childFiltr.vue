<template>
    <div>
        <child-filtr-header @filtrCancle="tryf"></child-filtr-header>
        <child-filtr-content :list="childFiltrChoiceData"></child-filtr-content>
    </div>
</template>

<script>
    import childFiltrHeader from "../components/childFiltr/childFiltrHeader.vue"
    import childFiltrContent from "../components/childFiltr/childFiltrContent.vue"
    import childFiltrChoice from "../../static/childFiltrChoice.json"
    export default {
        components:{
            childFiltrHeader,
            childFiltrContent,
            childFiltrChoice
        },
        data(){
            return{
                childFiltrChoiceData:[]
            }
        },
        methods:{
            _initData(){
                this.childFiltrChoiceData=childFiltrChoice
            },
            tryf(ev){
                console.log(ev)
            }
        },
        created(){
            this._initData()
        }
    }
</script>

<style>

</style>
