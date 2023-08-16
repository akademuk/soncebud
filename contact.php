<?php

// define('SITE_KEY', '6LeS8ygmAAAAAHevT7-0kqokA8gd4n8e2pOxYnvI'); /* ключ сайта reCaptcha */
// define('SECRET_KEY', '6LeS8ygmAAAAAEPOT1uc8XGNwLUWAu8Z8Uewjeyg'); /* секретный ключ reCaptcha */
define ("TELEGRAM_TOKEN", "5995280641:AAHDBaUH2b9TLM8tOmVOnsnzv79_8a8rrsk");
define ("TELEGRAM_CHAT_ID", "-1001830660169");
define ("SUBJECT", "Лист з сайту soncebud.space"); /* тема письма */
define ("EMAIL_TO", "akademuk24@gmail.com"); /* куда отправляем */ 


$post = (!empty($_POST)) ? true : false;

if ($post) {
    $name = htmlspecialchars($_POST['name']);
    // $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    $box = htmlspecialchars($_POST['box']);
    $range = htmlspecialchars($_POST['range']);
    $call = $_POST['call'];
    $urlAll = $_POST['url'];
    $error = '';

    /*Создаем функцию которая делает запрос на google сервис*/
    // function getCaptcha($SecretKey)
    // {
    //     $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . SECRET_KEY . "&response={$SecretKey}");
    //     $Return = json_decode($Response);
    //     return $Return;
    // }

    /* Производим запрос на google сервис и записываем ответ */
    // $Return = getCaptcha($_POST['g-recaptcha-response']);
    /*Выводим на экран полученный ответ*/
    //var_dump($Return);

    /*Если запрос удачно отправлен и значение score больше 0,5 выполняем код*/
    // if ($Return->success == true && $Return->score > 0.5) {
    //     $captcha_success = "captchaOk";
    //     //echo $captcha_success;
    // } else {
    //     $captcha_success = "captchaError";
    //     //echo $captcha_success;
    //     $error .= 'ошибка reCaptcha';
    // }


    
	// сообщение, которое будет отправлено в Telegram
	$text = "Новое сообщение с сайта:sun-bud.creation.pp.ua\n\nИмя: $name\nТелефон: $phone\nПотужність станції: $range\nВаш подарунок: $box\nСсылка: $urlAll";


    if (!$error) {
		$to = EMAIL_TO;
		$subject = SUBJECT;
		// текст письма
		$message = '
                <html>
                <head>
                <title>' . SUBJECT . '</title>
                </head>
                <body>
                <table>
                    <tr>
                    <td>Имя</td>
                    <td>' . $name . '</td>
                    </tr>
                    <tr>
                    <td>Тел</td>
                    <td>' . $phone . '</td>
                    </tr>
                    <tr>
                    <td>Потужність станції</td>
                    <td>' . $range . '</td>
                    </tr>
                    <tr>
                    <td>Посилання</td>
                    <td>' . $urlAll . '</td>
                    </tr>
                    <tr>
                    <td>Ваш подарунок:</td>
                    <td>' . $box . '</td>
                    </tr>
                </table>
                </body>
                </html>
                ';
		$headers  = 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

		$mail = mail($to, $subject, $message, $headers);

		// отправляем сообщение в Telegram
		$url = "https://api.telegram.org/bot" . TELEGRAM_TOKEN . "/sendMessage?chat_id=" . TELEGRAM_CHAT_ID . "&text=" . urlencode($text);
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$result = curl_exec($ch);
		curl_close($ch);

		if ($mail) {
			echo 'OK';
		}
	} else {
		echo '<div class="notification_error">' . $error . '</div>';
	}
}
