let argument =[];
for (let i=0; i<3; i++){
	argument[i] = Number(prompt(1+i + ' argument ='));
	if(isNaN(argument[i])){
		alert('Invalid input data');
		break;
	}
}
let discriminant = argument[1]*argument[1] - 4*argument[0]*argument[2];
if (discriminant>0){
	let x1 = ((-1)*argument[1]+Math.sqrt(discriminant))/(2*argument[0]);
	let x2 = ((-1)*argument[1]-Math.sqrt(discriminant))/(2*argument[0]);
	alert('x1 = ' + x1 + ' and x2 = ' + x2);
}else if(discriminant===0){
	let x = (-argument[1])/(2*argument[0]);
	alert('x = ' + x);
}else{
	alert('no solution');
}