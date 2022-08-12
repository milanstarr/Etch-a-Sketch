"use strict";

function createGrid(gridNum) {
  console.log(gridNum ** 2);
  const container = document.querySelector("#container");
  container.style['grid-template-columns'] = `repeat(${gridNum}, 1fr)`;

  for (let i = 0; i < gridNum ** 2; i++) {
    let cells = document.createElement("div");

    cells.addEventListener("mouseover", () => {
      cells.style.backgroundColor = "black";
    });

    container.appendChild(cells);
  }

}

createGrid(16);

const btnDiv = document.querySelector(".button");
const newGridBtn = document.createElement("button");
newGridBtn.textContent = "new grid";
newGridBtn.style.marginLeft = "10px";
btnDiv.appendChild(newGridBtn);

function removeCells() {
  let container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function gridExpand() {
  let gridNumInput = prompt(
    "How many squares per side on the new grid? (max 100)"
  );

  if (gridNumInput > 100) {
    alert("this number is too high! enter another number lower than 100.");
    return;
  }
  removeCells();
  createGrid(gridNumInput);
}

newGridBtn.addEventListener("click", gridExpand);
