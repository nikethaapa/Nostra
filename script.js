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
// head
var head = document.querySelector(".head")
var closebtn = document.getElementById("head-close")
closebtn.addEventListener("click", function(){
    head.style.display = "none"
})
// img
var slideIndex = 0
var slider = document.querySelector(".img_img")
var slides = document.querySelectorAll(".slide")
var totalSlides = slides.length

function updateSlide(){
    slider.style.transform="translateX(-"+slideIndex*100+"%)"
}
// left
document.getElementById("left").addEventListener("click",function(){
    slideIndex--
    if(slideIndex<0){
        slideIndex=totalSlides-1
    }

    updateSlide()
})
// right
document.getElementById("right").addEventListener("click",function(){
    slideIndex++
    if(slideIndex>=totalSlides){
        slideIndex=0
    }

    updateSlide()
})
// scroll
var elements = document.querySelectorAll(".scroll")
function checkScroll(){
elements.forEach(function(el){

var position = el.getBoundingClientRect().top
var screenHeight = window.innerHeight

if(position < screenHeight - 100){
el.classList.add("show")
}

})
}
window.addEventListener("scroll",checkScroll)
var sidenav = document.querySelector(".side_bar")
var sidelinks = document.querySelectorAll(".side_link a")

sidelinks.forEach(function(link){
link.addEventListener("click",function(){
sidenav.style.left="-60%"

})
})
