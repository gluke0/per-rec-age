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

        <!-- pane pita libanese -->
        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Pane Pita Libanese</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/side/pane-pita-libanese.png" alt="Pane Pita Libanese">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- 500g farina</li>
                <li>- 300ml acqua</li>
                <li>- 150ml latte</li>
                <li>- 1 cucchiaino di zucchero</li>
                <li>- 10g sale</li>
                <li>- 1 cucchiaio olio EVO</li>
                <li>- 12g lievito di birra fresco</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Sciogliere il lievito in acqua tiepida e poi unire a farina, olio e zucchero.</li>
                <li>> Cominciare ad impastare aggiungendo l'acqua rimanente poco alla volta.</li>
                <li>> Aggiungere il sale e continuare a lavorare per qualche minuto una volta completato l'impasto.</li>
                <li>> Porre impasto in una ciotola e lasciare lievitare fino a raddoppio, circa 2 ore.</li>
                <li>> Dividere l'impasto in 8 porzioni, stenderlo in sfoglie di circa 20cm di diametro e procedere con la cottura.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div>
                <i class="ri-fire-line"></i> Cuocere 3 minuti per lato in una padella appena oliata.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Coprire con un canovaccio una volta cotte.
              </div>  
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

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
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- Polenta</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Tagliare la polenta fredda, o un panetto già pronto, a fette di circa mezzo centimetro.</li>
                <li>> Disporre le fette nella teglia della friggitrice ad aria.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div>
                <i class="ri-fire-line"></i> Cuocere per 25/30 min a 200ºC girando a metà cottura.
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