	//Create helper function
	var $ = function (id) {
	    return document.getElementById(id);
	}

	function calculate() {

	    // Get input from user
	    var listPrice = $('list_price').valueAsNumber;
	      var customerType = $("type").value;

	    // call calcuate discount percent function
	       var discountPercent = discPercCalc (listPrice, customerType);    //new

	    // call calculate discount amount function
	    var discount = discAmountCalc (listPrice, discountPercent);

	    // call calculate discount price function
	    var discountPrice = discPriceCalc (listPrice, discount);

	    // Set output in currency format sort of
	    $('discount_percent').valueAsNumber = discountPercent;

	    discount = '$'+discount.toFixed(2);
	    $('discount').value = discount;

	    discountPrice = '$'+discountPrice.toFixed(2);
	    $('discount_price').value = discountPrice;
	}

	// calculate discount percent
	function discPercCalc (listPrice, customerType) {
	       if (customerType == "R")         {
	               if (listPrice < 100)
	                discountPercent = 0;
	            else if (listPrice >= 100 && listPrice < 250)
	                discountPercent = 10;
	            else if (listPrice >= 250)
	                discountPercent = 25;
	        } else if (customerType == "C") {
	                if (listPrice < 250)
	                discountPercent = 20;
	            else
	                discountPercent = 30;
	            };
	      discountPercent = parseFloat(discountPercent);
	    return discountPercent;
	}
	// calculate discount amount
	function discAmountCalc (listPrice, discountPercent) {
	       var discAmount = listPrice * discountPercent * .01;
	       return discAmount;
	}
	// calcuate discount price
	function discPriceCalc (listPrice, discount) {
	       var discPrice = listPrice - discount;
	       return discPrice;
	}

	function getToday () {
	// Create new date
	var currentDate = new Date();

	    // Get today month, day, year values
	    var month = currentDate.getMonth() + 1;
	    var day = currentDate.getDate();
	    var year = currentDate.getFullYear();

	    // Set date formats
	    month = (month < 10) ? "0" + month : month;
	    day = (day < 10) ? "0" + day : day;

	    // return date output
	    var dateString = "Today is " + month + "/" + day + "/" + year;
	    document.writeln(dateString);