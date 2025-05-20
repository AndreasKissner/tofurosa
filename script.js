console.log("script.js geladen");

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
window.addArticle = addArticle;
window.removeArticle = removeArticle;
