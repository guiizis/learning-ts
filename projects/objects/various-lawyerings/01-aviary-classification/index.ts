// Write your Bird type here! ✨

type BirdBase = {
	diet: string;
	name: string;
};

type NoisyBird = BirdBase & { noisy: boolean };

type DangerousBird = BirdBase & { dangerous: boolean };

type IntelligentBird = BirdBase & { intelligent: boolean };

type Bird = NoisyBird | DangerousBird | IntelligentBird;

export const birds: Bird[] = [
	{
		dangerous: true,
		diet: "omnivore",
		name: "White-Throated Magpie-Jay",
		noisy: true,
	},
	{
		diet: "omnivore",
		intelligent: true,
		name: "Eurasian Magpie",
	},
	{
		diet: "carnivore",
		name: "Yellow-Billed Blue Magpie",
		noisy: true,
	},
	{
		intelligent: true,
		diet: "omnivore",
		name: "American Crow",
	},
];
