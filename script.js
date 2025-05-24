let deliveryType = "delivery"; // Standard: Lieferung MIT 5 $ Versand

function setDelivery(type) {
    deliveryType = type;
    renderBasketCart();
}

function updateArticle(category, name, action) {
    let item = myMenu[category].find(p => p.name === name);
    if (!item) return;
    if (action === "add") {
        item.amount++;}
    if (action === "remove" && item.amount > 0) {
        item.amount--;}
    if (action === "clear") {
        item.amount = 0;}
    const safeId = name.replace(/\s+/g, "_");
    const counterElement = document.getElementById(`amount_${category}_${safeId}`);
    if (counterElement) {
        counterElement.textContent = item.amount;}
    renderBasketCart();
}


function clearBasket() {
    for (let cat in myMenu) {
        myMenu[cat].forEach(item => item.amount = 0);
    }
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