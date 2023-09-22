customSelect('select');


let range = document.querySelector(".order-form__range");
let output = document.getElementById("procent");
output.innerHTML = range.value + '%';

range.oninput = function () {
	output.innerHTML = this.value + '%';
}

const burger = document.getElementById("burger");
const headerMenu = document.getElementById("burger__menu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  headerMenu.classList.toggle("active");
});