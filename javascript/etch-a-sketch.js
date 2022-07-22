let squareDimensions = 600/16;
let squareSquared = 16*16;

for (let i =0; i < squareSquared; i++) {
let gridSquare = document.createElement("div");
gridSquare.style.width = `${squareDimensions}px`;
gridSquare.style.height = `${squareDimensions}px`;
gridSquare.style.color = "black";
let screen = document.getElementById("screen");
screen.appendChild(gridSquare);
}