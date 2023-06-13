// Merge Sort
//
// - Complexity (Scalability): O(n log(n)).
//
// Divide and conquer algorithm. Works by partitioning the
// array in halves until there's only one element left in
// the given half, then merging the halves together in the
// sorted order.
//
// Note: the implementation below is not memory efficient.
//
// Additional resources:
// - https://www.youtube.com/watch?v=Ns7tGNbtvV4
// - https://www.youtube.com/watch?v=KF2j-9iSf4Q


export default function mergeSort(givenArray) {
	return _mergeSort(givenArray, 0, givenArray.length - 1);
}

function _mergeSort(givenArray) {
	if (givenArray.length < 2) {
		return givenArray;
	}

	const middlePointer = Math.floor(givenArray.length / 2);
	const leftHalf = _mergeSort(givenArray.slice(0, middlePointer));
	const rightHalf = _mergeSort(givenArray.slice(middlePointer));

	return _mergeHalves(leftHalf, rightHalf);
}

function _mergeHalves(leftHalf, rightHalf) {
	const mergedHalves = [];
	let leftPointer = 0;
	let rightPointer = 0;

	while (leftPointer < leftHalf.length && rightPointer < rightHalf.length) {
		if (leftHalf[leftPointer] <= rightHalf[rightPointer]) {
			mergedHalves.push(leftHalf[leftPointer]);
			leftPointer += 1;
		} else {
			mergedHalves.push(rightHalf[rightPointer]);
			rightPointer += 1;
		}
	}

	return mergedHalves
		.concat(leftHalf.slice(leftPointer))
		.concat(rightHalf.slice(rightPointer));
}
