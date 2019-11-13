<template>
<div class="content" style="font-size:1.4rem;">
    <div class="header">
        <router-link to="/feedback" tag="div" class="iconfont iconyou"></router-link>
        <div class="text">留言&nbsp;&nbsp;</div>
    </div>
    <div class="box">
        <div class="text">客服已经离线了,有问题可以先给我们留言,我们会在工作日内尽快给予您回复</div>
        <textarea name="" id="" placeholder="请留言"></textarea>
        <p>留下以下信息,方便与您及时联系</p>
        <div class="item"><div class="name">姓名</div><input type="text" placeholder="必填"></div>
        <div class="item"><div class="name">手机</div><input type="number" placeholder="必填"></div>
        <div class="submit">提交留言</div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
input::-webkit-input-placeholder {
 color: rgb(153, 158, 174);
 font-size: 14px;
}
.submit {
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    background-color: rgba(113, 195, 255);
    margin-top: 2rem;
}
input {
    width: 70%;
    padding-left: 1rem;
    height :100%;
    border: none;
}
.name {
    width: 20%;
    line-height:4rem;
    text-align: center;
    border-right: 1px solid #e2e2e2;
}
.item {
    height: 4rem;
    border: 1px solid #e2e2e2;
    display: flex;
    margin-bottom: 1rem;
}
.box p {
    margin-bottom: 1rem;
}
.text {
    letter-spacing: 2px;
    line-height: 2rem;
}
textarea {
    width: 100%;
    height: 10rem;
    border: 1px solid #e2e2e2;
    margin:1rem  0 2rem;
    padding: 1rem;
    box-sizing: border-box;
}
.box {
    padding: 1rem;

}
    .header {
        width: 100%;
         height: 4.8rem;
        background-color: rgb(0, 155, 250);
        display: flex;
        align-items: center;
        color: #fff;
        
        
       
    }
    .header .iconfont {
        width:10%;
        font-weight: 600;
        font-size: 26px;
        transform: rotate(180deg)
    }
     .header .text {
         width: 90%;
         text-align: center;
     }
</style>