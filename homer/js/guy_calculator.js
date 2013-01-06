// Create function binding nested functions to page loading event
$(document).ready(function() {
   // Bind Click Event Listener function to element id
   $('#calculate').click(function() {
       // Get input from user
       var listPrice = $('#list_price').val();
       var discountPercent = $('#discount_percent').val();

       // Calcuate discount amount and discount price
       var discount = listPrice * discountPercent * .01;
       var discountPrice = listPrice - discount;
       alert(discount);
       alert(discountPrice);
       // Set output in currency format for real
       $('#discount').val(discount).formatCurrency();
       
       $('#discount_price').val(discountPrice).formatCurrency();
       //alert("Discount = " + discount + ", Discount Price = " + discountPrice);
   });  //End bind to event listener
}); // end bind to page load