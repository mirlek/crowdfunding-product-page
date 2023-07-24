const bar = document.querySelector(".bar");

setTimeout(() => {
  bar.style.setProperty("--progress", "80%");
}, 50);