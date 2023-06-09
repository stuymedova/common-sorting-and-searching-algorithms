import swapInPlace from './utilities/swapInPlace.js';

// Selection Sort
//
// - Complexity (Scalability): O(n^2).
export default function selectionSort(givenArray) {
	const sortedArray = [...givenArray];

	for (let i = 0; i < sortedArray.length - 1; i++) {
		let minValueIndex = i;

		for (let j = i + 1; j < sortedArray.length; j++) {
			if (sortedArray[j] < sortedArray[minValueIndex]) {
				minValueIndex = j;
			}
		}

		if (minValueIndex !== i) {
			swapInPlace(sortedArray, i, minValueIndex);
		}
	}

	return sortedArray;
}
