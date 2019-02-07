let log = prompt('your login:');
let message = '';
if(log==='' || log===null){
	message='Canceled.';
}else{
	if(log.length<4){
		message='I don\'t know any users having name length less than 4 symbols';
	}else{
		if (log==='User' || log==='Admin'){
			let pass = prompt('your password:');
			message=checkPassword (log, pass);
		}else{
			message='I don’t know you';
		}
	}
}
alert(message);

function checkPassword (userName, passWord){
	if(passWord==='' || passWord===null){
		return 'Canceled.';
	}else{
		switch (passWord){
			case 'UserPass' : if (userName==='User'){
				return checkHours (userName); 
			}
				break;
			case 'RootPass' : if (userName==='Admin'){
				return checkHours (userName); 	
			}
				break;
			default: return 'Wrong password';
		}
			
	}
}
function checkHours (userName){
	let hours = new Date().getHours();
	return (hours<20 ? ('Good day!, dear ' + userName) : ('Good evening!, dear ' + userName));
}