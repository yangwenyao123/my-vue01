<template>
  <div class="content">
    <div class="banner">
      <div class="name">
        <h2>{{touxName.name}}</h2>
        <img :src="touxName.avatar" alt class="touxiang" />
      </div>
    </div>

    <div class="neirong" v-for="(item,index) in  dongtai" :key="index">
      <div class="card_header">
        <img :src="item.avatar || item.companypic" alt class="xiaotoux" />
        <div class="xname">
          <h2>{{item.name || item.companyname}}</h2>
          <p>{{item.release_time}}</p>
        </div>
        <!-- <i class="iconfont iconhuizhangdengji"></i>
        <div class="gsi">公司</div>-->
      </div>
      <div class="wenzhang">
        <div class="baioti">{{item.friendscontent}}</div>
        <div class="lianjie">
          <div class="Imgbox" v-for="(img,i) in item.images" :key="i">
            <img :src="img" alt />
          </div>
        </div>

        <div class="dhicon">
          <div class="shanchu">删除</div>
          <div class="iconWrap">
            <i
              class="iconfont icondianzan"
              @click="dianZan(item.articleid,item.name,item.avatar)"
            >点赞&nbsp;{{item.like.length}}</i>
            <i class="iconfont iconxiaoxi2" @click="pingLun(item.articleid)">&nbsp;{{item.comment.length}}</i>
          </div>
        </div>
        <div class="dihui">
          <div class="dian">
            <i class="iconfont iconzan"></i>
            <div class="dianZan">
              <img v-for="(portrait,i) in item.like" :key="i" :src="portrait.avaurl" alt />
            </div>
          </div>
          <div class="hui" v-for="(pingLun,index) in item.comment" :key="index">
            <div class="left">
              <i class="iconfont iconxiaoxi1"></i>
              <img :src="pingLun.avaurl" alt />
              <div class="huiname">
                <h5>{{pingLun.name}}</h5>
                <p>{{pingLun.commentcontent}}</p>
              </div>
            </div>
            <p class="date">{{pingLun.comment_time}}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg" v-show="r">
      <div class="pinglun">
        <div class="top">
          <div class="title">评论</div>
          <input type="text" v-model="text" />
        </div>
        <div class="bottom">
          <div class="left" @click="quxiao">取消</div>
          <div class="right" @click="queding()">确定</div>
        </div>
      </div>
    </div>

    <div class="Nodata">没有更多数据</div>
    <router-link to="/fdongtai" tag="div" class="dongtai">
      发布
      <br />动态
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      touxName: {},
      dongtai: [],
      r: false,
      text: null,
      biao: true,
      staffId: null,
      type: null,
      articleid: null
    };
  },
  methods: {
    quxiao() {
      this.r = false;
    },
    dianZan(id) {
      console.log(id);

      var that = this;
      for (let i = 0; i < this.dongtai.length; i++) {

        if (this.dongtai[i].articleid == id) {
          var index = this.dongtai[i].like.findIndex((v, index) => {
               
            return  v.name == that.touxName.name
 
          });
           
             
        if (index !== -1 ) {
          console.log(index);

          var type = 2;
          this.dongtai[i].like.splice(index, 1);
          that.dianZanFn(id, type);
        } else {
          console.log(this.touxName.name);

          var obj = {
            avaurl: this.touxName.avatar,
            name: this.touxName.name
          };
          this.dongtai[i].like.push(obj);
          type = 1;
          that.dianZanFn(id, type);
        }


        }

      
      }
    },
    dianZanFn(id, type) {
      // 发送点赞到服务器

      var dianZan = this.$qs.stringify({
        staffId: this.staffId,
        id: id,
        type: type
      });
      this.$axios.post("/workbench/Index/like", dianZan).then(res => {});
    },
    // articleid (array) {  // 过滤id
    //     for (let i = 0; i < array.length; i++) {
    //         array[i].articleid

    //     }
    // },
    queding() {
      

      if (!this.text) {
        // 没有发送内容就跳出
        return;
      }
      // 评论点击确定按钮
      this.r = false;
      var obj = {
        avaurl: this.touxName.avatar,
        commentcontent: this.text,
        name: this.touxName.name
      };
      for (let i = 0; i < this.dongtai.length; i++) {
          if(this.dongtai[i].articleid ==this.articleid ) {
              this.dongtai[i].comment.push(obj);
          } 
        
      }
      console.log(this.articleid);
      

      var pinglun = this.$qs.stringify({
        staffId: this.staffId,
        id: this.articleid,
        content: this.text
      });

      this.$axios.post("/workbench/Index/comment", pinglun).then(res => {
        console.log(res);
      });
      this.text = "";
    },
    pingLun(articleid) {

      // 评论
      this.articleid = articleid

      this.r = true;
    }
  },
  mounted() {
    this.staffId = sessionStorage.getItem("staffId");
    this.$axios
      .get("/workbench/index/getarticle?staffId=" + this.staffId)
      .then(res => {
        this.touxName = res.data[0];
        this.dongtai = res.data[1];
      });
  }
};
</script>
<style scoped>
.bg input {
  height: 3.5rem;
  width: 100%;
  border: 1px solid #ccc;
  padding-left: 0.8rem;
}
.bg .bottom {
  height: 30%;
  display: flex;
  align-items: center;
  border-top: 1px solid #ccc;
}
.bg .bottom > * {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bg .right {
  border-left: 1px solid #ccc;
  color: #2cb4ed;
}
.bg .top {
  height: 70%;
  padding: 0 2rem;
}
.bg .title {
  height: 3.5rem;
  line-height: 3.5rem;
  font-size: 1.6rem;
  text-align: center;
}
.pinglun {
  width: 80%;
  height: 14rem;
  background-color: #fff;
  /* margin:0 auto;
    position: absolute;
    left: 50%;
    top:50%;
    margin-left:    */
}
.bg {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(208, 208, 209, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.baioti {
  margin: 2rem 0rem;
  line-height: 1.6rem;
  font-size: 1.4rem;
}
.iconhuizhangdengji {
  font-size: 12px;
  color: rgb(89, 164, 230);
}
.iconWrap {
  width: 7rem;
  display: flex;
  justify-content: space-between;
}

.content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  font-size: 1.4rem;
}
.dongtai {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #3aa8fc;
  position: fixed;
  bottom: 1rem;
  right: 0.2rem;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.Nodata {
  margin-top: 4rem;
  color: #b0b0b0;
  text-align: center;
  font-size: 1.6rem;
}
.neirong {
  padding: 1.2rem 1rem;

  border-bottom: 1px solid #cccc;
}
.hui .date {
  height: 100%;
  color: #858484;
  padding-top: 1.28rem;
}
.huiname p {
  color: #111413;
}
.huiname {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.huiname h5 {
  font-size: 1.2rem;
  color: #2cb4ed;
}
.hui img {
  width: 2.5rem;
  height: 100%;
  margin-right: 0.5rem;
  border-radius: 0.2rem;
}
.hui .left {
  display: flex;
  align-items: center;
  height: 3rem;
}
.hui {
  background-color: #f7f7f7;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1rem;
  margin: 1rem 0;
}
.dihui .iconfont {
  font-size: 14px;
  margin: 0 0.5rem;
}
.dihui:before {
  content: "";
  display: inline-block;
  border-color: #2cb4ed #fff #f7f7f7 #fff;
  border-style: solid;
  border-width: 0 8px 10px 8px;
  height: 0;
  width: 0;
  margin-left: 0.2rem;
  margin-bottom: -0.05rem;
}
.dian {
  height: 3.8rem;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e3e2e2;
}
.dian img {
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
}

.dhicon .iconfont {
  color: #b3b3b3;
  font-size: 1.2rem;
}

.iconxiaoxi {
  margin-right: 0.6rem;
}
.dhicon {
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #b3b3b3;
}
.lianjie {
  width: 100%;
  height: 16rem;
  background-color: #f7f7f7;
  display: flex;
  flex-flow: wrap;
}
.wenzhang {
  padding-left: 6rem;
}

.Imgbox {
  width: 50%;
}
.Imgbox img {
  width: 100%;
  height: 100%;
}
.gsi {
  border: 1px solid #b6b6b7;
  color: #b6b6b7;

  width: 3.5rem;
  height: 1.4rem;
  line-height: 1.4rem;
  text-align: center;
}
.xname p {
  margin-top: 1rem;

  color: #b6b6b7;
}
.xiaotoux {
  width: 3rem;
  height: 3rem;
  border-radius: 0.3rem;
}

.card_header {
  display: flex;
  width: 22rem;
  justify-content: space-around;
  height: 6rem;
}
h2 {
  font-weight: 600;
}
.name h2 {
  margin-top: 1rem;
  color: #fff;
}
.touxiang {
  width: 5.1rem;
  height: 5rem;
  border-radius: 0.5rem;
  margin-left: 1rem;
}
.name {
  display: flex;
  position: absolute;
  right: 2rem;
  bottom: -1.4rem;
}
.banner {
  position: relative;
  height: 12rem;
  margin-bottom: 4rem;
  background: url(../../../assets/images/card.png) no-repeat -0.1rem;
  background-size: 100% 100%;
}
p {
  font-size: 1.2rem;
}
</style>

