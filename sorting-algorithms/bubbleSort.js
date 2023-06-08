// Bubble Sort
//
// - Complexity (Scalability): O(n^2).
export default function bubbleSort(givenArray) {
	const sortedArray = [...givenArray];
	let hasSwappedElements = false;

	do {
		hasSwappedElements = false;

		for (let i = 0; i < sortedArray.length; i++) {
			if (sortedArray[i] > sortedArray[i + 1]) {
				swapInPlace(sortedArray, i, i + 1);
				hasSwappedElements = true;
			}
		}
 	} while (hasSwappedElements);

	return sortedArray;
}

function swapInPlace(givenArray, i, j) {
	const temporary = givenArray[i];
	givenArray[i] = givenArray[j];
	givenArray[j] = temporary;
}
