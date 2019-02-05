let consoleMessage='Invalid input data';
let price = prompt('Price =');
let discount = prompt('Discount =');
let priceWithDiscount, saved;
if(price>=0 && price<=9999999 && discount>=0 && discount<100){
	priceWithDiscount = price-price*discount/100;	
	priceWithDiscount = !Number.isInteger(priceWithDiscount) ? priceWithDiscount.toFixed(2) : priceWithDiscount;
	saved = price - priceWithDiscount;
	saved = !Number.isInteger(saved) ? saved.toFixed(2) : saved;
	consoleMessage='Price without discount: '+price
		+'\nDiscount: '+discount+'%'
		+'\nPrice with discount: '+priceWithDiscount
		+'\nSaved: '+saved;
}
alert(consoleMessage);