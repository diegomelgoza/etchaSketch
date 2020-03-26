const container = document.querySelector("#gridBox");

// create a grid
function baseGrid(size) {
    for (let i=0; i < size*size; i++) {
        const box = document.createElement("div");
        container.appendChild(box).className = "grid";
    }  
}

// when the mouse hovers over a box, the box will turn gray
container.addEventListener("mouseover", (e) => {
    e.target.setAttribute("style", "background-color: gray;")
})

//call the base grid 
let value = 16;
baseGrid(value);

// resets the entire grid
let reset = document.querySelector("#clear");
reset.onclick = () => {
    let clear = document.querySelectorAll(".grid");
    clear.forEach((e) => {
        e.style.backgroundColor = "white";
    });
}

// allow the user to create a grid of any size up to 100
let custom = document.querySelector("#custom");
custom.onclick = () => {
    let cell = document.querySelectorAll(".grid");
    cell.forEach((e) => {
        e.remove();
    });
    let newGrid = document.querySelector("#gridBox");
    let size = parseInt(prompt("Enter a size between 2 and 100"));
    newGrid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    baseGrid(size)
}

// give a preset option of 16x16 grid
let sixteen = document.querySelector("#sixteen");
sixteen.onclick = () => {
    let cell = document.querySelectorAll(".grid");
    cell.forEach((e) => {
        e.remove();
    });
    let newGrid = document.querySelector("#gridBox");
    newGrid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    baseGrid(value);
}