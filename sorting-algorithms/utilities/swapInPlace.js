export function swapInPlace(givenArray, i, j) {
	const temp = givenArray[i];
	givenArray[i] = givenArray[j];
	givenArray[j] = temp;
}
