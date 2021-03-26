<?php

$searcharray = array();
parse_str($_POST['data'], $searcharray);
if($searcharray['send'] == 'SEND'){

$to      = 'nguyenminhphuong25111999@gmail.com';
$subject = $searcharray['subject']; 
$message = $searcharray['message']; 
$headers = "From: ".$searcharray['nam‌​e​']." <".$searcharray['em‌​ail‌​'].">\r\n";
$headers .= "Reply-To: ".$searcharray['em‌​ail‌​']."\r\n"; 
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= 'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
}