// var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var gameWords = ['snake', 'liquid', 'greyfox', 'bigboss', 'ocelot'];

    function updateHTML() {
        // Uses the ramdom word and displays the empty blanks
        document.getElementById("puzzle-state").innerText = myGame.round.puzzleState.join(" ");
        console.log(myGame.round.puzzleState)
        // Displays the updated object for wrong guesses from user
        document.getElementById("wrong-guesses").innerText = myGame.round.wrongGuesses.join(" ");
      
        // Displays the updated object for total wins
        document.getElementById("win-counter").innerText = myGame.wins;
      
        // Displays the updated object for total losses
        document.getElementById("loss-counter").innerText = myGame.losses;
      
        // Displays the updated object for number of guesses left
        document.getElementById("guesses-left").innerText = myGame.round.guessesLeft;
      
      }

        function randomWord(gameWords){
            return gameWords [Math.floor(Math.random() * gameWords.length)];
        }

        var isCorrectGuess = function(words, letters) {
            for (var i = 0; i < words.length; i++) {
                if (words[i] === letters) {
                    return true;
                }
            }
                return false;
        }

        var getBlanks = function(words) {
            var answerArr = [];
            for (var i = 0; i < words.length; i++) {
                answerArr.push("_");
            }
            return answerArr;
        }

        //replace blank with letter
        function fillBlanks(word, puzzleState, letters) {
                for (var i = 0; i < word.length; i++) {
                    if (word[i] === letters) {
                        puzzleState[i] = word[i];
                    }
            }
            return puzzleState;
        }

        function setupRound(word) {
            var object = {
                word: word,
                guessesLeft: 9,
                wrongGuesses: [],
                puzzleState: getBlanks(word),
            }
            return object;
        }

        function updateRound(round, letter) {
            if (isCorrectGuess(round.word, letter) === false) {
                round.guessesLeft--;
                round.wrongGuesses.push(letter);
            }
            else {
                fillBlanks(round.word, round.puzzleState, letter)
            }
            return round;
        }

        function hasWon(puzzleState) {
            for (var i = 0; i < puzzleState.length; i++) {
                if (puzzleState[i] === "_") {
                    return false;
                }
            }
            return true
            // console.log("Misson Accomplished.");
        }

            function hasLost(guessesLeft) {
                if (guessesLeft === 0) {
                    return true
                }
                return false;
            }

            function isEndOfRound(object) {
                if (object.guessesLeft <= 0) {
                    return true;
                }
                if (hasWon(object.puzzleState)) {
                    return true
                }
                return false;
            }

            function setupGame(words, wins, losses) {
                var newGame = {
                    words: words,
                    wins: wins,
                    losses: losses,
                    round: setupRound(randomWord(words)),
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
                else {
                    newGame.losses++;
                    alert("Game Over.");
                }
                return newGame;
            }
                
                
                var myGame = setupGame(gameWords, 0, 0);

                console.log(myGame);

                // var myGame = setupGame(gameWords, 0, 0)
                // console.log(myGame)
                // document.getElementById("puzzle-state").innerHTML = myGame.round.puzzleState.join(" ")

                document.onkeyup = function(evt) {
                var keyPressed = evt.key.toLowerCase()
                // CALL BACK THE LOGIC
                isCorrectGuess(myGame.words, keyPressed)
                fillBlanks(myGame.round.word, myGame.round.puzzleState, keyPressed)
                updateRound(myGame.round, keyPressed)
                hasWon(myGame.round.puzzleState)
                hasLost(myGame.round.guessesLeft)

                // CHECKS IF GUESSES ARE LEFT OR HAS WON



                // --------- end CALL BACK THE LOGIC

                setTimeout(function surveySays() {
                    if (isEndOfRound(myGame.round)) {
                    myGame = startNewRound(myGame)
                    myGame.round = setupRound(randomWord(gameWords))
                    }
                    updateHTML();
                }, 10)
                updateHTML();

};



