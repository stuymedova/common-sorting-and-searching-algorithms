// Bubble Sort
//
// - Complexity (Scalability): O(n^2).
//
// Works by swapping adjacent pairs until the array is
// sorted (the pass is made with no elements being
// swapped).
//
//   [5, 12, 7]  ───▶  [5, 12, 7]  ───▶  [5, 7, 12]  ───▶  [5, 7, 12]
//    ∧  ∧                 ∧ ⤻ ∧          ∧  ∧                  ∧  ∧
//
// Additional resources:
// - https://www.youtube.com/watch?v=RT-hUXUWQ2I


import swapInPlace from './utilities/swapInPlace.js';

export default function bubbleSort(givenArray) {
	let hasSwappedElements = false;

	do {
		hasSwappedElements = false;

		for (let i = 0; i < givenArray.length - 1; i++) {
			if (givenArray[i] > givenArray[i + 1]) {
				swapInPlace(givenArray, i, i + 1);
				hasSwappedElements = true;
			}
		}
 	} while (hasSwappedElements);

	return givenArray;
}
