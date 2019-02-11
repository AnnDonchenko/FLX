function formatTime(arg){
	let minutes = arg%60;
	let hours = (arg-minutes)/60%24;
	let days = (((arg-minutes)/60)-hours)/24;
	return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s).';
}
console.log(formatTime(120));