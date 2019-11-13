<template>
    <div class="content">
        <div class="header">
            <div class="left"><div class="icBg"><i class="iconfont iconyuyin"></i></div>欢迎语开关</div>
          
            <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </div>
        <div class="vft" v-show="value">
        <div class="huanyingyu">
            <textarea name=""  v-model="str"></textarea>
            <div class="baocun">保存</div>
            
        </div>
        <div class="footer" >
            <div class="bg"></div>
            <div class="list">
                <p>{{str}}</p>
                <p class="p">通过我名片,您还可以:</p>
                <ul>
                    <li><div class="left"><i class="iconfont iconmingpian"></i>进入我的名片</div><i class="iconfont iconyou"></i></li>
                    <li><div class="left"><i class="iconfont icondiqiu" style="font-size: 18px;"></i>查看公司官网</div><i class="iconfont iconyou"></i></li>
                    
                    <li><div class="left"><i class="iconfont iconfuzhi"></i>查看公司动态</div><i class="iconfont iconyou"></i></li>
             
                    <li><div class="left"><i class="iconfont icondongtai1"></i>进入我的动态</div><i class="iconfont iconyou"></i></li>
                     <li><div class="left"><i class="iconfont icondianhua"></i>拨打我的电话</div><i class="iconfont iconyou"></i></li>
                    <li><div class="left"><i class="iconfont iconweixin1" style="font-size: 12px;"></i>添加我的微信</div><i class="iconfont iconyou"></i></li>
                </ul>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            value: true,
            str:''
        }
    },
    methods:{
        
    },
    watch:{
       value () {
           if(!this.value) {
              var footer = document.querySelector('.footer')
              
           }
           
       } 
    },
    mounted () {
          var addHome = this.$store.state.addHome
          var whetherWel = addHome.whetherWel
          if(whetherWel==1){
              this.value = true
          }else {
              this.value = false
          }
    }
}
</script>
<style scoped>
.content {
    font-size: 1.4rem;
}
.list li{
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    box-sizing: border-box;
    border-bottom: 1px solid #ebebeb
}
.list li:last-child {
    border: none;
}

ul {
    width: 100%;
    border: 1px solid #ebebeb;

}
.p {
    height: 3rem;
    line-height: 3rem;
    color: rgb(160, 164, 165)

}
ul .left .iconfont {
    margin-right: 1rem;
}
.list {
   width: 20rem;
    border-radius: .4rem;
    margin: 0 auto;
    box-shadow: 0 0 2px #ccc;
    padding: 1rem;
    background: #fff;
    margin-top: 4rem;
    font-size: 1.2rem;

}
.bg {
    background: rgba(0,0,0,.2);
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right: 0;
}

.footer {
  background-color: rgb(241, 237, 237);
  position: relative;
  overflow: hidden;  
  /* padding-bottom: .5rem; */
  height: 46rem;
  
}
.baocun {
    text-align: center;
    height: 3.5rem;
    width: 80%;
    margin: 0 auto;
  
    background: linear-gradient(to right, #72bbff , #399ffc);
    border-radius: 1.4rem;
    line-height: 3.5rem;
    color: #fff;
}
textarea {
    border: none;
    width: 100%;
   height: 12rem;
}
.huanyingyu {
    height: 16rem;
    padding: 1rem;
  
}
.left {
    display: flex;
    align-items: center;
}
.header {
    height: 4rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 1rem;
    border-bottom:1px solid rgb(240, 240, 240);

}
.icBg .iconfont {
    color: #fff;
    line-height:2.5rem;
    font-size:1.6rem;
}
.icBg {
    margin-right:1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .6rem;
    text-align: center;
    
    background-color: rgb(55, 196, 123);
        
}
</style>