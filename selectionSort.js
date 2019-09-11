function selectionSort(array) {
  let currentIdx = 0;
	while (currentIdx < array.length-1){
		let smallestIdx = currentIdx;
		for (let i = currentIdx+1; i<array.length; i++){
			if (array[smallestIdx] > array[i]){
				smallestIdx = i;
			}
		}

		let temp = array[currentIdx];
		array[currentIdx] = array[smallestIdx];
		array[smallestIdx] = temp;
		currentIdx++;
	}
	return array
}