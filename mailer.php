<?php
/* Set e-mail recipient */
$myemail = "josh@joshuasisley.com";
/* Check all form inputs using check_input function */
$name = $_POST['inputName'];
$email = $_POST['inputEmail'];
$message = $_POST['inputMessage'];
/* Let's prepare the message for the e-mail */
$message = "
Someone has sent you a message using your contact form:
Name: $name
Email: $email
Message:
$message
";
/* Send the message using mail() function */
mail($myemail, $subject, $message);
/* Redirect visitor to the thank you page */
header('Location: index.html');
exit();
/* Functions we used */
function check_input($data, $problem='')
{
$data = trim($data);
$data = stripslashes($data);
$data = htmlspecialchars($data);
if ($problem && strlen($data) == 0)
{
show_error($problem);
}
return $data;
}
function show_error($myError)
{
?>
<html>
<body>

<p>Please correct the following error:</p>
<strong><?php echo $myError; ?></strong>
<p>Hit the back button and try again</p>

</body>
</html>
<?php
exit();
}
?>