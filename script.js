const grid = document.querySelector(".grid");
const button = document.querySelector("button");
const squares = document.querySelectorAll(".squares");
let gridSize = 16;

button.addEventListener("click", (e) => {
    gridSize = prompt("How many squares per grid?");
    

    if (gridSize < 100) {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
          }
          console.log(100/gridSize);

        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                const square = document.createElement("div");
                square.setAttribute("class", "square");
                square.style.flexBasis = `${100/gridSize}%`;
                square.style.height = `${100/gridSize}%`;
                grid.appendChild(square);
            }
        }
    }
})

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        grid.appendChild(square);
    }
}

 // Generates a random value between 0 and 255
 function randomNum() {
    return Math.floor(Math.random() * 256);
  }
// Returns an array of 3 values for rgb
function randomRGB() {
    let red = randomNum();
    let green = randomNum();
    let blue = randomNum();
    return [red,green,blue];
    }

grid.addEventListener("mouseover", (e) => {
    const square = e.target;
    const array = [];
    square.setAttribute("class", "hovered square");
    let rgbVals = randomRGB();
    var tempColor = "rgb(" + rgbVals[0] + ", " + rgbVals[1] + ", " + rgbVals[2] + ")";
    square.style.backgroundColor = tempColor;
})




console.log(grid);