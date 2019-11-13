<template>
    <div>
    <div class="scoll-wrap">
    <div class="day" v-for="item in 2 " :key="item">
        <div class="date">1 天前</div>
        <div class="record">
            <div class="left"><img src="../../../assets/images/66.jpg" alt=""></div>
            <span>转发</span>了你的<span>名片</span>,人脉圈在迅速裂变
        </div>
    </div>

        <div class="noData">没有更多数据</div>
    </div>
    </div>
</template>
<style scoped>
.noData {
   
    text-align: center;
    color: #bdbdbd;
    margin-top: 2rem;
    font-size: 1.6rem;
}
.day .left {
    width:3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 1rem;
}
.day .left  img {
    width:100%;
    height: 100%;
}
.day .date {
   height: 4rem;
    line-height: 4rem;
    margin-top: 2rem;
    color: #797979;
   
   }
   .record span{
    color: #fc9c5a;
}
.day .record {
    height: 6rem;
    box-shadow: 0 0 5px #ccc;
        border-radius: .8rem;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    font-size: 12px;
}
</style>

