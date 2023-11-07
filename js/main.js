const doc = document;
const productEl = doc.querySelector ('.products');
console.log(productEl);
let cartItemsCount = 0;

const postItems = products.map(function(item) {
    return `
    <div class="product">
        <img class="product__photo" src="img/${item.img}" alt="">
        <p class="product__name">${item.text}</p>
        <div class="product__item">
            <p class="star">☆</p>
            <p class="text">Акція</p>
            <div class="plan">
                <img src="img/unnamed.jpg" alt="">
                <p>${item.text2}</p>
                <img class="paw" src="img/png-transparent-dog-paw-paws-animals-snout-silhouette-thumbnail.png" alt="">
            </div>
        </div>
        <div class="product__price-block">
            <p class="product__price">${item.price}</p>
            <button id="${item.id}" class="product__add-cart" onclick="displayItemsCount()"><i  class="fa-solid fa-cart-plus"></i></button>
        </div>
    </div>    
    `
}).join('');
  
productEl.innerHTML = postItems;
 


const cartEl = doc.querySelector('.cart');
console.log(cartEl);
const cartItemsCountEl = cartEl.querySelector('span:last-child');
console.log(cartItemsCountEl);


function displayItemsCount() {
    cartItemsCount++;
    cartItemsCountEl.innerHTML = cartItemsCount;
}



