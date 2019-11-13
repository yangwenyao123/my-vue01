<template>
    <div class="content">
        <div class="top">
            <div class="kongbai"></div>
            <div class="zhangshi">
                <!-- 卡片式 -->
                <ul class="ul" v-show="cur==0">
                    <li>
                        <div class="litop">拨打电话</div>
                        <div class="liBot">18665572292</div>
                    </li>
                    <li>添加微信</li>
                   <li>
                        <div class="litop">复制</div>
                        <div class="liBot">18665572292</div>
                    </li>
                </ul>
                <!-- 折叠式 -->
                <ul class="zedie"   v-show="cur==1">
                    <li><div class="left">手机 18665572292</div><div class="right">拨打</div></li>
                    <li><div class="left">微信</div><div class="right">复制</div></li>
                    <li><div class="left">邮箱</div><div class="right">复制</div></li>
                    <li><div class="left">座机</div><div class="right">拨打</div></li>
                    <li><div class="left">地址</div><div class="right">导航</div></li>
                    
                </ul>


                <div class="btnS">
                    <!-- <div class="btn" v-for="(item,index) in arr" :key="index">{{item.value}}</div> -->
                  
                        <button id="btns1" class="hide">交换联系方式</button>
                        <button id="btns2" class="hide">拨打电话</button>
                        <button id="btns3" class="hide">分享</button>
                        <button id="btns4" class="hide">复制微信</button>
                   
                </div>
            </div>
            <div class="bg"></div>
        </div>
        <!-- 最多只能展示2个标签弹出层 -->
        <div class="dialog" v-show="dialog">
            <span class="iconfont iconduihao" style="color:#fff;font-size:28px;"></span>
            <span>最多只能同时展示2个按钮</span>    
        </div>
        <div class="bottom">
            <h3>设置您希望展示的首页名片按钮</h3>
            <!-- <ul class="btnList" >
                <li ref="li"
                 v-for="(item,index) in btnList"
                 :key="index"  @click="xuanzhe(index,item,$event)"  
                 >{{item.value}}</li>

            </ul> -->

            <ul class="btnList">
                <li id="btn1" @click="aaa(1)">交换联系方式</li>
                <li id="btn2" @click="aaa(2)">拨打电话</li>
                <li id="btn3" @click="aaa(3)">分享</li>
                <li id="btn4" @click="aaa(4)">复制微信</li>
            </ul>

       
            <h3>设置您希望使用的信息呈现方式</h3>
            <ul class="btnList zedian">
                <li :class="{active:cur==0}" @click="cur=0">折叠式</li>
                <li :class="{active:cur==1}"  @click="cur=1">卡片式</li>
            </ul>
            <div class="baocun">保存</div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            text:'',
            arr:[],
            btnList:[
                {id:"0",value:"分享"},{id:"1",value:"复制微信"},{id:"2",value:"拨打电话"},{id:"3",value:"交换联系方式"}],

            dialog:false,
            yangshi:true,
            fasle:false,
            cur:0,
            li:'',
            num:0,
            ids:[]
        }
    },
    methods:{

        hhh(){
         
             this.num = ids.length
            for(var i = 0;i<this.ids.length; i++){
                document.getElementById('btn'+this.ids[i]).classList.add('active');
                document.getElementById('btns'+this.ids[i]).classList.add('show');
                 
            }
        },
     aaa(id){
        
        
         
        if(document.getElementById('btns'+id).getAttribute('class') == 'hide'){
            console.log(123);
            
           this.num = this.num + 1
            console.log(this.num);  
            
            if(this.num<=2){
               
                // e.srcElement.classList.add('btnclass');
                document.getElementById('btns'+id).classList.remove('hide');
                document.getElementById('btns'+id).classList.add('show');
                 document.getElementById('btn'+id).classList.add('active');
            }else {
                alert("1213")
                this.num =  this.num-1
                
            }
            
            
        }else{
             this.num =  this.num-1
             console.log(this.num);
           
            // e.srcElement.classList.remove('btnclass');
            document.getElementById('btns'+id).classList.remove('show');
            document.getElementById('btns'+id).classList.add('hide');
            document.getElementById('btn'+id).classList.remove('active');
        }
    },
    
        ze () {
           var li = document.querySelectorAll(".zedian li") 
           for (let i = 0; i < li.length; i++) {
               li[i].onclick = function () {
              
               }
               
           }
           
        },
        xuanzhe (index,item,e) {
            var li = e.target 

              if(this.arr.length){
                  
                if(this.arr.indexOf(item) > -1) {
                
                    var i = this.arr.findIndex((v) => {
                        return v.id == index;
                    });

                    this.arr.splice(i,1)
                     li.classList.remove("active");
                  }else {
                      if (this.arr.length<2) {
                         this.arr.push(item)
                          li.classList.add('active')
                          return
                      }
                      this.dialog=true
                     setTimeout(()=>{
                         this.dialog=false
                     },2000)
                  }
                      
            }else {
                
                this.arr.push(item)
                li.classList.add('active')
            }

        },
      
    },
    mounted () {
       
        this.ze()
        var addHome = this.$store.state.addHome
        this.ids = addHome.button
        this.hhh()

    }
}
</script>
<style scoped>

.hide {
    display: none;  
}

.content {
    font-size: 1.4rem;
}
.zedie .right {


    border: 1px solid rgb(224, 224, 224);
   

    color: rgb(54, 158, 251);
    
}
.zedie li{
    display: flex;
    height: 4rem;
    align-items: center;
    justify-content: space-between;
   
    color: #616161;
}
.dialog {
        width: 12rem;
    height: 12rem;
    background-color: rgba(0,0,0,.5);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -6rem;
    margin-top: -7rem;
    text-align: center;
   color: #fff;
   display: flex;
   flex-direction: column;
}
.dialog > *{
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .4rem;
}
.active {
    border:1px solid rgb(54, 158, 251) !important;
    color: rgb(54, 158, 251)!important;
}
.bg {
    position: absolute;
    left: 0;
    right: 0;
    bottom:0;
    top:0;
    background-color: rgba(0,0,0,.5);
}
.baocun {
    width: 100%;
        height: 4rem;
    color: #fff;
    border-radius: 2rem;
    text-align: center;
    line-height: 4rem;
    margin-top: 2rem;
    background: linear-gradient(to right, #72bbff , #399ffc);
}
.btnList li {
    width: 45%;
        height: 4rem;
    text-align: center;
    line-height:4rem;
    border: 1px solid rgb(228, 228, 228);
    color: rgb(228, 228, 228);
    margin-bottom: 1.4rem;
   
    border-radius: .5rem;
}
.btnList {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
h3 {
    height:7rem;
    text-align: center;
    line-height:7rem;
  
}

.zhangshi .show {
    width: 12.5rem;
    height: 4rem;
    color: #fff;
    border-radius: 2rem;
    text-align: center;
    line-height: 4rem;
    display: block;
    
    background: linear-gradient(to right, #70aee4, #369efb )
}
.btnS {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 7.4rem;
  
}
.ul {
    display: flex;
    flex-direction: row;
    text-align: center;
    width: 1000px;
}
.ul li {
    display: flex;
    box-sizing: border-box;
        width: 12rem;
        height: 7rem;
    margin-right: 1rem;
    align-items: center;
 
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem 0;
    border-radius: .5rem;
    box-shadow: 0 0 2px #ccc;
    background-color: #fff;
}


.ul li:last-child {
    margin-right: 0;
}
    .top{
        padding: 2rem;
        /* height: 6rem; */
        overflow: hidden;
        position: relative;
        background-color: rgb(228, 227, 227);
    }
    .bottom {
           padding: 0 3rem;
    background-color: #fff;
    padding-bottom: 4rem;
    }
    .kongbai {
        height: 16rem;
        
    }
 
</style>