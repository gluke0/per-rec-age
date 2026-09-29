<script>
 
export default{
   name: "Header",
   data(){
      return{
      }
   },
   components:{
   }
};
</script>

<template>
   <header class="site-header">
      <div class="header-inner">
         <a class="brand" href="#top" aria-label="Torna all'inizio">
            <span class="brand-mark">C</span>
            <span>
               <strong>Cheffy</strong>
               <small>ricette senza complicazioni</small>
            </span>
         </a>
         <nav class="menu" aria-label="Categorie ricette">
            <div class="starter">
               <a href="#starter">Antipasti</a>
            </div>
            <div class="first">
               <a href="#first">Primi</a>
            </div>
            <div class="main">
               <a href="#mainfood">Secondi</a>
            </div>
            <div class="side">
               <a href="#side">Contorni</a>
            </div>
            <div class="dessert">
               <a href="#dessert">Dolci</a>
            </div>
            <button class="info-nav" type="button" aria-label="Apri legenda alimentare" title="Legenda alimentare">
               <span>Legenda</span>
            </button>
         </nav>
         <div class="info-div hidden">
            <h3>Legenda alimentare</h3>
            <button class="close-x" type="button" aria-label="Chiudi legenda">
               <i class="ri-close-line" aria-hidden="true"></i>
            </button>
            <div class="info-elements">
               <div>
                  <span>Carne:</span> <span class="leg-m">C</span>
               </div>
               <div>
                  <span>Pesce:</span>  <span class="leg-f">P</span>
               </div>
               <div>
                  <span>Vegano:</span> <span class="leg-veg">VEG</span>
               </div>
               <div>
                  <span>Vegetariano:</span> <span class="leg-v">V</span>
               </div>
               <div>
                  <span>Friggitrice ad aria:</span> <span class="leg-af">AF</span>
               </div>
            </div>
         </div>
         </div>
   </header>
    
</template>

<style lang="scss">
@use '../style/main.scss';
</style>