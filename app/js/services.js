var services = angular.module('AnagramApp.services', [])
	.factory('SillyService', [function SillyService() {
		return {
			sillySum: function(x, y) {
				return x + y;
			}
		}
	}])
	.factory('PuzzleFactory', [function PuzzleFactory() {
		allPuzzles = [
		 {
		    "clue": [
		        {
		            "letter": "I"
		        },
		        {
		            "letter": "W"
		        },
		        {
		            "letter": "N"
		        }
		    ],
		    "solution": "WIN"
		},
		{
		    "clue": [
		        {
		            "letter": "E"
		        },
		        {
		            "letter": "P"
		        },
		        {
		            "letter": "L"
		        },
		        {
		            "letter": "P"
		        },
		        {
		            "letter": "A"
		        }
		    ],
		    "solution": "APPLE"
		},
		{
		    "clue": [
		        {
		            "letter": "I"
		        },
		        {
		            "letter": "C"
		        },
		        {
		            "letter": "T"
		        },
		        {
		            "letter": "U"
		        },
		        {
		            "letter": "I"
		        },
		        {
		            "letter": "B"
		        },
		        {
		            "letter": "S"
		        }
		    ],
		    "solution": "BISCUIT"
		}
		];
		return {
			getPuzzle: function() {
				return allPuzzles[Math.floor(Math.random() * allPuzzles.length)]
			}
		};
	}]);