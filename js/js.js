let rows = 50;
let cols =50;
const container = document.querySelector('.container');


// Function that creates the grid
function generateGrid(rows,cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols)
    for (let i = 0; i < rows*cols; i++){
        const square =  document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);
    }
}
generateGrid(rows,cols);
// for loop that implements a listener in order to paint the grid without using hover
const squares = document.getElementsByClassName('square');
for (var i = 0; i<squares.length; i++){
    squares[i].addEventListener('mouseover',(e) => {
        e.target.style.background = 'blue';
    }); 
}


   
    
