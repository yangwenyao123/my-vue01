<template>
    <div class="contnet">
        <div class="header">
            <div class="left iconfont iconyou"></div>
            <div class="midden">2019-08-28</div>
            <div class="right iconfont iconyou"></div>
        </div>
        <ul class="list">
            <li>
                <div class="left">当月可发金额</div>
                <div class="right">0</div>
            </li>
             <li>
                <div class="left">上月获得金额</div>
                <div class="right">0</div>
            </li>
            <li>
                <div class="left">历史累计总金额</div>
                <div class="right">0</div>
            </li>
            <li>
                <div class="left">全部未入帐金额</div>
                <div class="right">0</div>
            </li>
        </ul>

        <ul class="bottom-list">
             <router-link to="/detail" tag="li">
               <div class="left">
                    <div class="icBG BgC6"><i class="iconfont iconshangcheng2"></i></div>
                    佣金流水明细
                </div>
                <i class="iconfont iconyou"></i>
            </router-link>
             <router-link to="/between" tag="li">
               <div class="left">
                    <div class="icBG BgC5"><i class="iconfont iconshangcheng2"></i></div>
                    佣金客户关系
                </div>
                <i class="iconfont iconyou"></i>
            </router-link>
        </ul>
    </div>
</template>
<style scoped>
.bottom-list .iconfont {
    font-size: 1.6rem;
}
.iconyou {
    color: #c8c8cd;
    font-size: 2rem;
    font-weight: 600;
}
.BgC6 {
    background-color: #ff7083;
}
.BgC5 {
    background-color: #b05eff;
}
.bottom-list {
    border-radius: .8rem;
    box-shadow: 0 0 5px #ccc;
}
.bottom-list .left {
    display: flex;
    align-items: center;
}
 .bottom-list .left .iconfont {
     color: #fff;
 }
 .bottom-list   .icBG {
       width: 2.5rem;
    height: 2.5rem;
    border-radius: .8rem;
    text-align: center;
    line-height: 2.5rem;
    margin-right: 1rem;
    }
 .bottom-list   li {
        height: 4rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom:1px solid  #e7e8ee;
        padding: 0 1rem;
        color: #474849;
        
    }
.bottom-list li:last-child {
    border:none;
}
.list li:last-child {
    border:none;
}
.list .right {
    font-weight: 600;
}
.list li {
    display: flex;
    height: 4rem;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    border-bottom: 1px solid #e7e8ee;
}
.list {
    margin-bottom:2rem;
    border-radius: .8rem;
    box-shadow: 0 0 5px #ccc;
    
}
.header .left  {
    transform:rotate(180deg);
}
.header .iconfont{
    font-size: 2.6rem;
    color: #c8c8cd;
}

.contnet {
    padding: 0 1rem;
    font-size: 1.4rem;
}
    .header {
        height: 4.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        font-size: 1.6rem;
    }
</style>
