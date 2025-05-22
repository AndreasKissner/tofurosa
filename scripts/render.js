function renderAllItems(containerId, itemsArray, templateFunction) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    for (let allIndex = 0; allIndex < itemsArray.length; allIndex++) {
        container.innerHTML += templateFunction(itemsArray[allIndex]);
    }
}

function renderBasketCart() {
    const basket = document.getElementById("img_price_amount_items");
    basket.innerHTML = "";
    let subtotal = 0;
    for (let cat in myMenu) {
        myMenu[cat].forEach(item => {
            if (item.amount > 0) {
                subtotal += item.price * item.amount;
                basket.innerHTML += getBasketItemTemplate(cat, item);
            }
        });
    }
    basket.innerHTML += getBasketSummaryTemplate(subtotal);
}

document.addEventListener("DOMContentLoaded", () => {
    renderAllItems("article_container_all", myMenu.products, getRandomProductsItems);
    renderAllItems("drink_container_all", myMenu.drinks, getRandomDrinksItems);
    renderAllItems("beilage_container_all", myMenu.supplements, getRandomSubbTemplate);
    renderBasketCart();
});
