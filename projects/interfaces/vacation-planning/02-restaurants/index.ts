export interface Restaurant {
	city: string;
	name: string;
}

export interface GroupedRestaurants {
	[i: string]: string[];
}

export function groupRestaurants(restaurant: Restaurant[]) {
	const allRestaurants: GroupedRestaurants = {};

	for (let res of restaurant) {
		if (!allRestaurants.hasOwnProperty(res.city)) {
			allRestaurants[res.city] = [];
		}
		allRestaurants[res.city].push(res.name);
	}
}
