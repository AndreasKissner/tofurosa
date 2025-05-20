let deliveryType = "delivery"; // Standard: Lieferung MIT 5 $ Versand

function setDelivery(type) {
    deliveryType = type;
    renderBasketCart();
}
window.setDelivery = setDelivery;



function addArticle(category, name) {
    let item = myMenu[category].find(p => p.name === name);
    if (item) {
        item.amount++;
        renderBasketCart();
    }
}

function removeArticle(category, name) {
    let item = myMenu[category].find(p => p.name === name);
    if (item && item.amount > 0) {
        item.amount--;
        renderBasketCart();
    }
}

function clearProduct(category, name) {
    let item = myMenu[category].find(p => p.name === name);
    if (item) {
        item.amount = 0;
        renderBasketCart();
    }
}

function clearBasket() {
    for (let cat in myMenu) {
        myMenu[cat].forEach(item => item.amount = 0);
    }
    renderBasketCart();
}


window.setDelivery = setDelivery;
window.clearBasket = clearBasket;
window.clearProduct = clearProduct; // damit onclick funktioniert
window.addArticle = addArticle;
window.removeArticle = removeArticle;
