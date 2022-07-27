"use strict";

function createGridRoot() {
  const gridDiv = document.createElement("div");
  gridDiv.classList.add('container', 'flex');
  document.body.appendChild(gridDiv);
  return gridDiv;
}


function createGrid(gridNum) {
  const gridRoot = createGridRoot();

  for (let i = 0; i < gridNum; i++) {
    let rowDiv = document.createElement("div");
    for (let i = 0; i < gridNum; i++) {
      let columnDiv = document.createElement("div");
      columnDiv.addEventListener("mouseover", () => {
        columnDiv.style.backgroundColor = "black";
      });
      rowDiv.appendChild(columnDiv);
    }
    gridRoot.appendChild(rowDiv);
  }
}

createGrid(16);

const btnDiv = document.querySelector(".button");
const newGridBtn = document.createElement("button");
newGridBtn.textContent = "new grid";
newGridBtn.style.marginLeft = "10px";
btnDiv.appendChild(newGridBtn);

function gridExpand() {
  let gridNumInput = prompt(
    "How many squares per side on the new grid? (max 100)"
  );

  //   if gridNumInput > 100 {
  //     alert("this number is too high. enter a number lower than 100");
  //   } else {
  //     createGridDiv(gridNumInput);
  //   }

  //   createGridDiv(gridNumInput);
}

newGridBtn.addEventListener("click", gridExpand);
