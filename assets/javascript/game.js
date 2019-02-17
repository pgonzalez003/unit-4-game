var counter = 0;
let targetNumber;
let fuelNumber = 0;

const characters = {
    davidButton: 0,
    xenomorphButton: 0,
    predatorsButton: 0,
    engineerButton: 0

}



function startGame(){ 
   targetNumber = Math.floor(Math.random() * 200 + 50);
   $("#meter").text(targetNumber);
    for (let char in characters) {
        characters[char] = Math.ceil(Math.random() * 75)
    }
    console.log(targetNumber, characters);
}

$("#start").on("click", startGame);

$(".btn-primary").on("click", function(){
    var gameAction = ($("#.btn-primary").attr(characters));
    gameAction = parseInt(gameAction);
    counter += gameAction;
    console.log(gameAction);
    
})