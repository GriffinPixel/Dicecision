// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// function randomNumOne() { 
//     return Math.floor(Math.random() * 6) + 1;
// }

function randomizeDice() {
    var diceKnight = randomizeDiceKnight();
    var diceZombie = randomizeDiceZombie();

    document.querySelector(".dice-knight").setAttribute("src", "assets/dice/dice" + diceKnight + ".svg");
    document.querySelector(".dice-knight").classList.toggle("rotate360");

    document.querySelector(".dice-zombie").setAttribute("src", "assets/dice/dice" + diceZombie + ".svg");
    document.querySelector(".dice-zombie").classList.toggle("rotate360-reverse");

    if (diceKnight > diceZombie) {
        // document.querySelector(".winning-hero").textContent = "Knight Doney 🗡"
        document.querySelector(".winning-hero").textContent = "Knight Doney"
        document.querySelector(".winning-hero").classList.add("winning-knight");
        document.querySelector(".winning-hero").classList.remove("winning-zombie", "winning-default");
    } else if (diceKnight < diceZombie) {
        // document.querySelector(".winning-hero").textContent = "Zombie Zoey 🧟‍♀️"
        document.querySelector(".winning-hero").textContent = "Zombie Zoey"
        document.querySelector(".winning-hero").classList.add("winning-zombie");
        document.querySelector(".winning-hero").classList.remove("winning-knight", "winning-default");
        // document.querySelector(".hero").classList.toggle(".zombie:hover");
    } else {
        // document.querySelector(".winning-hero").textContent = "No one 🤷🏻‍♀️"
        document.querySelector(".winning-hero").textContent = "No one"
        document.querySelector(".winning-hero").classList.add("winning-default");
        document.querySelector(".winning-hero").classList.remove("winning-knight", "winning-zombie");
    }
}

// Support functions
function randomizeDiceKnight() {
    return Math.floor(Math.random() * 6) + 1;
}
function randomizeDiceZombie() {
    return Math.floor(Math.random() * 6) + 1;
}

// ********** Archives **********
// ✅ Both method work
function randomizeDiceV2() {
    document.querySelector(".dice-knight").setAttribute("src", "assets/dice/dice" + (Math.floor(Math.random() * 6) + 1) + ".svg");
    document.querySelector(".dice-zombie").setAttribute("src", "assets/dice/dice" + randomizeDiceZombie() + ".svg");
}

// ❌ Doesn't work because var remember the output of the function and doesn't change the number.
function randomizeDiceV1() {
    document.querySelector(".dice-knight").setAttribute("src", "assets/dice/dice" + diceKnight + ".svg");
    document.querySelector(".dice-zombie").setAttribute("src", "assets/dice/dice" + diceZombie + ".svg");
}