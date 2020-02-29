<?php
header("Access-Control-Allow-Origin: *");

// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;


// Load Composer's autoloader
require '../vendor/autoload.php';

require '../vendor/PHPMailer/phpmailer/src/PHPMailer.php';
require '../vendor/PHPMailer/phpmailer/src/Exception.php';
require '../vendor/PHPMailer/phpmailer/src/SMTP.php';

require_once($_SERVER['DOCUMENT_ROOT'] . '/valid/config.php');
require_once($_SERVER['DOCUMENT_ROOT'] . '/valid/valid.php');


if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['recaptcha_response'])) {
    // Build POST request
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_secret = '6LcheNsUAAAAABzVbRaSSIztHr3GQB2ynVqNjVC_';
    $recaptcha_response = $_POST['recaptcha_response'];

    // Make and decode POST request
    $recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);

    $recaptcha = json_decode($recaptcha);

    // Take action based on the score returned
    if ($recaptcha->success) {
        try {
            if(defined('HOST') && HOST != '') {
                $mail = new PHPMailer;
                $mail->isSMTP();
                $mail->Host = HOST;
                $mail->SMTPAuth = true;
                $mail->Username = LOGIN;
                $mail->Password = PASS;
                $mail->SMTPSecure = 'ssl';
                $mail->Port = PORT;
                $mail->AddReplyTo(SENDER);
            } else {
                $mail = new PHPMailer;
            }

            $mail->setFrom(SENDER);
            $mail->addAddress(CATCHER);
            $mail->CharSet = CHARSET;
            $mail->isHTML(true);
            $mail->Subject = SUBJECT;

            $mail->Body = "$name $tel $email $text $agreement";

            if(!$mail->send()) {

            } else {
                echo json_encode($msgs);
            }

        } catch (Exception $e) {


        }
    } else {
        echo json_decode('Not verified - show form error');
    }

} else{
    header ("Location: /"); // главная страница вашего лендинга
}