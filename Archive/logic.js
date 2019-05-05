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

               }
               
               var setupGetBlanks = function (word) {

               };

               var showPlayerProgress = function (getBlanks){

               };

               var updateRound = function (guess, word, getBlanks) {

               };
                

        setupRound
        word
        guessesLeft
        wrongGuesses
        puzzleState



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



    