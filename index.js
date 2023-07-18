const body = document.querySelector("body");
const menuBtn = document.getElementById("menu-button");
const dropDown = document.getElementById("drop-down");
const dropDownSpans = document.querySelectorAll("span");

menuBtn.addEventListener("click", function () {
  dropDown.classList.toggle("active");
});

dropDown.addEventListener("mouseleave", function () {
  dropDown.classList.remove("active");
});
