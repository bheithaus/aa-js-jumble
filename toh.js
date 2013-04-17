//towers of hanoi

var towers = [[3,2,1],
							[],
							[]];

function valid(from, to) {
	from = towers[from];
	to = towers[to];
	if ( !to[to.length-1] ) {
		return true;
	}
	return from[from.length-1] < to[to.length-1];
}

function moveDisc(from, to) {
	if ( valid(from, to) ) {
		towers[to].push(towers[from].pop());
	}
}

function win() {
	if ( towers[1].length === 3 || towers[2].length === 3 ) {
		return true;
	}
	return false;
}


// console.log(valid(0,1));
// console.log(moveDisc(0,1));
//
// console.log(valid(0,1));
console.log(win());

console.log(towers);

