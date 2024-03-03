const openButton = document.querySelector(".open-btn");
const closeButton = document.querySelector(".close-btn");
const mobileMenu = document.querySelector("ul");



function closeNav() {
 mobileMenu.classList.remove("visible")
};

function openNav() {
  mobileMenu.classList.add("visible")
};
// closeBtn.addEventListener("click", () => {
//     mobileMenu.classList.remove("visible");
//   });

// openBtn.addEventListener("click", () => {
//   mobileMenu.classList.add("visible");
// });


//color switcher
//steps
//select the body where the selected color will be appended
//select the form input by id and the button
//pass an addeventlistener with a submit event with a function to;

//get the value of our input
//change the bg color of the body

// const body = document.querySelector("body");
// const colorInput = document.getElementById("color");
// const bgChangeForm = document.querySelector("#bgchangeform");

// bgChangeForm.addEventListener("submit", formBgChange());


// function formBgChange(event) {
//   event.preventDefault();
//   let color = color.value;
//   body.style.backgroundcolor = color;
// };