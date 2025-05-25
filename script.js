let deliveryType = "delivery";

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

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const logoRound = document.getElementById("logo_round_time");
    if (logoRound) {
      logoRound.classList.add("fade_out");
    }
  }, 3000);
});

window.addEventListener("load", () => {
  loadFromLocalStorage();
});

function closeOrderOverlay() {
  const overlay = document.getElementById("overlay_order");
  overlay.classList.add("d_none");    // 
  overlay.innerHTML = "";             // 
  clearBasket();
  renderMenu();               // 
}

function generateOverlayOrderItems() {
  let itemsHTML = "";
  let subtotal = 0;
  for (const [category, items] of Object.entries(myMenu)) {
    items.forEach(item => {
      if (item.amount > 0) {
        const total = item.amount * item.price;
        subtotal += total;
        itemsHTML += `<p>${item.name} × ${item.amount} — ${total.toFixed(2)} $</p>`;
      }
    });
  }
  return { itemsHTML, subtotal };
}
