<template>
    <div class="content">
        <ul class="suList">
            <li class="item" v-for="(item,key,i) in obj" :key="i">
                <div class="left" :class="cur==i?'active':''" @click="cur=i" >
                    {{key}}
                </div>
                <div class="right">
                    <div class="rightWrap">
                         <div class="tr" v-for="(item,index) in item" :key="index" v-show="cur==i" @click="bianji(item,index)">{{item.speechidContent}}<i class="iconfont iconyou fr"></i></div>
                    </div>
                    
                </div>
            </li>

            
        </ul>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {
            cur:0,
            arr:[],
            num:0,
            shuchu:{},
            obj:{}
        }
    },
    methods:{
      bianji (item,index) {
        //   this.$router.push('/bianji')
        this.$router.push({
          name: 'bianji',
          params: {
            item: item,
            index:index
          }
          
        })
      },
      addHua () {
          this.$router.push('/addHua')
      }
    },
    computed:mapState({
        // city:'city', // 第一种写法
        
        // sex: (state) => state.sex, // 第二种写法
        city: function (state) { // 用普通函数this指向vue实例,要注意
            console.log(state);
            
          return state.city
        },

    }),
   
    mounted () {
        var that = this
        var id = sessionStorage.getItem("staffId");
        this.$axios.get("/user/Index/getSpeedchild?id="+id).then((res)=>{
        //    this.city.push(res.data.speechidContent)
        that.obj = res.data
            that.shuchu = res.data 
            this.$store.commit('getHuasu',res.data)
 
        })
    }

}
</script>
<style scoped>
.fr {
    float: right;
    font-size: 2.2rem;
}
.suList {
    width: 100vw;
    height: 100vh;

}

.suList  .left {
    width: 30%;
    height: 3rem;
  
    text-align: center;
    margin: 10px 0;
    line-height: 3rem;
    box-sizing: border-box;
}
.suList .right {
    width: 70%;
}
.rightWrap {
    position: absolute;
    right: 0;
    top: 0;
    width: 70%;
}
.tr {
    height: 3.5rem;
    width: 16rem;
    background-color: #fff;
    margin: 15px auto;
    line-height: 3.5rem;
    border-radius: 1.2rem;
    padding-left: 1.2rem;
}
.iconjia1 {
    font-size: 1.4rem;
}

.active {
    border-left: 2px solid rgb(54, 162, 252);
    color: rgb(54, 162, 252);
}
    .content {
        width: 100vw;
        height: 100vh;
        background: url("../../../assets/images/huasuBg.png") no-repeat;
        font-size: 1.2rem;
        background-size: 100% 200%;
        overflow: hidden;
    }
</style>