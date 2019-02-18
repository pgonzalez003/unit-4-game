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
    if (this.id == "davidButton"){
    	console.log("davidButton pressed");
    	counter += characters.davidButton;
    	console.log(counter);
        alert(characters.davidButton)
    }
    else if (this.id == "xenomorphButton"){
    	console.log("xenomorphButton pressed");
    	counter += characters.xenomorphButton;
    	console.log(counter);
        alert(characters.xenomorphButton)
    }
    else if (this.id == "predatorsButton"){
    	console.log("predatorsButton pressed");
    	counter += characters.predatorsButton;
        console.log(counter);
        alert(characters.predatorsButton)
    }
    else
    {
    	console.log("engineerButton pressed");
    	counter += characters.engineerButton;
        console.log(counter);
        alert(characters.engineerButton)
    }

    if (counter == targetNumber){
        alert("LIFT OFF!!!");
    }
    else if (counter <= targetNumber){
        alert(counter + "  Fuel Cells Collected!");
    }
    else { 
        counter >= targetNumber 
        alert("Food for the Facehuggers");
        counter = 0, startGame();
    }
    $("#fuelMeter").text(counter);

})