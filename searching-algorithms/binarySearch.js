// Binary Search
//
// - Complexity (Scalability): O(log(n)).


export function binarySearch(soughtValue, givenArray) {
	let low = 0;
	let high = givenArray.length - 1;
	while (low <= high) {
		const middle = low + Math.floor((high - low) / 2);
		if (givenArray[middle] === soughtValue) {
			return true;
		}
		if (givenArray[middle] < soughtValue) {
			low = middle + 1;
		} else {
			high = middle - 1;
		}
	}
	return false;
}
