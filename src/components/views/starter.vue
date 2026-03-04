<script >

  export default{
    name: "Starter",
    data(){
      return{
      }
    },
  components:{
  },
};
</script>

<template>
  <section id="starter">
    <div class="part-container">
      <div class="part-container-header">
        <h2>Antipasti</h2>
      </div>

      <div class="recipe-card-wrapper">

        <div class="recipe-card recipe-1">
          <div class="recipe-title">
            <h3>Pomodorini Confit</h3>
            <i class="ri-share-2-line"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/starter/pomodorini-confit-nobg.png" alt="Pomodorini Confit">
            </div>
            <div class="recipe-info-details">
              <span class="leg-veg inf-r-mar">VEG</span>
              <span class="leg-v inf-r-mar">V</span>
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
            <div class="recipe-process">
              <ul>
                <li>> Lavare i pomodorini, tagliarli a metà e metterli in una ciotola con olio EVO, un pizzico di sale e origano.</li>
                <li>> Una volta mescolato delicatamente, adagiare i pomodirini, uno ad uno, sulla teglia della friggitrice ad aria con la polpa rivolta verso l'alto.</li>
                <li>> Aggiungere qualche granello di zucchero di canna per aiutare la caramelizzazione e cuocere.</li>
              </ul>
            </div>
            <div class="cook-details">
              <i class="ri-fire-line"></i> Cuocere per 25/30 min a 160ºC.
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>
        
        <div class="recipe-card recipe-2">
          <div class="recipe-title">
            <h3>Radicchio al forno</h3>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/starter/radicchio-forno.png" alt="Radicchio Forno">
            </div>
            <div class="recipe-info-details">
              <span class="leg-veg inf-r-mar">VEG</span>
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Radicchio</li>
                <li>- Olio EVO</li>
                <li>- Sale</li>
              </ul>
            </div>
            <div class="recipe-process">
              <ul>
                <li>> Lavare il radicchio, tagliarlo in quarti per il lungo e metterlo in una teglia con carta da forno.</li>
                <li>> Cospargere con olio EVO, salare e infornare.</li>
              </ul>
            </div>
            <div class="cook-details">
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

        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Ricetta</h3>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/starter.jpg" alt="Starter Photo">
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas aspernatur reiciendis consequatur soluta laudantium praesentium odit! Provident neque sapiente, quidem possimus incidunt ipsam vel sequi, perferendis accusantium quae pariatur.
          </div>
          <div class="open-recipe">
            <i class="ri-expand-diagonal-line"></i>
          </div>
        </div>

        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Ricetta</h3>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/starter.jpg" alt="Starter Photo">
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas aspernatur reiciendis consequatur soluta laudantium praesentium odit! Provident neque sapiente, quidem possimus incidunt ipsam vel sequi, perferendis accusantium quae pariatur.
          </div>
          <div class="open-recipe">
            <i class="ri-expand-diagonal-line"></i>
          </div>
        </div>

        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Ricetta</h3>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/starter.jpg" alt="Starter Photo">
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas aspernatur reiciendis consequatur soluta laudantium praesentium odit! Provident neque sapiente, quidem possimus incidunt ipsam vel sequi, perferendis accusantium quae pariatur.
          </div>
          <div class="open-recipe">
            <i class="ri-expand-diagonal-line"></i>
          </div>
        </div>

        <div class="recipe-card">
          <div class="recipe-title">
            <h3>Ricetta</h3>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/starter.jpg" alt="Starter Photo">
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptas aspernatur reiciendis consequatur soluta laudantium praesentium odit! Provident neque sapiente, quidem possimus incidunt ipsam vel sequi, perferendis accusantium quae pariatur.
          </div>
          <div class="open-recipe">
            <i class="ri-expand-diagonal-line"></i>
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