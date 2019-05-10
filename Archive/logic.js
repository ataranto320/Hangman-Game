var letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var gameWords = ['snake', 'liquid', 'greyfox', 'bigboss', 'ocelot']

        function randomWord(gameWords){
            return gameWords [Math.floor(Math.random() * gameWords.length)];
        }

        var isCorrectGuess = function(word, letters) {
            for (var i = 0; i < word.length; i++) {
                if (word[i] === letters) {
                    return true;
                }
            }
            return false;
        }

        // // picking random word from array
        // var getBlanks = [];
        //   for (var i = 0; i < word.length; i++){
        //       getBlanks[i] = "_";
        // }

        var getBlanks = function(gameWords) {
            var answerArr = [];
            for (var i = 0; i < gameWords.length; i++) {
                answerArr[i] = "_";
            }
            return answerArr;
        }

        //replace blank with letter
        function fillBlanks(gameWords, puzzleState, letters) {
            if (isCorrectGuess(gameWords, letters)) {
                for (var i = 0; i < gameWords.length; i++) {
                    if (gameWords[i] === letters) {
                        puzzleState[i] = letters;
                    }
                }
            }
            return puzzleState;
        }

        function setupRound(gameWords) {
            var object = {
                word: word,
                guessesLeft: 9,
                wrongGuesses: [],
                puzzleState: getBlanks(gameWords),
            }
            return object;
        }

        function updateRound(object, letters) {
            if (isCorrectGuess(object.gameWords, letters) === false) {
                object.guessesLeft--;
                object.wrongGuesses.push(letters);
            }
            else {
                fillBlanks(object.gameWords, object.puzzleState, letters)
            }
            return object;
        }

        function hasWon(puzzleState) {
            for (var i = 0; i < puzzleState.length; i++) {
                if (puzzleState[i] === "_") {
                    return false;
                }
            }
            return true ("Misson Accomplished.");
        }

            function hasLost(guessesLeft) {
                if (guessesLeft === 0) {
                    return true ("Game Over.");
                }
                return false;
            }

            function isEndOfRound(object) {
                if (object.guessesLeft === 0) {
                    return true;
                }
                return false;
            }

            function setupGame(gameWords, wins, losses) {
                var newGame = {
                    words: gameWords,
                    wins: wins,
                    losses: losses,
                    newRound: setupRound(randomWord(gameWords)),
                }
                return newGame;
            }

            function startNewRound(newGame) {
                var puzzleState = newGame.round.puzzleState;
                var roundWord = newGame.round.gameWords;
                if (hasWon(puzzleState) === true) {
                    newGame.wins++;
                    alert("Mission Accomplished.");
                }
            }
                else {
                    newGame.losses++;
                    alert("Game Over.");
                }
                return newGame;
                    
                
                
                var myGame = setupGame(gameWords, 0, 0);

                console.log(myGame);

                var puzzle = document.getElementById("puzzle-state")
                puzzle.innerHTML = myGame.round.puzzleState.join(" ")

                var pressedKey;
                document.onkeyup = function (event) {

                    pressedKey = event.key.toLowerCase()
                    for (var i = 0; i < gameWords.length; i++) {
                        if (pressedKey === gameWords[i]) {
                            return true;
                        }
                    }
                    }

                    console.log(pressedKey);
                    isCorrectGuess(myGame.round.gameWords, pressedKey);
                    fillBlanks(myGame.round.gameWords, myGame.round.puzzleState, pressedKey);
                    updateRound(myGame.round, pressedKey);
                    hasWon(myGame.round.puzzleState);
                    hasLost(myGame.round.guessesLeft);

                    if (isEndOfRound(myGame.round)) {
                        myGame = startNewRound(myGame);
                        myGame.round = setupRound(randomWord(gameWords));
                    }

                    document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ");
                    document.getElementById("win-counter").innerHTML = myGame.wins;
                    document.getElementById("loss-counter").innerHTML = myGame.losses;
                    document.getElementById('wrong-guesses').innerHTML = myGame.round.wrongGuesses;
                    document.getElementById("gusses-left").innerHTML = myGame.round.guessesLeft;

                    console.log(myGame);
                }
            
                //can't get audio to work.
                var audioElement = document.createElement("audio");
                audioElement.setAttribute(src="https://www.youtube.com/watch?v=5105DeorjrY");
            

    

    //         function setupRound(game){
    //             var puzzleState = 
    //             game.round.puzzleState;
    //             if (hasWon(puzzleState) === true) {
    //                 game.wins++;
    //                 alert("Mission Accomplished.");
    //                 else {
    //                     game.losses++;
    //                     alert("Game Over.");
    //                 }
    //             }
    //             return game;
    //         }


    //     var select = selectword[random];

        

    //     // var gameWords = document.getElementById("game-words");

    //     $(gameWords)

    //     function isCorrectGuess(letters, gameWords);
    //     isCorrectGuess('snake', 's');
    //     if (word[i] === "-") {
    //         isCorrectGuess.innerHTML = "-";
    //         space = 1;
    //     }
    //     else {
    //         isCorrectGuess.innerHTML = "_";
    //     }
    
    //     function isCorrectGuess(letters, gameWords);
    //     isCorrectGuess('snake', 'n');
    //     if (word[i] === "-") {
    //         isCorrectGuess.innerHTML = "-";
    //         space = 1;
    //     }
    //     else {
    //         isCorrectGuess.innerHTML = "_";
    //     }    

    //     function isCorrectGuess(letters, gameWords);
    //     isCorrectGuess('snake', 'a');
    //     if (word[i] === "-") {
    //         isCorrectGuess.innerHTML = "-";
    //         space = 1;
    //     }
    //     else {
    //         isCorrectGuess.innerHTML = "_";
    //     }

    //     function isCorrectGuess(letters, gameWords);
    //     isCorrectGuess('snake', 'k');
    //     if (word[i] === "-") {
    //         isCorrectGuess.innerHTML = "-";
    //         space = 1;
    //     }
    //     else {
    //         isCorrectGuess.innerHTML = "_";
    //     }

    //     function isCorrectGuess(letters, gameWords);
    //     isCorrectGuess('snake', 'e');
    //     if (word[i] === "-") {
    //         isCorrectGuess.innerHTML = "-";
    //         space = 1;
    //     }
    //     else {
    //         isCorrectGuess.innerHTML = "_";
    //     }

    //     function randomWordReturn(gameWords){
    //         document.getElementById(gameWords).innerHTML = gameWords.find(randomWordReturn);
    //     }

        



    //     var word;
    //     var guess;
    //     var guesses = [ ];
    //     var lives;
    //     var counter;
    //     var space;

    //     //elements
    //     var guessesLeft = document.getElementById("guessesLeft");
    //     var randomWord = document.getElementById("randomWord");
    //     var getBlanks = document.getElementById("getBlanks");
    //     var fillBlanks = document.getElementById("fillBlanks");

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



    //            var setupRound
    //            var word
    //            var guessesLeft
    //            var wrongGuesses
    //            var puzzleState

    //         function guessesLeft(game){

    //         }

    //            var hasWon = ["Mission Accomplished"];
    //            var hasLost = ["Game Over"];
    //            isEndOfRound
    //            setupGame
    //            startNewRound
    //            myGame



                

    // function getBlanks(_){
    //     if(letters(_)) == 's'{
    //         return true;
    //     }
    //     if (letters(_)) == "a"{
    //         return false;
    //     }



    