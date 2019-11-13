<template>
  <div class="content" style="font-size:1.4rem">
    <ul class="list">
      <li><div class="left">任务名称</div> <div class="right">{{taskName}}</div></li>
      <li><div class="left">日期时间</div> <div class="right" @click ="setDate" >{{date?date:'未设置'}}<i class="iconfont iconyou"></i></div></li>
      <li><div class="left">关联客户</div> <div class="right" @click ="guaunLian"><img :src="img" alt=""><i class="iconfont iconyou"></i></div></li>
    </ul>
    <div class="beizhu">
     <div class="title">备注</div>
      <textarea  style="resize: none;" v-model="text"></textarea>
    </div>  

    <div class="baocun">保存</div>

  </div>
</template>
<script>
export default {
  data () {
    return {
      date:'',
      item:{},
      img:'',
      text:'',
      taskName:''
    }
  },
  methods:{
    guaunLian () {
      console.log(123);
      
      this.$router.push("/guanlian")
    },
     setDate(){
	       this.$picker.show({
	         type:'datePicker',
	         onOk: (date) =>{
             console.log(date);
             

	           this.date = date
	         }
	       });
        }
  },
  mounted () {
    var data = this.$route.params.item
    this.taskName = data.taskName
    this.date = new Date(parseInt(data.releaseTime) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ');  
    this.img = data.avaurl
    this.text = data.remarks
  }
}
</script>
<style scoped>
img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-right: 2rem;
}
.right {
  display: flex;
  align-items: center;
}
.baocun {
    width: 26rem;
    height: 4rem;
    border-radius:5rem;
    text-align: center;
    line-height: 4rem;
    color: #fff;
      background: linear-gradient(to right, #43c5fe , #2f8bfe);
    
 
    margin:4rem auto;
}
.beizhu {
    padding: 0 1rem;

}

textarea {
     width: 100%;
    height: 10rem;
    background: #f5f5f6;
    border-radius: 1rem;
    padding: 1rem;
    color: #757679;
  
    box-sizing: border-box;
}

.beizhu .title {
    height: 4rem;
    line-height: 4rem;
    color: #757679;
}

.list li {
    height: 4.5rem;
    padding: 0 1rem;
    color: #757679;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    /* font-weight: 500; */
    border-bottom: 1px solid #f2f5f4;
}
.list .iconyou {
    color: #c8c8cd;
    font-weight: 600;
    font-size: 20px;
}

</style>

