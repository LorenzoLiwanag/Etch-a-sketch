const gridContainer = document.querySelector("#grid-container");
const gridSizeInput = document.querySelector("#grid-size");
const setGridSizeBtn = document.querySelector("#set-grid-size");
const defaulGridCellPerRow = 16;
const clearGridBtn = document.querySelector("#clear-grid");


const setGrid = (cellsPerRow) => {
    gridContainer.innerHTML = "";
    gridContainer.style.display = "grid";
    gridContainer.style.gridTemplateColumns = `repeat(${cellsPerRow}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${cellsPerRow}, 1fr)`;

    const totalCells = cellsPerRow * cellsPerRow;

    for (let i = 0; i < totalCells; i++) {
        const gridCell = document.createElement("div");
        gridCell.classList.add("grid-cell");
        gridContainer.appendChild(gridCell);
    }

    const gridCells = document.querySelectorAll(".grid-cell");
    gridCells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "red";
        })  
    })
    clearGridBtn.addEventListener("click", () => {
        gridCells.forEach(cell => {
            cell.style.backgroundColor = "white";
        })
    })
}


setGrid(defaulGridCellPerRow);



