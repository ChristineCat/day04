function calculate() {

// get input from user

var listPrice = 
		document.getElementById('list_price').valueAsNumber;
			
var discountPercent = 
		document.getElementById('discount_percent').valueAsNumber;

// calculate discount amount and discount price

var discount = listPrice * discountPercent * .01;
var discountPrice = listPrice - discount;

// set output in currency format (sort of)

discount = '$'+discount.toFixed(2);
document.getElementById('discount').value = discount;

discountPrice = '$'+discountPrice.toFixed(2);
document.getElementById('discountPrice').value = discountPrice;

} // end calculate
	