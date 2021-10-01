var navslide = document.getElementById("nav_links")
var burger = document.getElementById("slider")
var close = document.getElementById("times")
var bodies = document.getElementById("everything")

function slide() {
    navslide.style.left = "60%";
    navslide.style.display = "contents";
    burger.style.display = "none";
}

function closing() {
    navslide.style.display = "none";
    burger.style.display = "block"
}