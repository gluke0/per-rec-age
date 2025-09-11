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
         <div class="logo">
            <img src="/src/assets/logo-nobg.png" alt="Logo">
         </div>
         <div class="fader">
            <!-- this will be used to have a fade between the div -->
         </div>
         <div class="menu">
            <div class="starter">
               Antipasti
            </div>
            <div class="first">
               Primi
            </div>
            <div class="main">
               Secondi
            </div>
            <div class="dessert">
               Dolci
            </div>
            <input type="text" placeholder="Cerca">
         </div>
      </header>
   </section>
    
</template>

<style lang="scss">
@use '../style/main.scss';
</style>