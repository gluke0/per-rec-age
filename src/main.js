import { createApp } from 'vue'
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
        if (!e.target.closest('.open-recipe') && !e.target.closest('.share-btn')){
            card.classList.add('expand');
            let arrowExpand = card.querySelector('.open-recipe i');
            if (arrowExpand) {
                arrowExpand.classList.remove('ri-arrow-down-wide-line');
                arrowExpand.classList.add('ri-arrow-up-wide-line');
            }
            card.querySelectorAll('.recipe-process, .cook-details').forEach(element =>{
                element.classList.remove('hidden');
            });
        }
    });

    // closing with arrows - prevent to close when copying text
    card.querySelector('.open-recipe').addEventListener('click', () =>{
        card.classList.toggle('expand');
        let arrowExpand = card.querySelector('.open-recipe i');
        if (arrowExpand){
            arrowExpand.classList.toggle('ri-arrow-down-wide-line');
            arrowExpand.classList.toggle('ri-arrow-up-wide-line');
        }
        card.querySelectorAll('.recipe-process, .cook-details').forEach(element =>{
            element.classList.toggle('hidden');
        });
    });
});

// share the recipe as an image
document.querySelectorAll('.share-btn').forEach(button =>{
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const recipeCard = e.target.closest('.recipe-card');
        if (!recipeCard) return;

        // capture the whole recipe: expand collapsed cards temporarily
        const wasExpanded = recipeCard.classList.contains('expand');
        if (!wasExpanded) {
            recipeCard.classList.add('expand');
            recipeCard.querySelectorAll('.recipe-process, .cook-details').forEach(el => el.classList.remove('hidden'));
        }
        const hiddenDuringCapture = recipeCard.querySelectorAll('.share-btn, .open-recipe');
        hiddenDuringCapture.forEach(el => el.style.display = 'none');

        const title = (recipeCard.querySelector('.recipe-title h3')?.textContent || 'ricetta').trim();
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'ricetta';

        const capture = () => {
            document.fonts.ready.then(() =>{
                html2canvas(recipeCard, {
                    scale: 5,
                    useCORS: true
                }).then(canvas =>{
                    canvas.toBlob(blob =>{
                        const file = new File([blob], `${slug}.png`, { type: 'image/png' });
                        if (navigator.canShare && navigator.canShare({ files: [file] })) {
                            navigator.share({ files: [file], title }).catch(() =>{});
                        } else {
                            const link = document.createElement('a');
                            link.href = URL.createObjectURL(blob);
                            link.download = `${slug}.png`;
                            document.body.appendChild(link);
                            link.click();
                            link.remove();
                            setTimeout(() => URL.revokeObjectURL(link.href), 4000);
                        }
                    }, 'image/png');
                }).catch(error =>{
                    console.error('Error generating image:', error);
                }).finally(() =>{
                    hiddenDuringCapture.forEach(el => el.style.display = '');
                    if (!wasExpanded) {
                        recipeCard.classList.remove('expand');
                        recipeCard.querySelectorAll('.recipe-process, .cook-details').forEach(el => el.classList.add('hidden'));
                    }
                });
            });
        };

        // let the expand animation finish so the capture is not mid-transition
        setTimeout(capture, wasExpanded ? 60 : 500);
    });
});