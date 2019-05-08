var letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        var gameWords = ['snake', 'liquid', 'greyfox', 'bigboss', 'ocelot']

        function randomWord(words){
            var randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];
        }

        

        // // var gameWords = document.getElementById("game-words");

        // $(gameWords)

        // function isCorrectGuess(letters, gameWords);
        // isCorrectGuess('snake', 's');
        // if (word[i] === "-") {
        //     isCorrectGuess.innerHTML = "-";
        //     space = 1;
        // }
        // else {
        //     isCorrectGuess.innerHTML = "_";
        // }
    
        // function isCorrectGuess(letters, gameWords);
        // isCorrectGuess('snake', 'n');
        // if (word[i] === "-") {
        //     isCorrectGuess.innerHTML = "-";
        //     space = 1;
        // }
        // else {
        //     isCorrectGuess.innerHTML = "_";
        // }    

        // function isCorrectGuess(letters, gameWords);
        // isCorrectGuess('snake', 'a');
        // if (word[i] === "-") {
        //     isCorrectGuess.innerHTML = "-";
        //     space = 1;
        // }
        // else {
        //     isCorrectGuess.innerHTML = "_";
        // }

        // function isCorrectGuess(letters, gameWords);
        // isCorrectGuess('snake', 'k');
        // if (word[i] === "-") {
        //     isCorrectGuess.innerHTML = "-";
        //     space = 1;
        // }
        // else {
        //     isCorrectGuess.innerHTML = "_";
        // }

        // function isCorrectGuess(letters, gameWords);
        // isCorrectGuess('snake', 'e');
        // if (word[i] === "-") {
        //     isCorrectGuess.innerHTML = "-";
        //     space = 1;
        // }
        // else {
        //     isCorrectGuess.innerHTML = "_";
        // }

        // function randomWordReturn(gameWords){
        //     document.getElementById(gameWords).innerHTML = gameWords.find(randomWordReturn);
        // }

        // // picking random word from array
        // var getBlanks = [];
        //   for (var i = 0; i < word.length; i++){
        //       getBlanks[i] = "_";
        // }



    //     var word;
    //     var guess;
    //     var guesses = [ ];
    //     var lives;
    //     var counter;
    //     var space;

    //     //elements
        // var guessesLeft = document.getElementById("guessesLeft");
        // var randomWord = document.getElementById("randomWord");
        // var getBlanks = document.getElementById("getBlanks");
        // var fillBlanks = document.getElementById("fillBlanks");

    //     //try to create letter list
    //     var buttons = function() {
    //         myButtons = document.getElementById("buttons");
    //         letters = document.getElementById("ul");
    //     }

    //         for (var i = 0; i < letters.length; i++) {
    //             letters.id = "letters";
    //             list = document.createElement("li");
    //             list.id = "letter";
    //             list.innerHTML = letters[i];
    //             check();
    //             myButtons.appendChild(letters);
    //             letters.appendChild(list);
    //         }

    //         //guesses left
            
    //             var fillBlanks = word.length;

    //             while (fillBlanks > 0) {

    //                 var guess = prompt("Break The Codec.");
    //                     if (guess === null){
    //                     break;
    //                     } else if (guess.length !== 1) {
    //                     alert("Enter Letter.")
    //                     } else {
    //                     for (var g = 0; g < word.length; g++){
    //                     if (word[g] === guess) {
    //                     getBlanks[g] = guess; fillBlanks;
    //                    }
    //                }
    //            }

    //         }

    //            alert(getBlanks.join(" "));
    //            alert("Mission Accomplished " + word);

    //            var gameWords = function (){
                   
    //            };

    //            function setupRound(word){
    //            var word = pickWord();
    //            var getBlanks = setupGetBlanks(word);
    //            var fillBlanks = word.length;
    //            var pickWord = function() {

    //            };

    //            function updateRound(word){

    //            }

    //            setupGetBlanks = function (word) {
    //             document.getElementById(getBlanks);
    //            };

    //            showPlayerProgress = function (getBlanks){
    //             document.getElementById(fillBlanks);
    //            };

    //            updateRound = function (guess, word, getBlanks) {
    //             document.getElementById()
    //            };



            //    var setupRound
            //    var word
            //    var guessesLeft
            //    var wrongGuesses
            //    var puzzleState

            function setupRound(game){
                var puzzleState = 
                game.round.puzzleState;
                if (hasWon(puzzleState) === true) {
                    game.wins++;
                    alert("Mission Accomplished.");
                    else {
                        game.losses++;
                        alert("Game Over.");
                    }
                }
                return game;
            }

    //            var hasWon = ["Mission Accomplished"];
    //            var hasLost = ["Game Over"];
    //            isEndOfRound
    //            setupGame
    //            startNewRound
    //            myGame


    //            var audioElement = document.createElement("audio");
    //            audioElement.setAttribute(src="https://www.youtube.com/watch?v=5105DeorjrY");
                

    // function getBlanks(_){
    //     if(letters(_)) == 's'{
    //         return true;
    //     }
    //     if (letters(_)) == "a"{
    //         return false;
    //     }



    