"use strict";

const RAINBOW_MODE = 'rainbow';
const PEN_MODE = 'default';
const ERASER_MODE = 'eraser';

let ACTIVE_MODE = PEN_MODE;

function getRandomColorInt () {
  return Math.floor(Math.random() * 256);
}

function createGrid(gridNum) {
  const container = document.querySelector("#container");
  container.style['grid-template-columns'] = `repeat(${gridNum}, 1fr)`;

  for (let i = 0; i < gridNum ** 2; i++) {
    let cells = document.createElement("div");

    cells.addEventListener("mouseover", () => {
      if (ACTIVE_MODE == RAINBOW_MODE) {
        cells.style.backgroundColor = `rgb(${getRandomColorInt()}, ${getRandomColorInt()}, ${getRandomColorInt()})`;
      } else if (ACTIVE_MODE == PEN_MODE) {
        cells.style.backgroundColor = 'black';
      } else { 
        cells.style.backgroundColor = 'white';
      }
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

const rainbowBtn = document.createElement("button");
rainbowBtn.textContent = 'rainbow';
rainbowBtn.style.marginLeft = "10px";
rainbowBtn.style.marginTop = "10px";
btnDiv.appendChild(rainbowBtn);

const eraserBtn = document.createElement("button");
eraserBtn.textContent = 'erase';
eraserBtn.style.marginLeft = '10px';
eraserBtn.style.marginTop = '10px';
btnDiv.appendChild(eraserBtn);

const defaultBtn = document.createElement("button");
defaultBtn.textContent = 'default pen';
defaultBtn.style.marginLeft = '10px';
defaultBtn.style.marginTop = '10px';
btnDiv.appendChild(defaultBtn);

rainbowBtn.addEventListener('click', () => ACTIVE_MODE = RAINBOW_MODE);
eraserBtn.addEventListener('click', () => ACTIVE_MODE = ERASER_MODE);
defaultBtn.addEventListener('click', () => ACTIVE_MODE = PEN_MODE);

