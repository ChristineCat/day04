function calculate() {

// get input from user

var $list_price;  //Step 1: Declare variable
$list_price = document.getElementById('list_price'); //Step 2: Assign value to get reference to user input using documnt object method
$list_price=$list_price.valueAsNumber;  //Step 3: Get number value inputted using number object method



var $discount_percent =
	document.getElementById('discount_percent').valueAsNumber;
	$discount_percent=$discount_percent.valueAsNumber;
// calculate discount amount and discount price
	
var $discount = $list_price * $discount_percent * 0.01;
var $discount_price = $list_price - $discount;



// set output in currency format (sort of)
/*
$discount = $discount.toFixed(2); // Step 1: convert number value to string value keeping 2 decimal places
$discount = '$'+$discount; //Step 2: Concatenate $ to string variable
var tempVar;
tempVar = document.getElementById ('discount'); //Step 4: set string value output using string object method
tempVar.value = $discount //Step 5: set string value output using string object method
*/

$discount_price = '$'+$discount_price.toFixed(2);
document.getElementById('discount').value = $discount_price;

} // end calculate
	