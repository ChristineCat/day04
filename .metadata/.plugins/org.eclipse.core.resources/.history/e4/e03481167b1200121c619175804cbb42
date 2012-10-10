<?php
	// Day 5 Homework - Exercise 3
	// Write a short program to display discount and final price for sale item
	// Discount is 10% if the purchase price is $10 or less
	// Discount is 20% if the purchase price is more than $10
	// test for purchases less than $10, exactly $10, and greater than $10
	// I used a "for loop" so I could ensure there were only positive values
	// If there were user input, I would need to validate the purchase price
	// I chose to test by increments of 0.5 so I would have integer and whole number tests
	
	// $ipurchase is the test purchase price
	// $discount is the discount amount
	// $dpercent is the percent of the discount: 10 or 20
	// $finalcost is the cost to the purchaser after the discount
	
	$break="<br>";
	
	for ($ipurchase=9.00; $ipurchase<12.00; $ipurchase=$ipurchase+0.5){
		
		if ($ipurchase<=10){
				$discount=$ipurchase*0.10;
				$dpercent=10;
		} else {
				$discount=$ipurchase*0.20;
				$dpercent=20;
		}
				
		$finalcost=$ipurchase-$discount;
		
		print "If your total purchase price is $";
		
	// referred to page 285 of Murach's PHP and MySQL book for printf syntax
	
		printf ("%.2f", $ipurchase);
		print ", you get a discount of ";
		print $dpercent."%";
		print $break;
		
		print "Your discount would be $";
		printf ("%.2f", $discount);
		print $break;
		
		print "And your final price would be $";
		printf ("%.2f", $finalcost);
		print $break;
		print $break;
	}
	
?>










































