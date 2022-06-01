
const body = document.querySelector('body');
const header = document.querySelector('h1');
const button = document.querySelector('button');
const gridContainer= document.getElementById("gridContainer");
let userInput;



makeGrid(16);


//create new grid
    button.addEventListener('click', () => {
    gridContainer.innerHTML = "";  //clear previous grid
        do { 
        userInput = +prompt('Choose a grid size between 6-100!', 20); 
    } while ( userInput < 6 || userInput > 100);
    makeGrid(userInput);  
});






function makeGrid(numb){
    //change & set css var dynamically
gridContainer.style.setProperty('--colNum', numb);
gridContainer.style.setProperty('--rowNum', numb);
    //create grid & add event
for (let i= 0; i < (numb * numb); i++) {
let grid = document.createElement('div');
    grid.className = "divs";
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor =  generateRandomColor();   
    });
gridContainer.append(grid);
    }
}



function generateRandomColor()
{
    let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')
    return randomColor;
}



