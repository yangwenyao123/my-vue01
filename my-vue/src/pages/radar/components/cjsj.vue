<template>
  <div class="content">
    <ul class="list">
      <li><div class="left">商机名称</div> <div class="right">未填写</div></li>
      <li><div class="left">金额</div> <div class="right"><input type="number" placeholder="请输入金额" dir='rtl'></div></li>
      <li><div class="left">关联客户</div> <div class="right"><span class="name">李心怡</span> <img src="../../../assets/images/0.jpg" alt="" class="touxiang"><div class="iconfont iconyou"></div></div></li>
    </ul>
    <div class="beizhu">
     <div class="title">所在阶段</div>
     
    </div>  

    <div class="baocun">保存</div>

  </div>
</template>
<style scoped>
.right {
    display: flex;
    align-items: center;
}
.right .name {
    color: #000
}
.touxiang {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin: 0 1rem;
}
::-webkit-input-placeholder
{
    text-align: right;
    font-size: 12px;
}
::-moz-placeholder
{
  text-align: right;
}
.baocun {
    width: 26rem;
    height: 4rem;
    border-radius:5rem;
    text-align: center;
    line-height: 4rem;
    color: #fff;
      background: linear-gradient(to right, #43c5fe , #2f8bfe);
    
 
    margin:4rem auto;
}
.beizhu {
    padding: 0 1rem;

}

textarea {
   width: 100%;
   height: 2.3rem;
   background: #f5f5f6;
   border-radius: .2rem;
   padding: .16rem;
   color: #757679;
}

.beizhu .title {
    height: 4rem;
    line-height: 4rem;
    color: #757679;
}

.list li {
    height: 4.5rem;
    padding: 0 1rem;
    color: #757679;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    border-bottom: 1px solid #f2f5f4;
}
.list .iconyou{
    color: #c8c8cd;
    font-weight: 600;
    font-size: 20px;
}
.content  {
    font-size: 1.4rem ;
}
</style>

