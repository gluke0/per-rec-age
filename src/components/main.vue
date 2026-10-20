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
         let normalize = (str) => (str || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
         let tokens = normalize(searchInput?.value || this.searchText || '').split(/\s+/).filter(Boolean);
         let recipeCards = document.querySelectorAll('.recipe-card');
         recipeCards.forEach(card =>{
            if (!tokens.length){
               card.classList.remove('hidden');
               return;
            }
            let title = card.querySelector('.recipe-title h3')?.textContent || '';
            let haystack = normalize(title + ' ' + (card.getAttribute('data-recipe') || ''));
            card.classList.toggle('hidden', !tokens.every(token => haystack.includes(token)));
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
   <main class="main-wrapper" id="top">
      <div class="inputsearch">
         <label for="searchInput">Cerca nel ricettario</label>
         <div class="search-input-wrapper">
            <i class="ri-search-2-line" aria-hidden="true"></i>
            <input v-model="searchText" type="text" id="searchInput" placeholder="Es. pasta, cioccolato..." @input="searchRecipes">
            <button v-if="searchText" type="button" class="clear-search-btn" @click="clearSearch" aria-label="Cancella ricerca">✕</button>
         </div>
      </div>
      <Starter></Starter>
      <First></First>
      <MainFood></MainFood>
      <Side></Side>
      <Dessert></Dessert>
      <BackToTop></BackToTop>
   </main>
</template>

<style lang="scss">
   @use '../style/main.scss';
</style>