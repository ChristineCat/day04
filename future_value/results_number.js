// Create main calculate function

function calculate_click () {



   // Get user input from the first three text boxes.

   var investment = document.getElementById('investment').value; //obtain input

   investment = parseFloat(investment); // convert to a floating point numerical value



   var interest_rate = document.getElementById('interest_rate').value;  //obtain input

   interest_rate = parseFloat(interest_rate); // convert to a floating point numerical value



   var years = document.getElementById('years').value;  //obtain input

   years = parseFloat(years); // convert to a floating point numerical value



   //Set the intial value of the fourth text box to be an empty string

   document.getElementById('future_value').value = '';



   // Test the three input values for validity

   if (isNaN(investment)) {

       alert("Investment must be a valid number.");

   } else if(investment <= 0) {

       alert("Investment must be greater than zero.");

   } else if(isNaN(interest_rate)) {

       alert("Annual rate must be a valid number.");

   } else if(interest_rate <= 0) {

       alert("Annual rate must be greater than zero.");

   } else if(isNaN(years)) {

       alert("Years must be a valid number.");

   } else if(years <= 0) {

       alert("Years must be greater than zero.");

   } else {



   //calcuatle future value

   var future_value = investment;



   for ( i = 1; i <= years; i++ ) {

       future_value = ( future_value + ( future_value * interest_rate * .01));

       }



   //return output rounded to 2 decimal places

   document.getElementById('future_value').value = future_value.toFixed(2);

   }

}