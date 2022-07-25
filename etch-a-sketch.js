"use strict";

function createGridDiv(gridNum) {
const gridDiv = document.querySelector(".container");

for (let i = 0; i < gridNum; i++) {
  let rowDiv = document.createElement("div");
  for (let i = 0; i < gridNum; i++) {
    let columnDiv = document.createElement("div");
    columnDiv.addEventListener("mouseover", () => {
      columnDiv.style.backgroundColor = "black";
    });
    rowDiv.appendChild(columnDiv);
  }
  gridDiv.appendChild(rowDiv);
}
}

createGridDiv(16);


const btnDiv = document.querySelector(".button");
const newGridBtn = document.createElement("button");
newGridBtn.textContent = "new grid";
newGridBtn.style.marginLeft = "10px";
btnDiv.appendChild(newGridBtn);

function gridExpand() {

  let gridNum = prompt("How many squares per side on the new grid? (max 100)");
 
  gridDiv.remove();

  for (let i = 16; i < gridNum; i++) {
    let rowDiv = document.createElement("div");

    for (let i = 16; i < gridNum; i++) {
      let columnDiv = document.createElement("div");
      columnDiv.addEventListener("mouseover", () => {
        columnDiv.style.backgroundColor = "black";
      });
      rowDiv.appendChild(columnDiv);
    }
    gridDiv.appendChild(rowDiv);
    }
  }

newGridBtn.addEventListener("click", gridExpand);
