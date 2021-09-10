"use strict";

// Initialize variables to 0
let score = 0
let distanceTravelled = 0

// grab grid div and assign to variable
const grid = document.querySelector('.grid');
// Populate the grid div with 340 square divs using template literal in for loop
const createSquares = () => {
    for (let i = 1; i <= 340; ++ i) {
        grid.innerHTML = `${grid.innerHTML} <div class="square" id="square${i}></div>"`
    }
}

// Variable to hold the array of game squares
const squares = document.getElementsByClassName("square");
console.log(squares)