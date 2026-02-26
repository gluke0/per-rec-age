import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
createApp(App).mount('#app')

// clicking on the i icon to show legenda div
let infoNavDiv = document.querySelector('.info-nav');
let infoDiv = document.querySelector('.info-div');
let closeX = document.querySelector('.close-x');

infoNavDiv.addEventListener('click', function(){
    infoDiv.classList.toggle('hidden');
});

closeX.addEventListener('click', function(){
    if (!infoDiv.classList.contains('hidden')){
        infoDiv.classList.add('hidden');
    }
});