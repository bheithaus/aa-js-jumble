//js r
var _ = require('underscore');

var contains = function(arr1, el) {
	for (var i = 0; i < arr1.length; i++){
		if (arr1[i] === el) {
			return true;
		}
	}
	return false;
};

var removeDups = function(arr) {
	var uniqArray = [];
	for (var i = 0; i < arr.length; i++) {
			if (!contains(uniqArray, arr[i])) {
				uniqArray.push(arr[i]);
			}
	}
	return uniqArray;
};

var twoSum = function(arr) {
	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j ++) {
			if (arr[i] + arr[j] === 0) {
				return true;
			}
		}
	}
	return false;
};

var transpose = function(matrix) {
	var outMatrix = [];
	for (var i = 0; i < matrix.length; i++) {
		outMatrix[i] = [];
		for (var j = 0; j < matrix[i].length; j++) {
			outMatrix[i].push(matrix[j][i]);
		}
	}
	return outMatrix;
};

//multiples, my_each, inject

var multiples = function(arr) {
	var outputArray = [];
	for (var i = 0; i < arr.length; i++) {
		outputArray.push(arr[i]*2);
	}

	return outputArray;
};

Array.prototype.myEach = function(f) {
	for (var i = 0; i < this.length; i++) {
		f(this[i]);
	}

	return this;
};


Array.prototype.inject = function(start, f) {
	this.myEach(function(el) {
		start = f(start, el);
	});

	return start;
};

console.log([2,5,6].inject(0, function(num1, num2) {
	return num1 + num2;
}))

//bubble_sort, substrings

function bubbleSort(input_arr) {
	var arr = input_arr.slice(0);
	var unsorted = true;
	while (unsorted) {
		unsorted = false;
		for (var i = 0; i < (arr.length-1); i++) {
			if (arr[i] > arr[i+1]) {
				var first = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = first;
				unsorted = true;
			}
		}
	}
	return arr;
}

String.prototype.subStrings = function() {
	var outputArray = [];
	for (var i = 0; i < this.length; i++) {
		for (var j = i+1; j < this.length+1; j++) {
			outputArray.push(this.slice(i,j));
		}
	}

	return outputArray;
}

//recursion

function range(start, end) {
	if (start === end) {
		return [end];
	} else {
		var arr = range(start+1, end);
		arr.unshift(start);
		return arr;
	}
}

function recursiveSum(arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		return arr.pop() + recursiveSum(arr);
	}
}

function iterativeSum(arr) {
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function exp1(b, n) {
	if (n === 0) {
		return 1;
	} else {
		return b * exp1(b, n-1);
	}
}

function exp2(b, n) {
	if (n === 0) {
		return 1;
	} else if (n % 2 === 0) {
		return Math.pow(exp2(b, n/2), 2);
	} else {
		return b * Math.pow(exp2(b, (n-1) / 2), 2);
	}
}

var fibs = {};// memoize past calls to recursiveFib

function recursiveFib(n) {
	if (n === 0) {
		return [0];
	} else if (n === 1) {
		return [0, 1];
	} else {
		var result = (typeof fibs[n-1] === 'undefined') ?
										recursiveFib(n-1) : fibs[n-1];
		fibs[n-1] = result;
		result.push(result[result.length-1] + result[result.length-2]);
		return result;
	}
}


function iterativeFib(n) {
	result = [0,1]
	if (n === 0) {
		return result.slice(0,1);
	} else if (n === 1) {
		return result
	} else {
		for (var i = 2; i <= n; i++) {
			result.push(result[i-1] + result[i-2]);
		}
	}
	return result;
}

function binarySearch(array, el) {
	var mid = Math.floor((array.length)/2);
	if (array[mid] === el) {
		return mid;
	}
	else if (array.length == 1 && array[0] != el) {
		return null;
	}
	else if (array[mid] > el) {
		firstHalf = array.slice(0, mid);
		return binarySearch(firstHalf, el);
	}
	else {
		secondHalf = array.slice(mid, array.length);
		return mid + binarySearch(secondHalf, el);
	}
}

//coins [25,10,5,1]

function makeChange(coins, amount) {
	if (coins.length === 1) {
		return [amount / coins[0]];
	} else {
		var bigCoin = coins.shift();
		var newAmount = amount % bigCoin;
		var numOfBigCoin = Math.floor(amount / bigCoin);
		var result = makeChange(coins, newAmount);
		result.unshift(numOfBigCoin);
		return result;
	}
}

function mergeSort(array) {
	if (array.length === 1) {
		return array;
	} else {
		var result = [];
		var firstHalf = mergeSort(array.slice(0,(array.length/2)));
		var secondHalf = mergeSort(array.slice(array.length/2, array.length));
		while(firstHalf.length && secondHalf.length) {
			if(firstHalf[0] > secondHalf[0]) {
				result.push(secondHalf.shift());
			} else {
				result.push(firstHalf.shift());
			}
		}
		if(firstHalf.length) {
			result = result.concat(firstHalf);
		}
		else if (secondHalf.length) {
			result = result.concat(secondHalf);
		}
		return result;
	}
}


console.log(mergeSort([3,2,1,5,2,6,3,8]));
//console.log(makeChange([25,10,5,1], 68));
//console.log(binarySearch([1, 2, 3, 4, 6, 7], 0));

// Tests! :)
// console.log(recursiveFib(50));
// console.log(iterativeFib(50));




// console.log(exp1(2,10));
// console.log(exp2(2,10));

//console.log(iterativeSum([1,3,4]));

//console.log(recursiveSum([1,2,4]));

//console.log(range(0,2));


/*console.log(removeDups([1,1,2,2,3,5,4,3]));
console.log(twoSum([1,1,2,2,0]));
console.log(transpose([[0,1,2],[3,4,5],[6,7,8]]));*/

// console.log(multiples([1,2,3]));
// console.log(myEach([1,2,3], function(el){
// 	console.log(el*2);
// }));
//
// console.log(inject([1,2,3],1, function(num1, num2) {
// 	return num1 * num2;
// }));

// console.log(bubbleSort([4,3,2,1]));
 console.log("cat".subStrings());