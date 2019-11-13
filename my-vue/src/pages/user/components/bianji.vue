<template>
    <div class="content">
        <ul>
            <li>话术内容</li>
            <li class="text">{{item}}</li>
            <li>关键词</li>
            <li>
                <span v-for="item in label" style="margin-right: 1rem;">{{item}}</span>
            </li>
        </ul>
       
        <div class="btn bianji" @click="bianji">编辑</div>
        <div class="btn shanshu" @click="shanchu">删除</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            item:'',
            index:'',
            label:[]
        }
    },
    methods:{
        shanchu () {
             this.$store.commit('shanchu',{index:this.index})
             this.$router.push('/huashu')
        },
        bianji () {
           this.$router.push({
               name:'addHua',
               params:{  
                   item:this.item,
                   index:this.index,
                   label:this.label
               }
               
            }) 
        }   
    },
    mounted () {

       var a = this.$route.params.item
        this.index = this.$route.params.index
      
       this.item = a.speechidContent
       this.label = a.label

    }
}
</script>
<style scoped>
.text {
   line-height: 1.4rem;
}
.btn {
    width: 100%;
    height: 4rem;
    border-radius: 2rem;
    text-align: center;
    line-height: 4rem;
    margin-top: 3rem;
    font-size: 1.6rem;
    
}
.bianji {
    background:linear-gradient(to right,#69ace7,#49a0ec) ;
    color: #fff;    
}   
.shanshu {
    background:#e7e9f5;
    color: rgb(71, 71, 71);  
}
li {

    padding: 1rem 0 2rem 0;
    word-break: break-all;
    
}


ul li:nth-child(1){
    font-size: 1.2rem;
    color: rgb(216, 216, 216);
}
ul li:nth-child(3){
    font-size: 1.2rem;
    color: rgb(216, 216, 216);
}
 ul li:nth-child(2){
    font-size: 1.8rem;
    color: #000;
    
}

 ul li:nth-child(4){
    font-size: 1.8rem;
    color: #000;
    
}

    .content {
        padding:0 1rem;
    }
</style>