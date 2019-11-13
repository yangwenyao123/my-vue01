<template>
  <div style="ovhide">
    <div class="content" ref="content" style="font-size:1.4rem;padding-bottom:5rem">
      <div class="header-data">
        <div class="title">
          <h2>昨日数据</h2>
        </div>
        <ul>
          <li>
            <div class="card">
              名片浏览
              <span class="iconbg">
                <i class="iconfont iconyanjing"></i>
              </span>
            </div>
            <div class="number">{{workData.名片浏览}}&nbsp;次</div>
          </li>
          <li>
            <div class="card">
              新增客户
              <span class="iconbg">
                <i class="iconfont iconjia2"></i>
              </span>
            </div>
            <div class="number">{{workData.新增客户}}&nbsp;次</div>
          </li>
          <li>
            <div class="card">
              成交订单
              <span class="iconbg">
                <i class="iconfont icongouwudai"></i>
              </span>
            </div>
            <div class="number">{{workData.成交订单}}&nbsp;次</div>
          </li>
          <li>
            <div class="card">
              活跃客户
              <span class="iconbg">
                <i class="iconfont iconhuo1"></i>
              </span>
            </div>
            <div class="number">{{workData.活跃客户}}&nbsp;次</div>
          </li>
          <li>
            <div class="card">
              成交金额
              <span class="iconbg">
                <i class="iconfont iconjinbi2"></i>
              </span>
            </div>
            <div class="number">{{workData.成交金额}}&nbsp;次</div>
          </li>
           <li>
            <div class="card">
              转发/保存
              <span class="iconbg">
                <i class="iconfont iconfuzhi1"></i>
              </span>
            </div>
            <div class="number">{{workData.转发}}&nbsp;次</div>
          </li>

        </ul>
        <div class="task">
          <div class="task-left">
            <span class="iconbg">
              <i class="iconfont iconrenwu"></i>
            </span>
            <div class="title" @click="renwu">
              <h2>任务</h2>
              <p>高效管理自己的销售计划</p>
            </div>
          </div>

          <div class="num">{{workData.任务}}</div>
        </div>
        <div class="task border-none">
          <div class="task-left">
            <span class="iconbg">
              <i class="iconfont iconshangji1"></i>
            </span>
            <div class="title" @click="Business">
              <h2>商机</h2>
              <p>把握机会 成交就在眼前</p>
            </div>
          </div>
          <div class="num">{{workData.商机}}</div>
        </div>
      </div>

      <div class="application">
        <div class="title">
          <h2>我的应用</h2>
        </div>
        <ul class="appIems">
          <router-link to="/mall" tag="li">
            <i class="iconfont iconshangcheng2"></i>商城
          </router-link>
          <router-link to="/dynamic" tag="li">
            <i class="iconfont icondongtaicopy"></i>动态
          </router-link>
          <router-link to="/veri" tag="li">
            <i class="iconfont icondingdan"></i>订单核销
          </router-link>
          <router-link to="/report" tag="li">
            <i class="iconfont iconbaobiao"></i>AI报表
          </router-link>

          <router-link to="/daily" tag="li">
            <i class="iconfont iconribao"></i>每日日报
          </router-link>
          <router-link to="/receive" tag="li">
            <i class="iconfont iconhongbao"></i>红包领取
          </router-link>
        </ul>
      </div>
      <Foter :active="active"></Foter>
    </div>
  </div>
</template>
<script>
import Foter from "@/components/foter";

export default {
  data() {
    return {
      active: null,
      cookie:'',
      workData:{}
    };
  },
  methods: {
    renwu() {
      this.$router.push("/task");
    },
    Business() {
      this.$router.push("/business");
    },
    work() {
      var staffId = 'c0ptQ0oxOTE4QWlvdFZZaXpE'
      this.$axios.get("/workbench/Index?staffId="+staffId).then(res=>{
        this.workData = res.data
        
      })
    }
  },
  components: {
    Foter
  },
  mounted() {
    this.work()
    this.active = this.$route.path;
   
  }
};
</script>
    <style scoped>
.iconhongbao {
  color: #b05afe;
}
.iconshangcheng2 {
  color: #42a4ea;
}
.icondingdan {
  color: #c06df6;
}

.icondongtaicopy {
  color: #13ccba;
}
.iconbaobiao {
  color: #ff888b;
}
.iconribao {
  color: #399df6;
}
.header-data li .iconfont {
  color: rgb(106, 207, 246)
}

.appIems .iconfont {
  margin-bottom: 5px;
  font-size: 28px;
}
.appIems {
  display: flex;
  flex-wrap: wrap;
}
.appIems li {
  width: 25%;
  height: 6.4rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.2rem;

}

.application {
  padding: 0 0.15rem 0.2rem 0.15rem;
}
.application .title {
      height: 5rem;
    line-height: 5rem;
    font-weight: 600;
    padding-left: 1rem;
    font-size: 1.4rem;
}

.header-data .border-none {
  border: none;
}
.task .num {
  width: 2.5rem;
  height: 2.5rem;
  background-color: #f3821f;
  border-radius: 50%;
  text-align: center;
  line-height: 2.5rem;
  color: #fff;
  background: linear-gradient(to right, #fb802d , #ffb12f);
  box-shadow: 0 0 8px #f3821f;
 
}
.task .title h2 {
  padding-bottom: 0.1rem;
 
}
.task .title p {
  padding-top: 0.1rem;
  font-size: 1.2rem;
 
  color: rgb(130, 130, 130);
}
h2 {
  font-weight: 500 !important;
}
.task .title {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.task {
  padding: 1rem;
  border-top: 1px solid rgb(233, 233, 233);
  border-bottom: 1px solid rgb(233, 233, 233);
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: normal;
}
.task-left {
  display: flex;
  align-items: center;
}
.task .iconbg {
      display: inline-block;
    background-color: #4bdac4;
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    line-height: 4rem;
    margin-right: 1rem;
}
.task .iconfont {
  color: #fff;
  font-size: 28px;
}
.header-data {
  width: 100%;
  padding: 0 1rem 0 1rem;
  box-sizing: border-box;
  border-bottom: 8px solid #e4e4e4;
}
.header-data ul {
  padding-bottom: 1rem;
}
.header-data > .title {
  height: 5rem;
  color: #000;
  line-height: 5rem;
  font-weight: 600;
  font-size: 1.6rem;
 
}
.header-data ul {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-bottom: 1rem;

}
.header-data li {
  width: 31%;
  height: 7rem;
  background-color: rgb(83, 204, 254);
  margin-bottom: 1.2rem;
  border-radius: .8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
  padding: 0 0.6rem;
  font-size: 1.2rem;
  box-sizing: border-box;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.iconbg {
     display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: rgb(207, 240, 247);
    text-align: center;
    line-height: 2.5rem;
}
.iconhuo {
  color: rgb(83, 204, 254);
}
</style>



