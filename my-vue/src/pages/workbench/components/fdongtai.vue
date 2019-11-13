<template>
  <div class="content">
    <!-- 输入框 -->
    <div class="textBox">
      <textarea
        name
        id="textArea"
        cols="30"
        rows="10"
        maxlength="400"
        @input="descInput"
        v-model="desc"
        @click=" focusTextarea"
      ></textarea>
      <span class="text">{{txtVal}}/400字</span>
      <div id="introTxt">说点什么吧</div>
    </div>
    <!-- 上传 -->
    <div class="upload">
      <el-upload
        action="https://airadar.qhfkj.top/commons/uploads/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
        :file-list="fileList"
        :on-success="succ"
       
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible" size="tiny">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </div>

    <div class="btn">
      <div class="fabu" @click="fabu">发布</div>
      <div class="quxiao" @click="quxiao">取消</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      remnant: "",
      desc: "",
      txtVal: 0,
      dialogImageUrl: "",
      dialogVisible: false,
      imgs: [],
      fileList: [],
      staffId: "c0ptQ0oxOTE4QWlvdFZZaXpE"
    };
  },
  watch: {
    fileList() {
      console.log(this.fileList);
    }
  },
  methods: {
      succ (response, file, fileList) {
            var that =  this
      let reader = new FileReader();
      reader.readAsDataURL(file.raw);
      reader.onload = function(e) {
          console.log(this.result);
          
        that.$axios
          .post("https://airadar.qhfkj.top/commons/uploads/", that.$qs.stringify({
            img:this.result
          }))
          .then(res => {

            that.imgs.push(res.data)
          
          });
      };
      },

    fabu() {
      if (!this.desc) {
        return;
      }
      var shuo = this.$qs.stringify({
        staffId: this.staffId,
        friendscontent: this.desc,
        images: this.imgs
      });
      this.$axios.post("/workbench/index/releasearticle", shuo).then(res => {
        
         this.$router.push("/dynamic");
      });
    },
    quxiao() {
      this.$router.push("/dynamic");
    },
    // 文本输入框
    descInput() {
      this.txtVal = this.desc.length;
      //   this.remnant = 400 - txtVal;
    },
    focusTextarea() {
      document.getElementById("introTxt").style.display = "none";
      var temp = document.getElementById("textArea");
      temp.focus();
    },
    // 上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      console.log(file);

      this.dialogImageUrl = file.url;
      console.log(this.dialogImageUrl);

      this.dialogVisible = true;
    }
  },
  mounted() {}
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100%;
}
.btn {
  left: 0;
  right: 0;
  position: absolute;
  bottom: 1rem;
}
.fabu,
.quxiao {
  width: 98%;
  height: 3.2rem;
  text-align: center;
  line-height: 3.2rem;
  border-radius: 0.6rem;
  background-color: rgb(241, 239, 239);
  margin: 0 auto;
  font-size: 1.4rem;
}
.quxiao {
  margin-top: 0.2rem;
}
.upload {
  padding: 0.3rem;
  border-bottom: 1px solid rgb(233, 233, 233);
  border-top: 1px solid rgb(233, 233, 233);
  display: flex;
}
.upload .el-upload-list--picture-card .el-upload-list__item {
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 96px;
  height: 95px;
  margin: 0 8px 8px 0;
  display: inline-block;
}
.upload .el-upload--picture-card {
  background-color: #fbfdff;
  border: 1px dashed #c0ccda;
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 96px;
  height: 95px;
  line-height: 100px;
  vertical-align: top;
}

#introTxt {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  color: rgb(134, 134, 134);
}
.text {
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  font-size: 1.2rem;
}
.textBox {
  width: 100%;
  height: 15rem;
  overflow: hidden;
  position: relative;
  padding: 1rem;
  box-sizing: border-box;
}
</style>

