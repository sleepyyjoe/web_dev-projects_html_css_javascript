let bagItems ;
onload();


function onload(){
    let bagItemsStr = localStorage.getItem('bagItems');
    bagItems = bagItemsStr? JSON.parse(bagItemsStr):[];
    display_items();
    displayBagIcon();
}


function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon (){
    let bagItemCountElement = document.querySelector('.bag_items_count');
    if(bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }
    else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function display_items(){
    let itemsContainerElement = document.querySelector('.items_container');
    if(!itemsContainerElement){
        return;
    }
    let innerHtml='';
    items.forEach(item =>{
        innerHtml += `
        <div class="item_container">
            <img src="${item.image}" class="item_image" alt="item image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.count}
            </div>
            <div class="company_name">${item.company}</div>
            <div class="item_name">
                ${item.item_name}
            </div>
            <div class="price">
                <span class="curr_price">${item.current_price}</span>
                <span class="original_price">${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn_add_bag" onclick="addToBag(${item.id})">Add to bag</button>
        </div>`

    });

    itemsContainerElement.innerHTML = innerHtml;
}
