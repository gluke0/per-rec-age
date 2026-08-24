<script>
import Dessert from './views/dessert.vue';
import First from './views/first.vue';
import MainFood from './views/mainFood.vue';
import Side from './views/side.vue';
import Starter from './views/starter.vue';
import BackToTop from './views/backToTop.vue';

export default {
   name: "Main",
   data() {
      return {
         searchText: ''
      }
   },
   components: { Starter, First, MainFood, Side, Dessert, BackToTop },
   
   methods: {
      searchRecipes(){
         let searchInput = document.getElementById('searchInput');
         let searchQuery = (searchInput?.value || this.searchText || '').toLowerCase().trim();
         let recipeCards = document.querySelectorAll('.recipe-card');
         recipeCards.forEach(card =>{
            let recipeData = (card.getAttribute('data-recipe') || "").toLowerCase();
            if (recipeData.includes(searchQuery)){
               card.classList.remove('hidden');
            }else{
               card.classList.add('hidden');
            }
         });
      },
      clearSearch(){
         let searchInput = document.getElementById('searchInput');
         if (searchInput) {
            searchInput.value = '';
         }
         this.searchText = '';
         this.searchRecipes();
      }
   }
};
</script>

<template>
   <div class="main-wrapper">
      <div class="inputsearch">
         <div class="search-input-wrapper">
            <input v-model="searchText" type="text" id="searchInput" placeholder="Cerca ricette..." @input="searchRecipes">
            <button v-if="searchText" type="button" class="clear-search-btn" @click="clearSearch" aria-label="Cancella ricerca">✕</button>
         </div>
      </div>
      <Starter></Starter>
      <First></First>
      <MainFood></MainFood>
      <Side></Side>
      <Dessert></Dessert>
      <BackToTop></BackToTop>
   </div>
</template>

<style lang="scss">
   @use '../style/main.scss';
</style>