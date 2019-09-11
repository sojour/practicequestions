function bubbleSort(array) {
	let swapped = false;
	let counter = 0;

	while (!swapped){
		swapped = true;

		for (let i = 0; i < array.length-1-counter; i++){
			if (array[i] > array[i+1]){
				let temp = array[i];
				array[i]=array[i+1];
				array[i+1] = temp;
				swapped = false;
			}
		}
		counter++;
	}
	return array;
}