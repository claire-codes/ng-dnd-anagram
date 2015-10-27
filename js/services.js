var services = angular.module('AnagramApp.services', [])
	.factory('AnagramFactory', [function AnagramFactory() {

		var allWords = ["BISCUIT", "GRANOLA", "JELLY", "FUSILLI", "ORANGE"];

		var makeAnagramObj = function(word) {
			var letterArr = [];
			var shuffledArr = shuffleWord(word);
			for (var i = 0; i < word.length; i++) {
				letterArr.push({"letter": shuffledArr[i]});
			};
			return {
				"clue": letterArr,
				"solution": word
			};
		};

		// Thanks StackOverflow http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
		var shuffleWord = function (word) {
			var array = word.split('');
		  var currentIndex = array.length, temporaryValue, randomIndex ;

		  // While there remain elements to shuffle...
		  while (0 !== currentIndex) {

		    // Pick a remaining element...
		    randomIndex = Math.floor(Math.random() * currentIndex);
		    currentIndex -= 1;

		    // And swap it with the current element.
		    temporaryValue = array[currentIndex];
		    array[currentIndex] = array[randomIndex];
		    array[randomIndex] = temporaryValue;
		  }

		  return array;
		};

		return {
			getAnagram: function() {
				return makeAnagramObj(allWords[Math.floor(Math.random() * allWords.length)]);
			}
		};
	}]);