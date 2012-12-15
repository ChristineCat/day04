// Create function binding nested functions to page loading envent
$(document).ready(function() {
	
// Bind CLick Event Listener function to element id
	$('#calculate').click(function() {
		
		// Get input from user
		var listPrice = $('#list_price').val();
		var discountPercent = $('#discount_percent').val();
		
		
		// Calculate discount amount and discount price
		var discount = listPrice * discountPercent *.01;
		var discountPrice = listPrice - discount;		
		
		// Set output in currency format sort
		discount = '$' + discount.toFixed(2);
		$()'#discount_amount').val(discount);
		discountPrice = '$' + discountPrice.toFixed(2);
		$('#discount_price').val(discountPrice);
		
	}); end bind to event listener
	
}); // end bind to page load





	