import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state : {
        city:[],
        label:[],
        addHome:{},
        imgUrlx:''
       
    },

    mutations :{
        changeCity (state,data) {
          
            
            var obj = {}
           
            obj.speechidContent = data.res
            obj.label = data.label
            
            if(data.index !== '') { // 判断是新添加的话术 还是在原来的话术内容做修改  
               
                state.city[data.index] = obj // 如果index 不等于空 就说明是在原来的内容上做修改 ，靠索引值 将新数据做覆盖
            }else {
           
                state.city.push(obj)  // 如果没有传过来索引值 就 表明是添加新数据，将新数据整个push到 数组中
            }
            
            
        },
        shanchu (state,data) {

            state.city.splice(data.index,1)
        },
        addLabel (state,data) {
            state.label = data
         
            
        },
        getCardHome (state,data) {
            state.addHome = data
            
            
        },
        getHuasu (state,data){
          
            
            state.city = data
            
        },
        
        imgUrl (state,data){

            state.imgUrlx = data
        
        }
   
    
    }
})