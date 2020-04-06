<?php
$tel = $_POST['tel'];
$tel = htmlspecialchars($tel);
$tel = urldecode($tel);
$tel = trim($tel);

$name = $_POST['name'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);
//echo $tel;
//echo "<br>";
//echo $email;
if (mail("timur53shakirov@mail.ru", "Заявка с сайта", $name." ждёт звонка " ."на номер: ".$tel,"From: accounting-website@timshaq.github.io \r\n"))
 {     echo "ok";
} else {
    echo "fail";
}?>
