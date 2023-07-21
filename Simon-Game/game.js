var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var gameOn = false;
var level = 0;

var yellowSound = new Audio("./sounds/yellow.mp3");
var blueSound = new Audio("./sounds/blue.mp3");
var redSound = new Audio("./sounds/red.mp3");
var greenSound = new Audio("./sounds/green.mp3");

$(".piece").click(function () {
    userChosenColour = this.id;
    flashAndPlay(userChosenColour);
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
});

$(".control-panel").click(async function () {
    if (gameOn === false) {
        gameOn = true;
        while (gameOn) {
            circleSpin(1)
            nextSequence()
            for (var i=0; i<gamePattern.length; i++){
                flashAndPlay(gamePattern[i])
                await sleep(500)
            }

            for (var i = gamePattern.length; i > 0; i--) {
                $("h2").text(i)
                await sleep(1000)
            }
            if (checkAnswer() === true){
                gameOn=true
            } else{
                gameOn=false
                level=0
                gamePattern=[]
                circleSpin(0)
                $("h2").text("Click to Restart")
            }
        }
    }
});

function checkAnswer() {
    console.log(gamePattern);
    console.log(userClickedPattern);
    return userClickedPattern.toString() === gamePattern.toString();
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
    level++;
    $("h2").text(`Level: ${level}`);
    console.log(gamePattern);
    userClickedPattern = [];
}

function flashAndPlay(elemId) {
    $(`#${elemId}`).fadeOut(100).fadeIn(100);
    if (elemId === "yellow") {
        yellowSound.play();
    } else if (elemId === "blue") {
        blueSound.play();
    } else if (elemId === "red") {
        redSound.play();
    } else if (elemId === "green") {
        greenSound.play();
    }
}

function animatePress(currentColor) {
    $(`#${currentColor}`).addClass("pressed");
    setTimeout(function () {
        $(`#${currentColor}`).removeClass("pressed");
    }, 100);
}

function circleSpin(status) {
    if (status === 1) {
        $(".control-panel").addClass("spin");
    } else {
        $(".control-panel").removeClass("spin");
    }
}

async function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}


