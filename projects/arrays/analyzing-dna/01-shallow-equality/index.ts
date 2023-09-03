// Write your shallowEquality function here! ✨
// You'll need to export it so the tests can run it.

export function shallowEquality(a: string[], b: string[]): boolean {
	let result = false;

	if (!a.length && !b.length) {
		return true;
	}

	a.forEach((element, index) => {
		result = element === b[index] ? true : false;
	});

	return result;
}
