<template>
  <div>
    <ul>
      <li v-for="(item,index) in res"  :key="index">
         <div v-for="(value,i) in item" :key="i">{{value.name}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data  () {
    return {
      res:[[{name:'yang1'},{name:'yang1'}],[{name:'yang2'},{name:'yang2'}]]
    }
  },
  mounted () {

  }
}
</script>