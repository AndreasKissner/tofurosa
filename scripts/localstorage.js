function saveToLocalStorage() {
  localStorage.setItem("deliveryType", deliveryType);
  localStorage.setItem("myMenu", JSON.stringify(myMenu));
}
function loadFromLocalStorage() {
  const savedMenu = localStorage.getItem("myMenu");
  const savedType = localStorage.getItem("deliveryType");

  if (savedMenu) Object.assign(myMenu, JSON.parse(savedMenu));
  if (savedType) deliveryType = savedType;
}
