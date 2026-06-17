<script>
import Dessert from './views/dessert.vue';
import First from './views/first.vue';
import MainFood from './views/mainFood.vue';
import Side from './views/side.vue';
import Starter from './views/starter.vue';

export default {
   name: "Main",
   data() {
      return {}
   },
   components: {
      Starter,
      First,
      MainFood,
      Side,
      Dessert,
   },
   
   methods: {
      searchRecipes(){
         let searchInput = document.getElementById('searchInput');
         let searchQuery = searchInput.value.toLowerCase().trim();

         let recipeCards = document.querySelectorAll('.recipe-card');

         recipeCards.forEach(card =>{
            let recipeData = (card.getAttribute('data-recipe') || "").toLowerCase();
            
            if (recipeData.includes(searchQuery)){
               card.classList.remove('hidden');
            }else{
               card.classList.add('hidden');
            }
         });
      }
   }
};
</script>

<template>
   <div class="main-wrapper">
      <div class="inputsearch">
         <input type="text" id="searchInput" placeholder="Cerca ricette..." @input="searchRecipes">
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