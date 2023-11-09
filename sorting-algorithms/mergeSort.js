// Merge Sort
//
// - Complexity (Scalability): O(n log(n)).
//
// Divide and conquer algorithm. Works by partitioning the
// array in halves until there's only one element left in
// the given half, then merging the halves together in the
// sorted order.
//
// Note: the implementation below doesn't modify the array
// in place.
//
// Note: the implementation below is more simple yet not
// memory efficient.
//
// Additional resources:
// - https://www.youtube.com/watch?v=Ns7tGNbtvV4
// - https://www.youtube.com/watch?v=KF2j-9iSf4Q


function mergeSort(givenArray) {
	if (givenArray.length < 2) {
		return givenArray;
	}
	const middle = Math.floor(givenArray.length / 2);
	const leftHalf = mergeSort(givenArray.slice(0, middle));
	const rightHalf = mergeSort(givenArray.slice(middle));
	return mergeHalves(leftHalf, rightHalf);
}

function mergeHalves(leftHalf, rightHalf) {
	const merged = [];
	let left = 0;
	let right = 0;
	while (left < leftHalf.length || right < rightHalf.length) {
		if (leftHalf[left] <= rightHalf[right] ||
			right >= rightHalf.length
		) {
			merged.push(leftHalf[left]);
			left += 1;
		} else {
			merged.push(rightHalf[right]);
			right += 1;
		}
	}
	return merged;
}
