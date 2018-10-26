export default {
    //用来存放共享的state
    state:{
        showTranspond:false,
        scrollTop:0
    },
    //用来更改state的状态 pure function
    mutations:{

        ADDNUM:(state)=>{
            if(state.showTranspond==false){
                state.showTranspond=true
            }else if(state.showTranspond==true){
                state.showTranspond=false
            }
        },
        CHANGESCROLL:(state)=>{
            state.scrollTop=100
        }
    },
    //获取外部请求,async
    actions:{
        INCNUM:(store)=>{

            store.commit("ADDNUM")
            
        },
        INSCROLL:(store)=>{
            store.commit("CHANGESCROLL")
        }
    },
    //用来获取state的值
    getters:{
        GETNUM:(state)=>{
            return state.showTranspond
        },
        GESCROLL:(state)=>{
            return state.scrollTop
        }
    }
}