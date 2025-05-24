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

//ALte version
/* function renderBasketCart() {
  const basket = document.getElementById("img_price_amount_items");
  basket.innerHTML = "";
  let subtotal = 0;

  let categories = Object.keys(myMenu); // ["products", "drinks", "supplements"]

  for (let i = 0; i < categories.length; i++) {
    let cat = categories[i];
    let items = myMenu[cat];

    for (let j = 0; j < items.length; j++) {
      let item = items[j];
      if (item.amount > 0) {
        subtotal += item.price * item.amount;
        basket.innerHTML += getBasketItemTemplate(cat, item);
      }
    }
  }

  basket.innerHTML += getBasketSummaryTemplate(subtotal);
}
 */

document.addEventListener("DOMContentLoaded", () => {
  loadFromLocalStorage();
  renderAllItems("article_container_all", myMenu.products, getRandomProductsItems);
  renderAllItems("drink_container_all", myMenu.drinks, getRandomDrinksItems);
  renderAllItems("beilage_container_all", myMenu.supplements, getRandomSubbTemplate);
  renderBasketCart();
});
F