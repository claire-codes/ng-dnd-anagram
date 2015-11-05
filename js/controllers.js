angular.module('AnagramApp.controllers', []).
  controller('anagramController', function($scope, AnagramFactory) {

  	$scope.newGame = function() {
		$scope.anagram = angular.copy(AnagramFactory.getAnagram());
		$scope.won = false;
  		$scope.result = 'Rearrange the letters below to make a word and win!';
  		document.getElementById('rainmaker').stop();
	};

	$scope.newGame();

	$scope.movedCallback = function() {
		var attempt = '';
		for (var i = 0; i < $scope.anagram.clue.length; i++) {
			attempt += $scope.anagram.clue[i].letter; 
		}
		if (attempt == $scope.anagram.solution) {
			$scope.result = 'Yay you won! Have another go?';
			$scope.won = true;
			document.getElementById('rainmaker').start();
		}
	};

  });