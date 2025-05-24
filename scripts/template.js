function getRandomProductsItems(productArr) {
  const id = productArr.name.replace(/\s+/g, "_"); // ID-Sicher
  return `
    <div class="container_article">
      <div class="article_img_box">
        <img class="img_article" src="assets/img/${productArr.image}" alt="">

        <div class="plus_count_minus">
<button onclick="updateArticle('products', '${productArr.name}', 'remove')" id="counter_button_add" class="btn_counter">
  <img src="assets/icons/remove.svg" alt="remove" class="btn_counter_img">
</button>

<span id="amount_products_${id}" class="counter_display">${productArr.amount} </span>

<button onclick="updateArticle('products', '${productArr.name}', 'add')" id="counter_button_remove"
  class="btn_counter_remove">
  <img src="assets/icons/add.svg" alt="add" class="btn_counter_img">
</button>
</div>


        <div class="name_style_article">${productArr.name}</div>
        <div class="description_style_article">${productArr.description}</div>
        <div class="article_price_style">Price: ${productArr.price.toFixed(2)}</div>

     
        
     
      </div>
    </div>`;
}


function getRandomDrinksItems(drinksArr) {
  const id = drinksArr.name.replace(/\s+/g, "_");
  return `
    <div class="drinks_container">
      <div class="drinks_img_box">
        <img class="img_drink" src="assets/img/${drinksArr.image}" alt="">
          <div class="plus_count_minus">
<button onclick="updateArticle('products', '${drinksArr.name}', 'remove')" id="counter_button_add" class="btn_counter">
  <img src="assets/icons/remove.svg" alt="remove" class="btn_counter_img">
</button>

<span id="amount_drinks_${id}" class="counter_display">${drinksArr.amount} </span>

<button onclick="updateArticle('drinks', '${drinksArr.name}', 'add')" id="counter_button_remove"
  class="btn_counter_remove">
  <img src="assets/icons/add.svg" alt="add" class="btn_counter_img">
</button>
</div>
        <div class="name_style_drink">${drinksArr.name}</div>
        <div class="description_style_drink">${drinksArr.description}</div>
        <div class="drink_price_style">Price: ${drinksArr.price.toFixed(2)} $</div>


      </div>
    </div>`;
}


function getRandomSubbTemplate(subbArr) {
  const id = subbArr.name.replace(/\s+/g, "_");
  return `
    <div class="beilage_container">
      <div class="beilage_img_box">
        <img class="img_beilage" src="assets/img/${subbArr.image}" alt="">

        <div class="plus_count_minus">
          <button onclick="updateArticle('supplements', '${subbArr.name}', 'remove')" class="btn_counter">
            <img src="assets/icons/remove.svg" alt="remove" class="btn_counter_img">
          </button>

          <span id="amount_supplements_${id}" class="counter_display">${subbArr.amount}</span>

          <button onclick="updateArticle('supplements', '${subbArr.name}', 'add')" class="btn_counter_remove">
            <img src="assets/icons/add.svg" alt="add" class="btn_counter_img">
          </button>
        </div>

        <div class="name_style_drink">${subbArr.name}</div>
        <div class="description_style_drink">${subbArr.description}</div>
        <div class="beilage_price_style">Price: ${subbArr.price.toFixed(2)} $</div>
      </div>
    </div>`;
}


function getBasketItemTemplate(cat, item) {
    return `
    <div class="img_counter_price_trash">
      <div class="basket_tofu_img_style">
        <img class="basket_img_test standard_border_radius" src="assets/img/${item.image}" alt="">
      </div>
      <div class="name_price_container">
        <div class="name_of_tofu_style">${item.name}</div>
        <div class="price_total_style">${(item.price * item.amount).toFixed(2)} $</div>
      </div>
    
      <div class="plus_minus_amount">
  <button onclick="updateArticle('${cat}', '${item.name}', 'remove')" class="btn_counter_commande">
    <img class="icon_commade_btn" src="./assets/icons/remove.svg" alt="">
  </button>
  <div class="amount_output_style">${item.amount}</div>
  <button onclick="updateArticle('${cat}', '${item.name}', 'add')" class="btn_counter_commande">
    <img class="icon_commade_btn" src="./assets/icons/add.svg" alt="">
  </button>
  <button onclick="updateArticle('${cat}', '${item.name}', 'clear')" class="btn_counter_commande">
    <img class="icon_commade_btn" src="assets/icons/trash.png" alt="Trash Icon">
  </button>
</div>
</div>`;;
}

function getBasketSummaryTemplate(subtotal) {
    const shipping = deliveryType === "delivery" ? 5 : 0;
    const total = subtotal + shipping;
    return `
    <div class="total_cost_content" id="content_total_cost">
      <table class="summary_table">
        <tr><td>Subtotal:</td><td class="betrag" id="subtotal">${subtotal.toFixed(2)} $</td></tr>
        <tr><td>Shipping:</td><td class="betrag" id="shipping">${shipping.toFixed(2)} $</td></tr>
        <tr class="gesamt_row"><td><strong>Total</strong></td><td class="betrag" id="total">${total.toFixed(2)} $</td></tr>
         </table>
         <div class="order_content">
         <button onclick="clearBasket()" class="btn_counter_commande">
        <img class="icon_commade_btn" src="assets/icons/trash.png" alt="Trash Icon">
      </button>
    <button onclick="openOrderOverlay()">ORDER</button>

     </div>
    </div>`;
}

window.addEventListener("load", () => {
  renderAllItems("article_container_all", myMenu.products, getRandomProductsItems);
  renderAllItems("drink_container_all", myMenu.drinks, getRandomDrinksItems);
  renderAllItems("beilage_container_all", myMenu.supplements, getRandomSubbTemplate);
  renderBasketCart();
});
