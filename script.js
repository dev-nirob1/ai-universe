const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools').then(res => res.json()).then(data => showCardItems(data.data.tools.slice(0, 6)))
}

// card-items and see-more-btn 

const showCardItems = cards => {

    const seeMoreButton = document.getElementById('see-more-btn')

    if (cards.length < 12) {
        seeMoreButton.classList.remove('hidden');
    }
    else {
        seeMoreButton.classList.add('hidden')
    }

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML ="";
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add("card", "p-3", "border", "rounded-lg");
        cardDiv.innerHTML = ` <img src="${card.image}" class="rounded-lg h-56" alt="card logo">
        <h3 class="text-2xl font-semibold">Features</h3>
        <ol class="list-decimal p-5">
        ${card.features[0] ? `<li>${card.features[0]}</li>` : ''}
        ${card.features[1] ? `<li>${card.features[1]}</li>` : ''}
        ${card.features[2] ? `<li>${card.features[2]}</li>` : ''}
        </ol>
        <hr class="my-5">
        <div class="flex justify-between items-center">
        <div>
        <h4 class="text-2xl font-semibold">${card.name}</h4>
                <p><i class="fa-solid fa-calendar-days"></i> <span>${card.published_in}</span></p>
                </div>
            <label class="rounded-full px-4 py-3 bg-red-300 text-red-500" for="my-modal-5"> <i class="fa-solid fa-arrow-right"></i></label>
                `

        cardContainer.appendChild(cardDiv)

        loaderSection(false);
    })
}

// loader added here 
const loaderSection = isLoading => {
    const loader = document.getElementById('loader');
    if (isLoading) {
        loader.classList.remove('hidden')
    }
    else {
        loader.classList.add('hidden')
    }
}

fetchCategories()

const showMoreData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools').then(res => res.json()).then(data => showCardItems(data.data.tools));
    
}