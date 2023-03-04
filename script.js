const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools').then(res => res.json()).then(data =>
        showCardItems(data.data.tools.slice(0, 6)))
}

// card-items and see-more-btn 

const showCardItems = (cards) => {

    const seeMoreButton = document.getElementById('see-more-btn')

    if (cards.length < 12) {
        seeMoreButton.classList.remove('hidden');
    }
    else {
        seeMoreButton.classList.add('hidden')
    }

    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = "";
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
            <label onclick="showDetails('${card.id}')" class="rounded-full px-4 py-3 bg-red-300 text-red-500" for="my-modal-5"> <i class="fa-solid fa-arrow-right"></i></label>
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

const showMoreData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools').then(res => res.json()).then(data => showCardItems(data.data.tools));

};


const showDetails = id => {
    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
    fetch(url)
        .then(res => res.json()).then(data => showDetailsInModal(data.data))
}

const showDetailsInModal = cards => {
    const description = document.getElementById('description');
    description.innerHTML = `<h4 class="font-semibold text-xl">${cards.description}</h4>`;
    const pricing = document.getElementById('pricing');
    pricing.innerHTML = `
    <div class="bg-white rounded-md p-3">
    <h4 class=" w-full whitespace-normal text-center font-semibold text-green-600">${cards.pricing[0]?cards.pricing[0].price : 'Free of Cost'} /${cards.pricing[0]?cards.pricing[0].plan : 'Basic'}</h4>
    </div>
    <div class="bg-white rounded-md p-3">
    <h4 class=" w-full whitespace-normal text-center font-semibold text-orange-600">${cards.pricing[1]?cards.pricing[1].price : 'Free of Cost'} /${cards.pricing[1]?cards.pricing[1].plan : 'Basic'}</h4>
    </div>
    <div class="bg-white rounded-md p-3">
    <h4 class=" whitespace-normal text-center font-semibold text-red-600">${cards.pricing[2]?cards.pricing[2].price : 'Free of Cost'} /${cards.pricing[2]?cards.pricing[2].plan : 'Basic'}</h4>
    </div>
    `
    const features = document.getElementById('features');
    features.innerHTML = `
        <h4 class="text-xl font-semibold">Features</h4>
        <ul class="pl-5">
            ${cards.features[1].feature_name?`<li class="list-disc">${cards.features[1].feature_name}</li>` : ""}
            ${cards.features[2].feature_name?`<li class="list-disc">${cards.features[2].feature_name}</li>` : ""}
            ${cards.features[3].feature_name?`<li class="list-disc">${cards.features[3].feature_name}</li>` : ""}
            ${cards.features[3].feature_name?`<li class="list-disc">${cards.features[3].feature_name}</li>` : ""}
        </ul>
    `

    const integration = document.getElementById('integration');
    integration.innerHTML= `<h4 class="text-xl font-semibold">Integrations</h4>
    <ul class="pl-5">
    ${cards.integrations[0]? `<li class="list-disc text-md">${cards.integrations[0]}</li>` : ""}
    ${cards.integrations[1]? `<li class="list-disc text-md">${cards.integrations[1]}</li>` : ""}
    ${cards.integrations[2]? `<li class="list-disc text-md">${cards.integrations[2]}</li>` : ""}
    
    </ul>
    `
    const rightDetailsSection = document.getElementById('right-section');
    rightDetailsSection.innerHTML = `
    <img src="${cards.image_link}" alt="logo">
    <h4 class="text-xl font-semibold mt-4">${cards.input_output_examples[0].input}</h4>
    <p class="my-5">${cards.input_output_examples[0].output}</p>
    `
}
showDetails();