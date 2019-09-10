function findThreeLargestNumbers(array) {
  let result = [-Infinity, -Infinity, -Infinity];
	for (let i = 0; i<array.length; i++){
		result = updateThreeLargest(array[i],result);
	}
	return result;
}

function updateThreeLargest(num,array){
	let temp1;
	let temp2;
if(num <= array[0]){
	return array;
} if (num > array[0] && num <= array[1]){
	array[0] = num;
} else if (num > array[1]&& num <= array[2]){
	temp1 = array[1]
	array[1] = num;
	array[0] = temp1;
} else {
	temp1 = array[2];
	temp2 = array[1];
	array[2] = num;
	array[1] = temp1;
	array[0] = temp2;
}
	return array;
}