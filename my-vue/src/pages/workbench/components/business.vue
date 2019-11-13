<template>
  <div class="content">
    <div class="header" @click="r2=true">
      <div class="left">
        {{title}}&nbsp; &nbsp;&nbsp;
        <i class="iconfont icyoujiantou"></i>
      </div>
      <div class="right">共{{num || 0}}位</div>
    </div>

    <!-- 列表 -->
    <ul class="list">
      <li v-for="(item,index) in  array" :key="index" @click="shangxiang(item.id)">
        <div class="left">
          <img :src="item.avaurl" alt />
          <h3 class="name">{{item.name}}</h3>
        </div>
        <div class="right">{{item.title}}</div>
      </li>
    </ul>

    <!-- 背景 -->
    <div class="bg" v-show="r2">
      <ul class="tankuan">
        <li>阶段选择</li>
        <li @click="quanbu">全部</li>
        <li v-for="(item,key) in shanji[0]" :key="key" @click="xuanze(item.title)">{{item.title}}</li>
      </ul>
    </div>

    <div class="Nodata" v-show="r">
      <img src="../../../assets/images/17.png" alt />
    </div>
    <router-link class="create" tag="div" to="/cjsj">新建商机</router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      r: false,
      shanji: [],
      r2: false,
      array:[],
      title:'全部',
        num:null
    };
  },
  methods: {
    quanbu () {
        this.title = '全部'
        this.array = []
        this.array =this.shanji[1]
        this.num = this.shanji[1].length
        this.r2 = false
    },
    shangxiang(id) {   // 商机详情页
      for (let i = 0; i < this.shanji[1].length; i++) {
        if (this.shanji[1][i].id == id) {
          var shanji =this.shanji[1][i]
        }
      }
      this.$router.push({
        name: "edairShan",
        params: {
          navData: this.shanji,
          shanji:shanji
        }
      });
    },
    xuanze(title) {  // 列表项选择
        this.title = title
        this.array = []
        this.r2 = false
         for (let i = 0; i < this.shanji[1].length; i++) {
            if (this.shanji[1][i].title == title) {

              this.array.push(this.shanji[1][i]);
            this.num =  this.array.length
            }
        }
    }
  },
  mounted() {
    var data = this.$qs.stringify({
      staffId: "c0ptQ0oxOTE4QWlvdFZZaXpE",
      stageId: 0
    });
    this.$axios.post("/customer/index/getBusinesOpp", data).then(res => {
      console.log(res.data);
      this.shanji = res.data;
      this.quanbu ()
    });
  }
};
</script>
<style scoped>
.list .right {
  width: 6rem;
  height: 2.2rem;
  background-color: rgb(51, 158, 254);
  text-align: center;
  color: #fff;
  line-height: 2.2rem;
}
.list li {
  height: 5.5rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2rem;
}
.list .left {
  display: flex;
}
.list img {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  margin-right: 1.5rem;
}
.name {
  font-size: 1.4rem;
  font-weight: 600;
}
.tankuan li {
  padding: 0 1rem;
  height: 4rem;
  line-height: 4rem;
  border-bottom: 1px solid #ccc;
}
.tankuan {
  width: 100%;
  height: 20rem;
  background: #fff;
  border-radius: 0.8rem;
}
.bg {
  background: rgba(123, 123, 123, 0.3);
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 1rem;
}
.create {
  position: absolute;
  width: 25rem;
  height: 3.6rem;
  border-radius: 4rem;
  background-color: #2e85fe;
  color: #fff;
  text-align: center;
  line-height: 3.6rem;
  bottom: 2rem;
  left: 50%;
  margin-left: -12.5rem;
  font-size: 1.4rem;
  font-weight: 600;
  -webkit-box-shadow: inset 108px 0 52px #3bc1ff;
  box-shadow: inset 108px 0 52px #3bc1ff;
}
.Nodata {
  width: 70%;
  height: 15rem;
  margin: 10rem auto;
}
.Nodata img {
  width: 100%;
  height: 100%;
}
.icyoujiantou {
  transform: rotate(90deg);
  display: inline-block;
  font-size: 20px;
}
.header .left {
  display: flex;
  align-items: center;
}
.header {
  height: 4rem;
  line-height: 4rem;
  border-radius: 1rem;
  padding: 0 1rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  background-color: #fff;
  font-size: 1.4rem;
  margin: 1rem;
  margin-bottom: 4rem;
}
.content {
  background-color: rgb(245, 245, 246);
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
}
</style>

