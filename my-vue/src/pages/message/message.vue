<template>
  <div class="content-box">
    <scroller 
  :on-refresh="refresh"
  :on-infinite="infinite">
  <!-- content goes here -->

    <div class="tab">
      <ul>
        <li @click="cur=0" :class="{active:cur==0}">全部对话</li>
        <li @click="cur=1" :class="{active:cur==1}">预约客户</li>
        <li @click="cur=2" :class="{active:cur==2}">待唤醒客户</li>
      </ul>
    </div>
    <div class="list">
      <ul class="items">
        <li @click="jump">
          <img src="@/assets/images/0.jpg" alt=""/>
          <div class="name"><h3>杨文耀</h3><div class="xiaoxi"><span class="weidu">[&nbsp;未读&nbsp;]</span>&nbsp;1235</div></div>
          
        </li>
        <li @click="jump">
          <img src="@/assets/images/0.jpg" alt="" />
           <div class="name"><h3>杨文耀</h3><div class="xiaoxi"><span >[&nbsp;已读&nbsp;]</span>&nbsp;你好</div></div>
        </li>
      </ul>
    </div>
    
 

    <div class="loading">加载完毕</div>
     </scroller>
        <!-- 群发助手 -->
    <router-link to="/qunfa" class="mass" > <span>群发</span><span>助手</span></router-link>
    <Foter :active="active"></Foter>
   
  </div>
</template>
<script>
import Foter from "@/components/foter";
export default {
  data() {
    return {
      cur: 0,
      active:null
    };
  },
  components: {
    Foter
  },
  methods: {
    refresh () {
      console.log("1");
      
    },
    infinite () {
      console.log(2);
      
    },
    jump() {
      this.$router.push("/session");
    },
    qunfa () {
      this.$router.push("/qunfa");
    }
  },
  mounted () {
    // this.active = this.$route.params.id 
    
    this.active = this.$route.path
    console.log(this.active);
    
  }
};
</script>
<style scoped>
.xiaoxi {
  color:rgb(188, 188, 188)
}
.name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3.5rem;
 
}
.name > *{ 
  /* height: 50%; */
  display: flex;
  align-items: center;
}
.name h3 {
  font-weight: 600;
  font-size: 1.4rem;
}
.name .weidu {
  color:rgb(44, 188, 255);
  font-size: 1.2rem;
}
.items img {
    width: 4rem;
    height: 4rem;
    border-radius: .5rem;
    margin-right: 1rem;
}

.items li {
  font-size: 1.2rem;
 
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  padding-left: 1rem;
  height: 6rem;
  align-items:center
}
.mass {

    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    background-color: #2cbcff;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    color: #fff;
    position: absolute;
    bottom: 8rem;
    right: 2rem;
    font-size: 1.4rem;
    padding: .5rem 0;
    box-sizing: border-box;
}
.mass span {
  display: block;
}
.content-box {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
}
.loading {
  text-align: center;
  color: #aaaaaa;
  margin-top: 1rem;
  font-size: 1.4rem;
}
.tab ul {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  height: 4.5rem;
  border-bottom: 1rem solid #f5f5f6;
}
.tab li {
  width: 26%;
  line-height: 4.5rem;
  text-align: center;
  font-size: 1.4rem;
}
.active {
  border-bottom: 3px solid #2cbcff;
  color: #7896be;
}
</style>


