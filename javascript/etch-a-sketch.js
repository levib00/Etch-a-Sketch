let gridSize = 16;
let squareDimensions = 700/gridSize;
let squareSquared = gridSize*gridSize;
let screen = document.getElementById("screen");

function fillGrid() {
    
for (let i = 0; i < squareSquared; i++) {
    let gridSquare = document.createElement("div");
    makeSquare(gridSquare)
}
}
fillGrid()

function makeSquare(gridSquare) {
    squareDimensions = 700/gridSize;
    squareSquared = gridSize*gridSize;
    gridSquare.style.width = `${squareDimensions}px`;
    gridSquare.style.height = `${squareDimensions}px`;
    gridSquare.style.color = "black";
    gridSquare.addEventListener("mouseenter", function() {
        gridSquare.classList.add("squares")
    })
    screen.appendChild(gridSquare);
    
}

const resizeBtn = document.getElementById("resize-button")
resizeBtn.addEventListener("click", resizeGrid)

const clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", clearGrid)

//TODO have to remove all squares from the grid when clear
//button is pressed. can use that same function when i need
//to remove all of them to resize the grid.
function removeSquares() {
    while (screen.lastElementChild) {
        screen.removeChild(screen.lastElementChild);
      }
}

function clearGrid() {
    removeSquares()
    i = 0
    fillGrid()
}
function resizeGrid(gridSize) {
    removeSquares()
    gridSize = prompt("How Many Squares across would you like your grid to be? (max 100)")
    if (gridSize > 100) {
        gridSize = prompt("How Many Squares across would you like your grid to be? (max 100)")
    }
    fillGrid(gridSize)
}