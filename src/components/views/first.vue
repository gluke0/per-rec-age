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

        <!-- first 1 -->
        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Ricetta</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/first/" alt="">
            </div>
            <div class="recipe-info-details">
              <span class="leg-veg inf-r-mar">VEG</span>
              <span class="leg-v inf-r-mar">V</span>
              <span class="leg-af inf-r-mar">AF</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Pomodorini ciliegino</li>
                <li>- Olio EVO</li>
                <li>- Sale</li>
                <li>- Origano</li>
                <li>- Zucchero di canna</li>
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
              <div>
                <i class="ri-fire-line"></i> Cuocere per 25/30 min a 160ºC.
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