<template>
  <div class="content">
    <div class="card">
      <div class="top">
        <div class="card-top">
          <div class="left">
            <img src="../../../assets/images/0.jpg" alt />
            <div class="card_name">
              <h2>杨文耀</h2>
              <p>设计</p>
              <p>卡斯蔓生活馆</p>
            </div>
          </div>
          <img src="../../../assets/images/0.jpg" alt class="right_logo" />
        </div>
        <div class="card-bottom">
          <div class="phone">
            <i class="iconfont iconicon-order"></i>&nbsp;电话:&nbsp;&nbsp;18665572292
          </div>
          <div class="email">
            <i class="iconfont iconicon-order"></i>&nbsp;邮箱
          </div>
        </div>
      </div>
      <div class="erweima">
        <img src="../../../assets/images/erweima.png" alt />
      </div>
      <p>长按查看小程序名片</p>
    </div>

    <div class="baocun" @click="baocunx">保存</div>

    <!-- 生成图片 -->
    <img :src="src" alt class="newImg" v-show="src" />
    <!-- 遮罩层 -->
    <div class="bg" @click="bg">
      <p>长按保存图片</p>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      src: "",
      name: "",
      phone: ""
    };
  },
  mounted() {},
  methods: {
  
    bg() {
      var bg = document.querySelector(".bg");
      bg.style.display = "none";
      this.src = "";
    },
    baocunx() {
      console.log(123);

      var bg = document.querySelector(".bg");
      var that = this;
      html2canvas(document.querySelector(".card"), {
        useCORS: false //（图片跨域相关）
      }).then(canvas => {
        if (canvas) {
          console.log(canvas);
          var src = canvas.toDataURL("image/png");
          that.src = src;
          bg.style.display = "block";
        }
      });
    }
  }
};
</script>
<style scoped>
.bg p {
  position: absolute;
  left: 50%;
  bottom: 2rem;
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
  height: 7rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -2.5rem;
  margin-top: -3.9rem;
  z-index: 99;
}
.baocun {
  width: 26rem;
  height: 3.6rem;
  border-radius: 0.2rem;
  text-align: center;
  line-height: 3.6rem;
  color: #fff;
  background-color: #2e85fe;
  -webkit-box-shadow: inset 108px 0 52px #3bc1ff;
  box-shadow: inset 108px 0 52px #3bc1ff;
  border-radius: 10rem;
  margin: 2rem auto;
  font-size: 1.4rem;
}
.card > p {
  text-align: center;
  color: #828282;
  font-size: 1.2rem;
}
.erweima {
  width: 14rem;
  margin: 4rem auto 2rem;
}
.erweima img {
  width: 100%;
}
.card-bottom {
  color: #e4e6ed;
}

.card-bottom .iconfont {
  font-size: 10px;
}
.email {
  margin-top: 0.8rem;
}

.card_name h2 {
  font-weight: 600;
  font-size: 14px;
}

.card_name p:last-child {
  color: #e4e6ed;
  margin-bottom: 0.1rem;
}
.right_logo {
  width: 2rem;
  height: 2rem;
  border-radius: 0.2rem;
}
.card-top .left {
  display: flex;
  align-items: center;
  height: 4.6rem;
}
.card_name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: #fff;
}
.card-top {
  display: flex;
  justify-content: space-between;
}
.card-top .left img {
  width: 4rem;
  height: 4rem;
  border-radius: 0.5rem;
  margin-right: 1rem;
}
.top {
  height: 9rem;
  background: #2fa4fc;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.5rem;
  font-size: 12px;
}
.card {
  width: 80%;
  height: 36rem;

  margin: 5rem auto 0;
  box-shadow: 0 0 5px #999;
}
</style>

