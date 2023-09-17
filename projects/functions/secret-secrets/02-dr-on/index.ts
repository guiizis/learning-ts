// Write your createAdvancedCipher function here! ✨
// You'll need to export it so the tests can run it.

type CipherChar = (char: string) => string;

export function createAdvancedCipher(
	onVowel: CipherChar,
	onConsonant: CipherChar,
	onPunctuation: CipherChar
) {
	return (text: string) => {
		let stringCipher = "";

		for (let char of text) {
			const cipher = char.match(/[aeiou]/i)
				? onVowel
				: char.match(/[bcdfghjklmnpqrstvwxyz]/i)
				? onConsonant
				: onPunctuation;

			stringCipher += cipher(char);
		}
		return stringCipher;
	};
}
