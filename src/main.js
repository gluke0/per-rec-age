import { createApp } from 'vue'
// import html2canvas
import html2canvas from 'html2canvas';
import App from './App.vue'
createApp(App).mount('#app')

// icon i for the info box
let infoNavDiv = document.querySelector('.info-nav');
let infoDiv = document.querySelector('.info-div');
let closeX = document.querySelector('.close-x');
let autoClose;

infoNavDiv.addEventListener('click', function(){
    infoDiv.classList.toggle('hidden');

    clearTimeout(autoClose);
    
    if (!infoDiv.classList.contains('hidden')){
        autoClose = setTimeout(function(){
            infoDiv.classList.add('hidden');
        }, 15000);
    }
});

closeX.addEventListener('click', function(){
    clearTimeout(autoClose);
    
    if (!infoDiv.classList.contains('hidden')){
        infoDiv.classList.add('hidden');
    }
});

// open and close a recipe
document.querySelectorAll('.recipe-card').forEach(card =>{
    card.addEventListener('click', (e) => {
        if (!e.target.closest('.open-recipe')) {
            card.classList.add('expand');
            const arrowExpand = card.querySelector('.open-recipe i');
            if (arrowExpand) {
                arrowExpand.classList.remove('ri-arrow-down-wide-line');
                arrowExpand.classList.add('ri-arrow-up-wide-line');
            }
            card.querySelectorAll('.recipe-process, .cook-details, .ri-share-2-line').forEach(element =>{
                element.classList.remove('hidden');
            });
        }
    });

    // closing with arrows - prevent to close if i want to copy the text
    card.querySelector('.open-recipe').addEventListener('click', () =>{
        card.classList.toggle('expand');
        const arrowExpand = card.querySelector('.open-recipe i');
        if (arrowExpand) {
            arrowExpand.classList.toggle('ri-arrow-down-wide-line');
            arrowExpand.classList.toggle('ri-arrow-up-wide-line');
        }
        card.querySelectorAll('.recipe-process, .cook-details, .ri-share-2-line').forEach(element =>{
            element.classList.toggle('hidden');
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".ri-share-2-line").forEach(button => {
    button.addEventListener("click", e => {
      const recipeCard = e.target.closest(".recipe-card");
      if (!recipeCard) return;

      document.fonts.ready.then(() => {
        html2canvas(recipeCard, {
          scale: 5,
          useCORS: true
        }).then(canvas => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "recipe.png";
          link.click();
        }).catch(error => {
          console.error("Error generating image:", error);
        });
      });
    });
  });
});

// need to hide share and arrow when exporting