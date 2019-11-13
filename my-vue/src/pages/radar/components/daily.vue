<template>
    <div class="content">
        <div class="banner">
            <div class="toux"><img src="../../../assets/images/66.jpg" alt=""></div>
            <div class="card">
                <h2>我的名片日报</h2>
                <p>2019-07-26</p>
            </div>
        </div>

        <div class="dataWrap">
            <div class="cardData">
                <div class="title">
                    <div class="icBg"><i class="iconfont iconshuju"></i></div>
                    <h2>名片数据</h2>
                </div>
                <div class="block">
                    <div class="box">
                        
                        <div class="left">
                            <p>新增客户数</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <p>无变化</p>
                        </div>
                       
                    </div>
                     <div class="box">
                        
                        <div class="left">
                            <p>新增客户数</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <p>无变化</p>
                        </div>
                       
                    </div>
                     <div class="box liulang">
                        <div class="left">
                            <p>新增客户数</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <p>无变化</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cardData">
                <div class="title">
                    <div class="icBg"><i class="iconfont iconshangcheng"></i></div>
                    <h2>商城</h2>
                </div>
                <div class="block">
                    <div class="box">
                        <div class="left">
                            <p>访客数</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <p>无变化</p>
                        </div>
                    </div>
                     <div class="box">
                        
                        <div class="left">
                            <p>订单数</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <p>无变化</p>
                        </div>
                       
                    </div>
                    <div class="box">
                        
                        <div class="left">
                            <p>转化率</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <p>无变化</p>
                        </div>
                       
                    </div>
                    <div class="box">
                        
                        <div class="left">
                            <p>成交金额</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <p>无变化</p>
                        </div>
                       
                    </div>
                    <div class="box">
                        
                        <div class="left">
                            <p>客单价/元</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <p>无变化</p>
                        </div>
                       
                    </div>
                    <div class="box">
                        
                        <div class="left">
                            <p>平均停留时长</p>
                            <div class="num">00:00:00</div>
                        </div>
                        <div class="right">
                           <p>00:00:00</p>
                        </div>
                       
                    </div>
                     <div class="box liulang">
                        <div class="left">
                            <p>最受欢迎的商品/浏览量</p>
                        </div>
                        <div class="right last">
                            <div class="num">0</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cardData">
                <div class="title">
                    <div class="icBg"><i class="iconfont iconweb-icon-"></i></div>
                    <h2>商机</h2>
                </div>
                <div class="biao">
                </div>
            </div>

            <div class="cardData">
                <div class="title">
                    <div class="icBg"><i class="iconfont iconhongqi"></i></div>
                    <h2>任务</h2>
                </div>
                <div class="block">
                    <div class="box">
                        <div class="left">
                            <p>创建任务</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                            <div class="icBg"><i class="iconfont iconchuangjian1"></i></div>
                        </div>
                    </div>
                     <div class="box">
                        <div class="left">
                            <p>完成任务</p>
                            <div class="num">0</div>
                        </div>
                        <div class="right">
                           <div class="icBg"><i class="iconfont iconrenwu3" style="font-size:20px"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.iconrenwu1 {
    color: #fff;
}
.right .icBg {
    width:2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: rgb(56, 149, 253);
    text-align: center;
    line-height: 2.5rem;
}
.right .iconfont{
    color: #fff;

}
.biao {
    width: 100%;
    height: 8rem;
    border-radius: .2rem;
    box-shadow:  0 0 8px #ccc;
}
.tunities .box {
    height: 8rem;
    
}
.liulang .last{
   margin-top: .3rem;
}
.left p {
    color: #444444;
}
.num {
    font-size: 2rem;
    color: #33c4fc;
}
.box .right {
    color: #c8c8c8;
}
.box .left {
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
}
.block {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.box{
       width: 48%;
    height: 8rem;
    border-radius: .8rem;
    
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 1.6rem 1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-box-shadow: 0 0 8px #ccc;
    box-shadow: 0 0 8px #ccc;
    margin-bottom: 1.4rem;
}

.liulang {
    width: 100% !important;
}

.cardData {
    margin-bottom: .2rem;
}

.cardData h2 {
    color: #535451;
}
.title .iconfont {
    font-size: 1.6rem;
    color: #fff;
}
.icBg {
    width: 2.5rem;
    height: 2.5rem;
    background: #b6b8c0;
    border-radius: 50%;
    text-align: center;
    line-height: 2.5rem;
    margin-right: 1rem;
}
.dataWrap {
    padding: 1rem;
}
.title {
   
   height: 4rem;
   display: flex;
   align-items: center;
    
}
h2 {
    font-weight: 600;
    font-size: 1.4rem;
}
.toux img{
    width: 4.5rem;
    height: 4.5rem;
    border-radius: .5rem;
    margin-right: 1rem;
}
    .banner {
        height: 10rem;
        background: url('../../../assets/images/card.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        padding-left: 1rem;
        
    }
    .card {
        height: 4.5rem;
        display: flex;
        justify-content: space-around;
        flex-direction: column;
        color: #fff;
    }
    p {
        font-size: 1.2rem;
    }
    
</style>

