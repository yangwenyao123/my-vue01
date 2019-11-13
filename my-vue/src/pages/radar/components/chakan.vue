<template>
  <div class="content">
    <div class="card">
      <div class="card-pian">
        <div class="card_top">
          <div class="card_left">
            <div class="card_toux">
              <img src="../../../assets/images/66.jpg" alt />
            </div>
            <div class="information">
              <h2 class="name">杨文耀</h2>
              <p class="shangji">未关联商机阶段</p>
            </div>
          </div>
          <router-link class="biaoqian" to="/label" tag="div">添加标签</router-link>
          <div class="editor">
            <router-link to="/editor" tag="div" class="editor_text">
              资料编辑
              <i class="iconfont iconyou"></i>
            </router-link>
          </div>
          <!-- 11 -->
            
       
          <!-- // -->
        </div>

         <div class="card-bottom">
          <div class="card-bottom_left "  @click ="setDate" >
            <h2>{{date?date:'未设置'}}</h2>
            <p>预计成交日期</p>
          </div>
          <div class="card-bottom_left">
            <h2>20%</h2>
            <p>预计成交概率</p>
          </div>
        </div>

        <!-- 两边的半圆 -->
        <div class="radius radius-left"></div>
        <div class="radius radius-right"></div>
      </div>
    </div>

    <ul class="nav-tab">
      <li @click="cur=0" :class="{active:cur==0}">互动</li>
      <li @click="cur=1" :class="{active:cur==1}">资料</li>
      <li @click="cur=2" :class="{active:cur==2}">相关</li>
      <li @click="cur=3" :class="{active:cur==3}">AI分析</li>
    </ul>

    <Hdong v-show="cur==0"></Hdong>
    <Zliao v-show="cur==1"></Zliao>
    <Related v-show="cur==2"></Related>
    <Analysis v-show="cur==3"></Analysis>

    <ul class="footer">
      <router-link to="/session" tag="li">
        <div class="icBg">
          <i class="iconfont iconrenwu"></i>
        </div>发消息
      </router-link>
      <router-link to="/cjsj" tag="li">
        <div class="icBg">
          <i class="iconfont iconrenwu"></i>
        </div>创建商机
      </router-link>
      <router-link to="/create" tag="li">
        <div class="icBg">
          <i class="iconfont iconrenwu"></i>
        </div>创建任务
      </router-link>
      <router-link to="/follow" tag="li">
        <div class="icBg">
          <i class="iconfont iconrenwu"></i>
        </div>添加跟进
      </router-link>
    </ul>
  </div>
</template>
<script>
import Hdong from "./hudong";
import Zliao from "./ziliao";
import Related from "./related";
import Analysis from "./Analysis";
export default {
  data() {
    return {
      cur: 0,
      demo2: "",
      date:''
    };
  },
  methods: {
      setDate(){
	       this.$picker.show({
	         type:'datePicker',
	         onOk: (date) =>{
	           this.date = date
	         }
	       });
        }
  },
  components: {
    Hdong,
    Zliao,
    Related,
    Analysis
  }
};
</script>

<style scoped>
.name {
  font-size: 1.4rem;
}
.icBg {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #24c3ff;
  text-align: center;
  line-height: 2.5rem;
  margin-bottom: 0.5rem;
}
.footer .iconfont {
  font-size: 1.6rem;
  color: #fff;
}
.footer {
  display: flex;
  justify-content: space-between;
  padding: .5rem;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  border-top: 1px solid #e2e5e4;
  font-size: 1rem;
  background: #fff;
}
.footer li {
  display: flex;
  flex-direction: column;
  color: #7f7e7e;
  width: 20%;
  align-items: center;
  text-align: center;
}

.content {
  padding: 1rem;
  background-color: #fdffff;
  font-size: 1.2rem;
  padding-bottom: 10rem;
}
.nav-tab {
     height: 5rem;
    border-radius: 1rem;
  margin-top: 1.2rem;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 5px #ccc;
  align-items: center;
  font-size: 1.4rem;
}
.nav-tab li {
  padding: 1.7rem 0;
  width: 5rem;
  text-align: center;
}
.nav-tab .active {
  border-bottom: 3px solid #2ac3ff;
  color: #3ebfdc;
}

.biaoqian {
   position: absolute;
    top: 54%;
    left: 1rem;
    border: 1px solid #fff;
    padding: .3rem 0.5rem;
    border-radius: 0.8rem;

}
h2 {
  font-weight: 600;
  font-size: 1.4rem;
}
p {
  font-size: 1.2rem;
}
.radius-left {
  left: -6px;
}
.radius-right {
  right: -6px;
}
.radius {
  width: 0.2rem;
  height: 0.18rem;
  border-radius: 50%;
  background: #b2e8fb;
  position: absolute;
  top: 66%;
}
.border-right {
  border-right: 1px solid #ccc;
}
.card-bottom {
  width: 100%;

  display: flex;
  align-items: center;
  padding: 0.5rem 0;

  /* background: url(../../../assets/images/card2.png) no-repeat; */
  background-size: 100%;
  background-position: 0px -10px;
}
.card-bottom p {
  color: #eaf6ff;
}
.card-bottom_left {
  width: 50%;
  height: 3.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.card-bottom_right {
  width: 50%;
  height: 0.65rem;
  background: pink;
}

.editor_text {
  display: flex;
  align-items: center;
}
/* .editor {

  box-sizing: border-box;
} */
.information {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height:3.5rem;
}


.miaosu {
  color: #d0e0d3;
  font-size: 1rem;
}
.card_left {
  display: flex;
}
.card_top {
  width: 100%;
  height: 10rem;
 
  display: flex;
  /* align-items: center; */
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
      padding-bottom: 0;
  
}

.card_toux {
      width: 4.5rem;
    height: 4.5rem;
    margin-right: 1rem;
}
.card_toux img {
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
}

.card {
  font-size: 1.2rem;
  color: #fff;
}
.card-pian {
  border-radius: 0.8rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 10px #b2e8fb;
   background: url(../../../assets/images/card.png) no-repeat;
  background-size: 100% 100%;
}
</style>

