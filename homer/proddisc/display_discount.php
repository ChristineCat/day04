<?php
	// Declare and initiate variables (optional)


	// Get the user data from the form
	$product_description = $_POST[product_description];
	$list_price = $_POST["list_price"];
	$discount_percent = $_POST["discount_percent"];

	// Calculate the discount
	$discount = $list_price * $discount_percent*0.01;
	$discount_price = $list_price - $discount;
	
	// apply currency formatting
	$list_price_formatted = "$".number_format($list_price, 2);
	$discount_percent_formatted = $discount_percent."%";
	$discount_formatted = "$".number_format($discount, 2);
	$discount_price_formatted = "$".number_format($discount_price, 2);
	
	// Output the results
?>



<!DOCTYPE html >
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Homer's Online Music Shop</title>
	<link rel="shortcut icon" href="../images/homer.ico" />
	<link rel="stylesheet" href="../css/main.css" />
	<link rel="stylesheet" href="../css/nav.css" />
	
	<style>
		/* Layout */
		form {
			width: 450px;
			margin: 0 auto;
			padding: 15px;
			}
			
		label {
			width: 10em;
			padding-ight:1em;
			float: left;
		}
	
		#data input {
			float: left;
			width: 15em;
			margin-bottom: .5em;
		}
	
		#buttons input {
			float: left;
			margin-bottom: .5em;
		}
	
		br {
			clear: left;
		}
	
		#content {
			text-align: left;
		}
	
		/* Presentation */
		form {
			border: 2px solid navy;
		}
	
		#content {
			color: navy;
		}
	
	</style>
</head>

<body>

	<header>
		<img src="../images/Homer_Rock_and_Roll.jpg" alt="Homer" width="100" height="100">
		<hgroup>
			<h1>Homer's Music Store</h1>
			<h2>Rock On!</h2>
		</hgroup>
		
		<nav>
			<ul id="main">
				<li><a href="../index.html">Home</a></li>
				<li><a href="../multimedia_column.html">Layout</a>
					<ul>
						<li><a href="../two_column_left.html">2 Column Float Left</a></li>
						<li><a href="../two_column_right.html">2 Column Float Right</a></li>
						<li><a href="../three_column.html">3 Column Float</a></li>
					</ul>
					</li>
				<li><a href="../table.html">Tables</a></li>
				<li><a href="../images.html">Graphics</a></li>
				<li><a href="../video.html">Multimedia</a></li>
				<li><a href="../email_form.html">Forms</a></li>
				<li><a href="../product.php">Products</a></li>
				<li><a href="../geolocation.html">Stuff</a></li>
			</ul>
		</nav>
		
	</header>

<section id="container">

    <div id="content">
        <h1>This page is under construction</h1>

        <label>Product Description:</label>
        <span><?php echo $product_description; ?></span><br />

        <label>List Price:</label>
        <span><?php echo $list_price_formatted; ?></span><br />

        <label>Standard Discount:</label>
        <span><?php echo $discount_percent_formatted; ?></span><br />

        <label>Discount Amount:</label>
        <span><?php echo $discount_formatted; ?></span><br />

        <label>Discounted Price:</label>
        <span><?php echo $discount_price_formatted; ?></span><br />

        <p>&nbsp;</p>
    </div>
    </section>
</body>
</html>