export const getMonthArray = () => {
	let today = new Date();
	let month = today.getMonth() + 1;
	let months = [
		0,
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	// console.log(months[month]);

	let date = today.getDate();
	// console.log(date);
	let arr = [];
	for (let i = 4; i >= 0; i--) {
		arr[i] = `${months[month]} ${date}`;
		if (date === 1) {
			if (
				month === 1 ||
				month === 3 ||
				month === 5 ||
				month === 7 ||
				month === 8 ||
				month === 10 ||
				month === 12
			) {
				date = 31;
			} else if (month === 2) {
				date = 28;
			}
			month--;
			if (month === 0) {
				month = 12;
			}
		} else {
			date--;
		}
	}
	return arr;
};
