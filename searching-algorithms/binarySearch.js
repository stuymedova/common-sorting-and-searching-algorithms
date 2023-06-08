// Binary Search
// - Complexity (Scalability): O(log(n)).
export default function binarySearch(soughtValue, givenArray) {
	let lowPointer = 0;
	let highPointer = givenArray.length;

	while (lowPointer <= highPointer) {
		const middlePointer = Math.floor((lowPointer + highPointer) / 2);
		const middle = givenArray[middlePointer];
		
		if (middle === soughtValue) {
			return true;
		}

		if (middle < soughtValue) {
			lowPointer = middlePointer + 1;
		} else {
			highPointer = middlePointer - 1;
		}
	}
	return false;
}
