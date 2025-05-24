
function initToggleMenu() {
  const toggleButton = document.querySelector(".toggle_button");
  const listContainer = document.getElementById("list_cont");
  if (!toggleButton || !listContainer) return;
  toggleButton.addEventListener("click", () => {
    listContainer.classList.toggle("active");
  });
}

function initNavLinkClose() {
  const listContainer = document.getElementById("list_cont");
  const navLinks = document.querySelectorAll(".list_container a");
  if (!listContainer || navLinks.length === 0) return;
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", () => {
      listContainer.classList.remove("active");
    });
  }
}

function initBasketToggle() {
  const toggleBtn = document.getElementById("toggleBasketBtn");
  const basket = document.querySelector(".basket_wrapper");
  if (!toggleBtn || !basket) return;
  toggleBtn.addEventListener("click", () => {
    basket.classList.toggle("visible");
    const isVisible = basket.classList.contains("visible");
    toggleBtn.textContent = isVisible
      ? "Hide cart"
      : "Show cart";
  });
}

document.addEventListener("DOMContentLoaded", initBasketToggle);
document.addEventListener("DOMContentLoaded", initToggleMenu);
document.addEventListener("DOMContentLoaded", initNavLinkClose);
