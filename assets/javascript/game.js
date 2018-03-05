//Create a game with four crystal crystals and a random result
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


//FUNCTIONS
//===================================================================
randomNumberBetween19and120 = Math.floor(Math.random() * 19) +120;

$("result").html('Random Result: ' + randomNumberBetween19and120);

for(var i = 0; i < 4; i++){
	console.log("Hello World")
}


var random = Math.floor(Math.random() *11) + 1;
console.log(random);

var crystal = $("<div>");
crystal.attr("class", 'crystal');
"class": 'crystal',
"data-random": random

});


$("crystals").append(crystal);
}


$("crystal").on('click', function(){
	console.log($(this));
}