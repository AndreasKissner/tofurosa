
function getRandomProductsItems(productArr){
    return`
    <div class="container_article">
              <div class="article_img_box">
                <img class="img_article" src="assets/img/gerichte/${productArr.image}" alt="">
                <div id="name_of_article" class="name_style_article">${productArr.name}</div>
                <div id="discription_of_article" class="description_style_article">${productArr.description}</div>
                <div id="price_of_article" class="article_price_style">Price: ${productArr.price.toFixed(2)} $</div>
                <button onclick="addArticle()" id="counter_button_add" class="btn_counter">
                  <img src="assets/icons/add.svg" alt="Icon add Article" class="btn_counter_img">
                </button>
                 <button onclick="remove Article()" id="counter_button_remove" class="btn_counter_remove">
                  <img src="assets/icons/remove.svg" alt="Icon add Article" class="btn_counter_img">
                </button>
              </div>
            </div>
    `
}

function getRandomDrinksItems(drinksArr){
return`
  <div class="drinks_container" id="drinks_container_box">
              <div class="drinks_img_box">
                <img class="img_drink" src="assets/img/drinks/${drinksArr.image}" alt="">
                <div id="name_of_drink" class="name_style_drink">${drinksArr.name}</div>
                <div id="discription_of_drink" class="description_style_drink">${drinksArr.description}</div>
                <div id="price_of_drink" class="drink_price_style">Price: ${drinksArr.price.toFixed(2)} $</div>
                <button type="button" id="counter_button_drinks" class="btn_counter">
                  <img src="assets/icons/add.svg" alt="Icon add Article" class="btn_counter_img">
                </button>
                  <button onclick="remove Article()" id="counter_button_remove" class="btn_counter_remove">
                  <img src="assets/icons/remove.svg" alt="Icon add Article" class="btn_counter_img">
                </button>
              </div>
            </div>
`
}

function getRandomSubbTemplate(subbArr){
  return`
    <div class="beilage_container" id="beilage_container_box">
              <div class="beilage_img_box">
                <img class="img_beilage" src="assets/img/beilage/${subbArr.image}" alt="">
                <div id="name_of_beilage" class="name_style_drink">${subbArr.name}</div>
                <div id="discription_of_drink" class="description_style_drink">${subbArr.description}</div>
                <div id="price_of_beilage" class="beilage_price_style">Price: ${subbArr.price.toFixed(2)} $</div>
                <button type="button" id="counter_button_beilage" class="btn_counter">
                  <img src="assets/icons/add.svg" alt="Icon add Article" class="btn_counter_img">
                </button>
                  <button onclick="remove Article()" id="counter_button_remove" class="btn_counter_remove">
                  <img src="assets/icons/remove.svg" alt="Icon add Article" class="btn_counter_img">
                </button>
              </div>
            </div>
  `
}

function getRandomBasketCart(){
    return`
     <!-- img amount price -->
        
            <div class="img_counter_price_trash" id="img_counter_price_trash_render">
           
              <div id="your_tofu_img" class="basket_tofu_img_style"><img class="basket_img_test standard_border_radius"
                  src="assets/img/gerichte/pizza.png" alt="">
              </div>
              <div class="name_price_container">
                <div id="name_of_tofu" class="name_of_tofu_style">Spicy Tofu Sambal</div>
                <div id="price_total" class="price_total_style">12.33 $</div>
              </div>

              <div class="plus_minus_amount">
                <div id="minus_amount-plus_container" class="amount_mini_container"></div>

                <button id="trash_btn" class="btn_counter_commande"><img class="trash_icon_img"
                    src="assets/icons/trash.png" alt=""></button>

                <button type="button" class="btn_counter_commande" id="minus_article"><img class="icon_commade_btn"
                    src="./assets/icons/remove.svg" alt=""></button>

                <div id="sume_output" class="sume_output_style">x</div>
                <button type="button" id="plus_article" class="btn_counter_commande"><img class="icon_commade_btn"
                    src="./assets/icons/add.svg" alt="Add Icon"></button>
              </div>
            </div>
        


            <!-- TOTAL -->
            <div class="total_cost_content" id="content_total_cost">
              <table class="summary_table">
                <tr>
                  <td>Subtotal:</td>
                  <td class="betrag" id="subtotal">196,40 $</td>
                </tr>
                <tr>
                  <td>Shipping costs:</td>
                  <td class="betrag" id="shipping">5,00 $</td>
                </tr>
                <tr class="gesamt_row">
                  <td><strong>Total</strong></td>
                  <td class="betrag" id="total">201,40 $</td>
                </tr>
              </table>
              <button onclick="clearBasket()" class="btn_counter_commande"><img class="icon_commade_btn" src="assets/icons/trash.png" alt="Trash Icon"></button>
            </div>
            <!-- Total -->
    `
}

window.addEventListener("load", () => {
getRandomBasketCart();
     getRandomProductsItems();
     getRandomDrinksItems();
     getRandomSubbTemplate();
});
