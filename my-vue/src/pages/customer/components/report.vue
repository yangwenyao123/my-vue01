<template>
  <div class="content">
    <ul class="header-tab">
      <li :class="{active:cur==0}" @click="cur=0">当前月</li>
      <li :class="{active:cur==1}" @click="cur=1">近三个月</li>
      <li :class="{active:cur==2}" @click="cur=2">最近半年</li>
      <li :class="{active:cur==3}" @click="cur=3">全部</li>
    </ul>

    <div class="report">
      <div class="gender">
        <span class="kh">客</span>户&nbsp;
        <span class="xb">性别</span>
      </div>
      <div id="chart1"></div>
    </div>

      <div class="map">
        <div class="Rcity">
          <div class="regional"><span class="xb"><span class="di">地</span>域</span>&nbsp;&nbsp;分布</div>

          <ul class="city">
            <li  @click="cur2=0" :class="{active:cur2==0}">省份</li>
            <li  @click="cur2=1" :class="{active:cur2==1}">城市</li>
          </ul>
        </div>
       
        <div id="chart2" :style="{height:height}"></div>
      </div>
    
    <div class="age">
        <div class="ageheader" style="padding-bottom:.8rem"><span class="xb">年龄 </span>&nbsp;&nbsp;结构</div>
        <div class="border-bottom"></div>
        <ul class="article">
          <li>
            <div class="shuzhi">50%</div>
            <div class="tiaowai">
              <div class="tiao"></div>
            </div>
            <div class="suishu">18-24岁数</div>
          </li>
           <li>
            <div class="shuzhi">50%</div>
            <div class="tiaowai">
              <div class="tiao"></div>
            </div>
            <div class="suishu">18-24岁数</div>
          </li>
           <li>
            <div class="shuzhi">50%</div>
            <div class="tiaowai">
              <div class="tiao"></div>
            </div>
            <div class="suishu">18-24岁数</div>
          </li>
        </ul>
    </div>

    <div class="set">
      <div class="card" style="padding-bottom:.8rem;">名片&nbsp;&nbsp;<span class="xb">关注方式</span></div>
      <div class="border-bottom"></div>
       <div id="chart4" style="width:300px;height:300px;margin:2rem 0"></div>
    </div>

    <div class="traffic"> 
      <div class="coupons"><span class="di">优</span>惠券 &nbsp;&nbsp;<span class="xb">使用量</span></div>  
      <div id="chart5" style="width:280px;height:402px;margin:0 auto;"></div>
    </div>

    <div class="usage"> 
      <div class="sw">
        <div class="equipment"><span class="xb">设备</span>&nbsp;&nbsp;信息</div>  
       
        <ul class="system">
          <li  @click="cur3=0" :class="{active:cur3==0}">系统</li>
          <li  @click="cur3=1" :class="{active:cur3==1}">网格</li>
        </ul>
      </div>
      <div class="border-bottom"></div>
       

      <div class="shuijingqiu">
          <div class="left">
            <div class="wifiNum"><div class="wifishu">2</div>Android</div>
            <div class="syl">
              <div id="chart6" style="width:6rem;height:6rem;float:right;"></div>
            </div>
          </div>

          <div class="left border-none">
            <div class="wifiNum"><div class="wifishu">1</div>ios</div>
            <div class="syl">
              <div id="chart6_2" style="width:6rem;height:6rem;float:right;"></div>
            </div>
          </div>
      </div>
    </div>

    <div class="closing">
      <div class="tabnav">
        <div class="goods">商 品&nbsp;&nbsp;<span class="xb">&nbsp;&nbsp;成交率</span>&nbsp;&nbsp;对比</div>
        
        <ul class="kill">
          <li :class="{active:cur4==0}" @click="cur4=0">普通</li>
          <li :class="{active:cur4==1}" @click="cur4=1">拼团</li>
          <li :class="{active:cur4==2}" @click="cur4=2">砍价</li>
          <li :class="{active:cur4==3}" @click="cur4=3">秒杀</li>
        </ul>
      </div>
      <div class="border-bottom"></div>
      <div id="chart7" style="width:100px;height:100px;margin:0 auto"></div>
      <div class="cz">
        <div class="left"><div class="dian"></div>成交</div>
        <div class="right"><div class="dian"></div>转发</div>
      </div>
    </div>

    <div class="time">
      <div class="browse" style="padding-bottom:.8rem"> <span class="pingj">平均</span>&nbsp;&nbsp;<span class="xb">浏览时长</span></div>
      <div class="border-bottom"></div>
      <h2>25分19秒</h2>
    </div>

  </div>
</template>
<script>

export default {
  data () {
    return {
      cur: 0,
      cur2:0,
      cur3:0,
      cur4:0,
      myWidth:(window.innerWidth) + 'px',
      height:'300px'
    };
  },
methods: {
  },
  mounted() {
   
    this.$chart.line1("chart1");  
    this.$chart.line2("chart2");
    this.$chart.line4("chart4");
    this.$chart.line5("chart5");
    this.$chart.line6("chart6");
    this.$chart.line6_2("chart6_2");
    this.$chart.line7("chart7");

  }
};
</script>
<style scoped>
.shuijingqiu .border-none {
  border: none !important;
}
.shuijingqiu {
  display: flex;
  height: 7rem;
}
.coupons {
  padding: 2rem 1rem 0 1rem;
  color: #FAAA39
}
.di {
  padding-bottom: .8rem;
  border-bottom: 2px solid #000;
}
.time h2 {
  font-weight: 900;
  font-size: 20px;
  text-align: center;
  line-height: 3.8rem;
}

.border-bottom {
  width:1rem;
  height: .2rem;
  background: #000;


}
.time {
  height: 7.3rem;
  border-radius: .8rem;
  background-color: #fff;
  padding: 2rem 1rem 4rem 1rem;
  position: relative;
  margin-top: 2rem;

}


.cz .left {
  display: flex;
  font-size: 13px;
  -webkit-transform: scale(0.8);
  align-items:center;
}
.cz .right .dian {
  background-color: rgb(194, 194, 194);
}
.cz .right {
  display: flex;
  font-size: 13px;
  -webkit-transform: scale(0.8);
  align-items:center;
}
.dian {
  width: .1rem;
  height: .12rem;
  border-radius: 40%;
  background-color: rgb(36, 188, 249);
  margin-right: .1rem;
}
.cz {
  width:10.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin-top: .16rem; 
}

.kill {
  display: flex;
  justify-content: space-between;
  /* width: 3rem; */
}

.kill li{
 
  -webkit-transform: scale(0.8);
  padding-bottom: .8rem;
  margin-left: .8rem;
}
.tabnav {
  display: flex;
  justify-content: space-between;

}
.closing {
  padding: 2rem 1rem 4rem 1rem;
  /* height: 3.8rem; */
  box-sizing: border-box;
  border-radius: .8rem;
  margin: .2rem 0;
  color: rgb(190, 190, 190);
  background-color: #fff;
  position: relative;
}
.wifishu {
  color: #000;
}
.wifiNum {
  width: 50%;
  text-align: center;
}
.syl {
  width: 50%;
  display: flex;
  justify-content: center;
}
.usage .left {
  width: 50%;

  display: flex;
  align-items: center;
  border-right: 1px solid #ccc;
 

}
.system {
  display: flex;
  justify-content: space-between;
  width: 7rem;
  color: rgb(194, 194, 194);
  
  -webkit-transform: scale(0.8);
}
.system li {
  padding-bottom: .8rem;
} 
  

.she {
    border-bottom: 2px solid #000;
    display: inline-block;
    padding-bottom: 5px;
}

.sw {
  display: flex;
  justify-content: space-between;
  
}
.usage {
 padding: 3rem 1rem 3rem 1rem;  

  background-color: #fff; 
  border-radius: .8rem;
  position: relative;
  color: rgb(170, 170, 170);
   margin-top: 2rem;
  margin-bottom: 2rem;
 
}
.traffic {
  border-radius: .8rem;
 
  background: #fff;
 
}

.set {
    margin: 1rem 0;
    padding: 2rem 1rem 1rem 1rem;
    background-color: #fff;
    border-radius: .8rem;
    overflow: hidden;
    position: relative;
    padding-bottom: .5rem;
  
}

.active{
  
  color: #000;
  border-bottom: 2px solid #000;
}
.city {
  width: 8rem;
  display: flex;
  justify-content: space-between;
  color: rgb(187, 187, 187);

}
.city li {
  padding-bottom: .8rem;
}

.Rcity {
  padding: 2rem 1rem 0 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
}
.age {
    padding: 2rem 1rem 12rem 1rem;
    margin: 1rem 0;
    height: 2.5rem;
    background: #fff;
    border-radius: .8rem;
    position: relative;
    color: rgb(194, 194, 194);
}
.Accounted {
  width: 50%;
  height: 100%;
  background-color: rgb(16, 137, 231);
  box-shadow: inset  -5px 0 2px 10px rgb(82, 177, 250);
  
}
.shuzhi {
  color: #000;
  font-weight: 600;
}

.article {
  display: flex;
  justify-content: space-around;
  margin-top:4rem;
  height: 6rem;
}
.article li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: .8rem; */
}
.article .tiaowai {
      width: 8rem;
    height: 1rem;
    border-radius: .8rem;
    background-color: #ddd;
    overflow: hidden;
}

.tiao {
  width: 50%;
  height: 100%;
  background-color: rgb(16, 137, 231);
  /* box-shadow: inset  -5px 0 2px 10px rgb(82, 177, 250); */
}

/* #chart2 {
  width:300px;
  height:200px;
  background:#fff;
  margin: 0 auto;
 
} */

.map {
  background-color: #fff;
  border-radius: .8rem;
  margin:1rem 0;
}
.report {
  width: 100%;
  height:34rem;
  border-radius: .8rem;
  margin-top: 1rem;
  background: #fff;
  padding-top: 26px;
}
.kh {
  display: inline-block;
  border-bottom: 3px solid #000;
  padding-bottom: 5px;
}
.xb {
  color: #3b9efe;
  
}
.gender {
  color: rgb(180, 180, 180);
  padding-left: 1rem;
  
}

#chart1 {
  width: 300px;
  height: 300px;
  margin: 0 auto;
}
.content {
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding-bottom:8rem;
  z-index: 99;
  background-color: rgb(236, 236, 236);
  font-size: 1.4rem;
}
.header-tab {
    width: 100%;
    height: 5rem;
    border-radius: 1rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    background-color: #fff;
    font-size: 1.4rem;
}
.header-tab li {
  height: 100%;
  box-sizing: border-box;
  line-height: 5rem;
}
.header-tab .active {
  border-bottom: 3px solid #2cbcff;
  color: #2cbcff;
}
</style>



