<template>
  <div class="content">
    <div class="geren">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont icongeren"></i>
          </div>个人介绍&nbsp;
          <i class="iconfont icyoujiantou"></i>
        </div>
        <div class="lengt">{{remnant}}/400</div>
      </div>
      <div class="text">
        <textarea cols="30" rows="10" maxlength="400" @input="descInput" v-model="desc"></textarea>
      </div>
    </div>

    <div class="yuyin">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconyuyin"></i>
          </div>语音录制
        </div>
      </div>
      <div class="yuyinbox">
        <img src="../../../assets/images/0.jpg" alt />
        <div class="yutiao"></div>
        <div class="clushanchu" style="width:8rem;display:flex;justify-content:space-around">
          <span>重录</span>
          <span @click="btnImg">删除</span>
        </div>
      </div>
    </div>

    <div class="publiStlye">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconshipinanniu"></i>
          </div>视频介绍
        </div>
      </div>
      <div class="upload">
        <div class="addVideo">
          <div class="addicon" v-if="!res">
            <div class="addBF">
              <i class="iconfont iconjia1"></i>
               <input type="file" id="file" @change="onInputFileChange()">  
            </div>
            <p>上传视频 (最大100MB)</p>
          </div>
          <div class="videoWrap" v-if="res">
            <i class="iconfont iconjiahao" @click="guanbivido"></i> 
            <video id="audio_id"  :src="res"  width="100%" height="200px" style="object-fit: fill" controls="controls">
	            Your browser can't support HTML5 Audio
	          </video>
          </div>
        </div>
        <div class="addFm" v-if="flag">
          <div class="addBtn">+&nbsp;&nbsp;上传封面
             <input type="file" accept="image/png,image/jpg,image/jpeg" @change="change($event)">
          </div>
          
          <div class="shuoming" >
            <h2>建议尺寸</h2>
            <p>上传图片大小为750*398,大小不超过2MB</p>
          </div>
        </div>
        <div class="fengmian" v-show="flag2">
          <i class="iconfont iconjiahao" @click="guanbi"></i> 
          <img style="width:100%;height:2.7rem;" alt="" id="img" >
        </div>
      </div>
    </div>

    <div class="publiStlye">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconbiaoqian"></i>
          </div>我的印象标签&nbsp;
         
        </div>
        <div class="lengt">{{labeleght}}/10</div>
      </div>
      <div class="label">
        <div class="labelBtn" v-for="(item,index) in labelBtnW" :key="index" >{{item}}</div>
        <div class="addLabe" @click="addLabe">
          <i class="iconfont iconhao"></i>
        </div>
      </div>
      <div class="cankao">可参考的标签</div>
      <ul class="canBle" @click="canBle">
        <li>城市守信</li>
        <li>服务态度好</li>
        <li>真诚可靠</li>
        <li>耿直豪爽</li>
        <li>原则性强</li>
        <li>独立自主</li>
        <li>城市守信</li>
        <li>服务态度好</li>
        <li>真诚可靠</li>
        <li>耿直豪爽</li>
        <li>原则性强</li>
        <li>独立自主</li>
      </ul>
    </div>
    <div class="publiStlye">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconguanwang"></i>
          </div>官网直达
        </div>
        <div class="lengt">{{remnant}}/400</div>
      </div>
      <div class="model"></div>
      <div class="cankao">未添加模块</div>
      <div class="fot"></div>
    </div>

    <div class="publiStlye">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconzhaopian"></i>
          </div>照片墙
        </div>
        <div class="zidin">
          自定义名称
          <i class="iconfont iconyou"></i>
        </div>
      </div>
      <div class="upImg">
        <el-upload action="https://airadar.qhfkj.top/commons/uploads/" list-type="picture-card" :file-list="fileList">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible" size="tiny">
          <img width="100%" :src="dialogImageUrl"  alt />
        </el-dialog>
      </div>
    </div>

    <!-- 点击添加标签弹出来的背景色 -->
    <div class="bg" @click="noBg"></div>

    <div class="addLabeList">
      <div class="title">
        <div class="left">
          <div class="icBg">
            <i class="iconfont iconbiaoqian"></i>
          </div>添加标签
        </div>
        <i class="iconfont iconhao" @click="iconhao"></i>
      </div>
      <div class="boxConent">
        <input
          type="text"
          placeholder="请输入新标签名称"
          maxlength="5"
          v-model="zinum"
          @input="zilenght"
          class="focus"
        />
      </div>
      <div class="num">{{zinum2}}/5</div>
      <div class="fotbtn">
        <div class="quxiao" style="color: rgb(226, 225, 225)" @click="quxiao">取消</div>
        <div
          class="queding"
          style="border-left:1px solid #ccc; color:rgb(70, 184, 236)"
          @click="queding"
        >确定</div>
      </div>
    </div>

    <!-- 添加标签 -->

    <div class="submit">提交</div>
  </div>
</template>
<script>
import wx from 'weixin-js-sdk'
import { mapState } from 'vuex'
import c from '@/assets/js/clipper'
export default {
  data() {
    return {
      fileList:[],
      labelBtnW:[],
      remnant: 0,
      desc: "",
      dialogVisible: false,
      dialogImageUrl:"",
      zinum: "",
      zinum2: "0",
      bg: "",
      labeleght: 0,
      addLabeList: "",
      content: "",
      num: 0,
      arr: [],
      res:'',
      flag:true,
      flag2:false,
      addHome:{}
    };
  },
 computed:mapState({
        // addHome:'addHome' // 第一种写法
        
        // sex: (state) => state.sex, // 第二种写法
        addHome: function (state) { // 用普通函数this指向vue实例,要注意
          console.log(state.addHome);
           
          return state.addHome
        },

    }),
  methods: {
  
    guanbivido () {
      this.res = ''
      this.flag = true
    },
    guanbi () {
      
      this.flag2 = false
      
    },
    change( event ) {
            let image = document.getElementById('img'); //预览对象

            var that = this
            this.clip(event , {
              resultObj : image,
              aspectRatio : 1,
              
            })  
            this.flag = false
            this.flag2 = true
    },
    onInputFileChange () {  
      var file = document.getElementById('file').files[0];  
      var formData = new FormData(); 
      formData.append("file",file); 
      this.$axios.post("/commons/Uploads/up_mp4",formData).then((res)=>{
        console.log(res);
        
      })

      var url = URL.createObjectURL(file);  
      console.log(url);  
      //  document.getElementById("audio_id").src = url;  
      this.res = url
    },
    canBle() {
      var that = this;
      var li = document.querySelectorAll(".canBle li");
      var canBle = document.querySelector(".canBle");
      var addLabe = document.querySelector(".addLabe");

      for (var i = 0; i < li.length; i++) {
        li[i].onclick = function() {
          var labelBtn = document.querySelector(".label").children;
          console.log(labelBtn);
          if (labelBtn.length < 10) {
            var a = this.innerText;
            console.log(a);
            var div = document.createElement("div");
            div.setAttribute("class", "labelBtn a");
            div.innerHTML = `${a}`;
            addLabe.parentNode.insertBefore(div, addLabe);

            that.num++;
            canBle.removeChild(this);
          }
        };
      }
    },
    iconhao() {
      this.quxiao();
    },
    noBg() {
      this.quxiao();
    },
    queding() {
      if (this.zinum) {
        var that = this;
        var labelBtn = document.querySelector(".label").children;
        var label = document.querySelector(".label");
    
        this.labeleght = labelBtn.length;

        // var addLabe = document.querySelector(".addLabe");
        // var div = document.createElement("div");
        // div.setAttribute("class", "labelBtn");
        // div.innerHTML = `${this.zinum}`;

        // addLabe.parentNode.insertBefore(div, addLabe);

        this.labelBtnW.push(this.zinum)
        this.num++;
        this.padduan();
        this.quxiao();
        this.zinum = "";
      }
    },
    quxiao() {
      var quxiao = document.querySelector(".quxiao");
      this.bg.style.display = "none";
      this.addLabeList.style.display = "none";
      this.content.classList.remove("hidden");
    },
    zilenght() {
      this.zinum2 = this.zinum.length;
    },
    addLabe() {
      document.querySelector(".focus").focus();
      this.content = document.querySelector(".content");
      this.content.classList.add("hidden");
      this.bg = document.querySelector(".bg");
      this.addLabeList = document.querySelector(".addLabeList");
      this.addLabeList.style.display = "block";
      this.bg.style.display = "block";
    },
    // 文本输入框
    descInput() {
     this.remnant = this.desc.length;
     
    },
    wxjssdk () {  
      // var url = location.href.split('#')[0]
      // var urlHref =  this.$qs.stringify({url})
      // console.log(urlHref);
      
      this.$axios({
        method: 'post', 
        url: '/user/index/vxmsg',
       data:{url:location.href.split('#')[0]}
      }).then((res)=>{
        console.log(res.data);
  


      })
    },
   



    btnImg () {
  
    },
    padduan() {
      var that = this;
      var label = document.querySelector(".label");
      var unm = document.querySelectorAll(".labelBtn");
      var addLabe = document.querySelector(".addLabe");
      that.labeleght = unm.length;

      if (unm.length < 10) {
         for (let index = 0; index < unm.length; index++) {
        unm[index].onclick = function() {
          if (this.className.indexOf("labelBtn") > -1) {
            if (this.classList.contains("a") == true) {
              var canBle = document.querySelector(".canBle");
              var li = document.createElement("li");
              console.log(li);

              li.innerText = this.innerText;
              console.log(li);

              // this.innerHTML = `<li>${this.innerText}</li>`
              canBle.appendChild(li);
              console.log(li);

              label.removeChild(this);
              var unmx = document.querySelectorAll(".labelBtn");

              that.labeleght = unmx.length;
              return;
            }
            var unmx = document.querySelectorAll(".labelBtn");
            label.removeChild(this);
            that.labeleght = unmx.length;
            
          }
        };
      }
     
      }

     
    }
  },
  mounted() {

    var addHome = this.$store.state.addHome
    this.desc = addHome.synopsis
    this.labelBtnW = addHome.label.split(',')
    var array = addHome.photowall
     console.log(array);
    var obj = {}
  
    for (let index = 0; index < array.length; index++) {
      obj.name = index
      obj.url = array[index]
      this.fileList.push(obj) 
    }
    
    console.log(this.fileList);
    
    
    this.canBle();
    var that = this
    console.log("weixn");
    
    // this.wxjssdk ()
  },
  watch: {
    num() {
      this.padduan();
    },
    labeleght () {
      var addLabe = document.querySelector(".addLabe");
      if (this.labeleght>8) {
        addLabe.style.display = "none"
      }else {
        addLabe.style.display = "block"
      }
    }
  }
};
</script>

<style scoped>
.a {
  position: absolute;
  left: 0;
  top:0;
  z-index: 999
}
.fengmian {
  position: relative;
}
.iconjiahao {
  position: absolute;
  right: -.1rem;
  top: -.1rem;
  color: red;
  transform: rotate(45deg);

  z-index: 99;
}
.videoWrap {
  position: relative;
  width: 100%;
}
.addBF {
      width: 2rem;
    height: 2rem;
  border-radius: 50%;
  border: 1px solid #000;
  text-align: center;
  line-height: 2rem;
  margin-bottom: .4rem;
  position: relative;
}

.addicon {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 12.8rem;
  justify-content: center;
}
.addBF input {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
.label >>> .guanbi {
  position: absolute;
  right: -0.08rem;
  top: -0.06rem;
  width: 0.2rem;
  height: 0.2rem;
  background-color: red;
  color: #fff;
  border-radius: 50%;
  line-height: 0.2rem;
  text-align: center;
  
}
.boxConent {
  height: 16rem;
  padding-left: 1rem;
}

.fotbtn {
      height: 5rem;
  border-top: 1px solid rgb(221, 219, 219);
  display: flex;
  align-items: center;

  justify-content: space-around;
}
.fotbtn > * {
  width: 50%;
  text-align: center;
  height: 100%;
  line-height: 5rem;
}
.num {
  position: absolute;
  right: 1rem;
  bottom: 5.2rem;
  color: rgb(226, 225, 225);
}
.bg input {
  padding-left: 0.2rem;
}
.iconhao {
  
  transform: rotate(45deg);
}
.addLabeList {
  width:28rem;
  background-color: #fff;
  border-radius: 0.4rem;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -150px;
  margin-left: -14rem;
  z-index: 3;
  display: none;
}

.bg {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
}
.submit {
 width: 14rem;
    height: 3.5rem;
    text-align: center;
    line-height: 3.5rem;
    color: #fff;
    border-radius: 2rem;
    margin: 2rem auto;
  
  background: linear-gradient(to right, #43c5fc , #3891ff)
}
.el-upload--picture-card {
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100px;
  height: 47px;
  line-height: 47px;
  vertical-align: top;
}
.el-upload--picture-card i {

  color: #8c939d;
}
.el-upload-list--picture-card .el-upload-list__item {
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 100px;
  height: 47px;
  margin: 0 8px 8px 0;
  display: inline-block;
}
.zidin {
  display: flex;
  align-items: center;
}
.upImg {
  padding: 2rem 1rem 3rem 1rem;
  display: flex;
}
.fot {
  height: 3.8rem;
}
.model {
  height: 6rem;
}
.canBle >>> li {
    padding: 0 1rem;
    color: #6b6b6b;
    border: 1px solid #b8b8b8;
    border-radius: 2rem;
    height: 2.5rem;
    line-height:2.5rem;
    margin: 0 1rem 1rem 0;
}
.canBle {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0 3rem 1rem;
}
.cankao {
     height: 2.4rem;
      padding-left: 1rem;
  border-bottom: 1px solid rgb(226, 226, 226);
 
}
.label >>> .labelBtn {
  border-radius: 2rem;
  color: #fff;
  background-color: #f87f2e;
   background: linear-gradient(to right, #ff7f31 , #feaf2b);
  margin-right: 1rem;
  height: 2.5rem;
  line-height: 2.5rem;
  padding: 0 1rem;
  margin-bottom: 1.2rem;
  position: relative; 
  box-shadow: 0 0 2px #feaf2b;

}
.label >>> .labelBtn:before {
  content: "";
  display: inline-block;
     width: 1.2rem;
    height: 1.2rem;
  background: url(../../../assets/images/50.png) no-repeat;
  background-size: 100%;
  position: absolute;
      right: -0.2rem;
    top: -0.3rem;
  border-radius: 50%;
  overflow: hidden;
}

.addLabe {
    border-radius: 2rem;
    color: rgb(195, 194, 194);
    
    background-color: rgb(226, 224, 224);
    
        height: 2.5rem;
    line-height: 2.5rem;

       width: 6rem;
    text-align: center;
}
.label {
  display: flex;
  flex-wrap: wrap;
  padding: 3rem 1rem;
  box-sizing: border-box;
  
}
.publiStlye {
  border-radius: 0.8rem;
  box-shadow: 0 0 5px #ccc;
  margin-bottom: 1rem;

 
}

.shuoming h2 {
  
}
.shuoming {
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.addBtn {
         width: 7.6rem;
    height: 3rem;
    border-radius: 0.4rem;

  text-align: center;
  line-height:3rem;
  background-color: #b4f6fd;
  margin-right: 1rem;
  color: #21cadd;
  position: relative;
}
.addBtn input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.addFm p {
  color: #b9b8b8;
}
.addFm {
  height: 5.5rem;

  display: flex;
  align-items: center;
  
}
.addVideo {
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgb(202, 202, 202);
 
}

.upload {
  padding: 1rem;
  font-size: 1.2rem
}
.yuyinbox span {
  
  color: #1092cd;
}
.yutiao {
    width: 10rem;
    height: 3rem;
    background-color: #1092cd;
    border-top-right-radius: .4rem;
    border-bottom-right-radius: .4rem;
    border-bottom-left-radius: .4rem;
    margin-right: 2rem;
}
.yuyinbox img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem
}
.yuyinbox {
  height: 7.4rem;
  display: flex;
  box-sizing: border-box;
  align-items: center;
  padding: 2rem;
}
.yuyin {
  box-shadow: 0 0 5px #ccc;
  border-radius: 0.8rem;
  margin-bottom: 1.4rem;
}
.lengt {
  color: #dadada;
}

.icBg {
     width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.6rem;
    background-color: #40c4fb;
    text-align: center;
    line-height: 2.5rem;
    margin-right: 1rem;
}
.title .left .iconfont {
  
  color: #fff;
}
.title .left {
  display: flex;
  align-items: center;

}
.text {
  padding: 0.8rem;
  height: 10rem;
}
textarea {
  width: 100%;
  height: 100%;
}
.title {
     height:4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
      padding: 0 1rem;
  border-bottom: 1px solid rgb(231, 229, 229);
}
.geren {
  box-shadow: 0 0 5px #ccc;
  border-radius: 0.8rem;
  margin-bottom: 1.4rem;
}
.content {
  padding: 1rem;
  font-size: 1.4rem;
}
.hidden {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
}
 .upImg >>> .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100px;
    height: 55px;
    line-height: 55px;
    vertical-align: top;
}
.upImg >>> .el-upload-list--picture-card .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 100px;
    height: 55px;
    margin: 0 8px 8px 0;
    display: inline-block;
}
</style>

