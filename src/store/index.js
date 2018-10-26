//创建一个中央管理store
import Vue from "vue"
import Vuex from "vuex"
import transpondModule from "./modules/transpondModule"

Vue.use(Vuex)


let store = new Vuex.Store({
    modules:{
        transpondModule
    }
})

export default store;