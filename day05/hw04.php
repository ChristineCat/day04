<?php
	// Day 5 Homework - Exercise 4
	// Write a short program to print a multiplication table
	// My assumption is that I need to cover integers from 1 to 10
	// My assumption is also that I was not supposed to just do the 5 times table

	// $i and $j are the variables I will use for my multiplication table
	
	$break="<br>";
	
	for ($i=1; $i<=10; $i=$i+1){
		
			print "Here is the ";
			print $i;
			print "'s table:";
			print $break;
			
				for ($j=1; $j<=10; $j=$j+1){
					$answer=$i*$j;
					print $i;
					print " x ";
					print $j;
					print " = ";
					print $answer;
					print $break;
				}
			print $break;
		}
	
?>










































