<script >

  export default{
    name: "MainFood",
    data(){
      return{
      }
    },
  components:{
  },
};
</script>

<template>
  <section id="mainfood">
    <div class="part-container">
      <div class="part-container-header">
        <h2>Secondi</h2>
      </div>
      <div class="recipe-card-wrapper">

        <!-- main food 1 -->
        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Feta In Pasta Fillo</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/mainfood/feta-pastafillo.png" alt="Feta Con Pasta Fillo">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
              <span class="leg-af inf-r-mar">AF</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Feta</li>
                <li>- Pasta fillo</li>
                <li>- Olio EVO</li>
                <li>- Semi di sesamo</li>
                <li>- Miele</li>
              </ul>
            </div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Prendere 3 fogli di pasta fillo e spennellarli con l'olio sovrapponendoli l'uno all'altro.</li>
                <li>> Tagliare la feta per il verso longitudinale e disporne una metà al centro della pasta fillo.</li>
                <li>> Avvolgere la feta con la pasta fillo, se abbondante è possibile accorciare le estremità.</li>
                <li>> Porre nella friggitrice ad aria, spennellare la superficie e cospargere di semi di sesamo.</li>
              </ul>
            </div>
            <div class="cook-details hidden">
              <i class="ri-fire-line"></i> Cuocere per 15/17 min a 180ºC.
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