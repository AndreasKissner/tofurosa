let deliveryType = "delivery"; // Standard: Lieferung MIT 5 $ Versand

function setDelivery(type) {
    deliveryType = type;
    renderBasketCart();
}


function updateArticle(category, name, action) {
    let item = myMenu[category].find(p => p.name === name);
    if (!item) return;

    if (action === "add") {
        item.amount++;
    }

    if (action === "remove" && item.amount > 0) {
        item.amount--;
    }

    if (action === "clear") {
        item.amount = 0;
    }

    renderBasketCart();
}



function clearBasket() {
    for (let cat in myMenu) {
        myMenu[cat].forEach(item => item.amount = 0);
    }
    renderBasketCart();
}



/* window.setDelivery = setDelivery;
window.clearBasket = clearBasket;
window.clearProduct = clearProduct; // damit onclick funktioniert
window.addArticle = addArticle;
window.removeArticle = removeArticle;
window. initBasketToggle =  initBasketToggle; */
