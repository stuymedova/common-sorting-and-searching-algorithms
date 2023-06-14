// Selection Sort
//
// - Complexity (Scalability): O(n^2).
//
// Works by moving from the first unsorted element to the
// end of the list to find the smallest element and swap
// it with the first unsorted element in the list.
//
// Additional resources:
// - https://www.youtube.com/watch?v=3hH8kTHFw2A


import swapInPlace from './utilities/swapInPlace.js';

export default function selectionSort(givenArray) {
	let firstUnsorted = 0;

	while (firstUnsorted < givenArray.length - 1) {
		let smallestUnsorted = firstUnsorted;

		for (let i = firstUnsorted + 1; i < givenArray.length; i++) {
			if (givenArray[i] < givenArray[smallestUnsorted]) {
				smallestUnsorted = i;
			}
		}

		if (smallestUnsorted !== firstUnsorted) {
			swapInPlace(givenArray, firstUnsorted, smallestUnsorted);
		}

		firstUnsorted += 1;
	}

	return givenArray;
}
