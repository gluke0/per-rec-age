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
            <div class="inputsearch">
               <i class="ri-search-line"></i>
               <input type="text" placeholder="Cerca">
            </div>
            <div class="info-nav">
               <i class="ri-information-2-line"></i>
            </div>
         </div>
         <div class="info-div">
            <h3>Legenda</h3>
            <span>Carne:</span>
            <span>Pesce:</span>
            <span>Vegano:</span>
            <span>Vegetariano:</span>
         </div>
      </header>
   </section>
    
</template>

<style lang="scss">
@use '../style/main.scss';
</style>