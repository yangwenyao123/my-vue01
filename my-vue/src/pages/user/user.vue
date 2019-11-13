<template>
  <div class="content">
    <div class="boxa">{{res}}</div>
     <div class="boxb">{{data}}</div>
    <div class="newCard">
      <div class="newCardtop">
        <div class="left">
          <i class="iconfont iconmingpian" @click="posters"></i>
          <span>名片海报</span>
        </div>
        <div class="midden">
          <img :src="avatar" alt />
        </div>
        <div class="right">
          <i class="iconfont iconhuizhang" @click="Zposters"></i>
          <span>鸡血海报</span>
        </div>
      </div>
      <div class="title">
        <h2>设计</h2>
        <p>卡斯蔓生活馆</p>
      </div>
      <p>您的售Easy管家完善度已达60%，快去<router-link to="/editorData" tag="span"  style="color:rgb(118, 217, 255)">完善信息</router-link>吧</p> 
      <div class="jinduwrap">
        <div class="jinduzhi"></div>
      </div>
    </div>

    <div class="list">
      <ul class="item">
        <router-link to="/guan" tag="li">
          <div class="li_left">
            <div class="mingp">
              <i class="iconfont iconmingpian"></i>
            </div>名片首页管理
          </div>
          <div class="li_right">
            <i class="iconfont iconyou"></i>
          </div>
        </router-link>
        <router-link tag="li" to="/btncloos">
          <div class="li_left">
            <div class="mingp">
              <i class="iconfont iconzhuye"></i>
            </div>主页按钮选择
          </div>
          <div class="li_right">
            <i class="iconfont iconyou"></i>
          </div>
        </router-link>
        <router-link tag="li" to="/huashu">
          <div class="li_left">
            <div class="mingp">
              <i class="iconfont iconhuashuku" style="line-height:2.6rem"></i>
            </div>话术管理
          </div>
          <div class="li_right">
            <i class="iconfont iconyou"></i>
          </div>
        </router-link>
      </ul>

      <ul class="item">
        <li>
          <div class="li_left">
            <div class="mingp">
              <i class="iconfont iconshu1" style="font-size:12px;"></i>
            </div>使用教程
          </div>
          <div class="li_right">
            <i class="iconfont iconyou"></i>
          </div>
        </li>
        <router-link to="/feedback" tag="li">
          <div class="li_left">
            <div class="mingp">
              <i class="iconfont iconxiaoxi"></i>
            </div>意见反馈
          </div>
          <div class="li_right">
            <i class="iconfont iconyou"></i>
          </div>
        </router-link>
        <router-link to="/set" tag="li">
          <div class="li_left">
            <div class="mingp">
              <i class="iconfont iconshezhi1"></i>
            </div>设置
          </div>
          <div class="li_right">
            <i class="iconfont iconyou"></i>
          </div>
        </router-link>
      </ul>
    </div>
    <Foter :active="active"></Foter>
  </div>
</template>
<script>
import Foter from "@/components/foter";
export default {
  data() {
    return {
      active: null,
      avatar:'',
      res:''
    };
  },
  methods: {
    posters() {
      this.$router.push("/posters");
    },
    Zposters() {
      this.$router.push("/zposters");
    },
    getCardHome () {
      var id = sessionStorage.getItem("id") 
      this.$axios.get("/user/Index/getCardHome?id="+id).then((res)=>{
        console.log(res.data);
        
        this.$store.commit('getCardHome',res.data)
          
      })
    }

  
  },
  mounted() {
    this.getCardHome ()
    var that = this
    this.active = this.$route.path;

  },
  components: {
    Foter
  }
};
</script>
<style scoped>
.boxa{
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
  z-index: 99

  
}
.boxb {
   position: absolute;
  left: 0;
  bottom: 0;
  font-size: 20px;
  z-index: 99
}
.newCard {
  padding-top: 2rem;
  background: #fff;
      border-radius: .6rem;
      margin-bottom: 2rem;
      font-size: 1.2rem;
       color: rgb(180, 174, 191);
       padding-bottom: .1rem;
}
.newCardtop {
  display: flex;
  
}
.newCardtop>*{
 
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.midden img {
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
}
.newCard .title {
      text-align: center;
    height: 4rem;
    line-height: 2rem;
        margin: 1.2rem 0;
        font-size: 1.4rem;
        color:#000;
        margin-bottom: 2rem;
}
.newCard .title h2 {
  font-size: 1.4rem;
    font-weight: 600;
    
}

.newCard > p {
  text-align: center;
 
}
.newCardtop .iconfont {
    font-size: 3.5rem;
    margin-bottom: .4rem;
    color: #000
}
.jinduwrap {
    height: .6rem;
    background: #cccc;
    margin: .4rem;
    border-radius: 1rem;
    overflow: hidden;
}
.jinduzhi {
    width: 80%;
    background: rgb(118, 217, 255);
    height: 100%;
}
.content {
  background-color: #e5e5e7;
  padding: 1rem;
  padding-bottom: 5rem;
}
.li_left {
  display: flex;
  font-size: 1.4rem;
  align-items: center;
}
.mingp {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: #76d9ff;
  text-align: center;
  line-height: 2.5rem;
  color: #fff;
  margin-right: 0.8rem;
}
.mingp .iconfont {
  font-size: 16px;
}

.item {
  border-radius: 0.6rem;
  background: #fff;
  overflow: hidden;
  margin-bottom: 1.5rem;
}
.item li:last-child {
  border-bottom: none;
}
.item li {
  width: 100%;
  height: 5rem;
  line-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
  padding: 0 1rem;
  box-sizing: border-box;
  font-size: 1.4rem;
}
.list {
  padding: 0 0.2rem 0.5rem 0.2rem;
}
.radius-left {
  top: 61%;
  left: -6px;
}
.radius-right {
  top: 61%;
  right: -6px;
}
.radius {
  width: 0.2rem;
  height: 0.18rem;
  border-radius: 50%;
  background: #b2e8fb;
  position: absolute;
}
.border-right {
  border-right: 1px solid #4bdbfa;
}
.card-bottom {
  width: 100%;
  height: 35%;
  display: flex;
  align-items: center;
  color: #fff;
  background: url(../../assets/images/541.png) no-repeat;
  background-size: 100% 130%;
  background-position: 0px -10px;
  border-top: 1px solid #59c4fb;
}
.card-bottom .iconfont {
  font-size: 1.8rem;
}
.card-bottom .iconhuizhang {
  font-size: 2rem;
}

.card-bottom_left {
  width: 50%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 0.2rem 0;
  box-sizing: border-box;
}
.card-bottom_right {
  width: 50%;
  height: 0.65rem;
  background: pink;
}
.editor_text {
  display: flex;
  align-items: center;
  color: #fff;
}
.editor {
  padding-top: 1.2rem;
  height: 100%;
  box-sizing: border-box;
}
.information {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  font-size: 1.2rem;
}
.information h2 {
  font-weight: 500;
  font-size: 1.6rem;
  color: #fff;
}
.information .sheji {
  color: #fff;
}
.miaosu {
  color: #d0e0d3;
}
.card_left {
  display: flex;
}
.card_top {
  width: 100%;
  height: 65%;
  background: url(../../assets/images/card.png) no-repeat;
  background-size: 100% 110%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 1rem;
}
.card_toux {
  width: 5rem;
  height: 4.8rem;
  margin-right: 1rem;
}
.card_toux img {
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
}

.card {
  padding: 0.2rem 0.2rem 0.5rem 0.2rem;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}
.card-pian {
  height: 14rem;
  border-radius: 0.8rem;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 10px #b2e8fb;
}
</style>


