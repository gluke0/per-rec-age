<script>
   import Dessert from './views/dessert.vue';
   import First from './views/first.vue';
   import MainFood from './views/mainFood.vue';
   import Side from './views/side.vue';
   import Starter from './views/starter.vue';
 
export default{
   name: "Main",
   data(){
      return{
      }
   },
   components:{
      Starter,
      First, 
      MainFood,
      Side,
      Dessert,
   }
};
</script>

<template>
   <div class="main-wrapper">
      <div class="inputsearch">
         <i class="ri-search-line"></i>
         <input type="text" placeholder="Cerca..." v-model="searchQuery">
      </div>
      <Starter></Starter>
      <First></First>
      <MainFood></MainFood>
      <Side></Side>
      <Dessert></Dessert>
   </div>
</template>

<style lang="scss">
@use '../style/main.scss';
</style>