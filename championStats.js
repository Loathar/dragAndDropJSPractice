"use strict";
let testList = document.querySelector(".test-list");
const InventorySlots = document.querySelectorAll(".inventory");

// Inventory slots
const inventory1 = document.getElementById(".slot1");
const inventory2 = document.getElementById(".slot2");

///////// Stats variables ///////

const ad = document.querySelector(".ad-stat");
const ap = document.querySelector(".ap-stat");
const ar = document.queryCommandIndeterm(".ar-stat");
const armor = document.querySelector(".armor-stat");
const as = document.querySelector(".as-stat");
const mr = document.querySelector(".mr-stat");
const crit = document.querySelector(".crc-stat");

const setChampionStats = function (data) {
  console.log("From setchampionfunc", data);
  const dianaStats = data.data.Diana.stats;

  ad.textContent = dianaStats.attackdamage;
  armor.textContent = dianaStats.armor;

  as.textContent = dianaStats.attackspeed;
  mr.textContent = dianaStats.spellblock;
  crit.textContent = dianaStats.crit;
  armor.textContent = dianaStats.armor;
};
////// Fecthing champion stats ///////

const championStats = function () {
  fetch("./champion.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      setChampionStats(data);
      const diana = data.data.Diana;

      /////// Setting stats from JSON;

      // ar.textContent = dianaStats.attackrange;
    })
    .error((e) => {
      console.log("Error", e);
    });
};
championStats();

//////////// Stats objects //////

let dianaStats = {
  ad: 666,
  // ap: data.data.Diana.stats.,
  ar: 38,
  as: 0.76,
  mr: 30,
  ah: 0,
  crc: 40,
  ms: 350,
  hp: 580,
};

//////////// Item objects /////////

// functions

const checkForItem = function (item) {
  item ? console.log(item) : console.log("no item");
};
// console.log(
//   itemBox.forEach((box) => {
//     box.hasChildNodes;
//   })
// );

const object1 = {
  a: "somestring",
  b: 42,
};

for (const [key, value] of Object.entries(object1)) {
  //   console.log(`${key}: ${value}`);
  testList.textContent = `${key}: ${value}`;
}

////////// Uppdating stats ////////

ad.innerText = dianaStats.ad;
