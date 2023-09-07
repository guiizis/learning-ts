type Treasure = {
	treasure: string;
	name: string;
	proximity: number;
	type: "clearing";
};

type Town = {
	name: string;
	proximity: number;
	type: "town";
	around?: Town;
	through?: Path | Stream;
};

type Stream = {
	name: string;
	proximity: number;
	type: "stream";
	area: "begin" | "middle" | "end";
	downstream?: Stream | Town;
	upstream?: Stream | Town;
};

type Path = {
	name: string;
	proximity: number;
	type: "path";
	shortcut?: Town;
	through?: Stream | Town;
};

type Location = Treasure | Town | Stream | Path;

let current: Location = {
	name: "Woesong Bridge",
	proximity: 100,
	type: "path",
	through: {
		area: "middle",
		downstream: {
			area: "end",
			upstream: {
				name: "Vizima",
				proximity: 30,
				type: "clearing",
			},
			name: "White Orchard Creek",
			proximity: 25,
			type: "stream",
		},
		name: "Oxenfurt Gate",
		proximity: 40,
		type: "town",
		through: {
			name: "Vergen Tunnel",
			proximity: 20,
			shortcut: {
				proximity: 30,
				name: "Crow's Perch",
				type: "town",
			},
			through: {
				area: "begin",
				downstream: {
					through: {
						treasure: "rare playing cards",
						name: "Reuven's Treasure",
						proximity: 0,
						type: "clearing",
					},
					name: "Gate of the Hierarch",
					proximity: 10,
					type: "town",
				},
				name: "Founders Stream",
				proximity: 25,
				type: "stream",
			},
			type: "path",
		},
	},
};

let treasure: string | undefined;

while (current) {
	console.log(`At: ${current.name}`);

	switch (current.type) {
		case "clearing":
			current = current.through as Location;
			break;

		case "path":
			current =
				current.shortcut &&
				current.shortcut.proximity < (current.through as Path).proximity
					? current.shortcut
					: (current.through as Location);
			break;

		case "town":
			if (!current.around) {
				current = current.through as Location;
			} else if (!current.through) {
				current = current.around;
			} else {
				current =
					current.around.proximity < (current.through as Location).proximity
						? current.around
						: (current.through as Location);
			}
			break;

		case "stream":
			switch ((current as Stream).area) {
				case "begin":
					current = (current as Stream).downstream as Location;
					break;
				case "end":
					current = (current as Stream).upstream as Location;
					break;
				case "middle":
					current =
						(current as Stream).downstream.proximity <
						(current as Stream).upstream.proximity
							? (current as Stream).downstream
							: (current as Stream).upstream;
					break;
			}
	}

	if (!current) {
		console.log("Hmm. Dead end.");
	} else if ((current as Treasure).treasure) {
		treasure = (current as Treasure).treasure;
		break;
	}
}

if (treasure) {
	console.log(`This will do nicely: ${treasure}.`);
} else {
	console.log("Nothing going.");
}
