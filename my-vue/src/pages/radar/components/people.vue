<template>
  <div class="content">
    <div class="rile">
      <div class="tj">
        <span v-show="str!=='请选择时间'">{{str}}至{{str2}}</span>
        <span v-show="str=='请选择时间'">7天内查看的行为统计</span>
      </div>
      <div class="iconfont tianchongicon" @click="r=true">点击</div>
    </div>

    <div class="list">
      <ul class="items">
        <li @click="jump" v-for="(item,index) in ren" :key="index">
          <div class="left">
            <img :src="item.avaurl" alt />
            <div class="minde">
              <p>
                {{item.name}}&nbsp;跟你在名片上互动了
                <span class="num">{{item.total}}</span>次
              </p>
            </div>
          </div>
          <div class="iconfont icyoujiantou"></div>
        </li>
      </ul>
    </div>

    <div class="date" v-show="r">
      <div class="qujian">
        <div class="leftBtn" @click="num=1" :class="num==1?'active':''">{{str}}</div>
        <div class="zhi">至</div>
        <div class="rightBtn" @click="num=2" :class="num==2?'active':''">{{str2}}</div>
      </div>
      <van-datetime-picker type="date" @change="getDate" @confirm="queding" @cancel="quxiao" />
    </div>

    <div class="data">没有更多数据了</div>
    <div class="Nodata" v-show="ren.length==0">
      <img src="../../../assets/images/13.png" alt />
    </div>
  </div>
</template>
<script>
export default {
  props: ["ren"],
  data() {
    return {
      r: false,
      currentDate: new Date(),
      str: "请选择时间",
      str2: "请选择时间",
      beginTime: "",
      endTime: "",
      w: false,
      num: 1
    };
  },
  watch: {
    w() {

      this.people();
    }
  },
  methods: {
    queding() {
      this.r = false;
      this.beginTime = Math.round(new Date(this.str) / 1000);
      this.endTime = Math.round(new Date(this.str2) / 1000);

      if (this.beginTime && this.endTime) {
        console.log(123);

        this.w = !this.w;
      } else {
        console.log(123456);
      }
    },
    quxiao() {
      this.r = false;
    },

    getDate(e) {
      var date = e.getValues();
      var s = date.join("-");
      if (this.num == 1) {
        this.str = s;
        var date1 = new Date(this.str).getTime();
        var date2 = new Date(this.str2).getTime();

        if (date1 > date2) {
          alert("开始时间不能大于结束时间");
          this.str = "请选择时间";
        }
      } else {
        this.str2 = s;
        var date1 = new Date(this.str).getTime();
        var date2 = new Date(this.str2).getTime();
        if (date1 > date2) {
          alert("开始时间不能大于结束时间");
          this.str2 = "请选择时间";
        }
      }
    },
    jump() {
      this.$router.push("/chakan");
    },
    people() {
      var data = this.$qs.stringify({
        staffId: "c0ptQ0oxOTE4QWlvdFZZaXpE",
        beginTime: this.beginTime,
        endTime: this.endTime
      });
      this.$axios.post("/radar/Index/getCustomer", data).then(res => {
        this.ren = res.data;
      });
    }
  }
};
</script>

<style scoped>
.active {
  border: 1px solid #419dfb !important;
}
.leftBtn {
  flex: 1;
  height: 36px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 20px;
  line-height: 36px;
  color: #419dfb;
}
.zhi {
  text-align: center;
  flex: 1;
}
.rightBtn {
  flex: 1;
  height: 36px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 20px;
  line-height: 36px;
  color: #419dfb;
}
.date {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.qujian {
  position: absolute;
  top: 44px;
  height: 74px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 99;
  padding: 1rem;
  font-size: 1.4rem;
}

.date >>> .van-picker__columns {
  margin-top: 74px !important;
}
.data {
  text-align: center;
  color: #9d9d9d;
  font-size: 14px;
  padding-top: 0.3rem;
}
.items .num {
  color: #f90;
}
.items .left {
  display: flex;
  align-items: center;
  font-size: 1.4rem;
}
.items .left img {
  width: 3rem;
  height: 3rem;
  border-radius: 0.1rem;
  margin-right: 1rem;
}
.items li {
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.6rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 0 5px #ccc;
  padding: 0 0.8rem;
}

.content {
  padding: 0 1rem;
}

.top {
  padding: 0 0.2rem 0.1rem 0.2rem;
  margin-bottom: 0.2rem;
  background-color: #fff;
}
.rile {
  border-top: 1px solid #ccc;
  padding: 0.8rem 0 2rem 0;
  display: flex;
  justify-content: space-between;
}
.tj {
  color: #9d9d9d;
  font-size: 1.2rem;
}
.tianchongicon {
  font-size: 14px;
  color: #5bbae0;
}
.Nodata {
  margin: 0 auto;
  width: 15rem;
  height: 15rem;
  margin-top: 4rem;
}
.Nodata img {
  width: 100%;
  height: 100%;
}
</style>

