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


import swapInPlace from './utilities/swapInPlace.js';

export default function quickSort(givenArray) {
	return _quickSort(givenArray, 0, givenArray.length - 1);
}

function _quickSort(givenArray, leftPointer, rightPointer) {
	if (leftPointer >= rightPointer) {
		return;
	}

	const pivot = givenArray[
		leftPointer + 
		Math.floor((rightPointer - leftPointer) / 2)];
	console.log('pivot', pivot);

	let newLeftPointer = leftPointer;
	let newRightPointer = rightPointer;
	console.log('left & right', newLeftPointer, newRightPointer);

	while (newLeftPointer <= newRightPointer) {
		while (givenArray[newLeftPointer] < pivot) {
			newLeftPointer += 1;
		}
		while (pivot < givenArray[newRightPointer]) {
			newRightPointer -= 1;
		}
		if (newLeftPointer <= newRightPointer) {
			console.log('swap pointers', newLeftPointer, newRightPointer);
			swapInPlace(givenArray, newLeftPointer, newRightPointer);
			newLeftPointer += 1;
			newRightPointer -= 1;
		}
	}

	console.log('break')
	_quickSort(givenArray, leftPointer, newRightPointer);
	_quickSort(givenArray, newLeftPointer, rightPointer);

	return givenArray;
}

console.log(quickSort([5,12,7,3]))