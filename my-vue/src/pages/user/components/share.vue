<template>
    <div class="content">
        <h3>请设置分享后文案</h3>
        <div class="text-wrap">
            <textarea name="" id="" cols="30" rows="10" v-model="num" maxlength="30"></textarea>
            <span>{{num.length}}/30</span>
        </div>
        <div class="buocun">保存</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            num:''
        }
    },
    mounted() {
  
    var addHome = this.$store.state.addHome
    this.num = addHome.shareCopy

  },

    
}
</script>
<style scoped>
.text-wrap {
    position: relative;
}
.text-wrap  span {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    font-size: 1.2rem;
}   
h3 {
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    color: #000;
    font-size: 1.6rem

}
.content {
    padding: 0 1rem;
    font-size: 1.4rem;
}
    textarea {
        border-radius: .8rem;
       height: 12rem;
        background-color: rgb(231, 234, 243);
        width: 100%;
            padding: 1rem;
        box-sizing: border-box;
        color: rgb(181, 181, 181)
    }
    .buocun {
    width: 95%;
    height: 4rem;
    line-height: 4rem;
    margin: 2rem auto;
    font-size :1.6rem;
    background: linear-gradient(to right, #7cc0ff , #399ffc);
    border-radius: 2rem;
    text-align: center;
    color: #fff;
    }
</style>