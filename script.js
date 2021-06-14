let window1 = document.getElementById("window-1")
let window2 = document.getElementById("window-1")
let body = document.querySelector(".body")
let btn = document.querySelector(".open-window")
let closeBtn = document.querySelector(".close-btn")
function myFunction() {
    document.getElementById("window-1").classList.toggle("active");
    }

function myFunction2() {
    document.getElementById("window-2").classList.toggle("active");
}
function hideScroll() {
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = "18px"
}
function unhideScroll(){
    document.body.style.overflow = 'visible'
    document.body.style.marginRight = "0px"
}
// function hamburgerPop() {
//     document.querySelector(".list").style.display = "flex"
//     document.querySelector(".list").style.transition = "all 300ms ease-in-out";
// }

const menuBtn = document.querySelector('.hamburger-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        document.querySelector(".list").style.visibility = "visible"
        document.querySelector(".list").classList.add("move")
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        document.querySelector(".list").classList.remove("move")
        menuOpen = false;
    }
});