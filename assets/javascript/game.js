//Create a game with four crystal crystals and a random number to start
//Each crystal will have a random number
//The number will be randomly generated every time the game is won or lost to those 4 crystals
//When a crystal is chosen by a click the number is adding to the previous until it equals to the total score 
//If it does not equal to the score the game starts over
//If it equals, then the win counter will increment

//VARIABLES
//===================================================================
var randomNumber
var win
var lose
var totalScore

//FUNCTIONS
//===================================================================

randomNumberBetween19and120 = Math.floor(Math.random() * (119 - 20) + 19);
// console.log('randomNumber' =  + randNum);
// var random = Math.floor(Math.random() * (12 - 1) + 1);
crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
crystal4  = Math.floor(Math.random() * (12 - 1) + 1);
totalScore = 0;


$("#randomGiven").html(randomNumberBetween19and120);

for(var i = 0; i < 4; i++){
	console.log("Hello World")

function gameStart(){
	randomNumberBetween19and120 = Math.floor(Math.random() * (119 - 20) + 19);
	// console.log('randomNumber' =  + randNum);
	crystal1 = Math.floor(Math.random() * (12 - 1) + 1);
	crystal2 = Math.floor(Math.random() * (12 - 1) + 1);
	crystal3 = Math.floor(Math.random() * (12 - 1) + 1);
	crystal4  = Math.floor(Math.random() * (12 - 1) + 1);
totalScore = 0;

}


$("#randomGiven").html(randomNumberBetween19and120);
$('.totalScore').html(totalScore);
gameStart();



//Gives the crystal a random value
$('.crystal1').attr("value", crystal1);
var test = $('.crystal').attr("value");
//Test it
console.log('.crystal 1   '+test);




console.log(random);


if(randonNumber === totalScore){
	alert('win');
	win++;
}

else if (totalScore > randomNumber){
	alert('lose');
	loss++;
}
