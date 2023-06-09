// const dropbtn = document.querySelector(".dropdownbutton");
const dropdiv = document.querySelector(".dropdowndiv");
const dropdiv2 = document.querySelector('.dropdowndiv2');
const dropdiv3 = document.querySelector('.dropdowndiv3');

const dropbtn = document.querySelector('.dropdownbutton');
const dropbtn2 = document.querySelector('.dropdownbutton2');
const dropbtn3 =document.querySelector('.dropdownbutton3')

dropbtn.addEventListener('click', () => {
    dropdiv.classList.toggle('active')
})

dropbtn2.addEventListener('click', () => {
    dropdiv2.classList.toggle('active')
})

dropbtn3.addEventListener('click', () => {
    dropdiv3.classList.toggle('active')
})