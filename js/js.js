const container = document.querySelector('.container');



// for loop that implements a listener in order to paint the grid using hover effect
function squaresEventList() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', (e) => {
            e.target.style.background = randomColor();
            console.log(e)
        })
    }
}


// Function that creates the grid and take the function squares to pass elisteners to every div
function generateGrid(rows, cols) {

    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
    squaresEventList();
}


// function that sets the size of the grid and erase the former one
function sizeGrid() {
    const size = prompt('chose how many columns and rows you want', 'enter a number');
    const squares = document.getElementsByClassName('square');
    while (squares.length > 0) {
        squares[0].parentNode.removeChild(squares[0]);
    }
    generateGrid(size, size);

}
// function that changes style to background white to "erase" the blue traces from eventListener
function remove() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
        squares[i].classList.add('square-white');
        squares[i].style.background = 'white';
    }
}


function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${  red  }, ${  green  }, ${  blue  })`;
}