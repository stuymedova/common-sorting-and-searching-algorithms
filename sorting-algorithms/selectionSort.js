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


import { swapInPlace } from './utilities/swapInPlace.js';

export function selectionSort(givenArray) {
	let first = 0;
	while (first < givenArray.length - 1) {
		let smallest = first;
		for (let i = first + 1; i < givenArray.length; i++) {
			if (givenArray[i] < givenArray[smallest]) {
				smallest = i;
			}
		}
		if (smallest !== first) {
			swapInPlace(givenArray, first, smallest);
		}
		first += 1;
	}
}
