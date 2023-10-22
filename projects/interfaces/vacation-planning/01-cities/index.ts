export interface City {
	coordinates: {
		north: [number, number, number];
		west: [number, number, number];
	};
	name: string;
	catchphrase?: string;
}

function describeUnit(unit: number): string {
	return unit.toString().padStart(2, "0");
}

function describeCoordinate(coordinate: [number, number, number]): string {
	return [
		`${describeUnit(coordinate[0])}°`,
		`${describeUnit(coordinate[1])}'`,
		`${describeUnit(coordinate[2])}"`,
	].join("");
}

export function describeCity(city: City): string {
	const catchphrase = city.catchphrase ? `* ${city.catchphrase}` : "";

	return `${city.name}, New York \n
          ${catchphrase}\n
          * Located at ${describeCoordinate(
						city.coordinates.north
					)}N ${describeCoordinate(city.coordinates.west)}W`;
}
