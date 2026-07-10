<script >

  export default{
    name: "Dessert",
    data(){
      return{
      }
    },
  components:{
  },
};
</script>

<template>
  <section id="dessert">
    <div class="part-container">
      <div class="part-container-header">
        <h2>Dolci</h2>
      </div>
      <div class="recipe-card-wrapper">

        <!-- crostata -->
        <div class="recipe-card" data-recipe="crostata frolla marmellata dolce torta">
          <div class="recipe-title">
            <h3>Crostata</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/crostata.png" alt="Crostata">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- 400g farina</li>
                <li>- 200g zucchero</li>
                <li>- 200g burro</li>
                <li>- 5 tuorli</li>
                <li>- Pizzico di sale</li>
                <li>- 2 bustine di vanilina</li>
                <li>- 1 lievito Bertolini</li>
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
                <i class="ri-fire-line"></i> Cuocere per 45 minuti a 180°.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- crostata fausta -->
        <div class="recipe-card" data-recipe="crostata frolla marmellata dolce torta">
          <div class="recipe-title">
            <h3>Crostata</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/crostata-2.png" alt="Crostata-2">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- 300g farina</li>
                <li>- 100g zucchero</li>
                <li>- 150g burro</li>
                <li>- 2 tuorli</li>
                <li>- Pizzico di sale</li>
                <li>- 1 cucchiaio di marsala</li>
                <li>- 1/2 bustina di lievito Bertolini</li>
                <li>- Scorza di limone</li>
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
                <i class="ri-fire-line"></i> Cuocere per 25 minuti a 190°.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Controllare più volte durante la cottura.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- gelato datteri -->
        <div class="recipe-card" data-recipe="gelato datteri latter shake milkshake">
          <div class="recipe-title">
            <h3>Gelato Ai Datteri</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/gelato-datteri.png" alt="Gelato Ai Datteri">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- 130g gelato alla panna</li>
                <li>- 100ml latte</li>
                <li>- 35g datteri</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> .</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div>
                <i class="ri-lightbulb-ai-line"></i> Variare il dosaggio di latte e gelato per la consistenza desiderata.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- mela cc -->
        <div class="recipe-card" data-recipe="mela cc frutta secca dolce salutare cannella zucchero canna">
          <div class="recipe-title">
            <h3>Mela CC</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/mela-cc.png" alt="Mela CC">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
              <span class="leg-veg inf-r-mar">VEG</span>
              <span class="leg-af inf-r-mar">AF</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- Mele Renetta</li>
                <li>- Zucchero di canna</li>
                <li>- Cannella</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Lavare la mela, tagliarla a metà, togliere il torsolo e un po' della polpa centrale.</li>
                <li>> Spolverare con cannella e zucchero di canna.</li>
                <li>> Porre le cestello della friggitrice ad aria.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere per circa 20 minuti a 180° in friggitrice ad aria.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- mela frutta secca -->
        <div class="recipe-card" data-recipe="mela ripiena frutta secca dolce salutare">
          <div class="recipe-title">
            <h3>Mela Ripiena Di Frutta Secca</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/mela-frutta-secca.png" alt="Mela Ripiena Di Frutta Secca">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
              <span class="leg-veg inf-r-mar">VEG</span>
              <span class="leg-af inf-r-mar">AF</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- Mele Renetta</li>
                <li>- Frutta secca</li>
                <li>- Miele</li>
                <li>- Zucchero di canna</li>
                <li>- Cannella</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Lavare le mele, tagliarle a metà, togliere il torsolo e un po' della polpa centrale.</li>
                <li>> Tritare la frutta secca e metterla in una ciotola con un po' di miele, cannella, zucchero di canna e mischiare il tutto.</li>
                <li>> Riempire le mele e porre le cestello della friggitrice senza carta.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere per circa 15 minuti a 150° in friggitrice ad aria.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Possibilità di aggiungere la frutta secca che si desidera, uvetta, biscotti o amaretti sbriciolati.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- sigari di pasta fillo -->
        <div class="recipe-card" data-recipe="sigari pasta fillo nutella dolce">
          <div class="recipe-title">
            <h3>Sigari Di Pasta Fillo</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/sigari-pasta-fillo.png" alt="Sigari di Pasta Fillo">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>> Pasta fillo</li>
                <li>> Nutella</li>
                <li>> Burro</li>
                <li>> Zucchero a velo</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>Tagliare il foglio di pasta fillo a metà per il lato lungo.</li>
                <li>Spennellare il foglio con del burro fuso e porre una striscia di Nutella in una delle estremità.</li>
                <li>Arrotolare la pasta fillo su se stessa fino ad ottenere un sigaro.</li>
                <li>Spennellare con del burro fuso in superficie ed infornare.</li>
                <li>Una volta cotti, spolverare con zucchero a velo a piacimento.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Circa 8 minuti a 200°C.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> La Nutella può essere sostituita con una crema al pistacchio.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- tiramisu -->
        <div class="recipe-card" data-recipe="tiramisu tiramisù dolce torta">
          <div class="recipe-title">
            <h3>Tiramisù</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/tiramisu.png" alt="Tiramisu">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- </li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> .</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fridge-line"></i>.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- torta di cioccolato -->
        <div class="recipe-card" data-recipe="torta cioccolato fondente dolce">
          <div class="recipe-title">
            <h3>Torta Al Cioccolato</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/torta-cioccolato.png" alt="Torta Al Cioccolato">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- 200g cioccolato fondente</li>
                <li>- 100g burro</li>
                <li>- 3 cucchiai di farina</li>
                <li>- 6 cucchiai di zucchero</li>
                <li>- 3 uova</li>
                <li>- 1 bustina di vanilina</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Tritare finemente il cioccolato e metterlo in una terrina con zucchero, burro, farina e vanillina.</li>
                <li>> Sciogliere a bagnomaria e una volta freddo, aggiungere 3 tuorli.</li>
                <li>> Montare gli albumi a neve ed incorporarli successivamente nel composto di cioccolato.</li>
                <li>> Versare l'impasto in una teglia precedentemente imburrata e infornare.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere per 30 minuti a 180°.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Una volta fredda spolverare con zucchero a velo. 
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- torta di rose -->
        <div class="recipe-card" data-recipe="torta di rose dolce">
          <div class="recipe-title">
            <h3>Torta Di Rose</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/torta-rose.png" alt="Torta Di Rose">
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
                <li>- 5 tuorli</li>
                <li>- 3 cucchiai di zucchero</li>
                <li>- 4 cucchiai di olio d'oliva</li>
                <li>- 1 pizzico di sale</li>
                <li>- 1/2 cucchiaino di bicarbonato</li>
                <li>- 50g lievito</li>
                <li>- 1/2 bicchiere latte</li>
                <div class="separator-ingredients"></div>
                <li>- 200g burro</li>
                <li>- 200g zucchero</li>
                <li>- uvetta</li>
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
                <i class="ri-fire-line"></i> Cuocere per 50 minuti a 170°.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- torta al cocco -->
        <div class="recipe-card" data-recipe="torta al cocco dolce">
          <div class="recipe-title">
            <h3>Torta Al Cocco</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/torta-cocco.png" alt="Torta Al Cocco">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- 200g farina di cocco</li>
                <li>- 100g biscotti secchi</li>
                <li>- 100g zucchero</li>
                <li>- 100g cioccolato fondente</li>
                <li>- 80g burro</li>
                <li>- 2 uova</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Sbattere le uova con zucchero ed aggiungere il burro sciolto e lasciato raffreddare.</li>
                <li>> Aggiungere successivamente la farina di cocco, i biscotti precedentemente tritati al mixer e amalgamare il tutto.</li>
                <li>> Stendere il composto in un piatto e mettere in frigorifero per 30 minuti.</li>
                <li>> Sciogliere il cioccolato e spalparlo sulla base.</li>
                <li>> Riporre in frigorifero per almeno 3 ore prima del consumo.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fridge-line"></i> Lasciare in frigorifero per almeno 3 ore.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Spolverare con della farina di cocco.
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>
         
        <!-- torta mars -->
        <div class="recipe-card" data-recipe="torta mars dolce">
          <div class="recipe-title">
            <h3>Torta Mars</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/torta-mars.png" alt="Torta Mars">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
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
                <i class="ri-fridge-line"></i> 
              </div>
            </div>
          </div>
          <div class="open-recipe">
            <i class="ri-arrow-down-wide-line"></i>
          </div>
        </div>

        <!-- torta sbrisolona -->
        <div class="recipe-card" data-recipe="torta sbrisolona mandorle dolce">
          <div class="recipe-title">
            <h3>Torta Sbrisolona</h3>
            <i class="ri-share-2-line hidden"></i>
          </div>
          <div class="recipe-preview">
            <div class="recipe-img">
              <img src="../../assets/food/dessert/torta-sbrisolona.png" alt="Torta Sbrisolona">
            </div>
            <div class="recipe-info-details">
              <span class="leg-v inf-r-mar">V</span>
            </div>
            <div class="recipe-ingredients">
              <div class="separator-ingredients"></div>
              <h4>Ingredienti:</h4>
              <div class="separator-ingredients"></div>
              <ul class="ingredients-list">
                <li>- 200g farina</li>
                <li>- 100g zucchero</li>
                <li>- 100g burro</li>
                <li>- 100g mandorle</li>
                <li>- 1 pizzico di sale</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="recipe-process hidden">
              <ul>
                <li>> Tritare grossolanamente le mandorle con la pelle.</li>
                <li>> Unire in una ciotola farina, zucchero, burro sciolto e raffreddato, mandorle, sale e amalgamare il tutto.</li>
                <li>> Ottenuto un composto omogeneo stenderlo in una teglia con carta da forno ed infornare.</li>
              </ul>
            </div>
            <div class="separator"></div>
            <div class="cook-details hidden">
              <div> 
                <i class="ri-fire-line"></i> Cuocere per 30 minuti a 180°.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Aggiungere mandorle in superficie come decorazione prima della cottura.
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Spolverare con zucchero a velo prima di mangiarla. 
              </div>
              <div>
                <i class="ri-lightbulb-ai-line"></i> Possibiltà di sostituire le mandorle con altra frutta secca a piacere. 
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