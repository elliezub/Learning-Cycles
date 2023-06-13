const dropdivhtml = document.querySelector(".dropdivhtml");
const contenthtml = document.querySelector(".exampledivcontenthtml");

contenthtml.addEventListener("click", () => {
  dropdivhtml.classList.toggle("active");
});

const dropdivjs = document.querySelector(".dropdivjs");
const contentjs = document.querySelector(".exampledivcontentjs");

contentjs.addEventListener("click", () => {
  dropdivjs.classList.toggle("active");
});

const dropdivgpt = document.querySelector(".dropdivgpt");
const contentgpt = document.querySelector(".exampledivcontentgpt");

contentgpt.addEventListener("click", () => {
  dropdivgpt.classList.toggle("active");
});

//end of dropdown examples

const toTop = document.querySelector("#totop");

window.onscroll = () =>
  (toTop.style.display = window.scrollY > 20 ? "block" : "none");

toTop.onclick = () => window.scrollTo(0, 0);

//end of to top button

const darkModeToggle = document.querySelector('#darktoggle');

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
})