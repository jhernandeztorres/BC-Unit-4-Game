$(document).ready(function () {
    // variables
    // [visible, name, hp, attack, counter]
    var lukeArr = ["Luke Skywalker", 120, 8, 8];
    var obiwanArr = ["Ben Kenobi", 130, 10, 10];
    var reyArr = ["Rey", 125, 9, 9];
    var vaderArr = ["Darth Vader", 200, 20, 20];
    var kyloArr = ["Kylo Ren", 110, 7, 6];
    var maulArr = ["Darth Maul", 140, 9, 9];

    // Shows whether game has started or not
    var isGameOver = false;
    var isGameStart = false;

    // Hold which character is which
    // var yourWarrior = "";
    // var yourEnemy = "";

    // Holds character being clicked
    // var characterClicked = "";

    playerOne = false;
    playerTwo = false;


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
    $(".lukeName").html(lukeArr[0]);
    $(".obiwanName").html(obiwanArr[0]);
    $(".reyName").html(reyArr[0]);
    $(".vaderName").html(vaderArr[0]);
    $(".kyloName").html(kyloArr[0]);
    $(".maulName").html(maulArr[0]);

    // Update hp info from array
    $(".lukeHealth").html("HP: " + lukeArr[1]);
    $(".obiwanHealth").html("HP: " + obiwanArr[1]);
    $(".reyHealth").html("HP: " + reyArr[1]);
    $(".vaderHealth").html("HP: " + vaderArr[1]);
    $(".kyloHealth").html("HP: " + kyloArr[1]);
    $(".maulHealth").html("HP: " + maulArr[1]);

    // Player Loses
    function gameOver() {
        isGameOver = true;
        $("#messages").html("You have been defeated... GAME OVER!");
        $("#attackBtn").html("Play Again?");
        reset();
        consoleVariables();
    } // End Player Loses Function

    // Player wins
    function playerWins() {
        isGameOver = true;
        $("#messages").text("The galaxy is saved. YOU WON!");
        $("#attackBtn").text("Play Again?");
        reset();
        consoleVariables();
    } // End Player Wins Function

    // Reset Game
    function reset() {
        $("#attackBtn").on("click", function () {
            $(".sith").appendTo("#sithSide");
            $(".jedi").appendTo("#jediSide");
        })
    } // End Reset Function

    playerSelect();

    // Move Card to Correct Position
    function playerSelect() {
        // Jedi Side
        $(".lukeCard").on("click", function () {
            if (playerOne === false && playerTwo === false) {
                $(".lukeCard").appendTo("#yourWarrior");
                $(".lukeCard").removeClass("animated fadeInDown delay-1s");
                $(".lukeCard").addClass("animated slideInLeft");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false) {
                $(".lukeCard").appendTo("#yourEnemy");
                $(".lukeCard").removeClass("animated fadeInDown delay-1s");
                $(".lukeCard").addClass("animated slideInRight");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function () {
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".obiwanCard").on("click", function () {
            if (playerOne === false && playerTwo === false) {
                $(".obiwanCard").appendTo("#yourWarrior");
                $(".obiwanCard").removeClass("animated fadeInDown delay-1s");
                $(".obiwanCard").addClass("animated slideInLeft");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false) {
                $(".obiwanCard").appendTo("#yourEnemy");
                $(".obiwanCard").removeClass("animated fadeInDown delay-1s");
                $(".obiwanCard").addClass("animated slideInRight");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function () {
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".reyCard").on("click", function () {
            if (playerOne === false && playerTwo === false) {
                $(".reyCard").appendTo("#yourWarrior");
                $(".reyCard").removeClass("animated fadeInDown delay-1s");
                $(".reyCard").addClass("animated slideInLeft");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false) {
                $(".reyCard").appendTo("#yourEnemy");
                $(".reyCard").removeClass("animated fadeInDown delay-1s");
                $(".reyCard").addClass("animated slideInRight");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function () {
                    $("#messages").text("Fight!");
                }, 2000)
            }
        }); // End Jedi Side

        // Sith Side
        $(".vaderCard").on("click", function () {
            if (playerOne === false && playerTwo === false) {
                $(".vaderCard").appendTo("#yourWarrior");
                $(".vaderCard").removeClass("animated fadeInUp delay-1s");
                $(".vaderCard").addClass("animated slideInLeft");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false) {
                $(".vaderCard").appendTo("#yourEnemy");
                $(".vaderCard").removeClass("animated fadeInUp delay-1s");
                $(".vaderCard").addClass("animated slideInRight");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function () {
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".kyloCard").on("click", function () {
            if (playerOne === false && playerTwo === false) {
                $(".kyloCard").appendTo("#yourWarrior");
                $(".kyloCard").removeClass("animated fadeInUp delay-1s");
                $(".kyloCard").addClass("animated slideInLeft");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false) {
                $(".kyloCard").appendTo("#yourEnemy");
                $(".kyloCard").removeClass("animated fadeInUp delay-1s");
                $(".kyloCard").addClass("animated slideInRight");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function () {
                    $("#messages").text("Fight!");
                }, 2000)
            }
        });

        $(".maulCard").on("click", function () {
            if (playerOne === false && playerTwo === false) {
                $(".maulCard").appendTo("#yourWarrior");
                $(".obiwanCard").removeClass("animated fadeInUp delay-1s");
                $(".maulCard").addClass("animated slideInLeft");
                playerOne = true;
            } else if (playerOne === true && playerTwo === false) {
                $(".maulCard").appendTo("#yourEnemy");
                $(".obiwanCard").removeClass("animated fadeInUp delay-1s");
                $(".maulCard").addClass("animated slideInRight");
                playerTwo = true;
            } else {
                $("#messages").text("Warriors Already Chosen!");
                setTimeout(function () {
                    $("#messages").text("Fight!");
                }, 2000)
            }
        }); // End Sith Side
    }; // End Player Select Function

    attack();
    // Attack Function
    function attack() {
        $("#attackBtn").on("click", function () {
            // Checks that the characters have been chosen
            if (playerOne === false && playerTwo === false) {
                $("#messages").text("Choose all fighters first!");
                setTimeout(function () {
                    $("#messages").text("Fight!");
                }, 2000)
            } else if (playerOne === true && playerTwo === false) {
                $("#messages").text("Choose all fighters first!");
                setTimeout(function () {
                    $("#messages").text("Fight!");
                }, 2000)
            }
        })
    } // End Attack Function

});