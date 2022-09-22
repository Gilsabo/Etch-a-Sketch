let rows = 4;
let cols =4 ;
const container = document.querySelector('.container');


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

