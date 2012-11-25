<?php
    // get the data from the form
    $investment = $_GET['investment'];
    $interest_rate = $_GET['interest_rate'];
    $years = $_GET['years'];

    // validate investment entry
    if ( empty($investment) ) {
        $error_message = 'Investment is a required field.'; }
    else if ( !is_numeric($investment) )  {
        $error_message = 'Investment must be a valid number.'; }
    else if ( $investment <= 0 ) {
        $error_message = 'Investment must be greater than zero.'; }

    // validate interest rate entry
    else if ( empty($interest_rate) ) {
        $error_message = 'Interest rate is a required field.'; }
    else if ( !is_numeric($interest_rate) )  {
        $error_message = 'Interest rate must be a valid number.'; }
    else if ( $interest_rate <= 0 ) {
        $error_message = 'Interest rate must be greater than zero.'; }
    else if ( $interest_rate > 15 ) {
       	$error_message = 'Interest rate must be less than or equal to fifteen.';
        }
        
    // validate years entry
        else if ( empty($years) ) {
        	$error_message = 'Years is a required field.';
        }
        else if ( !is_numeric($years) )  {
        	$error_message = 'Years must be a valid number.';
        }
        else if ( $years <= 0 ) {
        	$error_message = 'Years must be greater than zero.';
        }
        else if ( $years >= 50 ) {
        	$error_message = 'Years must be less than fifty.';
        }
        
        
    // set error message to empty string if no invalid entries
    else {
        $error_message = ''; }

    // if an error message exists, go to the index page
    if ($error_message != '') {
        include('index.php');
        exit();
    }

    // calculate the future value
    $future_value = $investment;
    for ($i = 1; $i <= $years; $i++) {
        $future_value = ($future_value + ($future_value * $interest_rate *.01));
    }
    // apply currency and percent formatting
    $investment_f = '$'.number_format($investment, 2);
    $yearly_rate_f = $interest_rate.'%';
    $future_value_f = '$'.number_format($future_value, 2);

    // Compse Date statement
    $date = date('m/d/Y');
    $calculation_date = 'This calculation was done on '.$date .'.'
    
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>Future Value Calculator</title>
    <link rel="stylesheet" type="text/css" href="main.css"/>
</head>
<body>
    <div id="content">
        <h1>Future Value Calculator</h1>

        <label>Investment Amount:</label>
        <output><?php echo $investment_f; ?></output><br />

        <label>Yearly Interest Rate:</label>
        <output><?php echo $yearly_rate_f; ?></output><br />

        <label>Number of Years:</label>
        <output><?php echo $years; ?></output><br />

        <label>Future Value:</label>
        <output><?php echo $future_value_f; ?></output><br />
        <br />
        <output><?php echo $calculation_date; ?></output><br />
    </div>
</body>
</html>