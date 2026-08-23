let cards = [];
let isAlive = false;
let isBlackjack = false;
let sum = 0;
let person ={
    name: "Shivansh",
    money: 200
}

let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = person.name + " $ " + person.money;

messageEl.textContent = "Want to play a round?";
cardEl.textContent = "Cards: ";
sumEl.textContent = "Sum: ";

function start(){
    isAlive = true;
    let firstCard = random();
    let secondCard = random();
    cards = [firstCard, secondCard];
    render();
}

function random(){
    let randomNumber = Math.floor(Math.random()*13 + 1)
    if(randomNumber > 10){
        return 10;
    }
    else if(randomNumber ===1){
        return 11;
    }
    else{
        return randomNumber;
    }
}

function render(){
    sum = 0;
    cardEl.textContent = "Cards: ";
    for(let i =0 ;i < cards.length; i++){
        sum += cards[i]
        cardEl.textContent +=  cards[i] + " "; 
    }
    sumEl.textContent = "Sum: " + sum;
    message1(sum);
}

function message1(sum){
    if(sum < 21){
        messageEl.textContent = "Do you want to draw a new card?";
    }
    else if(sum === 21){
        messageEl.textContent = "You've got Blackjack!";
        isBlackjack = true;
        isAlive = false;
    }
    else{
        messageEl.textContent = "You're out of the game!";
        isAlive = false;
    }
}

function newCard(){
    if(isAlive === true && isBlackjack === false){
        let currCard = random();
        cards.push(currCard);
        render();
    }
}
