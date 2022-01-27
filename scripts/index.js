// var randomNumber1 = Math.floor(Math.random() * 6) + 1;

// function randomNumOne() { 
//     return Math.floor(Math.random() * 6) + 1;
// }

function randomizeDice() {
    // ******************** Main ********************
    var diceKnight = randomizeDiceKnight();
    var diceZombie = randomizeDiceZombie();

    if (diceKnight > diceZombie) {
        document.querySelector(".winning-hero").textContent = "Knight Doney"
        document.querySelector(".winning-hero").classList.add("winning-knight");
        document.querySelector(".winning-hero").classList.remove("winning-zombie", "winning-default");
    } else if (diceKnight < diceZombie) {
        document.querySelector(".winning-hero").textContent = "Zombie Zoey"
        document.querySelector(".winning-hero").classList.add("winning-zombie");
        document.querySelector(".winning-hero").classList.remove("winning-knight", "winning-default");
    } else {
        document.querySelector(".winning-hero").textContent = "No one"
        document.querySelector(".winning-hero").classList.add("winning-default");
        document.querySelector(".winning-hero").classList.remove("winning-knight", "winning-zombie");
    }

    document.querySelector(".dice-knight").setAttribute("src", "assets/dice/dice" + diceKnight + ".svg");
    document.querySelector(".dice-knight").classList.toggle("rotate360");

    document.querySelector(".dice-zombie").setAttribute("src", "assets/dice/dice_zom" + diceZombie + ".svg");
    document.querySelector(".dice-zombie").classList.toggle("rotate360-reverse");

    // ******************** Logs ********************

    const today = new Date();
    let timestamp = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    
    var table = document.getElementById("logTable");
    var row = table.insertRow(2);
    var timeLog = row.insertCell(0);
    var diceKnightLog = row.insertCell(1);
    var zombieKnightLog = row.insertCell(2);
    timeLog.innerHTML = timestamp;
    diceKnightLog.innerHTML = diceKnight;
    zombieKnightLog.innerHTML = diceZombie;

    // document.querySelector(".log-time").innerHTML = timestamp;
    // document.querySelector(".knight-roll").innerHTML = diceKnight;
    // document.querySelector(".zombie-roll").innerHTML = diceZombie;

}

const today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
document.querySelector(".log-table-date").innerHTML = "Date: " + date;


// Support functions
function randomizeDiceKnight() {
    return Math.floor(Math.random() * 6) + 1;
}
function randomizeDiceZombie() {
    return Math.floor(Math.random() * 6) + 1;
}

// ******************** Log Download ********************

function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('logTable');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('Dicecision_Logs.' + (type || 'xlsx')));
}

// ******************** Archives ********************

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