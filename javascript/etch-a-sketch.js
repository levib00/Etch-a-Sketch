let gridSize = prompt("How Many Squares across would you like your grid to be? (max 100)")
if (gridSize > 100) {
    gridSize = prompt("How Many Squares across would you like your grid to be? (max 100)")
}

let squareDimensions = 960/gridSize;
let squareSquared = gridSize*gridSize;

for (let i = 0; i < squareSquared; i++) {
    let gridSquare = document.createElement("div");
    makeSquare(gridSquare)
}

function makeSquare(gridSquare) {
    gridSquare.style.width = `${squareDimensions}px`;
    gridSquare.style.height = `${squareDimensions}px`;
    gridSquare.style.color = "black";
    gridSquare.addEventListener("mouseenter", function() {
        gridSquare.classList.add("squares")
    })
    let screen = document.getElementById("screen");
    screen.appendChild(gridSquare);
    
}

