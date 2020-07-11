"use strict";

// Variables

const form = document.querySelector("#app");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");

//Event Listeners

let submitHandler = function (event) {
  //prevent form from reload
  event.preventDefault();
};

form.addEventListener("submit", submitHandler, false);
