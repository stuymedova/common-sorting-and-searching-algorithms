// Bubble Sort
// - Complexity (Scalability): O(n^2).
export default function bubbleSort(givenArray) {
	const arrayCopy = [...givenArray];
	let hasSwappedElements = false;

	do {
		hasSwappedElements = false;

		for (let i = 0; i < arrayCopy.length; i++) {
			if (arrayCopy[i] > arrayCopy[i + 1]) {
				swapInPlace(arrayCopy, i, i + 1);
				hasSwappedElements = true;
			}
		}
 	} while (hasSwappedElements);

	return arrayCopy;
}

function swapInPlace(givenArray, i, j) {
	const temporary = givenArray[i];
	givenArray[i] = givenArray[j];
	givenArray[j] = temporary;
}
