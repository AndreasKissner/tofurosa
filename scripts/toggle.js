const toggleButton = document.getElementsByClassName("toggle_button")[0]
const listContainer = document.getElementsByClassName("list_container")[0]

toggleButton.addEventListener("click", () =>{
 
    listContainer.classList.toggle("active");
});