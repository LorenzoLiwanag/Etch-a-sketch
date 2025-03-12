document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector("#grid-container");
    const setGridSizeBtn = document.querySelector("#set-grid-size");
    const clearGridBtn = document.querySelector("#clear-grid");
    const colorSetterBtn = document.querySelector("#color-setter-btn");
    const gridCellColorElement = document.querySelector("#gridCell-color");

    let defaultGridCellPerRow = 16;
    let currentColor = "red"; // Default color
    let ismousedown = false;

    const setGrid = (cellsPerRow) => {
        gridContainer.innerHTML = ""; // Clear the previous grid
        gridContainer.style.display = "grid";
        gridContainer.style.gridTemplateColumns = `repeat(${cellsPerRow}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${cellsPerRow}, 1fr)`;

        const totalCells = cellsPerRow * cellsPerRow;

        for (let i = 0; i < totalCells; i++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridContainer.appendChild(gridCell);
        }

        //click and drag rather than hover to color
        document.querySelectorAll(".grid-cell").forEach(cell => {
            cell.addEventListener("mousedown", () => {
                ismousedown = true;
                cell.style.backgroundColor = currentColor;
            });


            cell.addEventListener("mouseover", () => {
                if (ismousedown) {
                    cell.style.backgroundColor = currentColor;
                }
            });
    
            cell.addEventListener("mouseup", () => {
                ismousedown = false;
            });
        });

    };

    // Event to set a new grid size
    setGridSizeBtn.addEventListener("click", () => {
        const setUserGridSize = parseInt(prompt("Enter grid size 1 - 100"));
        if (isNaN(setUserGridSize) || setUserGridSize < 1 || setUserGridSize > 100) {
            alert("Error, size must be a number between 1 - 100");
        } else {
            setGrid(setUserGridSize);
        }
    });

    // Event to clear the grid
    clearGridBtn.addEventListener("click", () => {
        document.querySelectorAll(".grid-cell").forEach(cell => {
            cell.style.backgroundColor = "white";
        });
    });

    // Event to change hover color
    colorSetterBtn.addEventListener("click", () => {
        currentColor = gridCellColorElement.value;
    });

    // Load the default grid
    setGrid(defaultGridCellPerRow);
});
