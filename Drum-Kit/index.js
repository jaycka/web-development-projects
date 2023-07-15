const buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        buttonAnimation(this.getAttribute("id"));
        playOnEvent(this.getAttribute("id"));
    });
}

document.addEventListener("keydown", function (event) {
    buttonAnimation(event.key);
    playOnEvent(event.key);
});


function playOnEvent(eventKey) {
    switch (eventKey) {
        case "a":
            crashtl.restart();
            crashtl.play();
            const crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
        case "s":
            floorTomtl.restart();
	        floorTomtl.play();
            const floorTom = new Audio("./sounds/Floor-Tom.mp3");
            floorTom.play();
            break;
        case "d":
            leftTomtl.restart();
	        leftTomtl.play();
            const tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            rightTomtl.restart();
            rightTomtl.play();
            const tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            snaretl.restart();
	        snaretl.play();
            const snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            hiHattl.restart();
	        hiHattl.play();
            const hiHat = new Audio("./sounds/hihat.mp3");
            hiHat.play();
            break;
        case " ":
            kicktl.restart();
	        kicktl.play();
            const kickBass = new Audio("./sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default:
            console.log(eventKey);
    }
}

function buttonAnimation(currentKey) {
    const activeButton = document.getElementById(currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

//---------------------------------Crash-------------------------------------------------------------//
// crash varibles
crashCymbolAll = document.getElementById("Crash");
crashCymbol = document.getElementById("Crash-Cymbol");

// crash wobble
var crashtl = new TimelineMax({
    paused: true,
});
crashtl
    .to(crashCymbol, 0.1, { rotation: 8, transformOrigin: "50% 50%" })
    .to(crashCymbol, 1.5, { rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(2.5, 0.3) });

// crash stuff
function crash_wobble() {
    buttonAnimation("a");
    playOnEvent("a");
}

// monitor clicks on crash
crashCymbolAll.addEventListener("click", crash_wobble);


//---------------------------------Tom2--------------------------------------------------------------//
// tom2 varibles
rightTomDrumAll = document.getElementById("Tom-Right-All");
rightTomDrum = document.getElementById("Tom-Right-Drum");
var rightTomtl = new TimelineMax({
    paused: true,
});
rightTomtl
    .to(rightTomDrum, 0.1, { scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut })
    .to(rightTomDrum, 0.1, { scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut }, "0")
    .to(rightTomDrumAll, 0.1, { rotation: 2.5, transformOrigin: "0 50%", ease: Elastic.easeOut }, "0")
    .to(rightTomDrum, 0.4, { scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut })
    .to(rightTomDrumAll, 0.6, { rotation: 0, transformOrigin: "0 50%", ease: Elastic.easeOut }, "-=0.4");


// tom2 stuff
function rightTom() {
    buttonAnimation("j");
    playOnEvent("j");
}

// monitor clicks on tom2
rightTomDrumAll.addEventListener("click", rightTom);



//---------------------------------Tom1--------------------------------------------------------------//
// tom1 varibles
leftTomDrumAll = document.getElementById('Tom-Left-All');
leftTomDrum = document.getElementById('Tom-Left-Drum');
var leftTomtl = new TimelineMax({
	paused: true
});
leftTomtl.to(leftTomDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(leftTomDrum, 0.1, {scaleY: 0.95, transformOrigin: "50% 50%", ease: Expo.easeOut}, '0')
.to(leftTomDrumAll, 0.1, {rotation: -2.5, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '0')
.to(leftTomDrum, 0.4, {scale: 1, transformOrigin: "50% 50%", ease: Elastic.easeOut})
.to(leftTomDrumAll, 0.6, {rotation: 0, transformOrigin: "100% 50%", ease: Elastic.easeOut}, '-=0.4');


// left tom tl stuff
function leftTom(){
    buttonAnimation("d");
    playOnEvent("d");
}

// Do the left tom stuff when clicked
leftTomDrumAll.addEventListener("click", leftTom);


//---------------------------------Floor-Tom---------------------------------------------------------//
// floor tom drum varibles
floorTomDrumAll = document.getElementById('Floor-Tom');
// floor tom drum wobble
var floorTomtl = new TimelineMax({
	paused: true
});
floorTomtl.to(floorTomDrumAll, 0.1, {scaleX: 1.02, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(floorTomDrumAll, 0.1, {scaleY: 0.95, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
.to(floorTomDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});


// floor tom tl stuff
function floorTom(){
    buttonAnimation("s");
    playOnEvent("s");
}

// Do the floor tom stuff when clicked
floorTomDrumAll.addEventListener("click", floorTom);


//---------------------------------snare-------------------------------------------------------------//
// snare drum varibles
snareDrumAll = document.getElementById('Snare');
snareDrum = document.getElementById('Snare-Drum');

// snare drum wobble
var snaretl = new TimelineMax({
	paused: true
});
snaretl.to(snareDrum, 0.1, {scaleX: 1.04, transformOrigin: "50% 50%", ease: Expo.easeOut})
.to(snareDrum, 0.1, {scaleY: 0.9, transformOrigin: "50% 100%", ease: Expo.easeOut}, '0')
.to(snareDrum, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

// snare tl stuff
function snare(){
	buttonAnimation("k");
    playOnEvent("k");
}

// Do the snare stuff when clicked
snareDrumAll.addEventListener("click", snare);





//---------------------------------HiHat-------------------------------------------------------------//
// hi-hat varibles
hiHatAll = document.getElementById('Hi-Hat');
hiHatTop = document.getElementById('Hi-Hat-Top');
hiHatBottom = document.getElementById('Hi-Hat-Bottom');
hiHatStandTop = document.getElementById('Hi-Hat-Stand-Top');

// hi-hat stand up/down
var hiHatUptl = new TimelineMax({
	paused: true
});
hiHatUptl.to(hiHatStandTop, 0.3, {y:"-5%", ease: Bounce.easeOut});

// hi-hat wobble
var hiHattl = new TimelineMax({
	paused: true
});
hiHattl.to([hiHatTop, hiHatBottom], 0.1, {rotation: -4, transformOrigin: "50% 50%"})
.to([hiHatTop, hiHatBottom], 0.6, {rotation: 0, transformOrigin: "50% 50%", ease: Elastic.easeOut.config(1.5, 0.2)});



// hi-hat counter and tl stuff
function hiHat() {
	buttonAnimation("l");
    playOnEvent("l");
}

// Do the hi-hat stuff when clicked
hiHatAll.addEventListener("click", hiHat);


//---------------------------------Kick-Bass---------------------------------------------------------//
// kick drum varibles
kickDrumAll = document.getElementById('Kick');
kickAudio = document.getElementById('Kick-Audio');

// kick drum wobble
var kicktl = new TimelineMax({
	paused: true
});
kicktl.to(kickDrumAll, 0.1, {scale: 1.02, transformOrigin: "50% 100%", ease: Expo.easeOut})
.to(kickDrumAll, 0.4, {scale: 1, transformOrigin: "50% 100%", ease: Elastic.easeOut});

// kick tl stuff
function kick(){
	buttonAnimation(" ");
    playOnEvent(" ")
}

// Do the kick stuff when clicked
kickDrumAll.addEventListener("click", kick);

