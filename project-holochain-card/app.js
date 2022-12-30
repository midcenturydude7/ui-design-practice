const colOne = document.querySelector(".one");
const colTwo = document.querySelector(".two");
const first = document.getElementById("first");
const second = document.getElementById("second");
const paraOne = document.querySelector(".para-one");
const paraTwo = document.querySelector(".para-two");

// The 411
first.addEventListener("click", () => {
  paraTwo.style.display = "none";
  paraOne.classList.replace("para-one-invisible", "clicked-left");
  colOne.style.borderBottom = "4px solid black";
  colTwo.style.borderBottom = "none";
});

// What's Next
second.addEventListener("click", () => {
  paraOne.classList.replace("para-one", "para-one-invisible");
  paraTwo.classList.replace("para-two", "clicked-right");
  colOne.style.borderBottom = "none";
  colTwo.style.borderBottom = "4px solid black";
});

// function infoBtn() {
//   first.addEventListener("click", () => {
//     paraTwo.style.display = "none";
//     paraOne.classList.replace("para-one-invisible", "clicked-left");
//     colOne.style.borderBottom = "4px solid black";
//     colTwo.style.borderBottom = "none";
//   });
// }

// function nextBtn() {
//   second.addEventListener("click", () => {
//     paraOne.classList.replace("para-one", "para-one-invisible");
//     paraTwo.classList.replace("para-two", "clicked-right");
//     colOne.style.borderBottom = "none";
//     colTwo.style.borderBottom = "4px solid black";
//   });
// }

// second.onclick = nextBtn();
// first.onclick = infoBtn();
