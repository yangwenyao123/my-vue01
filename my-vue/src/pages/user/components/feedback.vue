<template>
    <div class="content">
        <div class="header">
            <router-link to="/" tag="div" class="iconfont iconyou"></router-link>
            <div class="text">千汇凡客服&nbsp;&nbsp;&nbsp;&nbsp;<span v-show="truex">点击留言</span></div>
        </div>
        <div class="wrap">
        <div class="xiaoxi" ref="xiaoxi" >
             
            

            
        </div>

            <ul class="tishihuayu" >
                <li v-for="(item,index) in newlist" :key="index" @click="tishi(item)">{{item}}</li>
            </ul>
          <div class="footer">
            <div class="shurukuang">

                <router-link to="/liuyan" tag="div" class="left"><div class="iconfont xinyouxiang" style="font-size:2rem;"></div>留言</router-link>
                <input type="text" placeholder="请输入..." class="input" v-model="textarea">
                <div class="send" @click="send">发送</div>

            </div>
            <div class="tishi">
                客服软件由53快服提供
            </div>
        </div>
        </div>
      
    </div>
</template>
<script>
export default {
    data () {
        return {
            truex:false,
            textarea:'',
            list:["我是谁","你是谁","刘亦菲","小张","小容","小杨","小敏","小黄","小施","小农","小梁","讲个笑话"],
            newlist:[],
           
        }
    },
    methods:{
        tishi (item) {
                var html =  `<div class="item">
                        <div class="date2"></div>
                         <div class="right">
                           <div class="xiaoxitiao">${item}</div>
                         </div>
                    </div>`
                     this.$refs.xiaoxi.innerHTML += html
                    this.$refs.xiaoxi.scrollTop =this.$refs.xiaoxi.scrollHeight
                    this.newlist = []
                  
                    this.textarea = ''
                    this.panduan(item)
                   
        },
        panduan (item) {
           
            var that = this
            var item = item || ''
             var deleteN=document.querySelectorAll('.h');

            if(item.indexOf("我是谁")>-1 || this.textarea.indexOf("我是谁") > -1){
               

                    for(var i=0;i<deleteN.length;i++){
                        this.$refs.xiaoxi.removeChild(deleteN[i]);
                    }
                
                this.kefu("一个神奇的程序猿")
            }else if(item.indexOf("你是谁") > -1 || this.textarea.indexOf("你是谁") > -1){
                  

                    for(var i=0;i<deleteN.length;i++){
                        this.$refs.xiaoxi.removeChild(deleteN[i]);
                    }
                  
                this.kefu("妲己宝宝")
            }else if(item.indexOf("讲个笑话") > -1 || this.textarea.indexOf("讲个笑话") > -1){
                  

                    for(var i=0;i<deleteN.length;i++){
                        this.$refs.xiaoxi.removeChild(deleteN[i]);
                    }
                  
                this.kefu("老班长把最后一块皮鞋让给了一个虚弱的小战士，自己却装作吃的很饱的样子。看着小战士嚼着皮鞋，老班长心想，等解放了，一定要让全国人民吃上皮鞋。")
            }else if(item.indexOf("千汇凡") > -1 || this.textarea.indexOf("千汇凡") > -1){

                   for(var i=0;i<deleteN.length;i++){
                        this.$refs.xiaoxi.removeChild(deleteN[i]);
                    }

                this.kefu("一个科技型的公司")

            }else if(item.indexOf("刘亦菲") > -1 || this.textarea.indexOf("刘亦菲") > -1){

                   for(var i=0;i<deleteN.length;i++){
                        this.$refs.xiaoxi.removeChild(deleteN[i]);
                    }

                this.kefu("刘亦菲，1987年8月25日出生于湖北省武汉市，华语影视女演员、歌手，毕业于北京电影学院2002级表演系本科班")
            }else {
                    
                    this.kefu("书到用时方恨少，这可能说的就俺。",)

                    var deleteN=document.querySelectorAll('.h');
           
                    for(var i=0;i<deleteN.length;i++){
                        this.$refs.xiaoxi.removeChild(deleteN[i]);
                    }

                    this.$refs.xiaoxi.innerHTML += `<div class="h">
                        <div class="text">由于当前客服不在线,你可以选择给我们留言,我们会及时给予回复</div>
                        <div class="liuyan">点击留言</div>
                    </div>`
 
                    document.querySelector('.liuyan').onclick=function () {
                       that.$router.push('/liuyan')
                    }; 
            }
        },
        send () {
            if(this.textarea.trim()) {
               
            //    var xiaoxi = document.querySelector(".xiaoxi")
               var html =  `<div class="item">
                        <div class="date2"></div>
                         <div class="right">
                           <div class="xiaoxitiao">${this.textarea}</div>
                         </div>
                    </div>`
                   
                  var that = this
                  this.$refs.xiaoxi.innerHTML += html
                  document.querySelector(".date2").innerHTML = this.datef()
                  this.$refs.xiaoxi.scrollTop =this.$refs.xiaoxi.scrollHeight
                  this.panduan()
                   this.textarea = ''
            }
            
        },
    
        // 自动回复
        kefu (v) {
           
             var html =  `<div class="item">
                            <div class="date2"></div>
                         <div class="left">
                            <img  class="usertou" src="http://pic.pc6.com/up/2017-9/20179816131427908567.jpeg"/>
                           <div class="xiaoxitiao">${v?v:'主人，请尽情吩咐妲己吧'}</div>
                         </div>
                        
                    </div>`
                this.$refs.xiaoxi.innerHTML += html
                var that = this

                document.querySelector(".date2").innerHTML = this.datef()
                this.$refs.xiaoxi.scrollTop =this.$refs.xiaoxi.scrollHeight
          
        },
        jus () {
            console.log(123);
            
        },
        datef () {
              var myDate = new Date();
           return myDate.toLocaleString( );
        },
        liuyan () {
            this.$route.push('/liuyan')
        }

    },
        watch:{
            textarea () {
                var arr = []
                
                if(!this.textarea){
                     this.newlist = []
                     return 
                }

                this.list.forEach((value)=>{

                    if(value.indexOf(this.textarea)>-1){
                        console.log(value);
                        
                        arr.push(value)
                    }
                })
                this.newlist  = arr

            }
        },
    mounted () {
        document.addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);
        this.kefu()

    }
}
</script>
<style scoped>
.tishihuayu {
    border-top: 1px solid #f0f0f0;
    padding-left:1rem;
    max-height:15rem;
    overflow: scroll;
}
.tishihuayu li {
    height: 4rem;
    line-height: 4rem;
}

.xiaoxi >>> .text {
    width: 80%;
    margin: 0 auto;
    background: rgb(240, 243, 252);
    line-height: 1.6rem;
    padding: .6rem;
    border-radius: .4rem;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: rgb(112, 120, 130)
}
.xiaoxi >>> .liuyan {
    text-align: center;
    color: rgb(48, 122, 165);
}
.xiaoxi >>> .left {
    display: flex;
}

.xiaoxi >>> .item {
    margin: 1rem;
 
}
.xiaoxi >>>  .right {
    display: flex;
    justify-content: flex-end;
}   
.xiaoxi >>> .usertou {
    width: 4rem;
    height: 4rem;
    border-radius: 1rem;
    
}
/* .xiaoxi >>>.right .usertou {
    margin-left: 1rem;
} */

.xiaoxi >>> .date2 {
    text-align: center;
    margin:1rem;
    font-size: 1rem;
    color: #ccc;

}
.xiaoxi >>> .xiaoxitiao {
    padding: 1rem;
    line-height: normal;
    border-radius: .5rem;
    position: relative;
    max-width: 10rem;
    word-break: break-all;
}
.xiaoxi >>>.right  .xiaoxitiao {
    background-color: #009bfa;
}
/* .xiaoxi >>>.right .xiaoxitiao:after {
    content: "";
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-left: 12px solid #009bfa;
    position: absolute;
    top: 1rem;
   
    right: -.7rem;
} */
/* .xiaoxi >>>.left .xiaoxitiao:after {
    content: "";
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 12px solid #009bfa;
    position: absolute;
    top: 1rem;
    
    left: -.7rem;
} */
.xiaoxi >>>.left .xiaoxitiao{
    background-color:rgb(240, 243, 248) ;
}
.xiaoxi >>> .left  .usertou {
    margin-right: 1rem;
}
.date {
    text-align: center;
    margin:2rem;
    font-size: 1rem;
    color: #ccc;
}
.input::-webkit-input-placeholder { /* WebKit browsers */ 

    color: 169, 173, 176; 
    font-size: 1.2rem;

} 
.shurukuang  .send {
    width: 15%;
    color: #019afd;
    text-align: center;
    
}
.shurukuang .input{
     width: 70%;
     background: #fff;
     padding-left: 1rem;
     box-sizing: border-box;
     display: flex;
     align-items: center;
     word-break: break-all;
     
}
  /* .shurukuang .input::-webkit-input-placeholder{
     line-height: 50px
    }  */
.shurukuang .left {
    text-align: center;
     width: 15%;
    
     color: #9ca4a6;
     
}
.shurukuang {
    width: 100vw;
    height: 60%;

    display: flex;
    align-items: center;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
}
.tishi {
    height: 30%;
    text-align: center;
    font-size: 1.2rem;
    color: rgb(167, 171, 174);
    margin-top: .1rem;
}
.footer {
    height:7.2rem;
  
}
.wrap {
    position:fixed;
    left: 0;
    right: 0;
    bottom: 0;
}
.xiaoxi {
    height: 52rem;
    background-color: #fff;
    padding-top: 6rem;
    overflow-y: scroll;
    box-sizing: border-box;
    padding-bottom: 4rem;
  
 
}
.header {
        width: 100%;
        height: 4.8rem;
        background-color: rgb(0, 155, 250);
        display: flex;
        align-items: center;
        color: #fff;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 99
}
    .header .iconfont {
        width:10%;
        font-weight: 600;
        font-size: 2.6rem;
        transform: rotate(180deg)
    }
     .header .text {
         width: 90%;
         text-align: center;
     }
     .content {
         /* height: 100vh; */
         overflow: hidden;
         font-size: 1.4rem
     }
</style>