<template>
    <div class="content">
        <div class="jibenxinxi">
            <div class="title">基本信息</div>
            <ul>
                <li  v-for="(item,index) in jibenxinxi" :key="index"  @click="selected1($event)" >{{item}}</li>
            </ul>
        </div>

        <div class="concerns">
            <div class="title">关注点</div>
            <ul>
                <li  v-for="(item,index) in concerns" :key="index"  @click="selected2($event)" >{{item}}</li>
            </ul>
        </div>
        <div class="level">
            <div class="title">级别</div>
            <ul>
                <li  v-for="(item,index) in level" :key="index"  @click="selected3(index)" :class="activeClass3==index?'active':''">{{item}}</li>
            </ul>
        </div>
        <div class="type">
             <div class="title">类型</div>
            <ul>
               <li  v-for="(item,index) in type" :key="index"  @click="selected4(index)" :class="activeClass4==index?'active':''">{{item}}</li>
            </ul>
        </div>

        <div class="state">
            <div class="title">跟进状态</div>
            <ul>
                <li  v-for="(item,index) in state" :key="index"  @click="selected5(index)" :class="activeClass5==index?'active':''">{{item}}</li>
            </ul>
        </div>

        <div class="Clinch">
             <div class="title" ref="s">成交状态</div>
            <ul>
                <li  v-for="(item,index) in Clinch" :key="index"  @click="selected6(index)" :class="activeClass6==index?'active':''">{{item}}</li>
            </ul>
        </div>

         <div class="other">
             <div class="title">其他</div>
            <ul>
                <li  v-for="(item,index) in other" :key="index"  @click="selected7(index)" :class="activeClass7==index?'active':''">{{item}}</li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    data () {
        return {
            jibenxinxi:['独立自主','女','有两把刷子','胆大心细','90后','80后'],
            concerns:['在意质量','在意服务','在意价格'],
            level:['潜在客户','核心客户','重要客户','一般客户','意向客户','流失客户'],
            type:['潜在客户','核心客户','重要客户','一般客户','意向客户','流失客户'],
             state:['合同审核','核心客户','重要客户','一般客户','意向客户','流失客户'],
            Clinch:['已成交','已支付首付款'],
            other:['已成交','已支付首付款','重要客户','一般客户','意向客户','流失客户'],
            activeClass1: -1, 
            activeClass2: -1, 
            activeClass3: -1, 
            activeClass4: -1, 
            activeClass5: -1, 
            activeClass6: -1, 
            activeClass7: -1, 
            label:[],
            a:''
            
            
        }
    },
    beforeRouteLeave(to, form, next) {
        console.log(to, form, next);
        if(to.path="/chakan"){
            
            this.a = 123
  
        }
        
        
    
        next()
    },
      beforeRouteEnter(to, from, next){
    //不能直接获取this实例
    console.log(this.a);
    
    next(vm => {
        console.log(555);
        
      if (from.query.checkFull) {
        vm._data.checked=true;
      }
    })
  },

    mounted () {
        console.log(this.a);
        
    },
    methods:{
        selected1 (e) {
         
            var e = e.target
            if(e.classList.contains("active")){
               e.classList.remove("active")

                var i = this.label.findIndex((v) => {

                    return  v==e.innerText
                
                });
                console.log(i);
             
                this.label.splice(i,1)

                console.log(this.label);
            }else {
                 e.classList.add("active")
                 this.label.push(e.innerText)
                 console.log(this.label);

            }

        },
        leabeList () {
            console.log(123);
            
                
        },
          selected2 (e) {
            var e= e.target
            if(e.classList.contains("active")){
               e.classList.remove("active")
               
                var i = this.label.findIndex((v) => {
                    return  v==e.innerText
                
                });

                this.label.splice(i,1)
                 console.log(this.label);
            }else {
                
                e.classList.add("active")
                this.label.push(e.innerText)
                console.log(this.label);
                // this.$store.commit("addLabel",{})
            }
        },
           selected3 (index) {
            this.activeClass3 = index;
        },
          selected4 (index) {
            this.activeClass4 = index;
        },
           selected5 (index) {
            this.activeClass5 = index;
        },
          selected6 (index) {
            this.activeClass6 = index;
        },
           selected7 (index) {
            this.activeClass7 = index;
        },
      
    }
}
</script>

<style scoped>
.other ul { 
    justify-content:  flex-start;
}
.other ul li{
    margin-right: 1rem;
}
.Clinch ul { 
    justify-content:  flex-start;
}
.Clinch ul li{
    margin-right: 2rem;
}

.jibenxinxi .active {
    color: #8e9ed4;
    background-color: #d4e4f1;
}
.concerns .active {
    color: #fbdec9;
    background-color: #ffb682;
}
.state .active {
    color: #fbdec9;
    background-color: #ffb682;
}
.Clinch .active {
    color: #fbdec9;
    background-color: #ffb682;
}

.level .active {
    color: #fbdec9;
    background-color: #ffb682;
}
 .type .active  {
    color: #8e9ed4;
    background-color: #d4e4f1;
}
.level .active {
    color: #fbdec9;
    background-color: #ffb682;
}
.other .active {
    color: rgb(255, 185, 135);
    background-color: #fde2df;
}
ul {
    display: flex;
    margin-bottom: .2rem;
    justify-content: space-between;
    flex-wrap: wrap;
}
li {
    width: 30%;
 height: 3rem;
    text-align: center;
    line-height: 3rem;
    margin-bottom: 2rem;
   
    color: #808080;
    background-color: #eeeeee;

}

.title {
    height: 4rem;
    line-height: 4rem;
  
    color: #535353;
}
    .content {
        padding: 1rem;
        font-size:1.2rem;
    }
</style>

