var services = angular.module('AnagramApp.services', [])
	.factory('AnagramFactory', [function AnagramFactory() {
		allAnagrams = [
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
			getAnagram: function() {
				return allAnagrams[Math.floor(Math.random() * allAnagrams.length)];
			}
		};
	}]);