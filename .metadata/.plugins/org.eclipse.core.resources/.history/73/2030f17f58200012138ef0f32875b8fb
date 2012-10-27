<?php
	// Day 6 Homework - Exercise 1
	// Write a short program to display discount and final price for sale item
	// Discount is 10% if the purchase price is $10 or less
	// Discount is 20% if the purchase price is more than $10
	// test for purchases less than $10, exactly $10, and greater than $10
	
	// $purchase is the purchase price input by the user
	// $discount is the discount amount
	// $dpercent is the percent of the discount: 10 or 20
	// $finalcost is the cost to the purchaser after the discount
	
	$break="<br>";

	
	// Get the user data from the form
	$purchase_price = $_POST["purchase_price"];
	
	// Make sure the purchase price is valid - that is, it is greater than zero
	
	if ($purchase_price<=0){
		print "You have entered an invalid purchase price - Please try again";
		break;
			
		// Purchase price of $10 dollars or less entitles the customer to a 10% discount
			
	} elseif ($purchase_price<=10){
		$dpercent=10;
	
		// Purchase price over $10 entitles purchaser to a 20% discount
	} else {
		$dpercent=20;
	}
	$discount=$purchase_price*$dpercent/100;
	$finalcost=$purchase_price-$discount;
	
	
	// apply currency formatting
	$purchase_price_formatted = "$".number_format($purchase_price, 2);
	$dpercent_formatted = $dpercent."%";
	$discount_formatted = "$".number_format($discount, 2);
	$finalcost_formatted = "$".number_format($finalcost, 2);

	// Output the results
	
?>

	
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Sale Price Calculator</title>
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="css/formstyle.css" />
</head>
	
<body>
	<header>
		<hgroup>
			<h1>Spend More - Save More</h1>
			<h2>Halloween Sale!</h2>
		</hgroup>

		<section id="container">
		<header id="top">
			<h1>The More You Spend, The More You Save!</h1>
		</header>

	<div id="content">
	<h1>Congratulations! You Saved <?php echo $discount_formatted; ?></h1>
		
	 <label>Purchase Price: </label>
	        <output><?php echo $purchase_price_formatted; ?></output><br />
	
	        <label>Percent Discount: </label>
	        <output><?php echo $dpercent_formatted; ?></output><br />
	
	        <label>Discount Amount: </label>
	        <output><?php echo $discount_formatted; ?></output><br />
	
	        <label>Discounted Price: </label>
	        <output><?php echo $finalcost_formatted; ?></output><br />
	
	        <p>&nbsp;</p>
	   </div>
	</body>
</html>










































