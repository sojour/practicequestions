
function levenshteinDistance(str1, str2) {
  // Write your code here.
	let edits = []

	for (let i = 0; i <str1.length+1; i++){
		let row = [];
		for (let j = 0; j < str2.length+1; j++){
			row.push(j)
		}
		row[0] = i;
		edits.push(row)
	}

  console.log(edits)
}

console.log(levenshteinDistance('abc','abc'));