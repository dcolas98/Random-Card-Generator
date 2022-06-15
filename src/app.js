/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = () => {
//   document.querySelector(".card").classList.add("suits");
//   setTimeout(() => {
//     document.querySelector(".card").classList.remove("suits");
//     document.querySelector(".card").classList.remove("suits");
//   }, 10000);
// };

const suit = ["\u2665", "\u2666", "\u2663", "\u2668"];
const number = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "A",
  "J",
  "Q",
  "K"
];

function randomIndex(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return index;
}
console.log(number[randomIndex(number)]);
console.log(suit[randomIndex(suit)]);

const numberValue = number[randomIndex(number)];
const suitValue = suit[randomIndex(suit)];
