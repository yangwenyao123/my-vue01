<template>
    <div>
        <ul style="font-size:1.4rem">
            <router-link to="/language" tag="li"><div class="left"><div class="icBg icBg1"><i class="iconfont iconyuyin"></i></div>欢迎语设置</div><i class="iconfont iconyou"></i></router-link>
            <router-link to="/share" tag="li"><div class="left"><div class="icBg icBg2"><i class="iconfont iconweb-icon-"></i></div>名片分享文案设置</div><i class="iconfont iconyou"></i></router-link>
        </ul>
    </div>
</template>
<script>
export default {
    data () {
        return {

        }
    },
}
</script>
<style scoped>
.iconyou {
    font-size: 2rem;
}
.icBg {
    margin-right: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 1rem;
    text-align: center;
    

        
}
.icBg1{
    background-color: rgb(250, 156, 62)
}
.icBg2{
    background-color: rgb(33, 139, 254);
}
.left {
    display: flex;
    align-items: center;
}
   .left .iconfont {
        color: #fff;
        font-size: 1.6rem;
        line-height:3rem;
    }
    li {
        height: 5rem;
        display: flex;
        align-items: center;
        padding: 0 1rem;
        justify-content: space-between;
        border-bottom: 1px solid rgb(240, 240, 240);
    }
</style>