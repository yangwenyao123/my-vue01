<template>
  <div class="content">
    <ul class="header-tab">
      <li :class="{active:cur==0}" @click="cur=0">正在砍价</li>
      <li :class="{active:cur==1}" @click="cur=1">砍价完成</li>
      <li :class="{active:cur==2}" @click="cur=2">砍价失败</li>
    </ul>
    
    <div class="jiazai">已加载完毕</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cur: 0
    };
  },
  components: {}
};
</script>
<style scoped>
.jiazai {
    margin-top: 4rem;
    text-align: center;
    font-size: 1.6rem;
    color: #b6b6b7;
}
.content {
  padding:1rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgb(245, 245, 246);
   font-size: 1.4rem;
}
.header-tab {
  width: 100%;
  height: 4.5rem;
 
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 1rem;
 
}
.header-tab li {
  height: 100%;
  box-sizing: border-box;
  line-height:4.5rem;
  padding: 0 1rem;
}
.header-tab .active {
  border-bottom: 2px solid #2cbcff;
  color: #2cbcff;
}
</style>

