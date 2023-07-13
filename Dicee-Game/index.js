const result = document.getElementById('result');
const nameBox = document.getElementsByClassName('enter-player-name')[0];
const dices = document.getElementsByClassName('dices')[0];
const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');

document.getElementById("play-button").addEventListener("click", randomDice);
document.getElementById("add").addEventListener("click", addPlayer);
document.getElementById("remove").addEventListener("click", removePlayer);

function randomDice(){
    reset();

    // define empty array to hold n random numbers between 1-6;
    let numbers = [];

    // loop through each element of .dice then generate random number for each element and change its dice to corresponding svg;
    for (var i=0; i<document.getElementsByClassName('dice').length; i++){
        let number = Math.floor(Math.random()*6)+1;
        numbers[i] = number;
        document.getElementsByClassName(`img${i+1}`)[0].setAttribute('src', `./images/dice-${number}.svg`);
    };

    // find the largest value in array numbers;
    let winnerValue=numbers.reduce(function(accumulator, current){
        return Math.max(accumulator, current);
    });

    // find all occurances of the largest value in array numbers;
    let winners=numbers.reduce(function(acc, cur, ind){
        if(cur===winnerValue){
            acc.push(ind);
        };
        return acc;
    },[]);
    console.log(winners);

    // declarea winner statement, if more than one winner, draw game, else, show winner name;
    if (winners.length >=2){
        result.innerHTML = 'Draw Game';
    } else{
        result.innerHTML = document.getElementById(`player-${winners[0]+1}-name`).innerHTML+' win';
    };

    // change effect to display the winner/winners;
    for (let i=0; i <winners.length; i++){
        document.getElementsByClassName('dice')[winners[i]].classList.add('winner');
    };

    // unhide the result element once we had the winners;
    result.hidden=false;

};



function realtimeDisplay(elem) {
    let playerNumber = elem.getAttribute('id');
    playerNumber = playerNumber.split("-")[1];
    console.log(playerNumber);
    let text = elem.value;
    if (text==='' || text === null){
        document.getElementById(`player-${playerNumber}-name`).innerHTML = `Player ${playerNumber}`;
    } else{
    document.getElementById(`player-${playerNumber}-name`).innerHTML = text;
    };
};


function addPlayer(){
    removeButton.disabled=false;
    reset()
    let numberOfPlayer = document.getElementsByClassName('namebox').length;
    let newPlayerDiv = document.createElement('div');
    let newDiceDiv = document.createElement('div');

    newPlayerDiv.className='mb-3 namebox';
    newPlayerDiv.innerHTML=
        `<input
        type="name"
        class="form-control"
        id="player-${numberOfPlayer+1}"
        placeholder="Enter player ${numberOfPlayer+1} name"
        oninput="realtimeDisplay(this)" />`;
    nameBox.appendChild(newPlayerDiv);

    newDiceDiv.className='dice';
    newDiceDiv.innerHTML=
    `<p id="player-${numberOfPlayer+1}-name">Player ${numberOfPlayer+1}</p>
    <img class="img${numberOfPlayer+1}" src="./images/dice-6.svg" />`;
    dices.appendChild(newDiceDiv);

    if (document.getElementsByClassName('dice').length>=6){
        addButton.disabled =true;
    };

};

function removePlayer(){
    addButton.disabled=false;
    reset()
    if (document.getElementsByClassName('namebox').length>2){
        nameBox.lastElementChild.remove();
        dices.lastElementChild.remove();
    };

    if (document.getElementsByClassName('dice').length<=2){
        removeButton.disabled =true;
    };
    
};

function reset(){
    for (var i=0; i<document.getElementsByClassName('dice').length; i++){
        document.getElementsByClassName('dice')[i].classList.remove('winner');
        result.hidden=true;
        document.getElementsByClassName(`img${i+1}`)[0].setAttribute('src', `./images/dice-6.svg`);
    };
};


const color = document.getElementById('color');
function changeColor() {
  console.log(color.value);
  document.body.style.setProperty('--color', color.value);
};