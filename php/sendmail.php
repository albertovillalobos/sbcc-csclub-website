<?php
	$input = json_encode($_POST);	
	$input = json_decode($input);
	$emailString = "";
	$emailString .= "Someone just signed up for our mailing list (add them to gmail)".$input->email;
	// $emailString .= "Someone just signed up for our mailing list (add them to gmail)".$input->name;
	// 
	// echo json_encode($_POST);

	$url = 'https://api.sendgrid.com/';
	$user = 'avillalobos';
	$pass = '12kee34go';


	$params = array(
	    'api_user'  => $user,
	    'api_key'   => $pass,
	    'to'        => 'annie.neuner@gmail.com',
	    'subject'   => 'New Member!',
	    'html'      => $emailString,
	    'text'      => '',
	    'from'      => "alberto@albertovillalobos.me",
	  );

	$request =  $url.'api/mail.send.json';

	// Generate curl request
	$session = curl_init($request);
	// Tell curl to use HTTP POST
	curl_setopt ($session, CURLOPT_POST, true);
	// Tell curl that this is the body of the POST
	curl_setopt ($session, CURLOPT_POSTFIELDS, $params);
	// Tell curl not to return headers, but do return the response
	curl_setopt($session, CURLOPT_HEADER, false);
	curl_setopt($session, CURLOPT_RETURNTRANSFER, true);

	// obtain response
	$response = curl_exec($session);
	curl_close($session);

	// print everything out
	print_r($response);


	// 12kee34go
?>