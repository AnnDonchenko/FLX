function reverseNumber(number){
	let n = Math.abs(number);
	let str = number<0 ? '-' : '';
	while(n!==0){
		str = str + n%10;
		n = Math.floor(n/10);
	}
	return Number(str);
}
console.log(reverseNumber(-456));