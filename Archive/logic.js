var letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        // array of words
        var gameWords: ["snake", "liquid", "greyfox", "bigboss", "ocelot"];

                //picking random word from array
                var randomWord = gameWords[Math.floor(Math.random() * gameWords.length)];

                var getBlanks = [];
                for (var i = 0; i < word.length; i++){
                    getBlanks[i] = "_";
                }

                var fillBlanks = word.length;

                while (fillBlanks > 0) {

                    var guess = prompt("Break The Codec.");
                        if (guess === null){
                        break;
                        } else if (guess.length !== 1) {
                        alert("Enter Letter.")
                        } else {
                        for (var g = 0; g < word.length; g++){
                        if (word[g] === guess) {
                        getBlanks[g] = guess; fillBlanks;
                       }
                   }
               }

            }

               alert(getBlanks.join(" "));
               alert("Mission Accomplished " + word);

               var gameWords = function (){
                   
               };

               function setupRound(word){
               var word = pickWord();
               var getBlanks = setupGetBlanks(word);
               var fillBlanks = word.length;
               var pickWord = function() {

               };

               function updateRound(word){

               }


               var audioElement = document.createElement("audio");
               audioElement.setAttribute(src="https://www.youtube.com/watch?v=5105DeorjrY");



               
               setupGetBlanks = function (word) {

               };

               showPlayerProgress = function (getBlanks){

               };

               updateRound = function (guess, word, getBlanks) {

               };

               setupRound
               word
               guessesLeft
               wrongGuesses
               puzzleState

               var hasWon = ["Mission Accomplished"];
               var hasLost = ["Game Over"];
               isEndOfRound
               setupGame
               startNewRound
               myGame

                

        



    isCorrectGuess('snake', 's');
    if (true){
        return correct;
    else (false)
        return incorrect;



    function getBlanks(_){
        if(letters(_)) == 's'{
            return true;
        }
        if (letters(_)) == "a"{
            return false;
        }



    