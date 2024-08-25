// See Details
const hiddenCards = document.querySelectorAll('.see-more-card');
const seeMoreButton = document.getElementById('see');
seeMoreButton.addEventListener(
    'click', ()=>{
        hiddenCards.forEach(card => {
            card.classList.toggle('hidden')
        });

        if(seeMoreButton.textContent === 'See More Products'){
            seeMoreButton.textContent = 'See Less'
        } else {
            seeMoreButton.textContent = 'See More Products'
        }
    }
)