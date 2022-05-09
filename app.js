("use strict");

// Getting the items from the css classes
// const item = document.querySelectorAll(".item-img");
const itemBox = document.querySelectorAll(".item-slot");
const img = document.querySelectorAll(".item-img");
const inventory = document.getElementById("inventory");
console.log(inventory);
let ms = document.querySelector(".ms-stat");

// console.log(item);

// const items = document.querySelector(".items");

// Looping over the items and assigning the dragstart function to them.

img.forEach((img) => {
  img.addEventListener("click", function () {
    console.log("Click");
  });
});

//////// DRAG AND DROP /////////

let box;
for (box of itemBox) {
  box.addEventListener("dragstart", dragStart);
  console.log("dragstart");
}
// for (let i = 0; i < item.length; i++) {
//   item[i].addEventListener("dragstart", dragStart);
//   console.log("drag start");
// }

// Function for dragging the items
function dragStart(e) {
  console.log("drag starts...");
  e.dataTransfer.setData("text/plain", e.target.id);
  console.log(e);
  setTimeout(() => {
    e.target.classList.add("hide");
  }, 0);
}

// Looping over the item boxes and assigning event listeners on them
itemBox.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

/////// js-class for creating items ////////////
class item {
  constructor(name, text, stats) {
    this.name = name;
    this.text = text;
    this.stats = stats;
  }
  itemDescription() {
    console.log(`${this.name},${this.text},${this.stats}`);
  }
}

let itemArray = [];

/////////  Creating items from JSON file using fetch ////////////////////
const getData = function () {
  fetch("./item.json")
    .then((response) => {
      return response.json();
    })
    .then(async (data) => {
      console.log(data);
      const {
        data: {
          3006: { name: bg, plaintext: text, stats },
        },
      } = data;
      const testItem = data.data[1001].image;
      console.log(testItem);
      const berserkersGreaves = new item(bg, text, stats);
      const manamuneId = 3004;

      const manamune = new item(
        data.data[manamuneId].name,
        data.data[manamuneId].description,
        data.data[manamuneId].stats
      );
      await itemArray.push(manamune);
      outputInventory();

      console.log(berserkersGreaves);
      console.log(manamune);
    });
};

getData();

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}
// Function that adds the drag-over class when elements is draged over dropable elements
function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
  console.log("Drag over");
}

// Function that removes the drag-over class when draggeble elements leaves dropable elements
function dragLeave(e) {
  console.log("leave");
  e.target.classList.remove("drag-over");
}
// Function that removes drag-over class from target. saves the data from dataTransfer.getData to const id. Then sets const draggable to id.
//Then appends draggable element to the target element
function drop(e) {
  console.log("drop");
  e.target.classList.remove("drag-over");
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);
  e.target.appendChild(draggable);
  draggable.classList.remove("hide");
}
