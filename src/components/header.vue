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
            <h1>Cheffy</h1>
         </div>
         <div class="menu">
            <div class="starter">
               Antipasti
            </div>
            <div class="first">
               Primi
            </div>
            <div class="main">
               <a href="#mainfood">Secondi</a>
            </div>
            <div class="side">
               Contorni
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