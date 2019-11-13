<template>
  <div class="content" style="font-size:1.4rem">
    <div class="boxxaaaa">{{this.$store.state.imgUrlx}}</div>
    <ul class="card_list">
      <li v-show="cur==0" class="card2">
        <img src="../../../assets/images/21.png" alt class="cardImg" />
        <div class="card_xi">
          <div class="left public">
            <div class="name">
              {{dataList.name}}&nbsp;&nbsp;
              <span>{{dataList.position}}</span>
            </div>
            <div class="phone">18665572292</div>
          </div>
          <img src="../../../assets/images/0.jpg" alt class="gosi" />
        </div>
      </li>
      <li v-show="cur==1" class="card3">
        <div class="card3_top">
          <div class="left public">
            <div class="name">
              {{dataList.name}}&nbsp;&nbsp;
              <span class="sheji">{{dataList.position}}</span>
            </div>
            <div class="phone">{{dataList.shownum}}</div>
          </div>
          <img :src="avatar" alt class="gosi" />
        </div>
        <div class="card3_bottom">
          <div class="left">克斯蔓生活馆</div>
          <div class="border"></div>
          <img :src="avatar" alt class="gosi" />
        </div>
      </li>
    </ul>

    <div class="style">
      <div class="title">
        名片样式
        <i class="iconfont iconyiwentubiaox" style="color:#e7ebf2"></i>
      </div>
      <div class="styleListWrap">
        <ul class="styleList">
          <li :class="{active:cur==0}" @click="cur=0"></li>
          <li :class="{active:cur==1}" @click="cur=1"></li>
          <li :class="{active:cur==2}" @click="cur=2"></li>
          <li :class="{active:cur==3}" @click="cur=3"></li>
          <li :class="{active:cur==4}" @click="cur=4"></li>
          <li :class="{active:cur==5}" @click="cur=5"></li>
        </ul>
      </div>
    </div>

    <form>
      <div class="xiList">
        <div class="genghuan">
          <div class="left">更换图像</div>
          <div class="right">
            <img alt :src="avatar" id="Imgurl" />
            <i class="iconfont iconyou"></i>
          </div>
          <!-- <input type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)" class="fileImg"/> -->
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            @change="change($event)"
            class="fileImg"
          />
          <!-- <input type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)" class="fileImg" id="inp"/> -->
        </div>

        <ul class="itemList">
          <li>
            <div class="key">姓名</div>
            <div class="value">
              <input type="text" dir="rtl" placeholder="请输入姓名" v-model="name" />
            </div>
          </li>
          <li>
            <div class="value">手机</div>
            <div class="value">
              <input type="text" dir="rtl" placeholder="请输入手机" v-model="shownum" />
            </div>
          </li>
          <li>
            <div class="value">职称</div>
            <div class="value">
              <input type="text" dir="rtl" placeholder="请输入职称" v-model="position" />
            </div>
          </li>
          <li>
            <div class="value">部门</div>
            <div class="value">{{dataList.depname}}</div>
          </li>
          <li>
            <div class="value">邮箱</div>
            <div class="value">
              <input type="text" dir="rtl" placeholder="请输入邮箱" v-model="email" />
            </div>
          </li>
        </ul>

        <ul class="itemList">
          <li>
            <div class="key">微信</div>
            <input type="text" dir="rtl" placeholder="请输入微信号" v-model="wechat" />
          </li>
          <li>
            <div class="value">座机</div>
            <input type="text" dir="rtl" placeholder="请输入座机号" v-model="fixedphone" />
          </li>
          <li>
            <div class="value">公司</div>
            <div class="value">{{dataList.companyname}}</div>
          </li>
        </ul>

        <div class="baocun" @click="submitForm($event)">保存</div>
      </div>
    </form>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      cur: 0,
      dataList: "",
      email: "",
      fixedphone: "",
      avatar: "",
      wechat: "",
      name: "",
      shownum: "",
      position: "",
      
    };
  },
    computed:mapState({
        // addHome:'addHome' // 第一种写法
        
        // sex: (state) => state.sex, // 第二种写法
        imgUrl: function (state) { // 用普通函数this指向vue实例,要注意
            console.log(state.imgUrlx);
        
          return state.imgUrlx
        },

    }),
 
 
  methods: {
    change(event) {
  
      var image = document.getElementById("Imgurl");

      this.clip(event, {
        resultObj: image,
        aspectRatio: 1
      })
      
      

    },

    submitForm(event) {
      event.preventDefault();

      let formData = new FormData();
      var id = sessionStorage.getItem("id");
      //下面是表单绑定的data 数据
      formData.append("id", id);
      formData.append("name", this.name);
      formData.append("position", this.position);
      formData.append("shownum", this.shownum);
      formData.append("wechat", this.wechat);
      formData.append("email", this.email);
      formData.append("fixedphone", this.fixedphone);
      formData.append('avatar', this.$store.state.imgUrlx || this.avatar);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      this.$axios
        .post("/user/Index/perfectInfo", formData, config)
        .then(res => {
          console.log(res);

          // success callback
        })
        .catch(err => {
          // error callback
        });
    },
    editor() {
      var that = this;
      var id = sessionStorage.getItem("id");

      this.$axios
        .get("/user/Index/getUserItem", {
          params: {
            id: id
          }
        })
        .then(res => {
          console.log(res);

          that.dataList = res.data;
          that.email = res.data.email;
          that.fixedphone = res.data.fixedphone;
          that.name = res.data.name;
          that.shownum = res.data.shownum;
          that.position = res.data.position;

          that.avatar = res.data.avatar;
          console.log(that.avatar);
          var img = document.querySelector("#img");
          // img.src = res.data.avatar
          that.wechat = res.data.wechat;
        });
    }
  },
  mounted() {
    this.editor();
  }
};
</script>
<style scoped>
.boxxaaaa {
  position: absolute;
  left: 0;
  top:0;
  z-index: 9999
}
.fileImg {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
}
.baocun {
  width: 26rem;
  height: 4.5rem;
  border-radius: 3rem;
  text-align: center;
  line-height: 4.5rem;
  color: #fff;
  font-size: 1.6rem;

  margin: 4rem auto;
  background: linear-gradient(to right, #64a7f8, #2f8bfe);
}
.itemList li:last-child {
  border: none;
}
.itemList {
  margin-top: 2rem;
  box-shadow: 0 0 5px #ccc;
  border-radius: 1rem;
}
.itemList li {
  display: flex;
  height: 4.5rem;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
  border-bottom: 1px solid rgb(226, 226, 226);
}
.xiList {
  padding: 1.2rem 1rem;
}
.genghuan img {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 1rem;
}
.genghuan .right {
  display: flex;
  align-items: center;
}
.genghuan {
  height: 4.5rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 5px #ccc;
  padding: 0 1rem;
  position: relative;
}
.border {
  position: absolute;
  bottom: -0.2rem;
  left: 0;
  width: 1rem;
  border: 1px dashed #000;
}
.card3_bottom {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.card3_bottom .gosi {
  width: 2.5rem;
  height: 2.5rem;
}
.card3_top .sheji {
  border-top-right-radius: 0.8rem;
  border-bottom-left-radius: 0.8rem;
  background-color: #0d8dd8;
  display: inline-block;
  height: 1.8rem;
  color: #fff;
  font-size: 1rem;
  width: 4rem;
  line-height: 1.8rem;
  text-align: center;
}
.card3_top .gosi {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.public {
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card3_top {
  display: flex;
  justify-content: space-between;
}
.card3 {
  height: 15.8rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 5px #ccc;
  box-sizing: border-box;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.styleListWrap {
  overflow-x: auto;
}
.styleList {
  width: 800%;
}
.styleList li {
  float: left;
}

.styleList .active {
  border: 2px solid #39c0f0;
}
.styleList li:nth-child(3) {
  width: 4.2rem;
  background: url(../../../assets/images/06.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li:nth-child(2) {
  width: 4.2rem;
  background: url(../../../assets/images/42.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li:nth-child(1) {
  width: 6rem;
  background: url(../../../assets/images/14.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li:nth-child(4) {
  width: 6rem;
  background: url(../../../assets/images/14.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li:nth-child(5) {
  width: 4.2rem;
  background: url(../../../assets/images/14.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li:nth-child(6) {
  width: 6rem;
  background: url(../../../assets/images/14.png) no-repeat;
  background-size: 100% 100%;
}
.styleList li {
  margin-right: 1rem;
  width: 1rem;
  height: 4rem;
  border-radius: 0.5rem;
  background-size: 100% 100%;
  box-shadow: 0 5px 5px #ccc;
}

.style {
  padding: 0 1rem;
}
.style .title {
  height: 4rem;
  line-height: 4rem;
}
.public .name {
  font-weight: 600;
  font-size: 1.6rem;
}
.public .name span {
  font-weight: 400;
  font-size: 1.2rem;
}
.public .phone {
  font-weight: 600;
  font-size: 1.2rem;
}
.card_xi .left {
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card_xi .gosi {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.8rem;
}
.card_xi {
  height: 7.8rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  justify-content: space-between;
}

.card2 .cardImg {
  width: 100%;
  height: 25.5rem;
}
.card2 {
  border-radius: 0.8rem;
  overflow: hidden;
  box-shadow: 0 0 5px #ccc;
}
.card_list {
  padding: 1rem;
}
</style>


