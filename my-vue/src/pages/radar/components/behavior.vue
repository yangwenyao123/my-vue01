<template>
  <div class="content">
    <div class="top">
      <div class="rile">
        请选择时间
        <div class="iconfont tianchongicon" @click="r=true">点击</div>
      </div>
      <ul class="kapian"> 
        <li @click="statistical(xingweiData.查看名片[0])">
          <div class="card">
            查看名片
            <span class="iconbg">
              <i class="iconfont iconyanjing"></i>
            </span>
          </div>
          <div class="number">{{xingweiData.查看名片[1]}}&nbsp;次</div>
        </li>
        <li @click="statistical(xingweiData.名片点赞[0])">
          <div class="card">
            名片点赞
            <span class="iconbg">
              <i class="iconfont iconhua"></i>
            </span>
          </div>
          <div class="number">{{xingweiData.名片点赞[1]}}&nbsp;次</div>
        </li>
        <li @click="statistical(xingweiData.转发名片[0])">
          <div class="card">
            转发名片
            <span class="iconbg">
              <i class="iconfont iconmingpian"></i>
            </span>
          </div>
          <div class="number">{{xingweiData.转发名片[1]}}&nbsp;次</div>
        </li>
        <li @click="statistical(xingweiData.呼叫座机[0])">
          <div class="card">
            呼叫座机
            <span class="iconbg">
              <i class="iconfont iconzuoji"></i>
            </span>
          </div>
          <div class="number">{{xingweiData.呼叫座机[1]}}&nbsp;次</div>
        </li>
        <li @click="statistical(xingweiData.呼叫手机[0])">
          <div class="card">
            呼叫手机
            <span class="iconbg">
              <i class="iconfont iconshouji"></i>
            </span>
          </div>
          <div class="number">{{xingweiData.呼叫手机[1]}}&nbsp;次</div>
        </li>
        <li @click="statistical(xingweiData.复制邮箱[0])">
          <div class="card">
            复制邮箱
            <span class="iconbg">
              <i class="iconfont xinyouxiang"></i>
            </span>
          </div>
          <div class="number">{{xingweiData.复制邮箱[1]}}&nbsp;次</div>
        </li>
      </ul>
    </div>

    <div class="list">
      <ul class="item">
        <li @click="statistical(xingweiData.复制微信[0])">
          <div class="left">
            <div class="iconGb">
              <div class="iconfont iconweixin"></div>
            </div>复制微信
          </div>
          <div class="right">
            <div class="num">{{xingweiData.复制微信[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.保存信息[0])">
          <div class="left">
            <div class="iconGb iconGb2">
              <div class="iconfont iconwenben"></div>
            </div>保存信息
          </div>
          <div class="right">
            <div class="num">{{xingweiData.保存信息[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.查看朋友圈[0])">
          <div class="left">
            <div class="iconGb iconGb3">
              <div class="iconfont iconpengyouquan"></div>
            </div>查看朋友圈
          </div>
          <div class="right">
            <div class="num">{{xingweiData.查看朋友圈[1]}}</div>&nbsp;次
          </div>
        </li>

        <li  @click="statistical(xingweiData.查看官网[0])">
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont icondiannao"></div>
            </div>查看官网
          </div>
          <div class="right">
            <div class="num">{{xingweiData.查看官网[1]}}</div>&nbsp;次
          </div>
        </li>
      </ul>
      <ul class="item">
        <li  @click="statistical(xingweiData.积分操作[0])">
          <div class="left">
            <div class="iconGb iconGb3">
              <div class="iconfont iconjifen"></div>
            </div>积分操作
          </div>
          <div class="right">
            <div class="num">{{xingweiData.积分操作[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.领取红包[0])">
          <div class="left">
            <div class="iconGb iconGb6">
              <div class="iconfont iconhongbao1"></div>
            </div>领取红包
          </div>
          <div class="right">
            <div class="num">{{xingweiData.领取红包[1]}}</div>&nbsp;次
          </div>
        </li>

        <li  @click="statistical(xingweiData.关注公众号[0])">
          <div class="left">
            <div class="iconGb iconGb7">
              <div class="iconfont iconhao"></div>
            </div>关注公众号
          </div>
          <div class="right">
            <div class="num">{{xingweiData.关注公众号[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.播放语音推荐[0])">
          <div class="left">
            <div class="iconGb iconGb8">
              <div class="iconfont iconlaba"></div>
            </div>播放语音推荐
          </div>
          <div class="right">
            <div class="num">{{xingweiData.播放语音推荐[1]}}</div>&nbsp;次
          </div>
        </li>
      </ul>
      <ul class="item">
        <li @click="statistical(xingweiData.积分操作[0])">
          <div class="left">
            <div class="iconGb iconGb3">
              <div class="iconfont icondongtaicopy1"></div>
            </div>积分操作
          </div>
          <div class="right">
            <div class="num">{{xingweiData.积分操作[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.商品收藏[0])">
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont iconstarred"></div>
            </div>商品收藏
          </div>
          <div class="right">
            <div class="num">{{xingweiData.商品收藏[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.查看增值金[0])">
          <div class="left">
            <div class="iconGb iconGb5">
              <div class="iconfont icon_baobiao"></div>
            </div>查看增值金
          </div>
          <div class="right">
            <div class="num">{{xingweiData.查看增值金[1]}}</div>&nbsp;次
          </div>
        </li>

        <li  @click="statistical(xingweiData.保存手机号[0])">
          <div class="left">
            <div class="iconGb iconGb6">
              <div class="iconfont iconfuzhi1"></div>
            </div>保存手机号
          </div>
          <div class="right">
            <div class="num">{{xingweiData.保存手机号[1]}}</div>&nbsp;次
          </div>
        </li>
      </ul>

      <ul class="item">
        <li  @click="statistical(xingweiData.查看商城[0])">
          <div class="left">
            <div class="iconGb iconGb1">
              <div class="iconfont iconshangcheng"></div>
            </div>查看商城
          </div>
          <div class="right">
            <div class="num">{{xingweiData.查看商城[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.播放商品介绍[0])">
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont iconlaba"></div>
            </div>播放商品介绍
          </div>
          <div class="right">
            <div class="num">{{xingweiData.播放商品介绍[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.加入购物车[0])">
          <div class="left">
            <div class="iconGb iconGb3">
              <div class="iconfont icongouwuche"></div>
            </div>加入购物车
          </div>
          <div class="right">
            <div class="num">{{xingweiData.加入购物车[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.提交表单[0])">
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont icondiannao"></div>
            </div>提交表单
          </div>
          <div class="right">
            <div class="num">{{xingweiData.提交表单[1]}}</div>&nbsp;次
          </div>
        </li>
      </ul>

      <ul class="item">
        <li @click="statistical(xingweiData.浏览落地页[0])">
          <div class="left">
            <div class="iconGb iconGb5">
              <div class="iconfont iconshu"></div>
            </div>浏览落地页
          </div>
          <div class="right">
            <div class="num">{{xingweiData.浏览落地页[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.点赞印象标签[0])">
          <div class="left">
            <div class="iconGb iconGb6">
              <div class="iconfont iconbiaoqian"></div>
            </div>点赞印象标签
          </div>
          <div class="right">
            <div class="num">{{xingweiData.点赞印象标签[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.搜索商品[0])">
          <div class="left">
            <div class="iconGb iconGb1">
              <div class="iconfont iconsousuo"></div>
            </div>搜索商品
          </div>
          <div class="right">
            <div class="num">{{xingweiData.搜索商品[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.发起砍价[0])">
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont iconfaqikanjia-"></div>
            </div>发起砍价
          </div>
          <div class="right">
            <div class="num">{{xingweiData.发起砍价[1]}}</div>&nbsp;次
          </div>
        </li>
      </ul>

      <ul class="item">
        <li @click="statistical(xingweiData.参与砍价[0])">
          <div class="left">
            <div class="iconGb iconGb3">
              <div class="iconfont iconjia"></div>
            </div>参与砍价
          </div>
          <div class="right">
            <div class="num">{{xingweiData.参与砍价[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.砍价成功[0])">
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont icondui"></div>
            </div>砍价成功
          </div>
          <div class="right">
            <div class="num">{{xingweiData.砍价成功[1]}}</div>&nbsp;次
          </div>
        </li>

        <li @click="statistical(xingweiData.发起拼团[0])">
          <div class="left">
            <div class="iconGb iconGb5">
              <div class="iconfont iconpintu"></div>
            </div>发起拼团
          </div>
          <div class="right">
            <div class="num">{{xingweiData.发起拼团[1]}}</div>&nbsp;次
          </div>
        </li>

        <li>
          <div class="left">
            <div class="iconGb iconGb6">
              <div class="iconfont iconfaqikanjia-"></div>
            </div>进入个人中心
          </div>
          <div class="right">
            <div class="num">{{xingweiData.进入个人中心[1]}}</div>&nbsp;次
          </div>
        </li>
      </ul>

      <ul class="item">
        <li>
          <div class="left">
            <div class="iconGb iconGb1">
              <div class="iconfont iconfuzhi"></div>
            </div>修改个人资料
          </div>
          <div class="right">
            <div class="num">{{xingweiData.修改个人资料[1]}}</div>&nbsp;次
          </div>
        </li>

        <li>
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont iconZzhuanshi"></div>
            </div>领取会员卡
          </div>
          <div class="right">
            <div class="num">{{xingweiData.领取会员卡[1]}}</div>&nbsp;次
          </div>
        </li>

        <li>
          <div class="left">
            <div class="iconGb iconGb3">
              <div class="iconfont iconsaoma"></div>
            </div>从扫码查看名片
          </div>
          <div class="right">
            <div class="num">{{xingweiData.从扫码查看[1]}}</div>&nbsp;次
          </div>
        </li>

        <li>
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont iconmingpian1-"></div>
            </div>转发查看名片
          </div>
          <div class="right">
            <div class="num">{{xingweiData.查看名片[1]}}</div>&nbsp;次
          </div>
        </li>
      </ul>

      <ul class="item">
        <li>
          <div class="left">
            <div class="iconGb iconGb5">
              <div class="iconfont iconunif033"></div>
            </div>从搜索首次查看
          </div>
          <div class="right">
            <div class="num">{{xingweiData.从搜索查看[1]}}</div>&nbsp;次
          </div>
        </li>
        <li>
          <div class="left">
            <div class="iconGb iconGb6">
              <div class="iconfont iconshouji2"></div>
            </div>手机授权
          </div>
          <div class="right">
            <div class="num">{{xingweiData.手机授权[1]}}</div>&nbsp;次
          </div>
        </li>
        <li>
          <div class="left">
            <div class="iconGb iconGb1">
              <div class="iconfont iconbaocun"></div>
            </div>保存海报名片
          </div>
          <div class="right">
            <div class="num">{{xingweiData.保存海报名片[1]}}</div>&nbsp;次
          </div>
        </li>
        <li>
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont iconyouhuiquan"></div>
            </div>领取优惠券
          </div>
          <div class="right">
            <div class="num">{{xingweiData.领取优惠券[1]}}</div>&nbsp;次
          </div>
        </li>
      </ul>

      <ul class="item">
    
        <li>
          <div class="left">
            <div class="iconGb iconGb4">
              <div class="iconfont iconyouhuiquan"></div>
            </div>使用优惠券
          </div>
          <div class="right">
            <div class="num">{{xingweiData.使用优惠券[1]}}</div>&nbsp;次
          </div>
        </li>
        <li>
          <div class="left">
            <div class="iconGb iconGb1">
              <div class="iconfont iconqian1"></div>
            </div>申请退款
          </div>
          <div class="right">
            <div class="num">{{xingweiData.申请退款[1]}}</div>&nbsp;次
          </div>
        </li>
    
      </ul>
    </div>

    <div class="date" v-show="r">
      <div class="qujian">
        <div class="leftBtn"  @click="num=1" :class="num==1?'active':''">{{str}}</div>
        <div class="zhi">至</div>
        <div class="rightBtn" @click="num=2" :class="num==2?'active':''">{{str2}}</div>
      </div>
        <van-datetime-picker
        type="date"
        @change="getDate"
        @confirm='queding'
        @cancel="quxiao"
        />
    </div>
  </div>
</template>

<script>
export default {
  props:["xingweiDatax"],
  data() {
    return {
       currentDate: new Date(),
       str:'请选择时间',
       str2:'请选择时间',
       r:false,
       num:1,
       beginTime:'',
       endTime:'',
       w:false,
       xingweiData:{}
      
    };
  },
  watch:{
    w () {
      console.log(1000);
      
      this.xingwei()
    },
    xingweiDatax () {
      
      this.xingweiData = this.xingweiDatax
      
    }
  },
  methods: {
      xingwei() {
        var that = this
        var data =  this.$qs.stringify({
        staffId:'c0ptQ0oxOTE4QWlvdFZZaXpE',
        beginTime:this.beginTime,
        endTime:this.endTime
    })
    this.$axios.post("/radar/Index/getBehaviorByDate",data).then(res=>{
      console.log(res);
      that.xingweiData = res.data
      console.log(that.xingweiData);
      
      
    })
  
    },
    queding () {
 
      this.r = false
      this.beginTime =Math.round(new Date(this.str) / 1000)
      this.endTime =Math.round(new Date(this.str2) / 1000)


      if(this.beginTime && this.endTime) {
        console.log(123);
        
        this.w = !this.w
      }else {
        console.log(123456);
        
      }

     
      
    },
    quxiao () {
      this.r = false
    },

    getDate (e) {
      var date = e.getValues()
      var s =date.join('-')
      if(this.num==1){
        this.str = s
       var date1=new Date(this.str).getTime();
       var date2=new Date(this.str2).getTime();
      
        
        if(date1 > date2) {
          alert("开始时间不能大于结束时间")
          this.str = "请选择时间"
        }

      }else {

      this.str2 = s
      var date1=new Date(this.str).getTime();
      var date2=new Date(this.str2).getTime();
        if(date1 > date2) {
          alert("开始时间不能大于结束时间")
          this.str2 = "请选择时间"
        }
      }
      

    },
    statistical(beId) {
      
      this.$router.push({
        name:"statistical",
        params:{
          beId:beId,
          beginTime:this.beginTime,
          endTime:this.endTime
        } 
    })
      
  },
  },
  mounted () {
      

  }
}
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
  color: #419dfb
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
    color: #419dfb
}
.date {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.qujian {
  position: absolute;
  top:44px;
  height: 74px;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  z-index: 99;
  padding: 1rem;
  font-size: 1.4rem

}

.date >>>.van-picker__columns {
  margin-top:74px !important;
}

.list .iconfont {
  color: #fff;
  font-size: 2rem;
}
.list .iconGb2 {
  background-color: #2dd73e;
}
.list .iconGb3 {
  background-color: #2ec6f0;
}
.list .iconGb4 {
  background-color: #348df1;
}
.list .iconGb5 {
  background-color: #b367f8;
}
.list .iconGb6 {
  background-color: #ff788c;
}
.list .iconGb7 {
  background-color: #ff802e;
}
.list .iconGb8 {
  background-color: #3fc955;
}

.item .num {
  color: #45a8cf;
}
.item .right {
  display: flex;
  color: #424544;

}
.item .left {
  display: flex;
  align-items: center;
 
}
.iconGb {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 0.8rem;
    background-color: #ff7a35;
    text-align: center;
    line-height: 2.8rem;
    margin-right: 1rem;
}
.item {
  padding: 0 1.2rem;
  background-color: #fff;
  margin-bottom: 1rem;
}
.item li {
  height:5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;
  font-size: 1.4rem;
}
.item li:last-child {
  border: none;
}
.content {
  background-color: rgb(231, 231, 231);
  padding-bottom: 10rem;
}
.top .kapian {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.top .kapian .iconfont {
  font-size: 22px;
}
.top .kapian .iconyanjing {
  font-size: 24px;
}
.top .kapian li {
      width: 31%;
      height: 7rem;
  background-color: rgb(83, 204, 254);
 margin-bottom: 0.8rem;
    border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #fff;
      padding: 0.6rem;
  box-sizing: border-box;
      font-size: 1.2rem;
}
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.top {
    padding: 0 1.4rem 0.5rem 1.4rem;
    margin-bottom: 0.8rem;
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
  font-size: 12px;
}
.tianchongicon {
  font-size: 14px;
  color: #5bbae0;
}
</style>


