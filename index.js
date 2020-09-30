function rpsGame(yourChoice){
    let humanChoice = yourChoice.id;
    let botChoice = getBotChoice();

    let gameResults = decideWinner(humanChoice,botChoice); 
    let message = findMessage(gameResults);
    console.log(message.msg);

    showResults(humanChoice,botChoice,message);
}

function getBotChoice(){
    let random = Math.floor(Math.random() * 3);
    if(random == 0)
        return document.getElementById('stone').id;
    if(random == 1)
        return document.getElementById('paper').id;
    if(random == 2)
        return document.getElementById('scissors').id;
}

function decideWinner(humanChoice,botChoice){
    if(humanChoice == botChoice)
        return [0,0];
    if((humanChoice == 'stone' && botChoice == 'scissors')
        || (humanChoice == 'scissors' && botChoice == 'paper')
        || (humanChoice == 'paper' && botChoice == 'stone')){
            return [1,0];
        }
    else   
        return [0,1];
}

function findMessage(gameResults){
    const result = {};

    if(JSON.stringify(gameResults) === '[0,0]'){
        result.msg = 'You Tied!';
        result.color = '#a9a92a';
    }
    else if(JSON.stringify(gameResults) === '[1,0]'){
        result.msg = 'You Won!';
        result.color = 'green';
    }
    else{
        result.msg = 'You Lost!';
        result.color = 'red';
    }
    return result;
}

function showResults(humanChoice,botChoice,message){
    let left = document.getElementById(humanChoice);
    let right = document.getElementById(botChoice);

    let displayMessage = document.createElement('div');
    let text = document.createTextNode(message.msg);
    displayMessage.style.color = message.color;
    displayMessage.style.fontSize = 'xx-large';
    displayMessage.appendChild(text);
    
    let setContainer = document.getElementsByClassName('set-container')[0];

    while(setContainer.hasChildNodes()){
        setContainer.removeChild(setContainer.firstChild);
    }

    if(message.msg === 'You Tied!')
        left = right.cloneNode(true);

    setContainer.appendChild(left);
    setContainer.appendChild(displayMessage);
    setContainer.appendChild(right);


}