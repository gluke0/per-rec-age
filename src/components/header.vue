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

   <section>
      <header>
         <div id="logo">
            <h1>Cheffy</h1>
         </div>
         <div class="menu">
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
            <div class="info-nav">
               <i class="ri-information-2-line"></i>
            </div>
         </div>
         <div class="info-div hidden">
            <h3>Info:</h3>
            <button class="close-x">
               <i class="ri-close-line"></i>
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
      </header>
   </section>
    
</template>

<style lang="scss">
@use '../style/main.scss';
</style>