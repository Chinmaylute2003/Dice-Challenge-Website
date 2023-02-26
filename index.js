var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage1 = "../Dicee Challenge - Starting Files/images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "../Dicee Challenge - Starting Files/images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 win";
}else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 win🚩";
}else {
    document.querySelector("h1").innerHTML = "Draw!";
}