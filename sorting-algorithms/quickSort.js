// Quick Sort
//
// - Complexity (Scalability): O(n log(n)) on average,
//   O(n^2) in the worst case.
//
// Divide and conquer algorithm. Works by choosing the
// pivot element and swapping the elements such that all
// elements less than the pivot come before elements
// greather than than the pivot. The procedure is repeated
// until the array is sorted.
//
// Additional resources:
// - https://www.youtube.com/watch?v=SLauY6PpjW4


import { getRandomInt } from './utilities/getRandomInt.js';
import { swapInPlace } from './utilities/swapInPlace.js';

export function quickSort(givenArray, left = 0, right = givenArray.length - 1) {
	const index = partition(givenArray, left, right);
	if (left < index - 1) {
		quickSort(givenArray, left, index - 1);
	}
	if (index < right) {
		quickSort(givenArray, index, right);
	}
}

function partition(givenArray, left, right) {
	const pivot = givenArray[getRandomInt(left, right + 1)];
	while (left <= right) {
		while (givenArray[left] < pivot) {
			left += 1;
		}
		while (givenArray[right] > pivot) {
			right -= 1;
		}
		if (left <= right) {
			swapInPlace(givenArray, left, right);
			left += 1;
			right -= 1;
		}
	}
	return left;
}
