let gridSize = 16;
let squareDimensions = 700/gridSize;
let squareSquared = gridSize*gridSize;
let screen = document.getElementById("screen");
let gridText = document.getElementById("grid-size")

function fillGrid(gridSize) {
    squareDimensions = 700/gridSize;
    squareSquared = gridSize*gridSize;
    gridText.innerText = `${gridSize}x${gridSize}`
    for (let i = 0; i < squareSquared; i++) {
        let gridSquare 
        gridSquare = document.createElement("div");
        gridSquare.setAttribute('id', `div${i}`)
        makeSquare(gridSquare)
    }

}

fillGrid(gridSize)

let squareColor = false;

function setRainbow() {
    squareColor = true;
    console.log(squareColor)
    return squareColor
}

function setBlack() {
    squareColor = false;
    console.log(squareColor)
    return squareColor
}

const rainbowBtn = document.getElementById("rainbow")
rainbowBtn.addEventListener("click", setRainbow)

const blackBtn = document.getElementById("black")
blackBtn.addEventListener("click", setBlack)

function setColorLogic() {
    if (squareColor == false) {
        console.log(this.id)
        document.getElementById(`${this.id}`).style.backgroundColor = `black`
    }
    else {
        console.log(this.id)
        redValue = Math.floor(Math.random() * 256)
        greenValue = Math.floor(Math.random() * 256)
        blueValue = Math.floor(Math.random() * 256)
        document.getElementById(`${this.id}`).style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
    }
}

function makeSquare(gridSquare) {
    gridSquare.style.width = `${squareDimensions}px`;
    gridSquare.style.height = `${squareDimensions}px`;
    gridSquare.addEventListener("mouseenter", setColorLogic)
    screen.appendChild(gridSquare);
}

const resizeBtn = document.getElementById("resize-button")
resizeBtn.addEventListener("click", resizeGrid)

const clearBtn = document.getElementById("clear")
clearBtn.addEventListener("click", clearGrid)

function removeSquares() {
    while (screen.lastElementChild) {
        screen.removeChild(screen.lastElementChild);
      }
}
function resizeGrid() {
    removeSquares()
    gridSize = prompt("How Many Squares across would you like your grid to be? (max 100)")
    if (gridSize > 100 || gridSize < 1) {
        gridSize = prompt("How Many Squares across would you like your grid to be? (max 100)")
    }
    fillGrid(gridSize)
}

function clearGrid() {
    console.log(gridSize)
    removeSquares()
    i = 0
    fillGrid(gridSize)
}