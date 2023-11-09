// Bubble Sort
//
// - Complexity (Scalability): O(n^2).
//
// Works by swapping adjacent pairs until the array is
// sorted (the pass is made with no elements being
// swapped).
//
// Additional resources:
// - https://www.youtube.com/watch?v=RT-hUXUWQ2I


import { swapInPlace } from './utilities/swapInPlace.js';

export function bubbleSort(givenArray) {
	let hasSwapped = false;
	do {
		hasSwapped = false;
		for (let i = 0; i < givenArray.length - 1; i++) {
			if (givenArray[i] > givenArray[i + 1]) {
				swapInPlace(givenArray, i, i + 1);
				hasSwapped = true;
			}
		}
	} while (hasSwapped);
}
