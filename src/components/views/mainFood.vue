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
                <li>- Miele</li>
              </ul>
            </div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Lavare i pomodorini, tagliarli a metà e metterli in una ciotola con olio EVO, un pizzico di sale e origano.</li>
                <li>> Una volta mescolato delicatamente, adagiare i pomodirini, uno ad uno, sulla teglia della friggitrice ad aria con la polpa rivolta verso l'alto.</li>
                <li>> Aggiungere qualche granello di zucchero di canna per aiutare la caramelizzazione e cuocere.</li>
              </ul>
            </div>
            <div class="cook-details hidden">
              <i class="ri-fire-line"></i> Cuocere per 25/30 min a 160ºC.
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