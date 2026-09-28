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

        <!-- insalata di farro -->
        <div class="recipe-card" data-recipe="farro insalata pomodorini tonno mozzarella">
          <div class="recipe-title">
            <h3>Insalata Di Farro</h3>
          </div>
          <div class="recipe-preview">
            <button class="share-btn" type="button" aria-label="Condividi la ricetta come immagine"><i class="ri-share-2-line" aria-hidden="true"></i></button>
            <div class="recipe-img">
              <img src="../../assets/food/first/insalata-farro.png" alt="Insalata Di Farro">
            </div>
            <div class="recipe-info-details">
              <span class="leg-f inf-r-mar">P</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Farro</li>
                <li>- Pomodorini</li>
                <li>- Tonno</li>
                <li>- Mozzarella</li>
                <li>- Capperi</li>
                <li>- Olive</li>
                <li>- Olio EVO</li>
                <li>- Sale</li> 
                <li>- Pepe</li>
                <li>- Origano </li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Cuocere il farro, scolare e stendere su un panno per raffreddarlo.</li>
                <li>> Tagliare pomodorini, olive e mozzarella a piacere, unire al farro in un contenitore e aggiungere olio EVO.</li>
                <li>> Aggiungere tonno e capperi a piacere, salare, pepare, una spruzzata di origano e porre in frigorifero.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fridge-line"></i> Conservare in frigorifero.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Quantità e ingredienti possono variare a piacimento.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- lasagne al pesto -->
        <div class="recipe-card" data-recipe="lasagne al pesto">
          <div class="recipe-title">
            <h3>Lasagne Al Pesto</h3>
          </div>
          <div class="recipe-preview">
            <button class="share-btn" type="button" aria-label="Condividi la ricetta come immagine"><i class="ri-share-2-line" aria-hidden="true"></i></button>
            <div class="recipe-img">
              <img src="../../assets/food/first/lasagne-pesto.png" alt="Lasagne Al Pesto">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Pasta per lasagne</li>
                <li>- Pesto</li>
                <li>- Besciamella</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Rivestire il fondo della teglia con besciamella. </li>
                <li>> Adagiare uno strato di pasta e coprire con besciamella e pesto.</li>
                <li>> Ripetere l'operazione fino a raggiungere il numero di strati desiderati.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere a 180°C per circa 30 minuti. Il tempo di cottura può variare a seconda dello spessore della lasagna.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> 3 parti di besciamella per 1 parte di pesto è la proporzione consigliata.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Si consiglia un numero di strati tra 6 e 8.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Possibilità di spolverare ogni strato con formaggio grattuggiato.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- pasta con bottarga -->
        <div class="recipe-card" data-recipe="pasta con bottarga">
          <div class="recipe-title">
            <h3>Pasta Con Bottarga</h3>
          </div>
          <div class="recipe-preview">
            <button class="share-btn" type="button" aria-label="Condividi la ricetta come immagine"><i class="ri-share-2-line" aria-hidden="true"></i></button>
            <div class="recipe-img">
              <img src="../../assets/food/first/pasta-bottarga.png" alt="Pasta Con Bottarga">
            </div>
            <div class="recipe-info-details">
              <span class="leg-f inf-r-mar">P</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Pasta</li>
                <li>- Bottarga di muggine</li>
                <li>- Aglio</li>
                <li>- Olio EVO</li>
                <li>- Sale</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> In una pentola mettere olio EVO e soffriggere l'aglio.</li>
                <li>> Rimuovere aglio, spegnere il fuoco, aggiungere la bottarga grattuggiata e mescolare per qualche secondo.</li>
                <li>> Cuocere la pasta, scolarla e versarla nella padella con il condimento, mescolare bene e servire.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere la pasta secondo le indicazioni o a piacimento.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Possibilità di finire con bottarga, prezzemolo e un giro d'olio una volta impiattata.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- pasta gbp -->
        <div class="recipe-card" data-recipe="pasta gbp grana formaggio pepe burro vegetariana">
          <div class="recipe-title">
            <h3>Pasta GBP</h3>
          </div>
          <div class="recipe-preview">
            <button class="share-btn" type="button" aria-label="Condividi la ricetta come immagine"><i class="ri-share-2-line" aria-hidden="true"></i></button>
            <div class="recipe-img">
              <img src="../../assets/food/first/pasta-gbp.png" alt="Pasta GBP">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <h4>Ingredienti:</h4>
              <ul class="ingredients-list">
                <li>- Pasta</li>
                <li>- Formaggio grattuggiato</li>
                <li>- Pepe nero</li>
                <li>- Burro</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Mettere burro a temperatura ambiente, formaggio grattuggiato e pepe in un contenitore.</li>
                <li>> Mischiare e versare la pasta, non scolata completamente, una volta cotta.</li>
                <li>> Mescolare la pasta.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere la pasta secondo le indicazioni del produttore o a piacimento.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Terminare con una macinata di pepe nero e una spolverata di formaggio grattuggiato a piacimento.
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