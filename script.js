const daysC = document.querySelector("#day");
const hoursC = document.querySelector("#hr");
const minsC = document.querySelector("#min");
const secsC = document.querySelector("#sec");
const newYear = "1 Jan 2023";

function time() {
	const today = new Date();
	const dest = new Date(newYear);

	let x = today.getTime();
	let y = dest.getTime();
	// console.log(x, y);
	let n = (y - x) / 1000;

	// console.log(diff);

	let days = Math.floor(n / 3600 / 24);
	// console.log(days);
	let hours = Math.floor(n / 3600) % 24;
	// console.log(hours);
	let mins = Math.floor(n / 60) % 60;
	// console.log(mins);
	let secs = Math.floor(n) % 60;
	// console.log(days, hours, mins, secs);
	daysC.innerHTML = days;
	hoursC.innerHTML = formatTime(hours);
	minsC.innerHTML = formatTime(mins);
	secsC.innerHTML = formatTime(secs);
}

function formatTime(t) {
	return t < 10 ? `0${t}` : t;
}

setInterval(time, 1000);
