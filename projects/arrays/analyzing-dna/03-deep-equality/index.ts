// Write your deepEquality function here! ✨
// You'll need to export it so the tests can run it.

export function deepEquality(a: string[][], b: string[][]): boolean {
	if (a.length !== b.length) {
		return false;
	}
	const sameChildLength = a.every((element, index) => {
		return element.length === b[index].length;
	});

	if (!sameChildLength) {
		return false;
	}

	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a[i].length; j++) {
			if (a[i][j] !== b[i][j]) {
				return false;
			}
		}
	}
	return true;
}
