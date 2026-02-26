import { createApp } from 'vue'
// import './style.css'
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