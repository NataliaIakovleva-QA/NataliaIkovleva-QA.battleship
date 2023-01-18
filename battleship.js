function isNumeric(str) {
     if (typeof str != "string") return false
     return !isNaN(str) &&
          !isNaN(parseInt(str))
}
var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc + 1;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false && guesses < 6) {
     guess = prompt("Ready, aim, fire (enter a number 1-7):");
     guesses = guesses + 1;
     if (!isNumeric(guess))
          alert("Please enter a valid cell number!");
     else
          if (guess < 1 || guess > 7) {
               alert("Please enter a valid cell number!");
          } else {
               if (guess == location1 || guess == location2 || guess == location3) {
                    alert("HIT!")
                    hits = hits + 1;
                    if (hits == 3) {
                         isSunk = true;
                         alert("You sank my battleship!");
                    }
                    if (guess == location1) location1 = -location1
                    else if (guess == location2) location2 = -location2
                    else location3 = -location3
               } else {
                    if (guess == -location1 || guess == -location2 || guess == -location3) {
                         alert("ALREADY HIT");
                    } else
                         alert("MISS");
               }
          }
}
var stats = "You took " + guesses + " guesses to sink the battleship," +
     "which means your shooting accuracy was " + (hits / guesses);
alert(stats);
