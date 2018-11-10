$(document).ready(function () {
    // variables
    // [name, hp, attack, counter]
    var lukeArr = ["Luke Skywalker", 220, 17, 8, '.luke'];
    var obiwanArr = ["Ben Kenobi", 230, 10, 10, '.obiwan'];
    var reyArr = ["Rey", 225, 9, 9, '.rey'];
    var vaderArr = ["Darth Vader", 300, 17, 10, '.vader'];
    var kyloArr = ["Kylo Ren", 220, 7, 6, '.kylo'];
    var maulArr = ["Darth Maul", 240, 9, 9, '.maul'];

    // Variable to hold initial attack value
    var initAttack ;

    // Win Counter
    var counter = 0;

    // Shows whether game has started or not
    var isGameOver = false;

    // Hold which character is which
    var yourWarrior = [lukeArr, obiwanArr, reyArr, vaderArr, kyloArr, maulArr];
    var yourEnemy = [lukeArr, obiwanArr, reyArr, vaderArr, kyloArr, maulArr];

    // Character Picked Checker
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
        console.log("isGameOver: " + isGameOver);
        console.log("yourWarrior: " + yourWarrior + " yourEnemy: " + yourEnemy);
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
        if (isGameOver === true) {
            $("#attackBtn").on("click", reset());
        }
        consoleVariables();
    } // End Player Loses Function

    // Player wins
    function playerWins() {
        isGameOver = true;
        $("#messages").text("The galaxy is saved. YOU WON!");
        $("#attackBtn").text("Play Again?");
        isGameOver = true;
        if (isGameOver === true) {
            $("#attackBtn").on("click", reset());
        }
        consoleVariables();
    } // End Player Wins Function

    // Reset Game
    function reset() {
        $("#attackBtn").on("click", function () {
            isGameOver === false;
            location.reload();
            consoleVariables();
        })
    } // End Reset Function

    // Move Card to Correct Position
    // Jedi Side
    $(".lukeCard").on("click", function () {
        if (playerOne === false && playerTwo === false) {
            $(".lukeCard").appendTo("#yourWarrior");
            yourWarrior = lukeArr;
            $(".lukeCard").removeClass("animated fadeInDown delay-1s");
            $(".lukeCard").addClass("animated slideInLeft warrior");
            $(".card-header, .card-footer").not(".lukeCard").css("background-color", "red");
            initAttack = lukeArr[2];
            playerOne = true;
        } else if (playerOne === true && playerTwo === false) {
            $(".lukeCard").appendTo("#yourEnemy");
            yourEnemy = lukeArr;
            $(".lukeCard").removeClass("animated fadeInDown delay-1s");
            $(".lukeCard").addClass("animated slideInRight enemy");
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
            yourWarrior = obiwanArr;
            $(".obiwanCard").removeClass("animated fadeInDown delay-1s");
            $(".obiwanCard").addClass("animated slideInLeft warrior");
            $(".card-header, .card-footer").not(".obiwanCard").css("background-color", "red");
            initAttack = obiwanArr[2];
            playerOne = true;
        } else if (playerOne === true && playerTwo === false) {
            $(".obiwanCard").appendTo("#yourEnemy");
            yourEnemy = obiwanArr;
            $(".obiwanCard").removeClass("animated fadeInDown delay-1s");
            $(".obiwanCard").addClass("animated slideInRight enemy");
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
            yourWarrior = reyArr;
            $(".reyCard").removeClass("animated fadeInDown delay-1s");
            $(".reyCard").addClass("animated slideInLeft warrior");
            $(".card-header, .card-footer").not("reyCard").css("background-color", "red");
            initAttack = reyArr[2];
            playerOne = true;
        } else if (playerOne === true && playerTwo === false) {
            $(".reyCard").appendTo("#yourEnemy");
            yourEnemy = reyArr;
            $(".reyCard").removeClass("animated fadeInDown delay-1s");
            $(".reyCard").addClass("animated slideInRight enemy");
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
            yourWarrior = vaderArr;
            $(".vaderCard").removeClass("animated fadeInUp delay-1s");
            $(".vaderCard").addClass("animated slideInLeft warrior");
            $(".card-header, .card-footer").not(".vaderCard").css("background-color", "red");
            initAttack = vaderArr[2];
            playerOne = true;
        } else if (playerOne === true && playerTwo === false) {
            $(".vaderCard").appendTo("#yourEnemy");
            yourEnemy = vaderArr;
            $(".vaderCard").removeClass("animated fadeInUp delay-1s");
            $(".vaderCard").addClass("animated slideInRight enemy");
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
            yourWarrior = kyloArr;
            $(".kyloCard").removeClass("animated fadeInUp delay-1s");
            $(".kyloCard").addClass("animated slideInLeft warrior");
            $(".card-header, .card-footer").not(".kyloCard").css("background-color", "red");
            initAttack = kyloArr[2];
            playerOne = true;
        } else if (playerOne === true && playerTwo === false) {
            $(".kyloCard").appendTo("#yourEnemy");
            yourEnemy = kyloArr;
            $(".kyloCard").removeClass("animated fadeInUp delay-1s");
            $(".kyloCard").addClass("animated slideInRight enemy");
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
            yourWarrior = maulArr;
            $(".maulCard").removeClass("animated fadeInUp delay-1s");
            $(".maulCard").addClass("animated slideInLeft warrior");
            $(".card-header, .card-footer").not(".maulCard").css("background-color", "red");
            initAttack = maulArr[2];
            playerOne = true;
        } else if (playerOne === true && playerTwo === false) {
            $(".maulCard").appendTo("#yourEnemy");
            yourEnemy = maulArr;
            $(".maulCard").removeClass("animated fadeInUp delay-1s");
            $(".maulCard").addClass("animated slideInRight enemy");
            playerTwo = true;
        } else {
            $("#messages").text("Warriors Already Chosen!");
            setTimeout(function () {
                $("#messages").text("Fight!");
            }, 2000)
        }
    }); // End Sith Side // End Player Select


    // Attack Listener

    $("#attackBtn").on("click", function () {
        // Checks that the characters have been chosen before allowing an attack
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
        } else {
            // console.log("Warriors Chosen.");
            yourWarrior[1] = yourWarrior[1] - yourEnemy[2];
            yourEnemy[1] = yourEnemy[1] - yourWarrior[2];
            $("#messages").html(yourWarrior[0] + " has attacked " + yourEnemy[0] + " for " + yourWarrior[2] + " damage!" + '<br />' + yourEnemy[0] + " has countered dealing " + yourEnemy[3] + " damage!");
            $(yourWarrior[4]+"Health").text(yourWarrior[1]);
            $(yourEnemy[4]+"Health").text(yourEnemy[1]);
            yourWarrior[2] += initAttack;
            if(yourWarrior[1] <= 0){
                $(yourWarrior[4]+"Card").remove();
                gameOver();
            } else if(yourEnemy[1] <= 0){
                $(yourEnemy[4]+"Card").remove();
                playerTwo = false;
                counter++;
                console.log(counter);
                if(counter === 5){
                    playerWins();
                }
            } else {

            }
        } // End Players Chosen and Attack Section

    }) // End Attack Function

});