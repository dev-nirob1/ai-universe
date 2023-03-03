const fetchCategories = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools').then(res => res.json()).then(data => showCardItems(data.data.tools))
}
const showCardItems = cards => {
    const cardContainer = document.getElementById('card-items');
    cards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add("card", "p-3", "border", "rounded-lg");
        cardDiv.innerHTML = ` <img src="" class="rounded-lg h-56" alt="card logo">
        <h3 class="text-2xl font-semibold">Features</h3>
        <ol class="list-decimal p-5">
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ol>
        <hr class="my-5">
        <div class="flex justify-between items-center">
            <div>
                <h4 class="text-2xl font-semibold">name</h4>
                <p><i class="fa-solid fa-calendar-days"></i> <span></span></p>
            </div>
            <button class="bg-red-300 text-red-600 rounded-full p-3 text-xl"><i
             class="fa-solid fa-arrow-right"></i></button>`
        cardContainer.appendChild(cardDiv)
    })
}
fetchCategories()