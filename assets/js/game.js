$(document).ready(function(){
    // variables
    // [visible, name, hp, attack, counter]
    var lukeArr =  [true, "Luke Skywalker" ,120, 8, 8];
    var obiwanArr = [true, "Ben Kenobi" ,130, 10, 10];
    var reyArr = [true, "Rey" ,125, 9, 9];
    var vaderArr = [true, "Darth Vader" ,200, 20, 20];
    var kyloArr = [true, "Kylo Ren" ,110, 7, 6];
    var maulArr = [true, "Darth Maul" ,140, 9, 9];
    
    // Shows whether game has started or not
    var isGameOver = false;
    var isGameStart = false;

    // Hold which character is which
    var yourWarrior = "";
    var yourEnemy = "";

    // Holds character being clicked
    var characterClicked = "";

    playerOne = false;
    playerTwo = false;

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
    
    // Update name from array
    $(".lukeName").html(lukeArr[1]);
    $(".obiwanName").html(obiwanArr[1]);
    $(".reyName").html(reyArr[1]);
    $(".vaderName").html(vaderArr[1]);
    $(".kyloName").html(kyloArr[1]);
    $(".maulName").html(maulArr[1]);

    // Update hp info from array
    $(".lukeHealth").html("HP: " + lukeArr[2]);
    $(".obiwanHealth").html("HP: " + obiwanArr[2]);
    $(".reyHealth").html("HP: " + reyArr[2]);
    $(".vaderHealth").html("HP: " + vaderArr[2]);
    $(".kyloHealth").html("HP: " + kyloArr[2]);
    $(".maulHealth").html("HP: " + maulArr[2]);

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
    playerSelect();
    // Move Card to Correct Position
    function playerSelect(){
        $(".lukeCard").on("click", function(){
            if (playerOne === false && playerTwo === false){
                $(".lukeCard").appendTo("#yourWarrior");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false){
                $(".lukeCard").appendTo("#yourEnemy");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function(){
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".obiwanCard").on("click", function(){
            if (playerOne === false && playerTwo === false){
                $(".obiwanCard").appendTo("#yourWarrior");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false){
                $(".obiwanCard").appendTo("#yourEnemy");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function(){
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".reyCard").on("click", function(){
            if (playerOne === false && playerTwo === false){
                $(".reyCard").appendTo("#yourWarrior");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false){
                $(".reyCard").appendTo("#yourEnemy");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function(){
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".vaderCard").on("click", function(){
            if (playerOne === false && playerTwo === false){
                $(".vaderCard").appendTo("#yourWarrior");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false){
                $(".vaderCard").appendTo("#yourEnemy");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function(){
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".kyloCard").on("click", function(){
            if (playerOne === false && playerTwo === false){
                $(".kyloCard").appendTo("#yourWarrior");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false){
                $(".kyloCard").appendTo("#yourEnemy");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function(){
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".maulCard").on("click", function(){
            if (playerOne === false && playerTwo === false){
                $(".maulCard").appendTo("#yourWarrior");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false){
                $(".maulCard").appendTo("#yourEnemy");
                playerTwo = true;
            }  else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function(){
                    $("#messages").text("Fight!");
                }, 2000)
            }
        }); // End Player Select Function
    };
    

    
});