function isInteger(arg){
	if(Math.abs(arg)%1>0){
		return false;
	}
	return true;
}
console.log(isInteger(5));