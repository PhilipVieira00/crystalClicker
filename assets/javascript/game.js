var score = 0;
var wins = 0;
var losses = 0;
var crystalOne = 0;
var crystalTwo = 0;
var crystalThree = 0;
var crystalFour = 0;
var targetNumber = 0;


$(document).ready(function () {

    function clear() {
        $("#currentValue").empty();
        score = 0;
        determinePoints();
    }

    function determinePoints() {
        crystalOne = Math.floor(Math.random() * 12) + 1;
        crystalTwo = Math.floor(Math.random() * 12) + 1;
        crystalThree = Math.floor(Math.random() * 12) + 1;
        crystalFour = Math.floor(Math.random() * 12) + 1;
        targetNumber = Math.floor(Math.random() * 102) + 19;
        $("#numberToGuess").text(targetNumber);
        console.log(crystalOne);
        console.log(crystalTwo);
        console.log(crystalThree);
        console.log(crystalFour);
    }
    determinePoints();


    function determineVictory() {
        $("#crystalOne").on("click", function () {
            score += crystalOne;
            if (score === targetNumber) {
                wins++;
                $("#wins").text("Wins: " + wins);
                clear();
            }
            else {
                if (score > targetNumber) {
                    losses++;
                    $("#losses").text("Losses: " + losses)
                    clear();
                }
                else {
                    $("#currentValue").text(score);
                }
            }

        })
        $("#crystalTwo").on("click", function () {
            score += crystalTwo;
            if (score === targetNumber) {
                wins++;
                $("#wins").text("Wins: " + wins);
                clear();
            }
            else {
                if (score > targetNumber) {
                    losses++;
                    $("#losses").text("Losses: " + losses)
                    clear();
                }
                else {
                    $("#currentValue").text(score);
                }
            }
        })
        $("#crystalThree").on("click", function () {
            score += crystalThree;
            if (score === targetNumber) {
                wins++;
                $("#wins").text("Wins: " + wins);
                clear();
            }
            else {
                if (score > targetNumber) {
                    losses++;
                    $("#losses").text("Losses: " + losses)
                    clear();
                }
                else {
                    $("#currentValue").text(score);
                }
            }
        })
        $("#crystalFour").on("click", function () {
            score += crystalFour;
            if (score === targetNumber) {
                wins++;
                $("#wins").text("Wins: " + wins);
                clear();
            }
            else {
                if (score > targetNumber) {
                    losses++;
                    $("#losses").text("Losses: " + losses)
                    clear();
                }
                else {
                    $("#currentValue").text(score);
                }
            }
        })
    }
    determineVictory();


});
