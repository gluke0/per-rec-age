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
    card.querySelector('.open-recipe').addEventListener('click', () =>{
        card.classList.toggle('expand');
        
        let arrowExpand = card.querySelector('.open-recipe i');
        arrowExpand.classList.toggle('ri-arrow-down-wide-line');
        arrowExpand.classList.toggle('ri-arrow-up-wide-line');
        
        card.querySelectorAll('.recipe-process, .cook-details').forEach(element =>{
            element.classList.toggle('hidden');
        });
    });
});

// share recipe card
