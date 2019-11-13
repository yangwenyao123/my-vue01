<template>
    <div class="content">
        <div class="card">
            <img src="../../../assets/images/0.jpg" alt="" class="toux">
            <div class="name">李欣怡</div>
        </div>
        <ul>
            <li><span>备注名</span><input type="text" placeholder="未填写"  dir='rtl'></li>
             <li><span>公司名</span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li><span>职位  </span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li>
                <span>性别 </span>
                <div class="right">
                    
                    <div class="nan">男<input type="radio" name="sex" class="gcs-radio" id="男" />&nbsp;<label for="男"></label>
                     </div>

                    <div class="nv">女<input type="radio" name="sex" class="gcs-radio" id="女" />&nbsp;<label for="女"></label>
                    </div>
                    
                </div>
            </li>
            <li><span>备注手机</span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li><span>邮箱</span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li><span>详细地址</span><input type="text" placeholder="未填写"  dir='rtl'></li>
            <li><span>生日</span><span @click ="setDate">{{date?date:'生日日期'}}</span></li>
        </ul>
         <div class="baocun">保存</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            date:''
        }
    },
    methods:{
         setDate(){
	       this.$picker.show({
	         type:'datePicker',
	         onOk: (date) =>{
	           this.date = date
	         }
	       });
        }
    }
    
}
</script>
<style scoped>
.baocun {
         width: 26rem;
    height: 4rem;
    text-align: center;
    line-height: 4rem;
    color: #fff;
    border-radius: 2rem;
    margin: 2rem auto;
    background: linear-gradient(to right, #43c5fe , #2f8bfe);
}
.gcs-radio {
  display: none;
}

.gcs-radio+label {
      width: 1.2rem;
    height: 1.2rem;
    display: inline-block;
    text-align: center;
    vertical-align: bottom;
    border: 1px solid gray;
    border-radius: 50%;
    line-height: 1.2rem;
}

.gcs-radio:hover+label {
  border: 1px solid #2783FB;
  cursor: pointer;
}

.gcs-radio:checked+label {
  background: #2783FB;
  border: 1px solid #2783FB;

}

.gcs-radio:checked+label:after {
  content: "\2022";
  font-size: 20px;
  color: white;
}

::-webkit-input-placeholder
{
    text-align: right;
    
}
::-moz-placeholder
{
  text-align: right;
}
ul li:last-child {
    border: none;
}
ul {
    border-radius: 1rem;
    box-shadow: 0 0 5px #ccc;
    margin-top: 2rem;
    
    color: rgb(117, 118, 121)
}
li {
   height: 4.5rem;
    line-height: 4.5rem;
    padding: 0 1rem;
    border-bottom: 1px solid #f0f0f0;
   
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

}
li .right {
    display: flex;
    align-items: center;
    width: 7.5rem;
    justify-content: space-between;
}
li .right .nan,.nv {
    display: flex;
    align-items: center;
}

.name {
    font-size:1.6rem;
}
.toux {
   width: 4rem;
    height: 4rem;
    border-radius: .5rem;

}
.card {
    border-radius: 1rem;
    background: url('../../../assets/images/card.png') no-repeat;   
    height: 7.4rem;
    background-size: 100% 100%;
    box-shadow: 0 0 17px rgb(178, 232, 251);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: #fff;
}
.content {
    padding: 1rem;
    font-size: 1.4rem;
}

</style>

