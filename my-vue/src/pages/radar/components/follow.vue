<template>
  <div class="content">
    <h2 class="title">跟进描述</h2>
    <div class="textBox">
      <textarea name id cols="30" rows="10" maxlength="400" @input="descInput" v-model="desc"></textarea>
      <span class="text">{{remnant}}/400字</span>
    </div>

    <div class="label">
      <div class="label-title">
        <div class="left">客户标签</div>
        <div class="right">8/10</div>
      </div>
      <div class="labelBox">
        <div class="add">+</div>
      </div>
    </div>

    <div class="date">
      <div class="left">下次跟进日期</div>
      <div class="right" @click="setDate">
        {{date?date:'请选择日期'}}
        <i class="iconfont iconyou"></i>
      </div>
    </div>
    <div class="date">
      <div class="left">成员概率设置</div>
      <div class="right">20%</div>
    </div>
    <div class="submit">提交</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      remnant: 0,
      desc: "",
      date:''
    };
  },
  methods: {
    // 文本输入框
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 400 - txtVal;
    },
    setDate() {
      this.$picker.show({
        type: "datePicker",
        onOk: date => {
          this.date = date;
        }
      });
    }
  }
};
</script>

<style scoped>
.iconyou{
    color: #c8c8cd;
    font-weight: 600;
    font-size: 20px;
}
.submit {
    width: 100%;
    height:4.5rem;
    border-radius: 2rem;
    text-align: center;
    line-height: 4.5rem;
    color: #fff;
    background: linear-gradient(to right, #43c5fe , #2f8bfe);
    
   font-size: 1.6rem;
    margin:4rem auto;
}

.date .right {
  display: flex;
  align-items: center;
  color: #a6a6a6;
  font-weight: normal;
}
.date {
  height: 4.5rem;
  box-shadow: 0 0 5px #ccc;
     border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
 
  font-weight: 600;
  padding: 0 1rem;
  margin-top: 2rem;
}

.add {
    width: 6.2rem;
    height: 2.45rem;
    background: #f3f3f3;
    border-radius: 1rem;
    text-align: center;
    line-height: 2.45rem;
    font-size: 2rem;
    color: #707070;

}
.label .right {
  color: #cfced6;
}
.label {
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 5px #ccc;
}
.labelBox {
  padding: 2rem 1rem 3rem 1rem;
}
.label-title {
  height: 4rem;
  line-height:4rem;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e7e7e7;
 
}
textarea {
  width: 100%;
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background-color: #f7f7f7;
}
.text {
  position: absolute;
  bottom:1rem;
  right: 1rem;
  
  color: #787878;
}
.textBox {
  width: 100%;
    height: 10rem;
    border-radius: 1rem;
    -webkit-box-shadow: 0 0 5px #ccc;
    box-shadow: 0 0 5px #ccc;
    overflow: hidden;
    position: relative;
    margin-bottom: 2rem;
}
.title {
  height: 4.5rem;
  line-height: 4.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 1.6rem
}
.content {
  padding: 0 1rem;
  font-size: 1.2rem
}
</style>

