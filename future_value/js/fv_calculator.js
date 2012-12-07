function calculate() {
	
// create helper function
	var $ = function(id){
		return document.getElementById(id);
	};
	
// get input from user - first three text boxes
	var investment=$('investment').valueAsNumber;
	var interest_rate=$('interest_rate').valueAsNumber;
	var years=$('years').valueAsNumber;

	investment = parseFloat(investment); // convert to floating point numerical value
	interest_rate = parseFloat(interest_rate); // convert to floating point numerical value
	years = parseFloat(years); // convert to floating point numerical value
	
// validate input - investment
	if (isNaN(investment)) {
		alert("Investment must be a valid number.");
	} else if (investment <= 0 ) {
		alert("Investment must be greater than zero."); 
	} else if (isNaN(interest_rate)) {
		alert("Annual interest rate must be a valid number."); 
	} else if (interest_rate <= 0) {
		alert("interest_rate must be greater than zero,");
	} else if (interest_rate >15) {
		alert("interest_rate cannot be greater than 15");
	} else if (isNaN(years)){
		alert("Year must be a valid number");
	} else if(years > 50) {
		alert("cannot exceed 50 years");
	} else {

		
// calculate the future value
    var future_value = investment;
    for (var i = 1; i <= years; i++) {
        future_value = (future_value + (future_value * interest_rate *.01));
    }		
	
// return output rounded to 2 decimal places
    $('future_value').value = future_value.toFixed(2);
	} 
} // end calculate