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
        <div class="recipe-card" data-recipe="feta pasta fillo miele sesamo">
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
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- Feta</li>
                <li>- Pasta fillo</li>
                <li>- Olio EVO</li>
                <li>- Semi di sesamo</li>
                <li>- Miele</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Spennellare con l'olio 3 fogli di pasta fillo e sovrapporre l'uno all'altro.</li>
                <li>> Tagliare la feta trasversalmente e disporne metà al centro della pasta fillo.</li>
                <li>> Avvolgere la feta con la pasta fillo e, se necessario, tagliare la pasta in eccesso.</li>
                <li>> Mettere in friggitrice ad aria, spennellare la superficie con olio e aggiungere i semi di sesamo.</li>
              </ul>
            </div>
            <div class="separator"></div>
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
        
        <!-- pollo saporito paz -->
        <div class="recipe-card" data-recipe="pollo saporito paz">
          <div class="recipe-title">
            <h3>Pollo Saporito PAZ</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/mainfood/pollo-paz.png" alt="Pollo Saporito PAZ">
            </div>
            <div class="recipe-info-details">
              <span class="leg-m inf-r-mar">C</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- Petto di pollo</li>
                <li>- Olio EVO</li>
                <li>- Mix di erbe</li>
                <li>- Sale</li>
                <li>- Paprika</li>
                <li>- Zenzero in polvere</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Preparare il petto di pollo in pezzi della grandezza desiderata e porre in padella.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Scaldare la padella, porre il pollo, oliare, speziare e ripetere l'operazione su entrambi i lati lasciando cuocere a fuoco vivo fino a cottura desiderata.
              </div>
               <div> 
                <i class="ri-lightbulb-ai-line"></i> Il mix di erbe e sale può essere sostituito da Ariosto per carne.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- salame di tonno -->
        <div class="recipe-card" data-recipe="salame di tonno tonno capperi limone">
          <div class="recipe-title">
            <h3>Salame Di Tonno</h3>
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

        <!-- salmone saporito in padella -->
        <div class="recipe-card" data-recipe="salmone saporito in padella spezie">
          <div class="recipe-title">
            <h3>Salmone Saporito In Padella</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/mainfood/salmone-saporito.png" alt="Salmone Saporito In Padella">
            </div>
            <div class="recipe-info-details">
              <span class="leg-f inf-r-mar">P</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- Trancio di salmone</li>
                <li>- Spezie</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Scaldare una padella antiaderente a fuoco medio e porre il salmone dalla parte della pelle.</li>
                <li>> Speziare e lasciare cuocere a fuoco medio qualche minuto.</li>
                <li>> Girare il salmone, speziare e lasciare cuocere fino ad ottenere una leggera crosticina.</li>
                <li>> Scottare ogni lato del trancio e terminare di cuocere fino a piacimento utilizzando la pelle come protezione.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere fino al livello di cottura desiderato.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Come mix di spezie consiglio Ariosto per pesce.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Per terminare la cottura è possibile abbassare la fiamma.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- tonno teriyaki -->
        <div class="recipe-card" data-recipe="tonno teriyaki">
          <div class="recipe-title">
            <h3>Tonno Teriyaki</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/mainfood/tonno-teriyaki.png" alt="Tonno Teriyaki">
            </div>
            <div class="recipe-info-details">
              <span class="leg-f inf-r-mar">P</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- Trancio di salmone</li>
                <li>- Spezie</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Scaldare una padella antiaderente a fuoco medio e porre il salmone dalla parte della pelle.</li>
                <li>> Speziare e lasciare cuocere a fuoco medio qualche minuto.</li>
                <li>> Girare il salmone, speziare e lasciare cuocere fino ad ottenere una leggera crosticina.</li>
                <li>> Scottare ogni lato del trancio e terminare di cuocere fino a piacimento utilizzando la pelle come protezione.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere fino al livello di cottura desiderato.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Come mix di spezie consiglio Ariosto per pesce.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Per terminare la cottura è possibile abbassare la fiamma.
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