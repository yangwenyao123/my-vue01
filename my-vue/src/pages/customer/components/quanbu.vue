<template>
  <div class="content" >
    <div class="time">
        <div class="time_left">
          最近活动时间
          <i class="iconfont icondaosanjiao"></i>
        </div>
        <div class="time_right">共0名客户</div>
      </div>
    <div class="list">
  
      <div class="item">
        <div class="personal" @click="jumpData">
          <div class="title"><span>最近活动时间:2019-07-28</span><span class="genjin">尚未跟进</span></div>
          <div class="rab">
            <div class="top">
            <div class="touxiang">
              <img src="../../../assets/images/0.jpg" alt="">
            </div>
            <div class="xinxi">
              <h2>李欣怡</h2>
              <p>未关联商机阶段</p>
            </div>
            </div>
         
          <div class="midden">
            <div class="label">已签合同</div>
            <div class="label">已签合同</div>  
          </div>
           </div>
        </div>
        <div class="card_fot">
          <div class="fot" @click="huihua"><i class="iconfont iconxiaoxi"></i>发消息</div>
          <div class="fot hone"  @click="boda"><i class="iconfont icondianhua"></i>打电话</div>
         
          <div class="fot" @click="genjin"><i class="iconfont iconxiaoxi"></i>添加跟进</div>
        </div>
        
      </div>

       <div class="item">
        <div class="personal" @click="jumpData">
          <div class="title"><span>最近活动时间:2019-07-28</span> <span class="genjin">尚未跟进</span></div>
          <div class="rab">
            <div class="top">
            <div class="touxiang">
              <img src="../../../assets/images/0.jpg" alt="">
            </div>
            <div class="xinxi">
              <h2>李欣怡</h2>
              <p>未关联商机阶段</p>
            </div>
            </div>
         
          <div class="midden">
            <div class="label">已签合同</div>
            <div class="label">已签合同</div>  
          </div>
           </div>
        </div>
        <div class="card_fot">
          <div class="fot" @click="huihua"><i class="iconfont iconxiaoxi"></i>发消息</div>
          <div class="fot hone" @click="boda"><i class="iconfont icondianhua"></i>打电话</div>
          <div class="fot" @click="genjin"><i class="iconfont iconxiaoxi"></i>添加跟进</div>
        </div>
      </div>

       <div class="item">
        <div class="personal" @click="jumpData">
          <div class="title"><span>最近活动时间:2019-07-28</span> <span class="genjin">尚未跟进</span></div>
          <div class="rab">
            <div class="top">
            <div class="touxiang">
              <img src="../../../assets/images/0.jpg" alt="">
            </div>
            <div class="xinxi">
              <h2>李欣怡</h2>
              <p>未关联商机阶段</p>
            </div>
            </div>
         
          <div class="midden">
            <div class="label">已签合同</div>
            <div class="label">已签合同</div>  
          </div>
           </div>
        </div>
        <div class="card_fot">
          <div class="fot" @click="huihua"><i class="iconfont iconxiaoxi"></i>发消息</div>
          <div class="fot hone" @click="boda"><i class="iconfont icondianhua"></i>打电话</div>
          <div class="fot" @click="genjin"><i class="iconfont iconxiaoxi"></i>添加跟进</div>
        </div>
      </div>
    </div>

    <!-- 弹出框 -->
    <ul class="honeTab" ref="honeTab">
     
      <li @click="hujiao"><a href="tel:400-0000-688">普通电话呼叫</a></li>
      <li @click="copyCode">复制<textarea id="copycode" v-show="false" class="main-code" readonly="readonly">&nbsp;18665572292</textarea></li>
      <li><a href="tel:18665572292">添加到手机通讯录</a></li>
    </ul>
    <!-- 背景 -->
    <div class="bg" ref="bg" @click="onBg"></div>
    <!-- 复制成功 -->
    <div class="copy">号码已复制到剪贴板</div>

    <!-- 新建联系人 -->
    <ul class="lianxi">
      <li>新建联系人</li>
      <li>添加到现有联系人</li>
    </ul>

    <div class="Nodata_wrap" v-if="Nodata">
      <img src="@/assets/images/13.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      Nodata:false,
      number:'18665572292',
      bg:'',
      honeTab:'',
      lianxi:'',
      content:'',
      bler:true
    }
  },
  methods:{
  
    onBg () {

      this.honeTab.style.display="none"
      this.bg.style.display="none"
       this.content.classList.remove('contentx')
      if(this.lianxi){
        this.lianxi.style.display="none"
      }
      
    },
    hujiao () {
      this.honeTab.style.display="none"
      this.bg.style.display="none"
    },
    copyCode(){
      var that = this
      var copycode=document.getElementById("copycode");
      var copy=document.querySelector(".copy");
	    copycode.select(); // 选择对象
	    console.log(this.honeTab);
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.honeTab.style.display="none"
      this.bg.style.display="none"
      copy.style.display = "block"
      
     setTimeout(function(){ 
      copy.style.display = "none";
      that.content.classList.remove('contentx')
      },1000);
      
    },
    boda () {
      this.content = document.querySelector('.content')
      this.content.classList.add("contentx")
     
      this.honeTab = this.$refs.honeTab
      this.bg = this.$refs.bg
      this.honeTab.style.display="block"
      this.bg.style.display="block"
      console.log(this.honeTab);
      
    },

    jumpData () {
      this.$router.push('/chakan')
    },
    huihua () {
      this.$router.push('/session')
    },
    genjin () {
      this.$router.push('/follow')
    }
  }
};
</script>
<style lang="less" scoped>
.contentx {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: hidden;
}
h2 {
  font-size: 14px;
  font-weight: 600
}
.lianxi {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 5rem;
  z-index: 9999;
  margin-left: -2.5rem;
  margin-top:-1.6rem; 
  box-sizing: border-box;
  background-color: #fff;
  border-radius: .1rem;
  display: none;
  color:#070707;
  font-weight: 400;
}
.lianxi li{
  height: 0.8rem;
  line-height: 0.8rem;
  border-bottom: 1px solid #f2f1f1;
  padding-left: .25rem;
}
.lianxi li:last-child {
  border: none;
}

.copy {
 width: 14rem;
    height: 2.5rem;
  background: rgba(0, 0, 0, .5);
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
  width: .1rem;
  height: .1rem;
  overflow: hidden;
}
.honeTab {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 28rem;
  z-index: 9999;
  margin-left: -14rem;
  margin-top:-1.6rem; 
  box-sizing: border-box;
  background-color: #fff;
  border-radius: .1rem;
  display: none;
  color:#070707;
  margin-top: -10rem;
  font-size: 1.6rem;
  border-radius: .5rem;

}

.honeTab li{
    height: 4.5rem;
    line-height: 4.5rem;
    border-bottom: 1px solid #d0cece;
    padding-left: 1rem;
}

.honeTab li:last-child {
  border: none;
}
.honeTab  a {
  color:#000;
}
.honeTab span {
  color: #939393;
  font-size: 12PX;
}

.bg {
  background-color: RGBA(111,111,112,.3);
  
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden;
  display: none;
 
}
.time {
  height: 3rem;
  // line-height: 0.5rem;
  padding: 0 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  background-color: #fff;
  align-items: center;
}
.margin-left{
  margin-left: .2rem;
}
.margin-right{
  margin-right: .2rem;
}
.card_fot {
  height: 4.5rem;
  border-radius: .8rem;
  border-top: 1px dashed #e5e5e5;
    background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: space-around;
  color: #7d7d7d;
  .hone {
    border-left: 1px solid #d0cece;
    border-right: 1px solid #d0cece;
  }

  .fot {
    height: 2rem;
    width: 32%;
    display:flex;
    align-items: center;
    justify-content: center;
    .iconfont {
      font-size: 16px;
      margin-right: .1rem;
    }
  }
}
.genjin {
  color: #868686;
}
p {
  font-size: 12px;
  color: #212121;
}
.item {
  border-radius: .8rem;
  font-size: 1.2rem;
  margin-bottom: 2rem;
 

  .personal {
    border-radius: .8rem;
    background-color: #fff;
       .title {
      height: 4.5rem;
      display: flex;
      align-items: center;
      justify-content:space-between;
      padding: 0 1rem;
      border-bottom: 1px dashed #e5e5e5;
      font-size: 1.2rem;
      color: #393939;
      }

    .top {
      display: flex;
      padding: 1rem;
      padding-bottom: 0;
     
      .touxiang {
        width: 4rem;
        height: 4rem;
        margin-right: 1rem;
          img {
            width: 100%;
            height: 100%;
            border-radius: .5rem;
          }
      }
      .xinxi {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }
    .midden {
      height: 4.5rem;
      display: flex;
      align-items: center;
      padding: 0 1rem;
      .label {
        padding: 0.4rem 0.6rem;
        color: #fff;
        background: linear-gradient(to right, #ff802e,  #fdb22d);
        margin-right: 1rem;
        font-size: 1rem;
        border-radius: 0.8rem;
        box-shadow:0 0  5px #fdb22d
      }

    }
  }
}
.list {
  padding: 1rem;
  background-color:#f7f7f7;
  padding-bottom: 4rem
  
}
.icondaosanjiao {
  font-size: 8px;
  color: #acaeb8;
}
.Nodata_wrap {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -2rem;
  width: 4rem;
  height: 4rem;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>


