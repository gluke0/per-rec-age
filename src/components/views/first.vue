<script >

  export default{
    name: "First",
    data(){
      return{
      }
    },
  components:{
  },
};
</script>

<template>
  <section id="first">
    <div class="part-container">
      <div class="part-container-header">
        <h2>Primi</h2>
      </div>
      <div class="recipe-card-wrapper">

        <!-- pasta gbp -->
        <div class="recipe-card" data-recipe="pasta gbp grana formaggio pepe burro">
          <div class="recipe-title">
            <h3>Pasta GBP</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/mainfood/salame-tonno.png" alt="Salame Di Tonno">
            </div>
            <div class="recipe-info-details">
              <span class="leg-f inf-r-mar">P</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- </li>
                <li>- </li>
                <li>- </li>
                <li>- </li>
                <li>- </li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> </li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> 
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i>
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