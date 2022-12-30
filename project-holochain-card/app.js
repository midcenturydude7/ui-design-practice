// Reset animation
"use strict";

// DOM variables
const colOne = document.querySelector(".one");
const colTwo = document.querySelector(".two");
const first = document.getElementById("first");
const second = document.getElementById("second");
const paraOne = document.querySelector(".para-one");
const paraTwo = document.querySelector(".para-two");

// The 411
first.addEventListener(
  "click",
  () => {
    colOne.style.borderBottom = "4px solid black";
    colTwo.style.borderBottom = "none";

    // Reset animation helper
    paraTwo.classList.remove("para-two");
    void paraTwo.offsetWidth;
    paraTwo.classList.add("para-two");

    paraOne.classList.remove("para-one-invisible");
    void paraOne.offsetWidth;
    paraOne.classList.add("clicked-left");
  },
  false
);

// What's Next
second.addEventListener(
  "click",
  (e) => {
    e.preventDefault;
    colOne.style.borderBottom = "none";
    colTwo.style.borderBottom = "4px solid black";

    // Reset animation helper
    paraOne.classList.remove("para-one");
    void paraOne.offsetWidth;
    paraOne.classList.add("para-one-invisible");

    paraTwo.classList.remove("para-two");
    void paraTwo.offsetWidth;
    paraTwo.classList.add("clicked-right");
  },
  false
);
