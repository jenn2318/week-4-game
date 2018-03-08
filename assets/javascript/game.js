//Create a game that starts with a random number between 19 and 120
//Each crystal will have a random number between 1 and 12
//The number will be randomly generated every time the game is won or lost to those 4 crystals
//When a crystal is chosen by a click the number is adding to the previous until it equals to the total score 
//If it does not equal to the score the game starts over
//If it equals, then the win counter will increment
//VARIABLES
$( document ).ready(function() {
//===================================================================
var randomNumber = 0
var win = 0
var lose = 0
var totalScore = 0
var counter = 0
var crystal1 = 0
var crystal2 = 0
var crystal3 = 0
var crystal4 = 0
var score = 0
//FUNCTIONS
//===================================================================
//Calculates a random number for the game
function getRandomNumber(){
	randomNumberBetween19and120 = Math.floor(Math.random() * (119 - 20) + 19);
	console.log(randomNumberBetween19and120);
	$("#randomNumber").html(randomNumberBetween19and120);
	getRandomNumber();
}
//Calculates random numbers for the crystals
function getCrystalRandomNumber(){
	crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
	crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
	crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
	crystal4  = Math.floor(Math.random() * (12 - 1) + 1);
    $("#crystalButtons").html(randomNumberBetween1and12);
    getCrystalRandomNumber();
};
//Adds score to crystals/Test Below:
//=================================================================
$(".crystal1").on("click", function(){
	totalScore = totalScore + crystal1;
	$('#total-score').html(totalScore);
    calculateTotal();
});
//FUNCTION decides win or loss
//==================================================================
function decideWinLoss() {
if(randonNumber === totalScore){
	$('#win').text(wins);
	 win++;
	  alert('win');
	   reset();
}
else if (totalScore > randomNumber){
	$('#loss').text(losses);
	 loss++;
      alert('lose');
       reset();
  }
}
//FUNCTION resets the game
 function reset() {
   totalScore = 0;
   randomNumber = 0;
   $('#total-score').html(totalScore);  
}

});