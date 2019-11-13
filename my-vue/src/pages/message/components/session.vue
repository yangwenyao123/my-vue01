<template>
  <div class="content" ref="content">
    <div class="title" ref="title">客户在线中</div>
    <div class="xiaoxiList">
    <ul class="xiList" @click="xiList" ref="xiList"></ul>
    <div class="Session" ref="session">
      <div class="top">
        <div class="left" @click="huashu">话术库</div>
        <textarea name="" cols="30" rows="4"  class="huise bImg"  v-model="dec"  id="charInput"  
        ></textarea>
     
        <div class="send huise" @click="btn" id="btn">发送</div>
      </div>
      <div class="bottom" ref="bottom">
            <!-- 表情选择器 -->
        <div class="chatframe-icon">
          <el-popover class="a" placement="bottom-start" width="400" trigger="click">
            <el-tabs tab-position="bottom" value="Emotions" class="emoji_tabs_box">
              <el-tab-pane
                v-for="(emojiCon, emojiKey, eInd) in emojiIcon"
                :key="emojiKey"
                :label="emojiKey"
                :name="emojiKey"
              >
                <!-- 这里的label icon不能放到json配置文件中，因为icon放到配置文件中后

                无法渲染出来-->
                <!-- 如果想优化这里，可以根据自己的需求，试用图片来替换，使用同样的图

                片加载方法保存在json中-->
                <span v-if="eInd == 0" slot="label" class="iconfont emoji_pane_tab">&#xe612;</span>
                <span v-if="eInd == 1" slot="label" class="iconfont emoji_pane_tab">&#xe609;</span>
                <span v-if="eInd == 2" slot="label" class="iconfont emoji_pane_tab">&#xe62d;</span>
                <span v-if="eInd == 3" slot="label" class="iconfont emoji_pane_tab">&#xe63c;</span>
                <img
                  v-for="(emoItem, emoInd) in emojiCon"
                  :key="emoInd"
                  :src="getIconPic(emoItem.unicode)"
                  alt="X"
                  @click="sendEmojiIcon(emoItem.emoji)"
                  class="chat_emoji_item"
                />
              </el-tab-pane>
            </el-tabs>
            <el-button
              class="iconfont open_emoji_icon"
              type="text"
              slot="reference"
              @click="biaoqing"
            >
              <i class="iconfont iconbiaoqing1"></i>
            </el-button>
          </el-popover>
        </div>


        <div style="margin-right:2rem"></div>
        <div class="btn huise">
          选择照片
          <input id="fileBtn" type="file" @change="upload();" accept="image/*" />
        </div>
        <div class="btn huise">优惠券</div>
        <div class="btn huise">商品</div>
      </div>
    </div>
  </div>
    <!-- 话术框 -->
    <div class="bg" ref="bg" @click="bg"></div>
    <div class="huaList" ref="huasu">
      <ul class="left">
        <li
          v-for="(item,index) in list"
          :key="index"
          @click="caidan(index)"
          :class="{active:index==cur}"
        >{{item.speechidname}}</li>
        <li @click="caidan('undefined')" :class="{active:cur=='undefined'}">
          自定
          义
        </li>
      </ul>
      <ul class="right">
        <li v-show="cur==0">
          <ul>
            <li @click="onText">522325</li>
            <li @click="onText">2225555</li>
          </ul>
        </li>
        <li v-show="cur==1">
          <ul>
            <li @click="onText">22222</li>
            <li @click="onText">hahahhah</li>
          </ul>
        </li>
        <li v-show="cur=='undefined'">
          <ul>
            <li>hello,wrod!</li>
            <li v-for="(item,index) in textList" :key="index" @click="onText">
              {{item}}
              <i class="iconfont iconTo_close" @click="remo(index)"></i>
            </li>
            <li id="ziyh" @click="zdy">
              <i class="iconfont iconhao"></i>&nbsp;自定义话术
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- 预览 -->
    <div class="preview" v-show="preview" @click="previewx">
      <img :src="preview" alt />
    </div>

    <!-- 对话框 -->
    <div class="dialog">
      <textarea v-model="text"></textarea>

      <div class="dialog-btn">
        <div class="qx" @click="qx">取消</div>
        <div class="mide-border"></div>
        <div class="qd" @click="qd">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
let emojiData = require("@/assets/emoji/emoji.json");
export default {
  data() {
    return {
      fa: true,
      huashux: "",
      bgx: "",
      dec: "",
      dialog: "",
      list: [],
      cur: 0,
      text: "",
      textList: [],
      img: "",
      span: "",
      decList: [],
      imgList: [],
      src: "../../../static/img/0.jpg",
      preview: "",
      preview2: "",
      emojiIcon: emojiData.icon, // 导入的emoji表情配置文件内容
      emojiPath: new Map(), // emoji表情地址map对象,
      inputRange: "", // 光标
      sendValue: "", // 发出的内容
      session: "",
      flag: false
    };
  },
  methods: {
    
       textar(elem, extra, maxHeight) {
        console.log(elem, extra, maxHeight);
        
        extra = extra || 0;
        var isFirefox = !!document.getBoxObjectFor || 'mozInnerScreenX' in window,
       
        
                isOpera = !!window.opera && !!window.opera.toString().indexOf('Opera'),
                addEvent = function(type, callback) {
                    elem.addEventListener ?
                            elem.addEventListener(type, callback, false) :
                            elem.attachEvent('on' + type, callback);
                },
                getStyle = elem.currentStyle ? function(name) {
                    var val = elem.currentStyle[name];
                    if (name === 'height' && val.search(/px/i) !== 1) {
                        var rect = elem.getBoundingClientRect();
                        return rect.bottom - rect.top -
                                parseFloat(getStyle('paddingTop')) -
                                parseFloat(getStyle('paddingBottom')) + 'px';
                    };
                    return val;
                } : function(name) {
                    return getComputedStyle(elem, null)[name];
                },
                minHeight = parseFloat(getStyle('height'));
        elem.style.resize = 'none';
        var change = function() {
            var scrollTop, height,
                    padding = 0,
                    style = elem.style;
            if (elem._length === elem.value.length) return;
            elem._length = elem.value.length;
            if (!isFirefox && !isOpera) {
                padding = parseInt(getStyle('paddingTop')) + parseInt(getStyle('paddingBottom'));
            };
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            elem.style.height = minHeight + 'px';
            if (elem.scrollHeight > minHeight) {
                if (maxHeight && elem.scrollHeight > maxHeight) {
                    height = maxHeight - padding;
                    style.overflowY = 'auto';
                } else {
                    height = elem.scrollHeight - padding;
                    style.overflowY = 'hidden';
                };
                style.height = height + extra + 'px';
                scrollTop += parseInt(style.height) - elem.currHeight;
                document.body.scrollTop = scrollTop;
                document.documentElement.scrollTop = scrollTop;
                elem.currHeight = parseInt(style.height);
            };
        };
        addEvent('propertychange', change);
        addEvent('input', change);
        addEvent('focus', change);
        change();
 
    },
    shiqu () {
      console.log(1598);
      
    },
    // foc() {
    //   var charInput = document.getElementById("charInput");
    //    var title = this.$refs.title
    //   if (charInput == document.activeElement) {
    //     var session = this.$refs.session;
    //     session.style.bottom = "0";
   
    //     return
    //   }
      
    //   //  title.style.height = "6%"
    // },
    // 点击表情，将表情添加到输入框
    sendEmojiIcon(code) {
      this.dec = this.dec + code;
    },
    xiList() {
      if (this.flag) {
        this.session.style.bottom = "0";
      }
    },
    biaoqing() {
      this.flag = true;
      this.session = this.$refs.session;
      this.session.style.bottom = "190px";
    },
    // 初始化emoji的map对象
    initEmojiPic() {
      let map = new Map();

      for (const key in emojiData.icon) {
        emojiData.icon[key].forEach(item => {
          map.set(
            item.unicode,
            require("../../../assets/emoji/icon/" + item.unicode + ".png")
          );
        });
      }
      console.log(map);

      this.emojiPath = map;
    },

    // 通过Unicode码从map中获取emoji
    getIconPic(unicode) {
      return this.emojiPath.get(unicode);
    },

    upload() {
      var xiList = document.querySelector(".xiList");
      var that = this;
      // 　var img = document.createElement("img");
      var $c = document.querySelector("#fileBtn"); //上传出发按钮
      var $d = document.querySelector("#img"); //图片容器
      var file = $c.files[0]; //获取file对象单张
      var reader = new FileReader(); //创建filereader对象
      reader.readAsDataURL(file); //转换数据
      reader.onload = function(e) {
        //加载ok时触发的事件
        var str = "";
        str = `<li><div class="duiImg"><img src="${e.target.result}" 

class="tupian" id="a"/></div><img src="../../../static/img/0.jpg" alt="yonghu" 

class="userImg"/></li>`;
        xiList.innerHTML = xiList.innerHTML + str;

        that.preview2 = e.target.result;

        var a = document.getElementsByClassName("tupian");
        console.log(a);

        for (var i = 0; i < a.length; i++) {
          a[i].onclick = function() {
            var src = this.getAttribute("src");
            that.preview = src;
          };
        }

        $c.value = "";
        xiList.scrollTop = xiList.scrollHeight;
      };
    },
    previewx() {
      this.preview = "";
    },

    btn () {

      var that = this;

      if (this.dec.trim()) {
        var session = this.$refs.session;
        session.style.bottom = "0";
        var xiList = document.querySelector(".xiList");
        var text = "";
        text = `<li class="li"><div class="duihuakuang">${this.dec}</div><img 

src="../../../static/img/0.jpg"  class="userImg"/></li>`;

        xiList.innerHTML = xiList.innerHTML + text;

        xiList.scrollTop = xiList.scrollHeight;
        this.dec = "";

        var a = document.querySelectorAll(".tupian"); // 获取对话框中所有的图片
        for (var i = 0; i < a.length; i++) {
          // 添加点击事件
          a[i].onclick = function() {
            var src = this.getAttribute("src");
            that.preview = src;
          };
        }
      }
    },

    remo(index) {
      this.textList.splice(index, 1);
    },

    qd() {
      if (this.text.length > 0) {
        this.dialog.style.display = "none";
        this.bgx.style.display = "none";
        for (var i = 0; i < this.textList.length; i++) {
          localStorage.setItem(i, this.text);
        }
        this.textList.push(this.text);
        this.text = "";
        return;
      }
    },
    qx() {
      this.dialog.style.display = "none";
      this.bgx.style.display = "none";
    },
    caidan(index) {
      this.cur = index;
    },

    huashu() {
      this.bgx = this.$refs.bg;
      this.huasux = this.$refs.huasu;
      this.huasux.style.display = "block";
      this.bgx.style.display = "block";
      this.fa = false;
    },
    bg() {
      this.huasux.style.display = "none";
      this.bgx.style.display = "none";
      this.dialog.style.display = "none";
      this.fa = true;
    },
    onText(e) {
      this.dec = e.srcElement.innerText;
      this.huasux.style.display = "none";
      this.bgx.style.display = "none";
    },
    zdy() {
      this.dialog = document.querySelector(".dialog");
      this.dialog.style.display = "block";
      this.huasux.style.display = "none";
    },
    input() {}
  },
  mounted() {
    // 去掉前后空格的方法
    String.prototype.trim = function () {
          return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');   
    };

     var charInput = document.getElementById("charInput");
     this.textar(charInput,0,100)

    this.initEmojiPic();

    this.$axios("https://sale.qhfkj.top/radar/speechid?m=1").then(data => {
      this.list = data.data;
      console.log(data);
      for (var i = 0; i < this.textList.length; i++) {
        this.textList.push(localStorage.getItem(i));
      }
    });
    this.scroll = new BScroll(this.$refs.wrapper);
  }
};
</script>


<style lang="less">

.xiaoxiList {
  position: fixed;
  left: 0;
  right:0;
  bottom: 0;
  margin-top: 40px;
}
.chat_page_con {
  padding: 20px 50px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}



.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}

.chatframe-icon {
  border-bottom: 1px solid #e8e8e8;
  vertical-align: top;
  margin-left: 0;
  position: absolute;
  width: 0;

  .iconfont {
    display: inline-block;
    font-size: 20px;
    cursor: pointer;
  }

  .open_emoji_icon {
    color: #ffbf1f;
    height: 0;
    line-height:0;
  }
}

.chatframe-input {
  margin-top: 10px;
  height: 150px;
}

.chatframe_input_con {
  display: inline-block;
  min-width: 500px;
  max-width: 500px;
  min-height: 172px;
  max-height: 172px;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid #dcdfe6;
  outline: none;
  overflow-y: scroll;
  margin-bottom: 20px;
  margin-top: 5px;

  img {
    width: 20px;
    height: 20px;
    vertical-align: sub;
  }
}

.emoji_tabs_box {
  .el-tabs__nav {
    display: flex;
    width: 100%;
    height: 30px;
  }

  .el-tabs__item {
    flex: 1;
    margin: 0px;
    text-align: center;
    font-weight: 500;
  }

  .emoji_pane_tab {
    font-size: 1.8rem;
  }

  .el-tabs__header {
    margin-bottom: 0;
    padding-top: 5px;
    margin-top: 10px;
    border-top: 1px solid rgba(230, 230, 230, 1);
  }

  .el-tabs__active-bar {
    display: none;
  }
}

.el-popover {
  .el-tabs__item {
    height: 25px;
  }

  .el-tabs__active-bar {
    background: #409eff;
  }

  .el-tabs__content {
    height: 156px;
  }

  .el-button + .el-button {
    margin-left: 0;
    padding: 0 !important;
  }

  .chat_emoji_item {
    width: 25px;
    height: 25px;
    margin: 3px;
    cursor: pointer;
    user-select: none;
  }

  .el-tabs__nav-wrap::after {
    background-color: #fff;
  }
}

.scrollbar::-webkit-scrollbar {
  width: 6px; /*滚动条宽度*/
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 6px; /*滚动条的背景区域的圆角*/
  background-color: #fff; /*滚动条的背景颜色*/
}

.scrollbar::-webkit-scrollbar-thumb {
  border-radius: 6px; /*滚动条的圆角*/
  background-color: #c2c2c2; /*滚动条的背景颜色*/
}

.scrollbar-h::-webkit-scrollbar {
  height: 6px; /*滚动条高度*/
}

.chatframe-text {
  min-height: 200px;
  width: 500px;
  box-sizing: border-box;
  padding: 10px 15px;
  margin-top: 5px;
  background: #eaedf1;
  color: #282828;
  border-radius: 4px;
  word-wrap: break-word;
  word-break: break-all;
  line-height: 1.8rem;
  white-space: pre-wrap;
  position: relative;
}

.text_emoji {
  img {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: bottom;
  }
}
.el-popover {
  width: 100% !important;
  box-sizing: border-box;
  position: absolute !important;
  left: 0 !important;
  right: 0 !important;
  overflow: hidden !important;
  bottom: -.4rem !important;
  top: unset !important;
  margin-bottom: 0 !important;
}
.el-tabs__content {
  overflow: scroll !important;
}
</style>


<style  scoped>
/* 撒 */

.preview {
  background-color: #000;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  align-items: center;
}

.preview /deep/ img {
  width: 100%;
 
}
.in {
  width: 1.28rem;
  height: 0.4rem;
  border-radius: 0.08rem;
  background-color: red;
  overflow: hidden;
  text-align: center;
  line-height: 0.4rem;
  margin-left: 0.2rem;
}
.btn {
  /* padding: 0.1rem 0.3rem; */
  text-align: center;
    line-height: 3rem;
    margin-left: 1rem;
    width: 8rem;
    height: 3rem;
    border-radius: .5rem;
    position: relative;
}
.huise {
  background-color: #e7e8ee;
}
#fileBtn {
  width: 100%;
  height: 100%;
  border-radius: 0.08rem;
  overflow: hidden;
  opacity: 0;
  position: absolute;
  left: 0;
  top: 0;
}

.xiList /deep/ .tupian {
  width: 100px;
  height: 100px;
}
.scroller {
  padding-top: 1rem;
}
.file {
  width: 1.3rem;
  height: 0.4rem;
  margin-left: 0.2rem;
  border-radius: 0.1rem;
  color: red;
  border: none;
}

.xiList {
  height: 52rem;
  box-sizing: border-box;
  overflow: scroll;
  padding-top: 4rem;
}

.xiList /deep/ .duihuakuang:after {
  content: "";
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid #fff;
  position: absolute;
  top :0;
  right: -.5rem;
}
.xiList /deep/ .duiImg {
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: relative;
  border-radius: 0.5rem;
  max-width: 10rem;
  text-align: justify;
  text-justify: newspaper;
  word-break: break-all;
}
.xiList /deep/ .duiImg:after {
  content: " ";
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 12px solid #fff;
  position: absolute;
  top: 0;
  right: -7px;
}
.xiList /deep/ .duihuakuang {
  padding: .8rem;
  display: flex;
  align-items: center;
  background-color: #fff;
  position: relative;
  border-radius: 0.5rem;
  max-width: 13rem;
  text-align: justify;
  text-justify: newspaper;
  word-break: break-all;
  font-size: 1.4rem;
  line-height: 1.8rem;
}

.xiList /deep/ li {
  display: flex;
  justify-content: flex-end;
 margin: 3rem 1rem;
}

.xiList /deep/ li .userImg {
    width: 3rem;
    height: 3rem;
    margin-left: 1rem;
    border-radius: 0.5rem;
}

.iconTo_close {
  float: right;
}
.zidUl {
  background: rgb(245, 245, 246);
}
.iconhao {
  font-size: 12px;
}
.qx {
  color: rgb(179, 179, 179);
}
.qd {
  color: rgb(75, 178, 234);
}
.dialog-btn {
  height: 25%;
  border-top: 1px solid rgb(179, 179, 179);
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.mide-border {
  height: 100%;
  width: 1px;
  background-color: rgb(179, 179, 179);
}

.dialog {
  background-color: #fff;
      width: 28rem;
  height: 18rem;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -9rem;
  margin-left: -14rem;
  border-radius: .5rem;
  overflow: hidden;
  display: none;
  z-index: 999;
  font-size: 1.4rem
}
.dialog textarea {
  width: 100%;
  height: 75%;
  padding:2rem 1.4rem ;
  box-sizing: border-box;
 
  

  
}
.bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: RGBA(122, 122, 123, 0.5);
  display: none;
}

.huaList .right li {
    width: 100%;
    border-radius: 1rem;
    height: 4rem;
    box-sizing: border-box;
    line-height: 4rem;
    background-color: #fff;
    color: red;
    margin-bottom: 2rem;
}
.huaList .right ul > li {
  padding-left: 1rem;
  overflow: hidden;
  padding-right: .5rem;
}
.huaList .right {
  padding: 1rem;
  box-sizing: border-box;
}
.huaList .left > li {
     height: 3rem;
    line-height: 3rem;
    text-align: center;
    margin: 1.4rem 0;
}
.active {
  border-left: 2px solid #3891ff;
}
.huaList .left {
  box-sizing: border-box;
  width: 30%;
  height: 100%;
  background-color: #fff;
  float: left;
}

.huaList .right {
  width: 70%;
  height: 100%;
  background-color: #f5f5f6;
  float: left;
}
.huaList {
  height:38rem;
  background-color: red;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: none;
  z-index: 99;
  font-size: 1.4rem;
}

.iconjia {
  color: #3aa1f9;
  font-size: 20px;
}
.bottom {
  display: flex;
  align-items: center;
 
  width: 100%;
  position: relative;
 padding-left:2rem;
}

.send {
  width: 15%;
  height:3rem;
  text-align: center;
  line-height: 3rem;
  border-radius:.5rem;
  color: #fff;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}
.top .left {
  width: 20%;
  height: 3rem;
  text-align: center;
  line-height:3rem;
  border: 1px solid #4bb2ea;
  
  border-radius: 0.5rem;
  color: #4bb2ea;
}

.top #charInput  {
  width: 60%;
  height: 3rem !important;
  border-radius: 0.5rem;
  padding-left: 0.5rem;
  padding-top: .3rem;
  font-size: 1.4rem !important;

}

.Session {
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  background: #fff;;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
 
  background: #f5f5f6;
  font-size: 1.2rem;
 
}
.title {
  width: 100%;
  height: 4rem;
  position: fixed;
  text-align: center;
  line-height: 4rem;
  color: #33b8dc;
 
  background-color: #fff;
  top: 0;
  left: 0;
  z-index: 99;
}
.huaList .right #ziyh {
  width: 10rem;
  height:3rem;
  border-radius: 2rem;
  text-align: center;
  line-height: 3rem;
  background: #46c3fc;
  color: #fff;
  font-size: 1.2rem;
  margin: 2rem auto;
  padding: 0;
  box-shadow: -40px 0 40px #368ffd inset;
}
</style>



