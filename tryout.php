<?php 
// $_REQUEST - the data that is coming from the form, through AJAX 
$params = $_REQUEST; 
// Do something with the parameters, probably you would like to save them in your database 
if (everything_went_ok) echo "Everything is ok. Your submission was saved"; 
else (something_went_wrong) echo "There was a problem. Your submission could not be saved"; 
?>