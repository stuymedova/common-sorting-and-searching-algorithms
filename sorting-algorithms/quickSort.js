// Quick Sort
//
// - Complexity (Scalability): O(n log(n)).


import swapInPlace from './utilities/swapInPlace.js';

export default function quickSort(givenArray) {
	let sortedArray = [...givenArray];
	return _quickSort(sortedArray, 0, sortedArray.length - 1);
}

function _quickSort(givenArray, leftPointer, rightPointer) {
	if (leftPointer >= rightPointer) {
		return;
	}

	const pivot = givenArray[
		leftPointer + 
		Math.floor((rightPointer - leftPointer) / 2)];

	let newLeftPointer = leftPointer;
	let newRightPointer = rightPointer;

	while (newLeftPointer <= newRightPointer) {
		while (givenArray[newLeftPointer] < pivot) {
			newLeftPointer += 1;
		}
		while (pivot < givenArray[newRightPointer]) {
			newRightPointer -= 1;
		}
		if (newLeftPointer <= newRightPointer) {
			swapInPlace(givenArray, newLeftPointer, newRightPointer);
			newLeftPointer += 1;
			newRightPointer -= 1;
		}
	}

	_quickSort(givenArray, leftPointer, newRightPointer);
	_quickSort(givenArray, newLeftPointer, rightPointer);

	return givenArray;
}
