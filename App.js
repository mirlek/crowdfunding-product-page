const bar = document.querySelector(".bar");
const off = document.querySelector(".switcher_bookmarked_off");
const on = document.querySelector(".switcher_bookmarked_on");

setTimeout(() => {
  bar.style.setProperty("--progress", "80%");
}, 50);

function toggleClass() {
    $(".switcher_bookmarked_off").toggleClass(".switcher_bookmarked_off");
  }