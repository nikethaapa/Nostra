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