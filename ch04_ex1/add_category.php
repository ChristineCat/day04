<?php
// Get the user input
$category_id = $_POST['category_id'];
$name = $_POST['name'];

// Validate user input
if (empty($name)) {
    $error = "A category ID and Category Name are required.";
    include('error.php');
} else {
    // If valid, add the product to the database
    require_once('database.php');
    $query = "INSERT INTO categories (categoryName)
              VALUES ('$name')";
    $db->exec($query);

    // Display Category List page
    include('category_list.php');
}
?>