// Insertion Sort
//
// - Complexity (Scalability): O(n^2).
//
// Works by moving from the first element that is sorted
// to the end of the list and sliding the elements out of
// order to the right place within the sorted portion of
// the list. Makes one whole pass through the list.
//
//  sorted                      sorted                      sorted
//    ∨  ⤺                        ∨   ⤺                       ∨
//   [5, ┆ 12, 7, 3]   ───▶   [5, 12, ┆ 7, 3]   ───▶   [5, 7, 12, ┆ 3]   ───▶
//         ∧                            ∧                           ∧
//      unsorted                     unsorted                    unsorted
//
//               ⤺                   ⤺
//   ───▶   [5, 7, 3, 12]   ───▶   [5, 3, 7, 12]   ───▶   [3, 5, 7, 12]
//                 ∧                   ∧
//              unsorted            unsorted
//
// Additional resources:
// - https://www.youtube.com/watch?v=O0VbBkUvriI


import swapInPlace from './utilities/swapInPlace.js';

export default function insertionSort(givenArray) {
	let sortedEnd = 0;

	while (sortedEnd < givenArray.length) {
		let i = sortedEnd;
		while (i > 0 && givenArray[i - 1] > givenArray[i]) {
			swapInPlace(givenArray, i - 1, i);
			i -= 1;
		}
		sortedEnd += 1;
	}
	
	return givenArray;
}
