// Put your announceMachines function here! ✨
// See ./original.js for its older JavaScript code.

function announceMachines(announces, ...machineObjects) {
	let labels = 0;
	for (let machine of machineObjects) {
		let label = "";

		if (machine.label) {
			labels++;
			label = machine.label;
		} else {
			label = `Make: ${machine.make}; Model: ${machine.model}`;
		}

		announces(label);
	}
	return labels;
}

module.exports.announceMachines = announceMachines;
