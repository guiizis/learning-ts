// Write your shallowDifferences function here! ✨
// You'll need to export it so the tests can run it.

export function shallowDifferences(a: string[], b: string[]) {
	if (a.length !== b.length) {
		return undefined;
	}
	return a.map((element, index) => {
		if (element === b[index]) {
			return element;
		}
		return undefined;
	});
}
