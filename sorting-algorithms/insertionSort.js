// Insertion Sort
//
// - Complexity (Scalability): O(n^2).
//
// Works by moving from the first element that is sorted
// to the end of the list and sliding the elements out of
// order to the right place within the sorted portion of
// the list. Makes one whole pass through the list.
//
// Additional resources:
// - https://www.youtube.com/watch?v=O0VbBkUvriI


import { swapInPlace } from './utilities/swapInPlace.js';

export function insertionSort(givenArray) {
	let sortedEnd = 0;
	while (sortedEnd < givenArray.length) {
		let i = sortedEnd;
		while (i > 0 && givenArray[i - 1] > givenArray[i]) {
			swapInPlace(givenArray, i - 1, i);
			i -= 1;
		}
		sortedEnd += 1;
	}
}
