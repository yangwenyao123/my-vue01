<template>
  <div class="content">
    <div class="header">
      <ul class="header-left">
        <li :class="{active:cur==0}" @click="cur=0">今天</li>
        <li :class="{active:cur==1}" @click="cur=1">全部</li>
      </ul>

      <div class="header-right">
        <i class="iconfont tianchongicon"></i>
        <div class="block" @click="date">
          <el-date-picker
            v-model="value2"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </div>
      </div>
    </div>

    <!-- 今日数据 -->
    <div class="Today" v-show="cur==0">
      <!-- 今日未完成任务 -->
      <ul class="taskList wei">
        <li v-for="(item,index) in jinw" :key="index">
          <div class="left">
            <input type="checkbox" checked="checked" @click="checkw($event,item.id)">
            <div class="zhuantai">
                <h3>{{item.taskName}}</h3>
            </div>
            </div>
                <div class="right">
                <div :class="item.star==1? 'iconfont iconxingxing':'iconfont iconxing'"></div>
                <div class="date">{{item.releaseTime | date(1)}}</div>
            </div>
        </li>
      </ul>
      <div class="wancheng" @click="yi=!yi">
        <h2 class="left">已完成任务13</h2>
        <div class="iconfont youjiantou"></div>
      </div>
      <!-- 今日已完成任务 -->
      <ul class="taskList yi" v-show="yi">
           <li v-for="(item,index) in jiny" :key="index">
            <div class="left">
              <input type="checkbox" checked="checked" @click="checky($event,item.id)">
              <div class="zhuantai">
                  <h3>{{item.taskName}}</h3>
              </div>
              </div>
                  <div class="right">
                  <div :class="item.star==1? 'iconfont iconxingxing':'iconfont iconxing'"></div>
            </div>
          </li>
      </ul>
    </div>

    <!-- 全部任务 -->
    <div class="quanbu" v-show="cur==1">
      <!-- 全部未完成数据 -->
      <ul class="taskList wei">
         <li v-for="(item,index) in quanw" :key="index" @click="create(item,$event)">
          <div class="left">
            <input type="checkbox"   @click="checkw($event,item.id)">
            <div class="zhuantai">
                <h3>{{item.taskName}}</h3>
                 <div class="date">{{(item.releaseTime -Date.parse(new Date()) / 1000) > 0 ?'':'已过期' }}</div>
            </div>
            </div>
            
            <div class="right">
                <div :class="item.star==1? 'iconfont iconxingxing':'iconfont iconxing'" @click="icon(item.id,item.star)"></div>
                <div class="date">{{item.releaseTime | date(2)}}</div>
            </div>
        </li>
      </ul>

      <div class="wancheng" @click="yi2=!yi2">
        <h2 class="left">已完成任务13</h2>
        <div class="iconfont youjiantou"></div>
      </div>

      <!-- 全部已完成数据 -->
      <ul class="taskList yi" v-show="yi2">
         <li v-for="(item,index) in quany" :key="index">
          <div class="left">
            <input type="checkbox"  checked="checked"  @click="checky($event,item.id)">
            <div class="zhuantai">
                <h3>{{item.taskName}}</h3>
            </div>
            </div>
                <div class="right" @click="create">
                <div :class="item.star==1? 'iconfont iconxingxing':'iconfont iconxing'" @click="icon(item.id,item.star)"></div>
            </div>
        </li>
      </ul>
    </div>

    <div class="Nodata">没有更多数据了</div>

    <router-link class="create" tag="div" to="/create">新建任务</router-link>
  </div>
</template>
<script>
import { timeout } from "q";
export default {
  data() {
    return {
      cur: 0,
      value2: "",
      taskList: [],
      jintian: [],
      quanbu: [],
      yi: false,
      yi2: false,
      checked: null,
      jiny:[],
      jinw:[],
      quany:[],
      quanw:[],
      
    };
  },
filters:{
     date (timestamp, num) {
       console.log(timestamp, num);
      if (num == 1) {
        var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + "-";
        var M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        var D =
          (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
        var h =
          (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
          ":";
        var m =
          (date.getMinutes() < 10
            ? "0" + date.getMinutes()
            : date.getMinutes()) + ":";
        var s =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

        var strDate = h + m + s;
        return strDate;
      } else {
        var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + "-";
        var M =
          (date.getMonth() + 1 < 10
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) + "-";
        var D =
          (date.getDate() < 10 ? "0" + date.getDate() : date.getDate()) + " ";
        var h =
          (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
          ":";
        var m =
          (date.getMinutes() < 10
            ? "0" + date.getMinutes()
            : date.getMinutes()) + ":";
        var s =
          date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();

        var strDate = Y + M + D + h + m + s;
        return strDate;
      }
    },
},
  methods: {
    create (item,e) {

    if(e.target.localName == 'li' ){
      console.log(123);
      
       this.$router.push({
        name: `create`,
        params: {
          item: item
        }
      })
    }
       
    
    },
    icon (id,star) {
      if(star==1) {
          for (let i = 0; i < this.quanbu.length; i++) {
        
        if(this.quanbu[i].id==id) {
          this.quanbu[i].star=2
          return
        }
        
      }

      }else if(star==2) {
        for (let i = 0; i < this.quanbu.length; i++) {
        
        if(this.quanbu[i].id==id) {
          this.quanbu[i].star=1
          return
        }
        
      }
      }
     
    
    },
    checky (event,id) {
   
      var checky = document.querySelectorAll(".quanbu .yi input[type='checkbox']")
      
    if (!event.currentTarget.checked) {
      
    
          for (let i = 0; i < this.quany.length; i++) {

            if(this.quany[i].id==id) {
              this.quany[i].state = 2

              this.quanw.push(this.quany[i])
              this.quany.splice(i,1)
              console.log(i);
              
            for (let j = 0; j < checky.length; j++) {
               checky[j].checked = true
              
            }

              return
            }

          }

          }
    },
     checkw (event,id) {
      
      var checkw = document.querySelectorAll(".quanbu .wei input[type='checkbox']")
          if (event.currentTarget.checked) {
          for (let i = 0; i < this.quanw.length; i++) {

            if(this.quanw[i].id==id) {
              this.quanw[i].state = 1
              this.quany.push(this.quanw[i])
              this.quanw.splice(i,1)

              for (let j = 0; j < checkw.length; j++) {
               checkw[j].checked = false
              
            }

              return
            }

          } 
          }
      

    },
    date() {
      var el = document.querySelector(".el-popper");
      var picker = document.querySelector(".el-picker-panel__content");

      el.style.width = "100%";

      el.style.top = "45px";
      el.style.left = 0;
      picker.style.margin = 0;
      picker.style.width = "100%";
    },
    task() {
      var that = this;
      var data = this.$qs.stringify({
        staffId: "c0ptQ0oxOTE4QWlvdFZZaXpE",
        time: 0
      });

      this.$axios.post("/radar/Index/getTask", data).then(res => {
        console.log(res.data);
        that.shuju(res.data);
      });
    },
    shuju(res) {
    
      for (let i = 0; i < res.length; i++) {
        if (i == 0) {
          this.jintian = res[i]; // 今日数据

        } else {
          this.quanbu = res[i]; // 全部任务
      
        }
      }
    }
  },
  watch:{
 
    jintian () {

      for (let i = 0; i < this.jintian.length; i++) {
        if(this.jintian[i].state==1) {  // 完成
          this.jiny.push(this.jintian[i])
        }else {    // 未完成
           this.jinw.push(this.jintian[i]) 
        }
      }
      
    },
   
    quanbu () {
      for (let i = 0; i < this.quanbu.length; i++) {
        if(this.quanbu[i].state==1) {  // 完成
          this.quany.push(this.quanbu[i])
        }else {    // 未完成
           this.quanw.push(this.quanbu[i])
        }
      }
    }
  },
  mounted() {
    this.task();
 
 
  },

};
</script>

<style scoped> 
.taskList >>> .right {
  
  text-align: right;

}
.taskList >>> .iconfont {
  margin-bottom: 1rem;
  
}

.taskList {
  margin: 1rem 0;
}
.taskList >>> .date {
  color: #ffa92f;
}
.taskList >>> li {
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.2rem;
  color: rgb(204, 204, 204);
  background-color: #fff;
  border-bottom: 1px solid #cccccc;
}
.yi {
  margin: 0;
}
.yi >>> li {
  height: 6rem;
  border: 0;
  border-top: 1px solid #ccc;
}
.taskList >>> li .left {
  display: flex;
}
.taskList >>> h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #000;
}
.taskList >>> .zhuantai {
  margin-left: 2rem;
}

.wancheng h2 {
  font-size: 1.4rem;
}

.ss {
  transform: rotate(90deg);
}
.Nodata {
  margin-top: 4rem;
  text-align: center;
  color: #acacac;
  font-size: 1.6rem;
}
.create {
  width: 28rem;
  height: 4.5rem;
  border-radius: 2rem;

  background: linear-gradient(to right, #43c5fe, #2f8bfe);
  color: #fff;
  text-align: center;
  line-height: 4.5rem;
  position: absolute;
  bottom: 4rem;
  left: 50%;
  margin-left: -14rem;

  font-size: 1.4rem;
  font-weight: 600;
}
h2 {
  font-weight: 600;
  color: #1c1d1d;
}
.youjiantou {
  color: #535455;
  font-size: 24px;
}

.wancheng {
  height: 5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  background-color: #fff;
}
.content {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  background-color: #f5f5f6;
  font-size: 1.2rem;
  /* background-color: #48aaff; */
}
.header {
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  justify-content: center;
}
.header-left {
  width: 14rem;
  display: flex;
  justify-content: space-between;
}
.header-left li {
  height: 4.5rem;
  box-sizing: border-box;
  line-height: 4.5rem;
  /* padding-top: .06rem; */
  width: 5rem;
  text-align: center;
  /* font-size: 14px; */
}
.active {
  border-bottom: 3px solid #48aaff;
  color: #48aaff;
}
.header-right {
  height: 2rem;
  width: 4rem;
  text-align: center;
  line-height: 2rem;
  border-left: 1px solid #ccc;
  position: absolute;
  right: 0;
}
.header-right >>> .block {
  /* width: 100%;
  height: 100%; */
  overflow: hidden;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.header-right >>> .el-picker-panel {
  color: red;
}
.header-right >>> .el-date-picker .el-picker-panel__content {
  width: 0;
}
</style>

