
const toggleButton = document.querySelector(".toggle_button");
const listContainer = document.getElementById("list_cont");

toggleButton.addEventListener("click", () => {
  listContainer.classList.toggle("active");
});


const navLinks = document.querySelectorAll(".list_container a");

for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", () => {
    listContainer.classList.remove("active");
  });
}


function initBasketToggle() {
  const toggleBtn = document.getElementById("toggleBasketBtn");
  const basket = document.querySelector(".basket_wrapper");

  if (!toggleBtn || !basket) return;

  toggleBtn.addEventListener("click", () => {
    basket.classList.toggle("visible");

    const isVisible = basket.classList.contains("visible");
    toggleBtn.textContent = isVisible
      ? "🛒 Warenkorb verbergen"
      : "🛒 Warenkorb anzeigen";
  });
}




document.addEventListener("DOMContentLoaded", initBasketToggle);
