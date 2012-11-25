function calculate() {
// create helper function
	
var $ = function (id) {
	return document.getElementById(id);
}	

function calculate() {
}
	
// get input from user

var listPrice = $('list_price').valueAsNumber;
var customerType = $('type').value;

// call calculate discount percent function

var discountPercent = discPercCalc(listPrice, customerType);

// call calculate discount amount function

var discount = discAmountCalc(listPrice, discountPercent);

// call calculate discount price function
var discountPrice = discPriceCalc(listrice, discount);

// set output in currency format (sort of)

$('discount_percent').valueAsNumber = discountPercent;

discount = '$'+discount.toFixed(2);
$('discount').value = discount;

discountPrice = '$'+discountPrice.toFixed(2);
$('discountPrice').value = discountPrice;

} // end calculate

// call calculate discount percent function
function discPercCalc (listPrice, customerType) {
	if (customerType == "R") {
		if (listPrice < 100)
				discountPercent = 0;
		else if (listPrice >= 100  && listPrice < 250)
			discountPercent6 = 10;
		else if (listPrice >=250)
			discountPercent - 25;
	
	} else if (customerType == "C") {
		if (listPrice < 250)
			discountPercent = 20;
		else if (listPrice >= 250)
			discountPercent = 30;
	}
}



// var discountPercent = discPercCalc(listPrice, customerType);

// call calculate discount amount function
function discAmountCalc (listPrice, discountPercent) {
	var discAmount = listPrice * discount mPercent * .01;
	return discAmount;
}

// var discount - discAmountCalc(listPrice, discountPercent);

// call calculate discount price function
function discPriceCalc (listPrice, discount) {
	var discPrice = listPrice - discount;
	return discPrice;
}
// var discountPrice = discPriceCalc(listPrice, discount);








	