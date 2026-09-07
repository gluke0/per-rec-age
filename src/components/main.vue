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
   <main class="main-wrapper" id="top">
      <section class="intro" aria-labelledby="page-title">
         <div>
            <p class="eyebrow">IL RICETTARIO DI CASA</p>
            <h1 id="page-title">Cosa portiamo<br><em>in tavola?</em></h1>
            <p class="intro-copy">Idee buone, ingredienti semplici e quel pizzico di creatività che cambia tutto.</p>
         </div>
         <div class="intro-note">
            <span class="note-icon"><i class="ri-sparkling-2-line" aria-hidden="true"></i></span>
            <span><strong>Scelto per te</strong><br>Ricette da preparare oggi</span>
         </div>
      </section>
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