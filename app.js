"use strict";


// || Game Board Construction ||

// Initialize variables to 0
let score = 0
let distanceTravelled = 0

// const GAME_PIXEL_COUNT = 40;
// const SQUARE_OF_GAME_PIXEL_COUNT = Math.pow(GAME_PIXEL_COUNT, 2);

// grab grid div and assign to variable
const grid = document.querySelector('.grid');
// Populate the grid div with 340 square divs using template literal in for loop
const createSquares = () => {
    for (let i = 1; i <= 1200; ++ i) {
        grid.innerHTML = `${grid.innerHTML} <div class="square" id="square${i}"></div>`;
    }
}

// Variable to hold the array of game squares
const squares = document.getElementsByClassName("square");
console.log(squares)


// || Game Board Logic ||
createSquares();