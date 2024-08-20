<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $firstName = htmlspecialchars(trim($_POST["first_name"]));
    $lastName = htmlspecialchars(trim($_POST["last_name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Basic validation
    if (empty($firstName) || empty($lastName) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        echo "Please fill out all fields correctly.";
        exit;
    }

    // Prepare the email content
    $to = "acarlseen@gmail.com";
    $subject = "Contact Form Submission from $firstName $lastName";
    $body = "First Name: $firstName\nLast Name: $lastName\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you for your message. It has been sent.";
    } else {
        echo "Sorry, there was a problem sending your message. Please try again later.";
    }
} else {
    // Redirect to the form if accessed directly
    header("Location: index.html");
    exit;
}
?>
