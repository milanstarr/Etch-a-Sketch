"use strict";

const gridDiv = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
  let rowDiv = document.createElement("div");
  for (let i = 0; i < 16; i++) {
    let columnDiv = document.createElement("div");
    columnDiv.addEventListener("mouseover", () => {
        columnDiv.style.backgroundColor = "black";
    });
    rowDiv.appendChild(columnDiv);
  }
  gridDiv.appendChild(rowDiv);
}
