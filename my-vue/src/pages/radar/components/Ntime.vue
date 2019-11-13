<template>
  <div class="content">
    <div class="wrap-box">
      <scroller
        class="scroller"
        :on-refresh="refresh"
        :on-infinite="infinite"
        refresh-text="刷新"
        infinite-text="加载更多"
      >
        <!-- 任务小助手 -->
        <div class="task">
          <div class="title">任务小助手</div>
          <div class="task_table">
            <div class="title2">
              <h2>今日暂无任务</h2>
              <div class="right" @click="task">查看全部任务</div>
            </div>
            <div class="task_table_te" v-show="!obj.任务">
              <span>创建任务</span> 有助于管理自己的销售计划
            </div>
            <ul class="taskList">
              <li v-for="(item,index) in obj.任务" :key="index">
                {{item.taskName}}
                <i class="iconfont iconyou fr"></i>
              </li>
            </ul>
          </div>
        </div>

        <div class="newBox"></div>

        <!-- 没数据时显示的图片 -->
        <div class="content2" v-show="img==0">
          <img src="@/assets/images/13.png" alt />
        </div>
      </scroller>
    </div>

    <!-- 弹出框 -->
    <ul class="honeTab" ref="honeTab">
      <li @click="hujiao">
        <a href="tel:400-0000-688">普通电话呼叫</a>
      </li>
      <li @click="copyCode">
        复制
        <textarea id="copycode" v-show="false" class="main-code" readonly="readonly"> 18665572292</textarea>
      </li>
      <li @click="tongxu">
        <a href="tel:18665572292">添加到手机通讯录</a>
      </li>
    </ul>
    <!-- 背景 -->
    <div class="bg" ref="bg" @click="onBg"></div>
    <!-- 复制成功 -->
    <div class="copy">号码已复制到剪贴板</div>
  </div>
</template>

<script>
export default {
  props: ["obj"],
  data() {
    return {
      img: 1,
      date: 2,
      ribao: 2,
      chakan: 2,
      switchx: true,
      li: "",
      bg: "",
      honeTab: "",
      lianxi: "",
      content: ""
    };
  },

  methods: {
    Ntime(objx) {
      console.log(objx);
      var array = objx.互动;
      var that = this
      var newBox = document.querySelector(".newBox");
      for (let index = 0; index < array.length; index++) {
        // const element =;
        if (array[index].type) {
          var ribao = `<div class="ribao">
            <div class="shijian">${array[index].opTime}</div>
            <div class="ribaobiao">
              <div class="top">
                <div class="icBg">
                  <span class="iconfont iconel-icon-fuzhi"></span>
                </div>
                <h3>${array[index].type}</h3>
              </div>
              <div class="bottom">${array[index].content}</div>
            </div>
          </div>
     `;

          newBox.innerHTML += ribao;
        } else {
          // var obj = {}
          var msg = array[index].msg;
          console.log(msg);

          var item = `
          <div class="newBoxTOP show" @click="zedie($event)" ref="newBoxTOP">
            <div class="newcartop">
              <img src="${array[index].avaurl}" alt />
              <div class="name">
                <h3>${array[index].name}</h3>
                <span class="date">${array[index].opTime}&nbsp;&nbsp;${array[index].source}</span>
              </div>
            </div>
            <div class="newcardbottom">
              ${array[index].text}
            </div>
             <ul class="fotTab" v-show="switchx">
            <li>
              <i class="iconfont iconpingbi"></i>屏蔽
            </li>
            <li to="/session" tag="li">
              <i class="iconfont iconxiaoxi"></i>发消息
            </li>
            <li  @click="boda">
              <i class="iconfont icondadianhua"></i>打电话
            </li>
            <li class="fr">
              共
              <span>13</span>条消息
            </li>
          </ul>
          </div>
        `;
          newBox.innerHTML += item;

          var res = "";
          for (let j = 0; j < msg.length; j++) {
            res += `<div class="newBoxTOP " @click="zedie($event)" ref="newBoxTOP">
            <div class="newcartop">
              <img src="${array[index].avaurl}" alt />
              <div class="name">
                <h3>${array[index].name}</h3>
                <span class="date">${msg[j].opTime}</span>
              </div>
            </div>
            <div class="newcardbottom">
              ${msg[j].text}
            </div>
          </div>`;
          }

          var title = `<div class="itemList">
                          <div class="title" v-show="!switchx">
                            <div class="left">
                              <h3>${array[index].name}</h3>
                            </div>
                            <div class="right up" @click="shouqi">全部收起<i class="iconfont iconyou"></i></div>
                          </div>
                          ${res}
                    </div>`;
          newBox.innerHTML += title;
        }

        var up = document.querySelectorAll(".up"); // 收起
        var item = document.querySelectorAll(".show");
        var chakan = document.querySelectorAll(".itemList .newBoxTOP");
        for (let k = 0; k < chakan.length; k++) {
          chakan[k].onclick = function () {
              that.$router.push("/chakan");
          }
          
        }

        for (let i = 0; i < up.length; i++) {
          up[i].onclick = function() {
            this.parentNode.parentNode.style.display = "none";
            this.parentNode.parentNode.previousElementSibling.style.display =
              "block";
          };
        }

        for (let j = 0; j < item.length; j++) {
          item[j].onclick = function() {
            this.nextElementSibling.style.display = "block";
            this.style.display = "none";
          };
        }
      }
    },
    tongxu() {
      this.lianxi = document.querySelector(".lianxi");
      this.lianxi.style.display = "block";
      this.honeTab.style.display = "none";
    },
    onBg() {
      // this.content.classList.remove("contentx")

      this.honeTab.style.display = "none";
      this.bg.style.display = "none";
      if (this.lianxi) {
        this.lianxi.style.display = "none";
      }
    },
    hujiao() {
      this.honeTab.style.display = "none";
      this.bg.style.display = "none";
    },
    copyCode() {
      var that = this;
      var copycode = document.getElementById("copycode");
      var copy = document.querySelector(".copy");
      copycode.select(); // 选择对象
      console.log(this.honeTab);
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.honeTab.style.display = "none";
      this.bg.style.display = "none";
      copy.style.display = "block";

      setTimeout(function() {
        copy.style.display = "none";
      }, 1000);
    },
    boda() {
      // this.content = document.querySelector('.wrap-box')
      // this.content.classList.add("contentx")
      this.honeTab = this.$refs.honeTab;
      this.bg = this.$refs.bg;
      this.honeTab.style.display = "block";
      this.bg.style.display = "block";
      console.log(this.honeTab);
    },
    shouqi() {
      this.li.classList.remove("margin");
      this.$refs.newBoxwrap.classList.add("newBoxwrap");
      this.switchx = true;
    },
    zedie(e) {
      if (this.switchx) {
        this.switchx = false;
        this.li = e.currentTarget;
        this.$refs.newBoxwrap.classList.remove("newBoxwrap");

        var sa = document.querySelectorAll(".newBoxTOP");

        for (let i = 0; i < sa.length; i++) {
          sa[i].classList.add("margin");
        }
      } else {
        this.$router.push("/chakan");
      }
    },
    refresh() {
      console.log(123);
    },
    infinite() {
      console.log(1456);
    },
    task() {
      this.$router.push("/task");
    }
  },
  mounted() {},
  watch: {
    obj() {
      this.Ntime(this.obj);
    }
  }
};
</script>
<style scoped>
.fr {
  float: right;
}
.taskList li {
  height: 3rem;
  line-height: 3rem;
  padding: 0 1rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: initial;
  color: rgb(52, 196, 255);
}
.newBox >>> .itemList {
  display: none;
}
.newBox >>> .newcardbottom {
  font-size: 1.2rem;
  height: 4rem;
  line-height: 4rem;
}
.list {
  margin-top: 5.5rem;
}
.contentx {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
.lianxi {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  z-index: 9999;
  margin-left: -2.5rem;
  margin-top: -1.6rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 0.1rem;
  display: none;
  color: #070707;
  font-weight: 400;
}
.lianxi li {
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #f2f1f1;
  padding-left: 0.25rem;
}
.lianxi li:last-child {
  border: none;
}

.copy {
  width: 14rem;
  height: 2.5rem;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  text-align: center;
  line-height: 2.5rem;
  position: absolute;
  bottom: 6rem;
  left: 50%;
  margin-left: -7rem;
  z-index: 99999;
  font-size: 1.2rem;
  display: none;
}
.main-code {
  width: 0.1rem;
  height: 0.1rem;
  overflow: hidden;
}
.honeTab {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28rem;
  z-index: 9999;
  margin-left: -14rem;
  margin-top: -1.6rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 0.1rem;
  display: none;
  color: #070707;
  margin-top: -10rem;
  font-size: 1.6rem;
  border-radius: 0.5rem;
}
.honeTab li {
  height: 4.5rem;
  line-height: 4.5rem;
  border-bottom: 1px solid #d0cece;
  padding-left: 1rem;
}

.honeTab li:last-child {
  border: none;
}
.honeTab a {
  color: #000;
}
.honeTab span {
  color: #939393;
  font-size: 12px;
}
.bg {
  background-color: RGBA(111, 111, 112, 0.3);

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;
  display: none;
}

.margin {
  margin-bottom: 1.5rem !important;
  border-radius: 0.8rem;
  box-shadow: 0 0 5px #ccc;
}
.newBox >>> .fotTab .iconfont {
  margin-right: 0.05rem;
}
.newBox >>> .fotTab {
  border-top: 1px solid #f2f5f4;
  padding: 0 1rem;
  height: 3.5rem;
  border-bottom-right-radius: 0.8rem !important;
  border-bottom-left-radius: 0.8rem !important;
  line-height: 3.5rem;
  overflow: hidden;
  font-size: 1rem;
  /* box-shadow: 0 0 5px #ccc; */
}
.newBox >>> .fotTab li {
  width: 22%;
  float: left;
  text-align: center;
  display: flex;
  align-items: center;
}
.newBox >>> .fotTab .fr {
  float: right;
}
.zhedie {
  width: 100%;
  height: 2rem;
  position: absolute;
  bottom: -2rem;
  left: 0;
}
.zhedie1 {
  width: 95%;
  /* height: 50%; */
}
.zhedie2 {
  width: 90%;
  /* height: 0.1rem !important; */
}
.zhe {
  height: 0.8rem;
  margin: 0 auto;
  background: #fff;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  box-shadow: 0 0 5px #ccc;
}
.newBox >>> .newcartop img {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.newBox {
  margin: 3rem 0;
  /* overflow: hidden; */

  position: relative;
}
.newBoxwrap {
  border-radius: 0.8rem;
  box-shadow: 0 0 5px #ccc;
}
.newBox >>> .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
}
.newBox >>> .title h3 {
  font-weight: 600;
  font-size: 16px;
}
.newBox >>> .right {
  float: right;
  display: flex;
  justify-content: center;
  width: 8rem;
  border: 1px solid #ededed;
  height: 2.5rem;
  border-radius: 2rem;
  align-items: center;
  color: #6d6d6d;
}
.newBox >>> .newBoxTOP {
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.8rem;
  margin-bottom: 3rem;
  padding-bottom: 0;
  /* background-color: pink; */
  box-shadow: 0 0 5px #ccc;
}
.newBox >>> .newcartop .name {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  margin-left: 1rem;
}
.newBox >>> .newcartop .name h3 {
  font-size: 1.6rem;
  font-weight: 600;
}
.newBox >>> span {
  color: #ed742e;
}
.newBox >>> .date {
  color: #a3a3a3;
}
.newBox >>> .iconel-icon-fuzhi {
  font-size: 14px;
  color: #44a6ec;
}

.newBox >>> .newcartop {
  display: flex;
  align-items: center;
  height: 3rem;
}
h2 {
  font-weight: 600;
  color: #4d4d4d;
  font-size: 14px;
}

.jilu .icyoujiantou {
  font-size: 23px;
  color: #000;
}
.jilu-left {
  display: flex;
}
.jilu {
  height: 1rem;
  display: flex;
  align-items: center;
  padding: 0.1rem 0.2rem;
  border-radius: 0.1rem;
  justify-content: space-between;
  box-shadow: 0 0 8px #ccc;
}
.jilu .midde {
  display: flex;
  height: 0.6rem;
  justify-content: space-between;
  flex-direction: column;
}
.jilu span {
  color: #dd8244;
}
.chakan .left img {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.1rem;
  margin-right: 0.1rem;
}

.newBox >>> .icBg {
  width: 2rem;
  height: 2rem;
  background-color: #fff;
  text-align: center;
  line-height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.newBox >>> .shijian {
  height: 3.5rem;
  line-height: 3.5rem;
  color: #b9b9b9;
}

.newBox >>> .ribaobiao {
  height: 6rem;
  background: #48aaff;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  box-shadow: 0 0 5px #48aaff;
  color: #fff;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  padding: 0.2rem 1.2rem;
  margin-bottom: 3rem;
}
.newBox >>> .ribaobiao h3 {
  font-weight: 600;
}

.newBox >>> .ribaobiao .top {
  display: flex;
  align-items: center;
}

.task_table_te span {
  color: #8f8f8f;
}

.task_table_te {
  text-align: center;
  margin-top: 3rem;
  height: 5.5rem;
}

.task_table .title2 {
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  border-bottom: 1px solid #f2f5f4;
}

.task_table .left {
  font-weight: 600;
}

.task_table .right {
  width: 9rem;
  height: 2.2rem;
  border-radius: 1.2rem;
  border: 1px solid rgb(233, 85, 17);
  color: rgb(233, 85, 17);
  line-height: 2.2rem;
  text-align: center;
  font-size: 1.2rem;
}
.task_table {
  margin-top: 2rem;
  box-shadow: 0 0 4px #999;
  border-radius: 0.8rem;
}
.task .title {
  height: 1rem;
  line-height: 1rem;
  border-left: 0.2rem solid rgb(83, 204, 254);
  padding-left: 0.8rem;
  font-size: 1.4rem;
}
.task {
  color: #b9b9b9;
  margin-top: 0.2rem;
}
.scroller {
  padding: 1rem;
  box-sizing: border-box;
}
.wrap-box {
  position: absolute;
  left: 0;
  top: 63px;
  right: 0;
  bottom: 0;
  /* padding: 0.8rem; */
  font-size: 1.2rem;
  padding-bottom: 2rem;
  /* font-family:"Arkhip" !important */
}

/* .content {
  position: absolute;
  left: 50%;
  top: 20%;
  margin-left: -2rem;
  width: 4rem;
  height: 4rem;
} */
/* .content img {
  width: 100%;
  height: 100%;
} */
</style>


