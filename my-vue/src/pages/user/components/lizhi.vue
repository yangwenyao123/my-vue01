<template>
  <div>
    <div class="content">
      <div class="haibao">
        <img src="@/assets/images/0.jpg" alt class="haibaoImg" v-show="Imgnum==0" />
        <img src="@/assets/images/66.jpg" alt class="haibaoImg" v-show="Imgnum==1" />
        <img src="@/assets/images/21.png" alt class="haibaoImg" v-show="Imgnum==2" />
        <img src="@/assets/images/0.jpg" alt class="haibaoImg" v-show="Imgnum==3" />
        <img src="@/assets/images/0.jpg" alt class="haibaoImg" v-show="Imgnum==4" />
        <div class="bom">
          <div class="left">
            <img src="@/assets/images/0.jpg" alt />
            <div class="name">
              <div class="shej">
                测试&nbsp;
                <span>设计</span>
              </div>
              <p>卡斯蔓生活馆</p>
              <p>手机:18665572292</p>
            </div>
          </div>
          <div
            class="rightIMg"
            style="display: flex;
    justify-content: center;flex-direction: column;align-items:center"
          >
            <img src="@/assets/images/23.jpg" alt class="erweima" />
            <p style="color:rgb(191, 191, 193);font-size:12px;text-align:center">长按识别二维码</p>
          </div>
        </div>
      </div>

      <div class="btn">
        <div class="huan" @click="numImg">换一换</div>
        <div class="bcun" @click="baocunx">保存海报</div>
      </div>

      <!-- 生成海报 -->
      <img :src="src" alt class="newImg" v-show="src" />
      <!-- 遮罩层 -->
      <div class="bg" @click="bg">
        <p>长按保存图片</p>
      </div>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      Imgnum: 0,
      src: ""
    };
  },
  methods: {
    bg() {
      var bg = document.querySelector(".bg");
      bg.style.display = "none";
      this.src = "";
    },
    baocunx() {
      var haibao = document.querySelector(".haibao");
      console.log(haibao);

      var bg = document.querySelector(".bg");
      var that = this;
      html2canvas(document.querySelector(".haibao"), {
        useCORS: false //（图片跨域相关）
      }).then(canvas => {
        if (canvas) {
          console.log(canvas);
          var src = canvas.toDataURL("image/png");
          that.src = src;
          bg.style.display = "block";
        }
      });
    },
    numImg() {
      if (this.Imgnum > 3) {
        this.Imgnum = 0;
      }
      ++this.Imgnum;
    },
   
  },
  mounted() {}
};
</script>
<style scoped>
.bg p {
  position: absolute;
  left: 50%;
  bottom: 7.2rem;
  margin-left: -50px;
  color: rgba(245, 245, 245, 0.5);
}
.bg {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
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
.btn .bcun {
  width: 14.5rem;
  height: 3.6rem;
  border-radius: 2rem;

  background: linear-gradient(to right, #7cc0ff, #399ffc);
  text-align: center;
  line-height: 3.6rem;
  color: #fff;
}
.btn .huan {
  width: 14.5rem;
  height: 3.6rem;
  border-radius: 2rem;
  border: 1px solid #ea934b;
  color: #ea934b;
  text-align: center;
  line-height: 3.6rem;
}
.btn {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  font-size: 1.4rem;
}
.bom p {
  font-size: 1rem;
  color: #717171;
  margin-top: 0.3rem;
}
.shej span {
  font-size: 1.2rem;
}
.shej {
  font-size: 1.4rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
}
.erweima {
  width: 3.8rem;
  height: 3.8rem;
}
.bom .left img {
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
  justify-content: space-between;
}
.bom {
  background-color: #fff;
  padding: 0.8rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.haibaoImg {
  width: 100%;
  height: 36rem;
}
.haibao {
  width: 80%;
  background-color: #000;
  margin: 0 auto 3rem;
}
.content {
  /* background-color: red; */
  font-size: 1.4rem;
  padding-top: 2rem;
}
</style>
