const colOne = document.querySelector(".one");
const colTwo = document.querySelector(".two");
const first = document.getElementById("first");
const second = document.getElementById("second");
const paraOne = document.querySelector(".para-one");
const paraTwo = document.querySelector(".para-two");

second.addEventListener("click", () => {
  paraOne.style.display = "none";
  paraTwo.classList.replace("para-two", "clicked-right");
  colOne.style.borderBottom = "none";
  colTwo.style.borderBottom = "4px solid black";
});

first.addEventListener("click", () => {
  paraOne.style.display = "block";
  paraTwo.style.display = "none";
  colOne.style.borderBottom = "4px solid black";
  colTwo.style.borderBottom = "none";
});
