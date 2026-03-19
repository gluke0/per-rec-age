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

        <!-- feta in pasta fillo -->
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
                <li>> Spennellare con l'olio 3 fogli di pasta fillo e sovrapporre l'uno all'altro.</li>
                <li>> Tagliare la feta trasversalmente e disporne metà al centro della pasta fillo.</li>
                <li>> Avvolgere la feta con la pasta fillo e, se necessario, tagliare la pasta in eccesso.</li>
                <li>> Mettere in friggitrice ad aria, spennellare la superficie con olio e aggiungere i semi di sesamo.</li>
              </ul>
            </div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere per 15/17 min a 180ºC.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> A piacere aggiungere miele in superficie a cottura ultimata.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- salmone saporito in padella -->
         <div class="recipe-card">
          <div class="recipe-title">
            <h3>Salmone Saporito In Padella</h3>
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
                <li>> Spennellare con l'olio 3 fogli di pasta fillo e sovrapporre l'uno all'altro.</li>
                <li>> Tagliare la feta trasversalmente e disporne metà al centro della pasta fillo.</li>
                <li>> Avvolgere la feta con la pasta fillo e, se necessario, tagliare la pasta in eccesso.</li>
                <li>> Mettere in friggitrice ad aria, spennellare la superficie con olio e aggiungere i semi di sesamo.</li>
              </ul>
            </div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere fino al livello di cottura desiderato.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Come mix di spezie consiglio Ariosto per pesce.
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