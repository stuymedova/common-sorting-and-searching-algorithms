export default function swapInPlace(givenArray, i, j) {
	const temporary = givenArray[i];
	givenArray[i] = givenArray[j];
	givenArray[j] = temporary;
}
