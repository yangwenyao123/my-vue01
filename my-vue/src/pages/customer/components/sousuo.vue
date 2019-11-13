<template>
  <div class="content" style="font-size:1.4rem;">
    <div class="header">
      <div class="sousuo">
        <i class="iconfont iconsousuo"></i>&nbsp;搜索用户
      </div>
    </div>
    <div class="labelList">
      <div class="tishi">搜索指定标签</div>
      <div class="genjin pB">
        <div class="label">
          <div class="labelBtn" @click="editorLabel">合同审核</div>
          <div class="labelBtn" @click="editorLabel">合同审核</div>
          <div class="labelBtn" @click="editorLabel">合同审核</div>
          <div class="labelBtn" @click="editorLabel">合同审核</div>
        </div>
      </div>

      <div class="chakan" @click="quanbulabel">查看全部标签</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    quanbulabel() {
      console.log(132);

      this.$router.push("/customer");
    },
    editorLabel () {
      this.$router.push("/editorLabel");
    }
  }
};
</script>

<style scoped>
.chakan {
    margin: 3rem auto;
    width: 10rem;
    height: 3rem;
    line-height: 3rem;
    text-align: center;
    color: #3eb9ff;
    border: 1px solid #3eb9ff;
    border-radius: 2rem;
 
}
.labelList {
  padding: 0 2rem;
}
.label {
  display: flex;
  flex-wrap: wrap;
}
.genjin .labelBtn {
  background-color: #ffe4cd;
}
.labelBtn {
 border-radius: 2rem;
    margin-right: 1rem;
  
    margin-bottom: 2rem;
    width: 30%;
    height: 3rem;
    text-align: center;
    line-height: 3rem;
}

.tishi {
    height: 10rem;
    text-align: center;
    line-height: 10rem;
    color: #bebebe;
    
}
.header {
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: rgb(241, 239, 239);
}

.header .sousuo {
      height: 3.5rem;
    line-height: 3.5rem;
    text-align: center;
    width: 100%;
    border-radius: .7rem;
    background-color: #fff;
    font-size: 1.2rem;
    color: #bebebe;
}
.iconsousuo {
  font-size: 13px;
}
</style>
