<template>
  <div>
    <div class="tab">
      <ul>
        <li @click="cur=0" :class="{active:cur==0}">时间</li>
        <li @click="cur=1" :class="{active:cur==1}">行为</li>
        <li @click="cur=2" :class="{active:cur==2}">人</li>
      </ul>
    </div>

    <Ntime v-show="cur==0" :obj="obj"></Ntime>
    <beHavior v-show="cur==1" :xingweiDatax="xingweiData"></beHavior>
    <people v-show="cur==2" :ren="ren"></people>

    <Foter :active="active"></Foter>
  </div>
</template>
<script>
import beHavior from "./components/behavior";
import Foter from "@/components/foter";
import Ntime from "./components/Ntime";
import people from "./components/people";
export default {
  data() {
    return {
      cur: 0,
      active: null,
      openid: "",
      timer: "",
      myVar: null,
      res: "",
      obj:{},
      xingweiData:{},
      ren:[]
    };
  },
  components: {
    Foter,
    beHavior,
    Ntime,
    people

  },
  watch :{
    cur () {
      if(this.cur==1) {
        this.xingwei()
        return
      }

      if(this.cur==2) {
        this.people()
      }
    }
  },
  methods: {
    people () {
      var that = this
      var data =  this.$qs.stringify({
      staffId:'c0ptQ0oxOTE4QWlvdFZZaXpE',
      beginTime:0,
      endTime:0
    })
    this.$axios.post("/radar/Index/getCustomer",data).then(res=>{
      that.ren = res.data
     
      
    })
    },
    quanxian(){

      var a = sessionStorage.getItem("lastname");
      var b = "url48";
      if (b == a) {
      var str = window.location.href;
      var name, value;
      var obj = {};
      var num = str.indexOf("?");
      str = str.substr(num + 1);

      var arr = str.split("&"); //各个参数放到数组里
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);

          obj[name] = value;
        }
      }

      var that = this; 
      var code = obj.code
      alert(code)
      var getCode= sessionStorage.getItem("code");
      if(!getCode){
          
           this.$axios.post(
            "/user/Index/getUserList",
            this.$qs.stringify({
              code: code,
              appid: "ww221b9362b42ce7d2"
            })
          )
          .then((res) => {
            that.quanxianId (res.data.id)
            sessionStorage.setItem("id", res.data.id);

          });
          
          sessionStorage.setItem("code", code);

         
      }
      //  var id = sessionStorage.getItem("id");
       var id = "c0ptQ0oxOTE4QWlvdFZZaXpE"
      that.quanxianId (id)
    
  
      }else{
          sessionStorage.setItem("lastname", "url48");
          // window.location.href =
            // "https://open.weixin.qq.com/connect/oauth2/authorize?appid=ww221b9362b42ce7d2&redirect_uri=http%3a%2f%2fai.qhfkj.top&response_type=code&scope=snsapi_userinfo&agentid=1000006&state=STATE#wechat_redirect";
        }

      },
      quanxianId (id) {
        
        var that = this
        var id = "c0ptQ0oxOTE4QWlvdFZZaXpE"
        this.$axios.get("/radar/Index/getBehavior?id="+id).then(res=>{
          console.log(res);
          
          that.obj = res.data
          console.log(that.obj);
          

        })
      },
      xingwei() {
        var that  = this
        var data =  this.$qs.stringify({
      staffId:'c0ptQ0oxOTE4QWlvdFZZaXpE',
      beginTime:0,
      endTime:0
    })
    this.$axios.post("/radar/Index/getBehaviorByDate",data).then(res=>{
      console.log(res.data);
      that.xingweiData = res.data

    })
  
    }
     
  
   
  },
  mounted() {
    sessionStorage.setItem("staffId", "c0ptQ0oxOTE4QWlvdFZZaXpE");
 
   this.quanxian()
   this.active = this.$route.path;


  }
};
</script>
<style scoped>
.box {
  position: absolute;
  z-index: 9999;
  font-size: 28px;
}

/* .tab {
  padding: 2rem 0 2rem 0;
} */
.tab ul {
  padding: 2rem;
  display: flex;
  justify-content: space-between;
}
.tab li {
  width: 8rem;
  height: 2.8rem;
  border-radius: 3rem;
  text-align: center;
  line-height: 2.8rem;
  border: 1px solid #e7e8ee;
  color: #acaeb8;
  font-size: 1.4rem;
}
.tab .active {
  border: none;
  color: #fff;
  background: linear-gradient(to right, #fe7f2d, #ffb22f);
  box-shadow: 0 0 5px #fe7f2d;
}
</style>


