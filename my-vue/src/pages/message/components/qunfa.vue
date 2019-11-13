<template>
  <div class="contentx">
    <div class="title">群发消息内容</div>
    <div class="textBox">
      <textarea name id cols="30" rows="10" maxlength="400" @input="descInput" v-model="desc"></textarea>
      <span class="text">{{remnant}}/400字</span>
    </div>

    <div class="uploadx">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
    </div>

    <div class="remind">
      <h2>特别提醒</h2>
      <p>为了响应微信服务通知原则，请忽滥用群发服务通知功能</p>
    </div>

    <div class="send">
      <div class="textx">
        <h2>选择要发送的客户</h2>
        <p>其中0人可以接受强提醒</p>
      </div>
    </div>
      <div class="border_dashed border_dashedWrap">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible" size="tiny">
            <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </div>
      <div class="sub">发送消息</div>
   
  </div>
</template>
<script>

export default {
  data() {
    return {
      remnant: 400,
      desc:'',
      dialogImageUrl: '',
      dialogVisible: false
    };
  },
  components:{
    
  },
  methods: {

    // 文本输入框
    descInput() {
      var txtVal = this.desc.length;
      this.remnant = 400 - txtVal;
    },
    // 上传图片
     handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      }
  }
};
</script>
<style scoped>

.border_dashedWrap >>>  .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 8px 8px 0;
    display: inline-block;
    width: .6rem;
    height:.6rem;
  
}

.border_dashedWrap >>> .el-upload-list--picture-card {
   margin: 0;
   display: inline;
   vertical-align: top;
   display: inline-block;
 
}


.border_dashedWrap >>> .el-upload--picture-card i {
    font-size: 12px;
}

.border_dashedWrap  >>> .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #a1a1a1;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
       width: 3.6rem;
    height: 3.4rem;
    line-height: 3.4rem;
    vertical-align: top;
    display: inline-block;
    margin-left: 1rem;
}

.uploadx >>>  .el-upload-list__item {
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #c0ccda;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 8px 8px 0;
    display: inline-block;
    width: 58px;
    height: 53px;
  
}

.uploadx >>> .el-upload-list--picture-card {
   margin: 0;
   display: inline;
   vertical-align: top;
   display: inline-block;
 
}
.uploadx >>> .el-upload--picture-card i {
    font-size: 20px;
}

.uploadx  >>> .el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #a1a1a1;
    border-radius: 6px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 58px;
    height: 53px;
    line-height: 53px;
    vertical-align: top;
    margin-left: .2rem;
    display: inline-block;
}
.sub {
    width: 28rem;
    height: 4rem;
    border-radius: 4rem;
    background-color: #348bfc;
    color: #fff;
    text-align: center;
    line-height: 4rem;
  
    background: linear-gradient(to right, #43c5fe , #2f8bfe);
    margin: 4rem auto;
    font-size: 1.4rem;
}
.send {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  height:5rem;
  padding: 1rem;

}
.border_dashedWrap {

  display: flex;
}

h2 {
  font-weight: 600;
  font-size: 1.4rem;
  margin-bottom: .8rem;
}
p {
  color: rgb(175, 175, 175);
  font-size: 12px;
  -webkit-transform-origin-x: 0;
  -webkit-transform: scale(0.90);
  white-space:nowrap;
}
.remind {
  width: 100%;
  border-radius: .5rem;
  box-shadow: 0 0 5px #ccc;
  padding: 1rem;
  box-sizing: border-box;
}
.addImg {
  width: 1rem;
  height: 1rem;
  border: 1px dashed #ccc;
  margin-left: .2rem;
  border-radius: .1rem;
}
.uploadx {
  width: 100%;
  height: 8rem;
  border-radius: .5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px #ccc;
  padding-left: 1rem;
  box-sizing: border-box;
}
.text {
    position: absolute;
    bottom: .2rem;
    right:.2rem;
    font-size: 12px;
}
textarea {
  width: 100%;
  height: 100%;
  padding: .6rem;
  box-sizing: border-box;
  font-size: 1.4rem;

}
.contentx {
  padding: 0 1rem;
}
.title {
      height: 4.5rem;
    line-height: 4.5rem;
    font-weight: 600;
    text-align: center;
    font-size: 1.4rem;
}
.textBox {
  width: 100%;
  height: 12rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 5px #ccc;
  overflow: hidden;
  position: relative;;
}
</style>


