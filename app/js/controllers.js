angular.module('AnagramApp.controllers', []).

  /* Drivers controller */
  controller('anagramController', function($scope, SillyService, PuzzleFactory) {
  	$scope.attempt = '';
  	$scope.result = 'Still wrong';
  	$scope.won = false;

  	$scope.puzzle = PuzzleFactory.getPuzzle();
 //  	{
	//     "clue": [
	//         {
	//             "letter": "I"
	//         },
	//         {
	//             "letter": "W"
	//         },
	//         {
	//             "letter": "N"
	//         }
	//     ],
	//     "solution": "WIN"
	// };

	$scope.movedCallback = function() {
		console.log('MOVED');
		// current attempt
		var attempt = '';
		for (var i = 0; i < $scope.puzzle.clue.length; i++) {
			attempt += $scope.puzzle.clue[i].letter; 
		}
		$scope.attempt = attempt;
		if (attempt == $scope.puzzle.solution) {
			$scope.result = 'WINNER WINNER CHICKEN DINNER';
			$scope.won = true;
		}
	};

	$scope.newGame = function() {
		console.log('New game please');
		$scope.puzzle = PuzzleFactory.getPuzzle();
	};

	$scope.floop = SillyService.sillySum(2, 2);

  });