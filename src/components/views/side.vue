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
        <div class="recipe-card" data-recipe="pane pita libanese vegetariana">
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
              <h4>Ingredienti:</h4>
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
                <i class="ri-fire-line"></i> Cuocere 3 minuti per lato, o fino a gonfiore, in una padella appena oliata.
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
        <div class="recipe-card" data-recipe="polenta croccante vegetariana">
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

        <!-- pomodorini confit -->
        <div class="recipe-card" data-recipe="pomodorini confit vegetariana vegana">
          <div class="recipe-title">
            <h3>Pomodorini Confit</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/side/pomodorini-confit.png" alt="Pomodorini Confit">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
              <span class="leg-veg inf-r-mar">VEG</span>
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
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Lavare i pomodorini, tagliarli a metà e metterli in una ciotola con olio EVO, un pizzico di sale e origano.</li>
                <li>> Una volta mescolato delicatamente, adagiare i pomodirini, uno ad uno, sulla teglia della friggitrice ad aria con la polpa rivolta verso l'alto.</li>
                <li>> Aggiungere qualche granello di zucchero di canna per aiutare la caramelizzazione e cuocere.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div>
                <i class="ri-fire-line"></i> Cuocere per 10 minuti a 160ºC, poi 5 minuti a 180° e infine altri 5 minuti a 200°.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>
        
        <!-- radicchio al forno -->
        <div class="recipe-card" data-recipe="radicchio al forno vegetariana vegana">
          <div class="recipe-title">
            <h3>Radicchio Al Forno</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/side/radicchio-forno.png" alt="Radicchio Forno">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
              <span class="leg-veg inf-r-mar">VEG</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Radicchio</li>
                <li>- Olio EVO</li>
                <li>- Sale</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Lavare il radicchio, tagliarlo in quarti per il lungo e metterlo in una teglia con carta da forno.</li>
                <li>> Cospargere con olio EVO, salare e infornare.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div>
                <i class="ri-fire-line"></i> Cuocere per 15/20 min a 180ºC girandolo più volte.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Aggiungere un filo di olio EVO in uscita.
              </div> 
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use '../../style/main.scss';
</style>