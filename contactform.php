<?php

if (isset($_POST['submit'])) {
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$companyname = $_POST['companyname'];
	$mailFrom = $_POST['email'];
	$phone = $_POST['phone'];
	$datetime = $_POST['datetime'];
	$guestcount = $_POST['guestcount'];
	$message = $_POST['message'];

	$mailTo = "davealyinovich@gmail.com";
	$headers = "CATERING From: ".$mailFrom;
	$txt = "You have received a catering order from ".$name.".\n\n".$message;

	mail($message, $headers);
	header("Location: index.html?mailsend");	
}