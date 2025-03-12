document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector("#grid-container");
    const setGridSizeBtn = document.querySelector("#set-grid-size");
    const clearGridBtn = document.querySelector("#clear-grid");
    const colorSetterBtn = document.querySelector("#color-setter-btn");
    const gridCellColorElement = document.querySelector("#gridCell-color");
    const eraserBtn = document.querySelector("#eraser-btn");
    const randomColorBtn = document.querySelector("#random-color-mode-btn");

    const getRandomColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;


    let defaultGridCellPerRow = 16;
    let currentColor = "red"; // Default color
    let eraserMode = false;
    let randomColorMode = false;
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

        document.querySelectorAll(".grid-cell").forEach(cell => {
            cell.addEventListener("mousedown", () => {
                ismousedown = true;

                if (eraserMode) {
                    cell.style.backgroundColor = "white";
                } else if (randomColorMode) {
                    cell.style.backgroundColor = getRandomColor();
                } else {
                    cell.style.backgroundColor = currentColor;
                }
            });

            cell.addEventListener("mouseover", () => {
                if (ismousedown) {
                    if (eraserMode) {
                        cell.style.backgroundColor = "white";
                    } else if (randomColorMode) {
                        cell.style.backgroundColor = getRandomColor();
                    } else {
                        cell.style.backgroundColor = currentColor;
                    }
                }
            });

            cell.addEventListener("mouseup", () => {
                ismousedown = false;
            });
        });

    };

    // Event to set a new grid size
    setGridSizeBtn.addEventListener("click", () => {
        const setUserGridSize = parseInt(prompt("Enter grid size 1 - 150"));
        if (isNaN(setUserGridSize) || setUserGridSize < 1 || setUserGridSize > 150) {
            alert("Error, size must be a number between 1 - 150");
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


    eraserBtn.addEventListener("click", () => {
        if (!eraserMode) {
            eraserMode = true;
            randomColorMode = false;
            eraserBtn.style.backgroundColor = "yellow";
            randomColorBtn.style.backgroundColor = "";
        } else {
            eraserMode = false;
            eraserBtn.style.backgroundColor = "";
        }
    });

    randomColorBtn.addEventListener("click", () => {
        if (!randomColorMode) {
            randomColorMode = true;
            eraserMode = false;
            randomColorBtn.style.backgroundColor = "yellow";
            eraserBtn.style.backgroundColor = "";
        } else {
            randomColorMode = false;
            randomColorBtn.style.backgroundColor = "";
        }
    });

    // Load the default grid
    setGrid(defaultGridCellPerRow);
});
