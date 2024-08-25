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

// Subscribe Newsletter

const message = document.getElementById('message');
const subscribeField = document.getElementById('subscribe-field');
const form = document.getElementById('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const email = subscribeField.value;
    if(email){
        message.textContent = "You have successfully subscribed";
        message.style.color = 'green';
    }else{
        
        message.textContent = "Please provide a valid email.";
        message.style.color = 'red';
    }

})