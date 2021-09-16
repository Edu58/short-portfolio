var navslide = document.getElementById("nav_links")
var burger = document.getElementById("slider")
var close = document.getElementById("times")
var bodies = document.getElementById("everything")

function slide() {
    navslide.style.left = "60%";
}

function closing() {
    navslide.style.left = "115%";
}

function darkmode() {
    document.body.style.background = "#212020"
    document.body.style.color = "#fff"
}
