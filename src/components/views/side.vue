<script >

  export default{
    name: "Side",
    data(){
      return{
      }
    },
  components:{
  },
};
</script>

<template>
  <section id="side">
    <div class="part-container">
      <div class="part-container-header">
        <h2>Contorni</h2>
      </div>
      <div class="recipe-card-wrapper">

        <!-- polenta croccante -->
        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Polenta Croccante</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/side/polenta-croccante.png" alt="Polenta Croccante">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
              <span class="leg-af inf-r-mar">AF</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Polenta</li>
              </ul>
            </div>
            <div class="recipe-process hidden">
              <ul>
                
              </ul>
            </div>
            <div class="cook-details hidden">
              <div>
                <i class="ri-fridge-line"></i> Conservare in frigorifero.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Per facilitare la frullatura è possibile aggiungere un passaggio con il passaverdure.
                <br>
                <i class="ri-lightbulb-ai-line"></i> A piacere coprire con gelatina una volta versato il patè.
                <br>
                <i class="ri-lightbulb-ai-line"></i> Togliere dal frigorifero 30 minuti prima del consumo per facilitare l'estrazione dallo stampo.
              </div> 
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

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