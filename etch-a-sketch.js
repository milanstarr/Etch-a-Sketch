"use strict";

function createGrid(gridNum) {
  for (let i = 0; i < gridNum**2; i++) {
    let cells = document.createElement("div");
      cells.addEventListener("mouseover", () => {
        cells.style.backgroundColor = "black";
      });
      const container = document.querySelector("#container");
      container.appendChild(cells);
}
}

createGrid(16);

// const btnDiv = document.querySelector(".button");
// const newGridBtn = document.createElement("button");
// newGridBtn.textContent = "new grid";
// newGridBtn.style.marginLeft = "10px";
// btnDiv.appendChild(newGridBtn);

// function removeGridChildren() {
//   let element = document.getElementById("grid-root");
//   while (element.firstChild) {
//     element.removeChild(element.firstChild);
//   }
// }

// function gridExpand() {
//   let gridNumInput = prompt(
//     "How many squares per side on the new grid? (max 100)"
//   );

//   if (gridNumInput > 100) {
//     alert("this number is too high! enter another number lower than 100.");
//     return;
//   }
//     removeGridChildren();
//     createGrid(gridNumInput);
// }

// newGridBtn.addEventListener("click", gridExpand);
