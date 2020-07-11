"use strict";

// Variables

const form = document.querySelector("#app");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
var answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

//Event Listeners

let submitHandler = function (event) {
  //prevent form from reload
  event.preventDefault();

  //If there’s not a question to answer, return
  if (question.value.length < 1) return;
};

form.addEventListener("submit", submitHandler, false);
