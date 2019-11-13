<template>
    <div>
          <div class="content">
             <div class="haibao" id="haibao">
                <img src="../../../assets/images/54.png" alt="" id="img" class="haibaoImg">
                <input type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)">
                 <div class="bom">
                     <div class="left">
                         <img src="@/assets/images/0.jpg" alt="">
                         <div class="name">
                             <div class="shej">测试&nbsp;<span>设计</span></div>
                             <p>卡斯蔓生活馆</p>
                             <p>手机:18665572292</p>
                         </div>
                     </div>
                       <div class="rightIMg" style="display: flex;
    justify-content: center;flex-direction: column;align-items:center">
                         <img src="@/assets/images/23.jpg" alt="" class="erweima">
                         <p style="color:rgb(191, 191, 193);font-size:12px;text-align:center">长按识别二维码</p>
                     </div>
                 </div>
             </div>

                <div class="bcun" @click="baocunx">保存海报</div>
                <!-- 生成海报 -->
             <img :src="src" alt="" class="newImg" v-show="src">
             <!-- 遮罩层 -->
           
         </div>
          <div class="bg" @click="bg" id="bg"><p>长按保存图片</p></div>
            
    </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
    data () {
        return {
            src:''
        }
    },
    methods : {
        change( event ) {
            let image = document.getElementById('img'); //预览对象
            this.clip(event , {
              resultObj : image,
              aspectRatio : 1
            })
        },
          bg () {
            var bg = document.querySelector('#bg') 
            bg.style.display = "none"
            this.src = ''
        },
        baocunx () {

            var haibao = document.querySelector("#haibao")
            var bg = document.querySelector('#bg') 
            var that = this
            html2canvas(document.querySelector("#haibao"), {
            useCORS: false, //（图片跨域相关）
      
        }).then(canvas => {
            if(canvas) {
                console.log(canvas);
                var src = canvas.toDataURL("image/png");
                that.src = src;
                bg.style.display = "block"
            }
        })
        }
  }
}
</script>
<style scoped>
#bg p {
    position: absolute;
    left: 50%;
    bottom: 1.2rem;
    margin-left: -50px;
    color:rgba(245, 245, 245, .5)
}
#bg {
    position:absolute;
    left: 0;
    right: 0;
    bottom :0;
    top: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 9;
    display: none;
}
.newImg {
    width: 80%;
    height: 40rem;
    position: absolute;
    top: 42%;
    left: 50%;
    margin-left: -14.5rem;
    margin-top: -15.9rem;
    z-index: 99;
    
}
.haibao>input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
}

    .bcun {
    width: 14.5rem;
    height: 3.6rem;
    border-radius: 2.4rem;
    background: linear-gradient(to right, #72bbff , #399ffc);
    text-align: center;
    line-height: 3.6rem;
    color: #fff;
    margin: 2rem auto;
    font-size:1.4rem;
}


.bom p {
    font-size: 1rem;
    color: #717171;
   margin-top: .3rem;
}
.shej span {
    font-size: 1.2rem;
}
.shej {
    
    font-size: 1.4rem;
    margin-bottom: .8rem;
    font-weight: 600;
}
.erweima {
    width:3.8rem;
    height:3.8rem;
}
.bom .left  img {
     width: 5rem;
    height: 5rem;
    margin-right: 1rem;
}
.bom .left {
    display: flex;
    
}
.name {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.bom {
    /* height: 1.5rem; */
    background-color: #fff;
     padding: .8rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
}
.haibaoImg {
    width: 100%;
   height: 30rem;
}
.haibao {
    width: 80%;
    position: relative;
   
    margin:0 auto .5rem;
}
.content {
    padding-top: 2rem;
    position: relative;
}
</style>