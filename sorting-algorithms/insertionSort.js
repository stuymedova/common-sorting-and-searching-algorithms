import swapInPlace from './utilities/swapInPlace.js';

// Insertion Sort
//
// - Complexity (Scalability): O(n^2).
export default function insertionSort(givenArray) {
	const sortedArray = [...givenArray];

	for (let i = 0; i < sortedArray.length; i++) {
		let j = i;
		while (j > 0 && sortedArray[j-1] > sortedArray[j]) {
			swapInPlace(sortedArray, j-1, j);
			j -= 1;
		}
	}

	return sortedArray;
}
