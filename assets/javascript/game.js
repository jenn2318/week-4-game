//Create a game that starts with a random number between 19 and 120
//Each crystal will have a random number between 1 and 12
//The number will be randomly generated every time the game is won or lost to those 4 crystals
//When a crystal is chosen by a click the number is adding to the previous until it equals to the total score 
//If it does not equal to the random number the loss counter will increment 
//If it equals, then the win counter will increment
//VARIABLES
$(document).ready(function() {
//===================================================================
//Global Variables
//Generates random number at the start of the game
var randomNumber = Math.floor(Math.random() * (119 - 20) + 19);
var win = 0;
var loss = 0;
var totalScore = 0;
var counter = 0;
//Generates random number for the crystals at the start of the game
var crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
var crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
var randomNumberBetween1and12 = 0; //created these if I needed them 
var randomNumberBetween19and120 = 0; //created these if I needed them
// var playerScore = 0

$("#randomNumber").text(randomNumber);
console.log(randomNumber);


//Prints number to start the game
// $("#win").text(wins);
// $("loss").text(losses);
// $("#total-score").text(totalScore);

//FUNCTIONS
//===================================================================
function gameStartReset() {
    randomNumber = Math.floor(Math.random() * (119 - 20) + 19);
    console.log(randomNumber); //works in the console in generating a random number
    // $("#randomNumber").html(randomNumber);
    crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
    crystal4 = Math.floor(Math.random() * (12 - 1) + 1);
    console.log(crystal1); //works in the console in generating a random number
    console.log(crystal2);
    console.log(crystal3);
    console.log(crystal4);
    totalScore = 0;
    $('.tScore').html(totalScore);
}
gameStartReset();

//This for loop may not be needed, just placed this if needed
// for(var i = 0; i < 4; i++){

// }

//Click action/event on jewels
$("#crystal1").on('click', function() {
    totalScore = totalScore + crystal1;
    console.log("totalScore=" + totalScore);
    $(".tScore").text(totalScore);
    checkWinLoss();
})   
checkWinLoss();
$("#crystal2").on('click', function() {
    totalScore = totalScore + crystal1;
    console.log("totalScore= " + totalScore);
    $(".tScore").text(totalScore);
    checkWinLoss();
})
checkWinLoss();
$("#crystal3").on('click', function() {
    totalScore = totalScore + crystal1;
    console.log("totalScore= " + totalScore);
    $(".tScore").text(totalScore);
    checkWinLoss();
})
checkWinLoss();
$("#crystal4").on('click', function() {
    totalScore = totalScore + crystal1;
    console.log("totalScore= " + totalScore);
    $(".tScore").text(totalScore);
    checkWinLoss();
})

//==============================================================================
//Check for Win or Loss
function checkWinLoss() {
    if (totalScore == randomNumber) {
      winnerDisplay();
   }  else if 
       (totalScore >= randomNumber){
         loserDisplay();
   }
 }
 // winnerDisplay();
 // loserDisplay();
//Shows win and increments wins and resets the game after win
function winnerDisplay() {
    $('#win').text('You Win!');
    console.log('You win!');
     win++;
    $(".crystal-buttons").empty();
    gameStartReset();
}

//Shows loss and increments losses and resets the game after loss
function loserDisplay() {
    $('#loss').text('You Lose!');
     console.log('You lose!');
    loss++;
    $(".crystal-buttons").empty();
    gameStartReset();
}

// function playGame(){
//     totalScore = 0
//     win = 0
//     loss = 0
//     gameStartReset();
//     checkWinLoss();
//     winnerDisplay();
//     loserDisplay();
// }
// playGame();

});

//=====================================================================
//Still deciding on if this will be needed as alternative ways for the game to work

//To choose random numbers for the crystals at the start of the game after it resets
// function newCrystalNumbers (){
//     for(var i = 0; i < 4; i++);
//     $("#crystal1").attr("data-random", [i]);
//     console.log('crystal1');
//     $("#crystal2").attr("data-random", [i]);
//     console.log('crystal2');
//     $("#crystal3").attr("data-random", [i]);
//     $("#crystal4").attr("data-random", [i]);
// }
// newCrystalNumbers();

