//alert("hi");
console.log("hello");
//let age = prompt("how old are you");
//console.log(age * 365);
function ageindays() {
    let age = prompt("how old are you");
    //console.log(age * 365);
    let h1 = document.createElement("h1");
    h1.setAttribute('id', 'ageindays');
    // document.getElementById("result").textContent = age*365;
    let text = document.createTextNode("your age in days is " + age * 365);
    console.log(text);
    h1.appendChild(text);
    document.getElementById('result').appendChild(h1);
    let p = document.createElement("p");
    let text1 = document.createTextNode("thanks for using the link");

    p.appendChild(text1);
    p.setAttribute('id', 'test');
    document.getElementById("result").appendChild(p);

}

function reset() {
    document.getElementById('ageindays').remove();
}


function catgeneratortest() {
    h1 = document.createElement('h1');
    let text = document.createTextNode('here cats will be generated');
    h1.appendChild(text);
    document.getElementById('cat1').appendChild(h1);
}
//catgenerator();
function catgenerator() {
    img = document.createElement('img');
    img.src = "Static/images/5amclub.jpg";
    let cat1id = document.getElementById('cat1');
    cat1id.appendChild(img);
}

function botchoicegen() {
    let num = Math.floor(Math.random() * 3) + 1;
    switch (num) {
        case 1:
            return 'rock';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors'
            break;
        default:
            return 'invalid';
    }
}
function rcpgamefn(yourchoice1) {
    let botchoice;
    console.log(yourchoice1);
    //console.log(yourchoice);
    yourchoice = yourchoice1.id;
    botchoice = botchoicegen();
    console.log('your choice is ' + yourchoice);
    console.log('bot choice is ' + botchoice);
    if (botchoice == 'rock' && yourchoice == 'rock') {
        console.log('tie');
    }
    else if (botchoice == 'rock' && yourchoice == 'paper') {
        console.log('won');
    }
    else if (botchoice == 'rock' && yourchoice == 'scissors') {
        console.log('lost');
    }
    else if (botchoice == 'paper' && yourchoice == 'paper') {
        console.log('tie');
    }
    else if (botchoice == 'paper' && yourchoice == 'scissors') {
        console.log('won');
    }
    else if (botchoice == 'paper' && yourchoice == 'rock') {
        console.log('lost');
    }
    else if (botchoice == 'scissors' && yourchoice == 'scissors') {
        console.log('tie');
    }
    else if (botchoice == 'scissors' && yourchoice == 'paper') {
        console.log('lost');
    }
    else if (botchoice == 'paper' && yourchoice == 'rock') {
        console.log('won');
    }


}

function rpsgame(yourchoice) {
    let botchoice = botchoicegen();
    console.log(yourchoice.id);
    console.log(botchoice);
    let result = rpsdatabase(yourchoice.id, botchoice);
    console.log(result);
    finalmessage = resultdecider(result);
    frontend(yourchoice.id, botchoice, finalmessage);
    //placeresults(yourchoice.id);
}


function rpsdatabase(a, b) {
    let rpdb = {
        'rock': { 'scissors': 1, 'paper': 0, 'rock': 0.5 },
        'paper': { 'rock': 1, 'scissors': 0, 'paper': 0.5 },
        'scissors': { 'rock': 0, 'scissors': 0.5, 'paper': 1 }
    };
    //console.log(rpdb['paper']['rock']);
    return rpdb[a][b];
}



function resultdecider(result) {
    switch (result) {
        case 1:
            console.log('you won');
            return { 'message': 'you won', 'color': 'green' };
            break;
        case 0.5:
            console.log('tie');
            return { 'message': 'tie', 'color': 'yellow' };
            break;
        default:
            console.log('lost');
            return { 'message': 'lost', 'color': 'red' };
            break;
    }
}

function frontend(humanimgchoice, botimgchoice, message) {
    let imgdb = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();
    let humanchoice, botchoice, messagediv;
    humandiv = document.createElement('div');
    botdiv = document.createElement('div');
    messagediv = document.createElement('div');
    humandiv.innerHTML = "<img src='" + imgdb[humanimgchoice] + "' height=150,width=150 style='box-shadow:0px 10px 50px red;'/> ";
    document.getElementById('rcpgame').appendChild(humandiv);
    botdiv.innerHTML = "<img src='" + imgdb[botimgchoice] + "' height=150,width=150 style='box-shadow:0px 10px 50px red;'/> ";
    messagediv.innerHTML = "<h1 style='color:" + message['color'] + "'>" + message['message'] + "</h1>"
    document.getElementById('rcpgame').appendChild(messagediv);
    document.getElementById('rcpgame').appendChild(botdiv);
    //messagediv.innerHTML = "<h1 style='color:" + message['color']"'> '"+message['message']+"'</h1 > ";


}

//console.log('imgdb test' + imagedatabase('rock'));

//buttons change color

let allbuttons = document.getElementsByTagName('button');
console.log(allbuttons);

let copyallbuttons = [];
for (let i = 0; i < allbuttons.length; i++) {
    //copyallbuttons.push(allbuttons[i]);
    copyallbuttons[i] = allbuttons[i].classList[1];
    console.log(allbuttons[i]);;
}
console.log(copyallbuttons);


function buttonColorChange(buttonthingy) {
    console.log(buttonthingy.value);
    if (buttonthingy.value == 'red') {
        buttonsRed();
    }
    else if (buttonthingy.value == 'green') {
        buttonsGreen();
    }
    else if (buttonthingy.value == 'yellow') {
        buttonsYellow();
    }
    else if (buttonthingy.value == 'random') {
        buttonsRandom();
    }

    else if (buttonthingy.value == 'reset') {
        buttonsReset();
    }
}
function buttonsRed() {
    for (i = 0; i < allbuttons.length; i++) {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-danger');
    }
}

function buttonsGreen() {
    for (i = 0; i < allbuttons.length; i++) {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-success');

    }
}

function buttonsYellow() {
    for (i = 0; i < allbuttons.length; i++) {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add('btn-warning');

    }
}
function buttonsReset() {
    for (i = 0; i < allbuttons.length; i++) {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        allbuttons[i].classList.add(copyallbuttons[i]);

    }
}

function buttonsRandom() {
    let randomColor = ['btn-primary', 'btn-danger', 'btn-warning', 'btn-success'];
    for (i = 0; i < allbuttons.length; i++) {
        allbuttons[i].classList.remove(allbuttons[i].classList[1]);
        let index = Math.floor(Math.random() * 4);
        allbuttons[i].classList.add(randomColor[index]);
    }
}


/// black jack

document.querySelector("#blackjack-hit").addEventListener("click", blackjackhitfn);
let blackjackgame = {
    'you': { 'scorespan': '#yourscore', 'div': '#yourbox', 'score': 0 },
    'dealer': { 'scorespan': '#dealerscore', 'div': '#dealerbox', 'score': 0 },
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    'cardmap': {
        '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10, 'A': [1, 11]
    },
    'wins': 0,
    'draws': 0,
    'losses': 0,
    'isStand': false,
    'turnsOver': false,
}
    ;

const YOU = blackjackgame['you'];
const DEALER = blackjackgame['dealer'];
const hitsound = new Audio("Static/sounds/swish.m4a");
const winsound = new Audio('Static/sounds/cash.mp3');
const losssound = new Audio('Static/sounds/aww.mp3');
function blackjackhitfn() {
    if (blackjackgame['isStand'] == false) {
        let card = randomcard();
        showcard(YOU, card);
        showscore(YOU, card);
        showscorefrontend(YOU);
    }

}

console.log(blackjackgame['cards'][4]);

function showcard(activePlayer, card) {

    if (activePlayer['score'] <= 21) {
        let cardimg = document.createElement('img');
        cardimg.src = "Static/images/" + card + ".png";
        //cardimg.src="static/images/${card}.png"
        para = document.createElement('div');
        textnode = document.createTextNode("adjkhndkjhndkjndk");
        para.appendChild(textnode);
        document.querySelector(activePlayer['div']).appendChild(cardimg);
        hitsound.play();
    }
}


function randomcard() {
    index = Math.floor(Math.random() * 13)
    console.log(blackjackgame['cards'][index]);
    return blackjackgame['cards'][index];
}

function showscore(activePlayer, card) {
    if (card == 'A') {
        if (activePlayer['score'] + blackjackgame['cardmap'][card][1] <= 21) {
            activePlayer['score'] += blackjackgame['cardmap'][card][1];
        }
        else {
            activePlayer['score'] += blackjackgame['cardmap'][card][1];

        }
    }
    else {
        activePlayer['score'] += blackjackgame['cardmap'][card];
    }
    console.log(activePlayer['score']);
    ;
}
function showscorefrontend(activePlayer) {
    console.log(activePlayer['score']);
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scorespan']).textContent = 'bust';
        document.querySelector(activePlayer['scorespan']).style.color = 'red';
    }
    else {
        document.querySelector(activePlayer['scorespan']).textContent = activePlayer['score'];

    }
}

function test() {
    img1 = document.createElement('img');
    img1.src = "static/images/q.png";
    //img1.setAttribute()
    document.querySelector('.one').appendChild(img1);
    img1 = document.querySelector('.one img');
    img1.width = 150;

}

document.querySelector('#blackjack-deal').addEventListener('click', blackjackdealfn);

function blackjackdealfn() {
    //alert('hi');
    if (blackjackgame['turnsOver'] == true) {
        document.querySelector('#dealerscore').textContent = 0;
        let yourimages = document.querySelector(YOU['div']).querySelectorAll('img');
        let dealerimages = document.querySelector(DEALER['div']).querySelectorAll('img');
        console.log(yourimages);
        for (let i = yourimages.length - 1; i >= 0; i--) {
            console.log(i);
            yourimages[i].remove();
        }
        for (let i = dealerimages.length - 1; i >= 0; i--) {
            console.log(i);
            dealerimages[i].remove();
        }


        YOU['score'] = 0;
        DEALER['score'] = 0;
        document.querySelector('#dealerscore').textContent = 0;
        document.querySelector('#dealerscore').style.color = 'white';
        document.querySelector('#yourscore').textContent = 0;
        document.querySelector('#yourscore').style.color = 'white';
        document.querySelector('#blackjack_result').textContent = "let's play!!";
        document.querySelector('#blackjack_result').style.color = 'black';
        blackjackgame['isStand'] = false;
        blackjackgame['turnsOver'] = false;
    }
}

document.querySelector('#blackjack-stand').addEventListener('click', dealerLogic);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function dealerLogic() {
    blackjackgame['isStand'] = true;
    while (DEALER['score'] < 16 && blackjackgame['isStand'] == true) {
        let card = randomcard();
        showcard(DEALER, card);
        showscore(DEALER, card);
        showscorefrontend(DEALER, card);
        await sleep(1000);
    }

    let Winner = winner(YOU, DEALER)
    showResult(Winner);
    blackjackgame['turnsOver'] = true;


}

function winner() {
    let Winner;
    if (YOU['score'] <= 21) {
        if ((YOU['score'] > DEALER['score']) || (DEALER['score'] > 21)) {
            console.log('you won');
            Winner = YOU;
            blackjackgame['wins']++;
        }
        else if (YOU['score'] == DEALER['score']) {
            blackjackgame['draws']++
        }
        else if (YOU['score'] < DEALER['score']) {
            console.log('lost');
            Winner = DEALER;
            blackjackgame['losses']++;
        }

    }
    else if ((YOU['score'] > 21) && (DEALER['score'] <= 21)) {
        console.log('lost');
        blackjackgame['losses']++;
        Winner = DEALER;
    }
    else if ((YOU['score'] > 21) && (DEALER['score'] > 21)) {
        console.log('drew');
        blackjackgame['draws']++;
    }
    console.log('and the winner is', Winner);
    console.log(blackjackgame);
    return Winner;
}


function showResult(Winner) {
    let message, messageColor;
    if (Winner == YOU) {
        message = 'You won!!';
        messageColor = 'green';
        winsound.play();
        document.querySelector('#win').textContent = blackjackgame['wins'];

    }
    else if (Winner == DEALER) {
        message = 'You lost😓'
        messageColor = 'red';
        //hitsound(losssound);
        losssound.play();
        document.querySelector('#loss').textContent = blackjackgame['losses'];
    }
    else {
        message = 'drew';
        messageColor = 'black';
        document.querySelector('#draw').textContent = blackjackgame['draws']
    }
    document.querySelector('#blackjack_result').textContent = message;
    document.querySelector('#blackjack_result').style.color = messageColor;

}

