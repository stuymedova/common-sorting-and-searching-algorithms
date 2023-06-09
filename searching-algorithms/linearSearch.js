// Linear Search
//
// - Complexity (Scalability): O(n).


export default function linearSearch(soughtValue, givenArray) {
	for (const value of givenArray) {
		if (value === soughtValue) {
			return true;
		}
	}
	return false;
}
