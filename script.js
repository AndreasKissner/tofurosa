let deliveryType = "delivery"; // Standard: Lieferung MIT 5 $ Versand

function setDelivery(type) {
    deliveryType = type;
    saveToLocalStorage();
    renderBasketCart();
}

function updateArticle(category, name, action) {
  const item = myMenu[category]?.find(p => p.name === name);
  if (!item) return;
  item.amount = action === "add"
    ? item.amount + 1
    : action === "remove"
    ? Math.max(0, item.amount - 1)
    : action === "clear"
    ? 0
    : item.amount;
  const id = name.replace(/\s+/g, "_");
  const el = document.getElementById(`amount_${category}_${id}`);
  if (el) el.textContent = item.amount;
  saveToLocalStorage();
  renderBasketCart();
}


function clearBasket() {
    for (let cat in myMenu) {
        myMenu[cat].forEach(item => item.amount = 0);
    }
    saveToLocalStorage();
    renderBasketCart();
}

//Emai Logig
function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://formspree.io/f/mjkykvka", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        window.location.href = "../html/sendmail.html";
    }).catch((error) => {
        console.log(error);
    });
}

window.addEventListener("load", () => {
  loadFromLocalStorage(); 
});
