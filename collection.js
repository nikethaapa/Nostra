
// sidenav
var sidenav = document.querySelector(".side_bar")
var openmenu = document.getElementById("side-navbar-activate")
var closemenu = document.getElementById("side-navbar-close")

openmenu.addEventListener("click",function(){
    sidenav.style.left="0"
})
closemenu.addEventListener("click",function(){
    sidenav.style.left="-60%"
})
var head = document.querySelector(".head")
var closebtn = document.getElementById("head-close")        

closebtn.addEventListener("click", function(){
    head.style.display = "none"
})
const checkboxes = document.querySelectorAll(".filter_container input");
const products = document.querySelectorAll(".product_item");

checkboxes.forEach(box => box.addEventListener("change", filterProducts));

function filterProducts() {
    // Get all selected checkboxes in lowercase
    const activeFilters = Array.from(checkboxes)
        .filter(box => box.checked)
        .map(box => box.value.toLowerCase());

    products.forEach(product => {
        const tags = product.dataset.tags.toLowerCase();
        // OR logic: show if product matches any selected filter
        const show = activeFilters.length === 0 || activeFilters.some(f => tags.includes(f));
        product.style.display = show ? "block" : "none";
    });
}