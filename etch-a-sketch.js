let gridDiv = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    let rowDiv = document.createElement('div');
    for (let i = 0; i < 16; i++) {
        let columnDiv = document.createElement('div');
        rowDiv.appendChild(columnDiv);
    }
    gridDiv.appendChild(rowDiv);
}

