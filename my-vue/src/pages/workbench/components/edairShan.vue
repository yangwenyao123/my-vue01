<template>
  <div>
    <div class="list">
      <li >
        <div class="left">商机名称</div>
        <input type="text" v-model="boName" />
      </li>
      <li>
        <div class="left">金额</div>
        <input type="number" v-model="money" />
      </li>
      <li>
        <div class="left">关联客户</div>
        <div class="right">
          <div class="name">{{name}}</div>
          <img :src="avaurl" alt />
          <i class="iconfont icyoujiantou"></i>
        </div>
      </li>
      <li>所在阶段</li>
    </div>

    <ul class="nav">
      <li v-for="(item,index) in navData[0]" :key="index" :class="item.title==title?'active':''">{{item.title}}</li>
    </ul>

    <div class="baoShan">
      <div class="btn shanchu">删除</div>
      <div class="btn baocun">保存</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        name:null,
        money:null,
        navData:[],
        title:null,
        avaurl:null,
        boName:null,
        id:null,
        obj:{},
        cid:null
    };
  },
  mounted () {
        this.navData = this.$route.params.navData
        var shuju = this.$route.params.shanji
        
        this.boName = shuju.boName
        this.money = shuju.money
        this.name = shuju.name
        this.avaurl = shuju.avaurl
        this.title = shuju.title

  }
};
</script>
<style scoped>
.baoShan {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
}
.btn {
    width: 35%;
    height: 3.5rem;
    text-align: center;
    line-height: 3.5rem;
    border-radius: 20rem;
}
.baocun {
   background: linear-gradient(to right, #5dc1ff,#4489fe);
  color: #fff;
}
.shanchu {
  border: 1px solid rgb(175, 226, 245);
  color: rgb(175, 226, 245);
  
}

.list .right {
  display: flex;
  align-items: center;
}
.list li {
  height: 4.5rem;
  border-bottom: 1px solid #ccc;
  line-height: 4.5rem;
  padding: 0 0.4rem;
  display: flex;
  justify-content: space-between;
  color: #999;
  font-size: 1.4rem;
}
.list img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 0 1rem;
}
.list input {
  border: none;
  border-width:0;
  text-align:right;
  outline: none;/**去input黄色边框**/
}
.nav {
  border: 1px solid #ccc;
  border-radius: 0.8rem;
  overflow: hidden;
  display: flex;
  margin: 3rem 1rem;
  font-size: 1.4rem;
}
.nav li {
  flex: 1;
  height: 3.5rem;
  border-right: 1px solid #ccc;
  line-height: 3.5rem;
  text-align: center;
}
.active {
  background: rgb(249, 122, 53);
}
.nav li:last-child {
  border: none;
}
.list li:last-child {
  border: none;
}
</style>