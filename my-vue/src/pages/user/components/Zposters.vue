<template>
  <div class="content">
    <div class="tab">
      <div class="left" @click="curx(0)" :class="{bombor:cur==0}" data-index="0">励志</div>
      <div class="right" @click="curx(1)" :class="{bombor:cur==1}" data-index="1">自定义</div> 
    </div>

    <!-- 带缓动的下划线 -->
      <div  class="c"></div>
      
    <lizhi v-show="cur==0"></lizhi>
    <zidingyi v-show="cur==1"></zidingyi>
  </div>
</template>
<script>
import lizhi from "./lizhi";
import zidingyi from "./zidingyi";

export default {
  data() {
    return {
      cur: 0
    };
  },
  methods: {
      curx (e) {
          var c = document.querySelector('.c')
          var tx = 0
          if(e==0){
              this.cur = 0
              var tx = 0
              c.style.transform = "translateX("+ tx +"px)";
          }else {
            var tx = 100
            c.style.transform = "translateX("+ tx +"%)";
            this.cur = 1
          } 
      }
  },
  components: {
    lizhi,
    zidingyi
  }
};
</script>
<style scoped>
.content {
  background-color: #f7f7f7;
  
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.c {
  margin-top: 0.6rem;
  width: 50%;
  height: 0.06rem;
  background-color: rgb(44, 188, 255);
  /* transform: translateX(-100px); */
  /* 0.4s完成transform移动效果*/
  transition: transform .2s linear 0s;     
}

.tab {
  height: 4.5rem;
  position: relative;
  text-align: center;
  display: flex;
  background-color: #fff;
  font-size: 1.6rem
}
.tab > .left {
  line-height: 4.5rem;
  width: 50%;
  height: 100%;
}

.tab > .right {
  line-height: 4.5rem;
  width: 50%;
  height: 100%;
}

.bombor {
  border-bottom: 2px solid rgb(44, 188, 255);
  color: rgb(44, 188, 255);
}
</style>