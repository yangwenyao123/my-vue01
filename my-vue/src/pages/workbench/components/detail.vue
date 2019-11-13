<template>
    <div class="content">
        <div class="header">
            <div class="left iconfont iconyou"></div>
            <div class="midden">2019-08-28</div>
            <div class="right iconfont iconyou"></div>
        </div>
        <div class="Nodata">
      <img src="../../../assets/images/17.png" alt />
    </div>
    </div>
</template>
<style scoped>
.Nodata {
     width: 20rem;
    height: 16rem;
    margin: 100px auto;
}
.Nodata img {
  width: 100%;
  height: 100%;
}
.content {
    
  position: absolute;
  left: 0;
  right: 0;
  top:0;
  bottom: 0;
  background-color: rgb(245, 245, 246);
}
      .header {
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 600;
        background-color: #fff;
        font-size: 1.6rem;
        padding: 0 1rem;

    }
    .header .left  {
    transform:rotate(180deg);
}
.header .iconfont{
    font-size: 2rem;
    color: #c8c8cd;
}
</style>

