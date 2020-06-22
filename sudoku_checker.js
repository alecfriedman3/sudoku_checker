let puzzle =   [[ 8,9,5,   7,4,2,   1,3,6 ],
				[ 2,7,1,   9,6,3,   4,8,5 ],
				[ 4,6,3,   5,8,1,   7,9,2 ],

				[ 9,3,4,   6,1,7,   2,5,8 ],
				[ 5,1,7,   2,3,8,   9,6,4 ],
				[ 6,8,2,   4,5,9,   3,7,1 ],

				[ 1,5,9,   8,7,4,   6,2,3 ],
				[ 7,4,6,   3,2,5,   8,1,9 ],
				[ 3,2,8,   1,9,6,   5,4,7 ]];

let puzzle_copy =   [[ 8,9,5,   7,4,2,   1,3,6 ],
				[ 2,7,1,   9,6,3,   4,8,5 ],
				[ 4,6,3,   5,8,1,   7,9,2 ],

				[ 9,3,4,   6,1,7,   2,5,8 ],
				[ 5,1,7,   2,3,8,   9,6,4 ],
				[ 6,8,2,   4,5,9,   3,7,1 ],

				[ 1,5,9,   8,7,4,   6,2,3 ],
				[ 7,4,6,   3,2,5,   8,1,9 ],
				[ 3,2,8,   1,9,6,   5,4,7 ]];

let p25zzle =   [[ 8,9,5,   7,4,2,   1,3,6 ],
				[ 2,7,1,   9,4,3,   4,8,9 ], //9 -> 5
				[ 4,6,3,   5,8,1,   7,9,2 ],

				[ 9,3,4,   6,1,7,   2,5,8 ],
				[ 5,1,7,   2,3,8,   9,6,4 ],
				[ 6,8,2,   4,5,9,   3,7,1 ],

				[ 1,5,9,   8,7,4,   6,2,3 ],
				[ 7,4,6,   3,2,5,   8,1,9 ],
				[ 3,2,8,   1,9,6,   5,4,7 ]];

let p8zzle =   [[ 8,9,5,	7,4,2,	1,3,6 ],
				[ 8,7,1,	9,6,3,	4,8,5 ], //8 -> 2
				[ 4,6,3,	5,8,1,	7,9,2 ],

				[ 9,3,4,	6,1,7,	2,5,8 ],
				[ 5,1,7,	2,3,8,	9,6,4 ],
				[ 6,8,2,	4,5,9,	3,7,1 ],

				[ 1,5,9,	8,7,4,	6,2,3 ],
				[ 7,4,6,	3,2,5,	8,1,9 ],
				[ 3,2,8,	1,9,6,	5,4,7 ]];

function getRow(array, iRow){
	return array[iRow];
}

function getColumn(array, iCol){
	let col = [];
	for (let i = 0; i < array.length; i++)
		col.push(array[i][iCol]);
	return col;
}

function getSection(array, secX, secY){
	let section = [];
	for (let i = secY * 3; i < secY * 3 + 3; i++)
		for (let j = secX * 3; j < secX * 3 + 3; j++)
			section.push(array[i][j]);
	return section;
}

function includes1to9(array){
	let checker = [1,2,3,4,5,6,7,8,9];
	if (array.length !== 9)
		return false;//'Field slice has wrong length';
	for (let i = 0; i < 9; i++){
		if (checker.includes(array[i]))
			checker.splice(checker.indexOf(array[i]), 1);
	}
	return checker.length === 0 ? true : false;
}

function checkLength(array){
	return (array.length === 9 ? true : false)
}

function isSame(array1, array2){
	if (array1.length === array2.length)
	for (let i = 0; i < array1.length; i++){
		if (array1[i].length === array2[i].length){
			for (let j = 0; j < array1.length; j++){
				if (array1[i][j] !== array2[i][j])
					return false;
			}
		} else
			return false;
	}
	return true;
}

function processChecker(array){
	for (let i = 0; i < 9; i++){
		let row = getRow(array, i);
		if (!includes1to9(row) || !checkLength(row)){
			return 'Not all rows are valid';
		}
		let column = getColumn(array, i);
		if (!includes1to9(column)){
			return 'Not all columns are valid';
		}
		while (i < 3){
			for (let j = 0; j < 3; j++){
				let section = getSection(array, i, j);
				if (!includes1to9(section))
					return 'Not all sections are valid';
			}
			i++;
		}
	}
	return 'Field is valid';
}

//let array = [5,6,7,1,9,2,8,3,4]; //true
//let array = [1,6,7,1,9,2,8,3,4]; //false
//let array = [5,6,6,1,9,6,8,6,4]; //false
//let array = [5,6,7,1,9,2,8,3,4,1,3]; //false length
console.log(isSame(puzzle, puzzle_copy)); //true
console.log(isSame(puzzle, p8zzle)); //false
console.log(isSame(puzzle, p25zzle)); //false
//console.log(getRow(puzzle, 1));
//console.log(getColumn(puzzle, 1));
//console.log(getSection(puzzle, 2, 0));
//console.log(includes1to9(array));
//console.log(includes1to9(array));
console.log(processChecker(puzzle)); //true
console.log(processChecker(puzzle_copy)); //true
console.log(processChecker(p8zzle)); //false
console.log(processChecker(p25zzle)); //false
