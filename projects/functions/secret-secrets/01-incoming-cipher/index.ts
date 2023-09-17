type CipherFunc = (text: string) => string;

export function createCipher(cipher: CipherFunc): (text: string) => string {
	return (text) => {
		let stringCipher = "";
		for (let char of text) {
			stringCipher += cipher(char);
		}
		return stringCipher;
	};
}
