<?php
	// Day 6 Homework
	// Write a short program to print a multiplication table
	// My assumption is that I need to cover integers from 1 to 10
	// The user will in put a number from 1 to 10 and the program will generate the times table for that number

	// $i and $j are the variables I will use for my multiplication table
	
	// Get the user data from the form
	
	$multiplier = $_POST["multiplier"];
	$break="</br>";	
	if($multiplier<1){
		print "Please pick a number from 1 to 10";
		break;
	}
	elseif($multiplier>10){
		print "Please pick a number from 1 to 10";
		break;
	}
?>


<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8" />
	<title>Multiplication Table</title>
	<link rel="stylesheet" href="css/main_multiply.css" />
	<link rel="stylesheet" href="css/formstyle_multiply.css" />
</head>
	
<body>
	<header>
			<h1>Learning My Multiplication Tables</h1>

		<section id="container">

	<div id="content">
	<h1>Here is the Multiplication Table for the Number <?php echo $multiplier; ?></h1>

<?php 		
	if ($multiplier<1) {print "Please pick a number from 1 to 10";
	break;
	}
	
	elseif ($multiplier>10) {
		print "Please pick a number from 1 to 10";
		break;
	}
	else {
				
					for ($j=1; $j<=10; $j=$j+1){
					$answer=$multiplier*$j;
					print $multiplier;
					print " x ";
					print $j;
					print " = ";
					print $answer;
					print $break;
					}
	}

?>

			<h1>I am studying very hard!</h1>
	
	   </div>
	  
	</body>
</html>







































