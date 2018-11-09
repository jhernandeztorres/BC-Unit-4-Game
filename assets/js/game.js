$(document).ready(function(){
    // variables
    // [visible, hp, attack, counter]
    var lukeArr = [true, 120, 8, 8];
    var obiwanArr = [true, 130, 10, 10];
    var reyArr = [true, 125, 9, 9];
    var vaderArr = [true, 200, 20, 20];
    var kyloArr = [true, 110, 7, 6];
    var maulArr = [true, 140, 9, 9];
    
    // Shows whether game has started or not
    var isGameOver = false;
    var isGameStart = false;

    // Hold which character is which
    var yourWarrior = "";
    var yourEnemy = "";

    // Holds character being clicked
    var characterClicked = "";

    // Waits for enemy choice
    var gamePaused = "";

    // debugging
    function consoleVariables() {
        console.log("lukeArr: " + lukeArr);
        console.log("obiwanArr: " + obiwanArr);
        console.log("reyArr: " + reyArr);
        console.log("vaderArr: " + vaderArr);
        console.log("kyloArr: " + kyloArr);
        console.log("maulArr: " + maulArr);
        console.log("isGameOver: " + isGameOver + " isGameStart: " + isGameStart);
        console.log("yourWarrior: " + yourWarrior + " yourEnemy: " + yourEnemy);
        console.log("gamePaused: " + gamePaused);
        console.log("===========================================");
    }
    
    // Update hp info from array
    $(".lukeHealth").html("HP: " + lukeArr[1]);
    $(".obiwanHealth").html("HP: " + obiwanArr[1]);
    $(".reyHealth").html("HP: " + reyArr[1]);
    $(".vaderHealth").html("HP: " + vaderArr[1]);
    $(".kyloHealth").html("HP: " + kyloArr[1]);
    $(".maulHealth").html("HP: " + maulArr[1]);

    // Game over
    function gameOver(){
        isGameOver = true;
        $("#messages").html("You have been defeated... GAME OVER!");
        $("#attackBtn").html("Play Again?");
        consoleVariables();
    }

    // Player wins
    function playerWins() {
        isGameOver = true;
        $("#messages").html("The galaxy is saved. YOU WON!");
        $("#attackBtn").html("Play Again?");
        consoleVariables();
    }
});