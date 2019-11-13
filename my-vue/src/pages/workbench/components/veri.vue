<template>
  <div class="content">
    <div class="header"></div>
    <div class="box">
      <div class="sbox">
        <div class="top">
          <h1 class="hexiao">核销方式</h1>
          <p>1、扫码核销:授权小程序使用摄像头,扫描客户订单中的二维码进行订单核销</p>
          <p>2、取货码核销:输入客户的取货展开订单详情进行核销</p>
          <div class="yuan youyuan"></div>
          <div class="yuan zuoyuan"></div>
        </div>
        <div class="bottom">
            <div class="btn btn-left">取货码核销</div>
            <div class="btn btn-right">扫码核销</div>
        </div>
      </div>
      <ul class="order">
          <li><div class="left"><div class="iconBg iconBg1"><i class="iconfont iconyixuan"></i></div>&nbsp;&nbsp;已核销订单</div><div class="right"><i class="iconfont iconyou"></i></div></li>
          <li><div class="left"><div class="iconBg iconBg2"><i class="iconfont iconxiaoxi3"></i></div>&nbsp;&nbsp;待核销订单</div><div class="right"><i class="iconfont iconyou"></i></div></li>
      </ul>
    </div>
    <div class="bg"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.iconyou {
  font-weight: 600;
  font-size: 20px;
  color: #ababab;
}
.iconBg {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: .5rem;
  line-height: 2.5rem;
  text-align: center;
}
.iconBg  .iconfont {
  color: #fff;
}
.order {
    width: 100%;
    border-radius: 1rem;
    background-color: #fff;
    margin-top: 2rem;
    
}
.iconBg1 {
   background-color: rgb(94, 205, 254);
   
}
.iconBg2 {
   background-color: rgb(46, 214, 195);
}
.iconxiaoxi3 {
  color: #fff !important;
}
.order li {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 4.5rem;
    border-bottom: 1px solid #e9e9e9;
    justify-content: space-between;
    font-size: 1.4rem;
    
}
.order  .left{
  display: flex;
  align-items: center;
}
.order li:last-child {
    border: none;
}
.bottom  {
    display: flex;
    justify-content: space-around;
    height: 7.6rem;
    align-items: center;
}
.bottom .btn{
    width: 10rem;
    height:3rem;
    background-color: red;
    text-align: center;
    color: #fff;
    line-height: 3rem;
    border-radius: 2rem;
    font-size: 1.4rem;
}
.bottom .btn-left {
    
    background: linear-gradient(to right, #fdb32f , #ff802e);
}
.bottom .btn-right {
    background-color: #389ff9;
    background: linear-gradient(to right, #40c4fb , #338ff9);
} 

.bg {
    background-color: #ebebeb;
    height: 80%;
}
.yuan {
    width: .2rem;
    height: .2rem;
    background-color: #ebebeb;
    border-radius: 50%;
    position: absolute;
    bottom: -.1rem;
   
}
.zuoyuan {
    left: -.1rem;
}
.youyuan{
    right: -.1rem;
}
.top p {
    height: 4rem;
    color: #848484;
    font-size: 1.4rem;
}
.top{
    padding:1rem;
    border-bottom: 1px dashed #ebebeb;
    position: relative;

}
.hexiao {
      height: 4.5rem;
    text-align: center;
    line-height: 4.5rem;
    font-size: 1.6rem;
}
.sbox {
  width: 100%;

  border-radius: 2rem;
  background-color: #ffffff;
  overflow: hidden;
}
.content {
  position: relative;
  height: 100vh;
}
.box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1.2rem;
 
}
.header {
  width: 100%;
  height: 20%;
  background-color: #388dfc;
}
</style>