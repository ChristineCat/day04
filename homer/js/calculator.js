function calculate() {

// GET INPUT FROM USER
	
// Declare variable
var $list_price;

// assign a value that is to get a reference to user input using document object method
$list_price = document.getElementById('list_price');
$list_price = $list_price.valueAsNumber;

// get a number value inputted using number object method
$list_price = $list_price.valueAsNumber;
			
// declare variable, assign a value that is to get a reference to user input using document object method, 
// and get a number value inputted using number object method
var $discount_percent = document.getElementById('discount_percent').valueAsNumber;

// CALCULATE DISCOUNT AMOUNT AND DISCOUNT PRICE

var $discount
$discount = $list_price * $discount_percent * .01;
var $discount_price = $list_price - $discount;

// SET OUTPUT IN CURRENCY FORMAT (sort of)

// convert a number value to a string value keeping 2 decimal places
$discount = $discount.toFixed(2);

// concatenate $ to string variable
$discount = '$'+$discount;

// declare temporary variable for returning output
var tempVar;

// set reference to output using document object method
tempVar = discount.getElementById('discount');

// set string value output using string object method
tempVar.value = $discount;

// convert a number value to a string value, keeping 2 decimal places and concatenate $ to string variable
// Set reference to output using document object method and set string value output using string object method.
$discount_price = '$'+discount_price.toFixed(2):
document.getElementById('discount').value = $discount_price;

} // end calculate
	