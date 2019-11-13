<template>
  <div class="content" style="font-size:1.2rem">
    <div class="huabox">
      <div class="title">
        <div class="titleLif">话术内容</div>
        <div class="num">/300</div>
      </div>
      <div class="tebox">
       <div class="textnum">/300</div>
        <textarea class="text" placeholder="请在此输入内容" v-model="textarea" maxlength="300"></textarea>
     </div>

      <div class="boxBottom">
        <div class="title">
          <div class="titleLif">关键词</div>
          <div class="num"></div>
        </div>
        <ul class="btnList">
          <li v-for="(item,index) in str" :key="index">{{item}}<i class="iconfont iconjiahao" @click="del(index)"></i></li>
         
          <li class="add" @click="add"><i class="iconfont iconjia1" ></i></li>
        </ul>
        <div class="baocun" @click="baocun">保存</div>
      </div>
    </div>
    <!-- 背景 -->
    <div class="bg"></div>

    <!-- 添加标签 -->
    <div class="addbox">
        <div class="top">
            <h3>关键词(最多8个字)</h3>
            <input type="text" name="" id="" v-model="dec" maxlength="8">
        </div>
        <div class="bottom">
            <div class="left" style="border-right:1px solid rgb(235, 235, 235)" @click="quxiao">取消</div>
            <div class="right" style="color:rgb(54, 159, 252)" @click="queren">确定</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            bg:'',
            addbox:'',
            dec:'',
            str:[],
            addDom:'',
            textarea:'',
            num:null,
            id:'',
            index:'',
            pid:"123"
        }
    },
    methods:{
      baocun () {
          
        if(this.textarea.trim()){

          this.$store.commit('changeCity',{res:this.textarea,index:this.index,label:this.str})
         
          this.$router.push('/huashu')
        }
      },
        quxiao () {
           this.addbox.style.display ="none"
           this.bg.style.display = "none" 
        },
        del (index) {
            this.str.splice(index,1)
            this.addDom.style.display = "block"
        },
        queren () {
            if(this.dec) {
                this.str.push(this.dec)
                this.dec = ''
            }
           this.addbox.style.display ="none"
           this.bg.style.display = "none"
        },
        add () {
            this.addDom = document.querySelector('.add')
            console.log(this.str.length);
            
            if(this.str.length == 4) {
                this.addDom.style.display = "none"
            }
           
            this.bg = document.querySelector('.bg')
            this.addbox = document.querySelector('.addbox')
            this.bg.style.display = "block"
            this.addbox.style.display ="block"
        }
    },
    mounted () {
        String.prototype.trim = function () {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');   
        };
     
      
        if(this.$route.params.item){
          var a = this.$route.params
          console.log(a);
          
          this.textarea = a.item
          console.log(this.textarea );
          
          this.index = a.index
          this.str = a.label
      }
    }
};
</script>
<style scoped>
.tebox {
    position: relative;
    
}
.iconjiahao {
    position: absolute;
       right: -.4rem;
    top: -.8rem;
    transform: rotate(45deg)
}
.addbox  input {
    width: 100%;
    height: 4.5rem;
    padding-left: .4rem;
    border: 1px solid #ccc;
        box-sizing: border-box;
}
.addbox h3 {
    height: 5.5rem;
    text-align: center;
    line-height:5rem;
}
.bottom {
    height: 30%;
    border-top: 1px solid rgb(235, 235, 235);
    display: flex;
}
.bottom > * {
    width: 50%;
    text-align: center;
    line-height:4.8rem;
    
}
.top {
    padding: 0 1rem;
}
.addbox {
        width: 28rem;
    height: 18rem;
    background-color: #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 3;
        margin-left: -14rem;
    margin-top: -8rem;
    border-radius: .6rem;
    display: none;
    font-size: 1.6rem;
        overflow: hidden;
}
.addbox .top {
    height: 70%;
}
.bg {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    display: none;
}
.add {
  width: 4.4rem;
 
  text-align: center;
 
 
  background: rgb(249, 249, 249);
  margin-right: 0.2rem;
  border-radius: 0.2rem;
  border: 1px solid rgb(219, 219, 219);
  display: flex;
  justify-content: center;
  align-items: center;
}
.boxBottom {
   padding: 0 2rem;
}
.baocun {
    height: 4rem;
    background:linear-gradient(to right,#4babff,#2595f6);
    text-align: center;
    line-height: 4rem;
    color: #fff;
    border-radius:2rem;
    margin-top: 2rem;
}
.btnList li {
    padding:0 1rem;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
   
    background: rgb(229, 243, 255);
    margin-right: 1rem;
    border-radius: 2rem;
    position: relative;
    margin-bottom: 1rem;
}
.btnList {
  display: flex;
  flex-wrap: wrap;
 
}
.textnum {
  position: absolute;
  bottom:2rem;
  right: 1rem;
  
  color: rgb(157, 150, 150);
}
.text {
  width: 100%;
  box-sizing: border-box;
  height: 16rem;
  padding:0 1rem;
  /* background-color: red; */

  border-bottom: 1px solid #ccc;
}
.title {
      height: 4rem;
    padding: 0 1rem;
  color:rgb(187, 187, 187);
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /* background: red; */

  margin-bottom: 1rem;
}
.huabox {
  position: relative;
}
</style>