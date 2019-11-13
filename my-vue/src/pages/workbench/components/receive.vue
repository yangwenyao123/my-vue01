<template>
  <div class="content">
    <div class="header">
      <ul class="header-left">
        <li :class="{active:cur==0}" @click="cur=0">7天</li>
        <li :class="{active:cur==1}" @click="cur=1">30天</li>
        <li :class="{active:cur==2}" @click="cur=2">半年</li>
      </ul>
      <div class="header-right">
        <i class="iconfont tianchongicon"></i>
      </div>
    </div>

    <ul class="dateqi" v-show="cur==0">
        <li>
            <div class="left">
                <img src="../../../assets/images/0.jpg" alt="" class="touxiang">
                <div class="name">
                    <h2>杨文耀</h2>
                    <p>2019-07-28 15:35:03</p>
                </div>
            </div>
            <div class="right">领取红包<span>￥5.62</span>到佣金余额</div>
        </li>
    </ul>
     <ul class="dateqi" v-show="cur==1">
        <li>
            <div class="left">
                <img src="../../../assets/images/0.jpg" alt="" class="touxiang">
                <div class="name">
                    <h2>杨文耀</h2>
                    <p>2019-07-28 15:35:03</p>
                </div>
            </div>
            <div class="right">领取红包<span>￥5.62</span>到佣金余额</div>
        </li>
    </ul>
     <ul class="dateqi" v-show="cur==2">
        <li>
            <div class="left">
                <img src="../../../assets/images/0.jpg" alt="" class="touxiang">
                <div class="name">
                    <h2>杨文耀</h2>
                    <p>2019-07-28 15:35:03</p>
                </div>
            </div>
            <div class="right">领取红包<span>￥5.62</span>到佣金余额</div>
        </li>
    </ul>
    <div class="Nodata">加载完毕</div>
   
  </div>
</template>
<script>
export default {
    data () {
        return {
            cur:0,
            
        }
    },
    methods:{
      
        
    },
    components:{

    }
}
</script>
<style scoped>
.Nodata {

    color: #b0b0b0;
    text-align: center;
    font-size: 1.6rem;
    margin-top: 4rem
}
 .dateqi li .name {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.dateqi li .right span{
    color: rgb(255, 129, 45)
}
.dateqi li .right {
    font-size: 1rem;
}
.dateqi li .left {
    display: flex;

}
.dateqi li h2 {
    font-size: 1.4rem;
    font-weight: 600;

}
.dateqi li p {
    color: rgb(179, 179, 181);
    font-size: 1rem;
}
.dateqi li {
    display: flex;
    justify-content: space-between;
    padding:1rem;
    background-color: #fff;
}
.touxiang {
   width: 3rem;
    height: 3rem;
    border-radius: .5rem;
    margin-right: 1rem;
}
.content {
    position: absolute;
    left:0;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(245, 245, 245);
}
.header {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;    
}
.header-left {
    width: 20rem;
  display: flex;
  justify-content: space-between;
 
  
}
.header-left li {
  height: 4.5rem;
  line-height: 4.5rem;
  width:10rem;
  text-align: center;
  font-size: 1.4rem;
}
.active {
  border-bottom: 3px solid #48aaff;
  color: #48aaff;
}
.header-right {
    position: absolute;
    right: 0;
    height: 2.4rem;
    width: 3.8rem;
    border-left: 1px solid #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>

