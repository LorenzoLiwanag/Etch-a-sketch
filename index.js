const gridContainer = document.querySelector("#grid-container");
const setGridSizeBtn = document.querySelector("#set-grid-size");
const defaulGridCellPerRow = 16;
const clearGridBtn = document.querySelector("#clear-grid");

setGridSizeBtn.addEventListener("click", () => {
    const setUserGridSize = prompt("Enter grid size 1 - 100");
    if (isNaN(setUserGridSize) || (setUserGridSize < 1 || setUserGridSize > 100)) {
        alert("Error, size must be a number between 1 - 100");
    } else {
        setGrid(setUserGridSize);

    }
})

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



