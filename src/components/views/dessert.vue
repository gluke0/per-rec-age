<script >

  export default{
    name: "Dessert",
    data(){
      return{
      }
    },
  components:{
  },
};
</script>

<template>
  <section id="dessert">
    <div class="part-container">
      <div class="part-container-header">
        <h2>Dolci</h2>
      </div>
      <div class="recipe-card-wrapper">

        <!-- crostata -->
        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Crostata</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/mainfood/salmone-saporito.png" alt="Salmone Saporito In Padella">
            </div>
            <div class="recipe-info-details">
              <span class="leg-p inf-r-mar">P</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Trancio di salmone</li>
                <li>- Spezie</li>
              </ul>
            </div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Scaldare una padella antiaderente a fuoco medio e porre il salmone dalla parte della pelle.</li>
                <li>> Speziare e lasciare cuocere a fuoco medio qualche minuto.</li>
                <li>> Girare il salmone, speziare e lasciare cuocere fino ad ottenere una leggera crosticina.</li>
                <li>> Scottare ogni lato del trancio e terminare di cuocere fino a piacimento utilizzando la pelle come protezione.</li>
              </ul>
            </div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere fino al livello di cottura desiderato.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Come mix di spezie consiglio Ariosto per pesce.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Per terminare la cottura è possibile abbassare la fiamma.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- torta di cioccolato -->

        <!-- torta di rose -->

        <!-- torta estiva al cocco -->
         
        <!-- torta mars -->
      
      </div>
      <button class="backtotop">
        <a href="#logo"><i class="ri-arrow-up-box-fill"></i></a>
      </button>
    </div>
  </section>
</template>

<style lang="scss">
@use '../../style/main.scss';
</style>