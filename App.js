const bar = document.querySelector(".bar");
document.querySelector(".switcher_bookmarked_off");
document.querySelector(".switcher_bookmarked_on");
const el =document.getElementById("switcher");

setTimeout(() => {
  bar.style.setProperty("--progress", "80%");
}, 50);

function toggleClass() {
    el.classList.toggle("switcher_bookmarked_on");
  }