<template>
    <div>
        <div class="top">
        <div class="header">
            <input type="text">
            <button>搜索</button>
        </div>
         <ul class="label">
             <li>预警客户</li>
              <li>4-5天未联系</li>
               <li>3天内联系</li>
               <li>待唤醒客户</li>
              <li>潮流时尚</li>
               <li>90后</li>
               <li>男</li>
         </ul>
        </div>

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
.top {
    padding: 0 1rem;
}
    .header {
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: red;
    
    }
    input {
       width: 80%;
       height: 3.5rem; 
    }
    button {
       width: 15%; 
        height: 3.5rem; 
    }
    .label {
        display: flex;
        flex-wrap: wrap-reverse;

    }
     .label  li {
   
    margin-right: 1rem;
    margin-bottom: 1rem;
    text-align: center;
   
    border: 1px solid #ccc;
    padding: .6rem 1rem;
    border-radius: 2rem;
     }
</style>