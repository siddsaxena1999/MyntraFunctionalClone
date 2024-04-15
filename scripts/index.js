let bagItems
onLoad()

function onLoad() {
    let bagItemsStr = localStorage.getItem('bagItem')
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : []
    displayItemsOnHomePage()
    displayBagIcon()
}

function addToBag(itemId) {
    bagItems.push(itemId)
    localStorage.setItem('bagItem', JSON.stringify(bagItems))
    displayBagIcon()
}

function displayBagIcon() {
    let bagItemCount = document.querySelector('.bag-item-count')
    if(bagItems.length > 0) {
        bagItemCount.style.visibility = 'visible'
        bagItemCount.innerHTML = bagItems.length
    }else {
        bagItemCount.style.visibility = 'hidden'
    }
}

function displayItemsOnHomePage() {
    const itemsContainer = document.querySelector('.items-container')
    if (!itemsContainer) {
        return
    }
    let innerHTML = ''
    items.forEach(item => {
        innerHTML += `
        <div class="item-container">
        <img src="${item.image}" alt="product image" class="item-image">
        <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage} % OFF)</span>
        </div>
        <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`
    })
    
    itemsContainer.innerHTML = innerHTML
}
