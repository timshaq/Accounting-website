<?php

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";
$headers .= "From: noreply@accounting-website.ru\r\n";


$tel = $_POST['tel'];
$tel = htmlspecialchars($tel);
$tel = urldecode($tel);
$tel = trim($tel);

$name = $_POST['name'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);

$to          = "timur53shakirov@mail.ru";
$subject     = "Заявка с сайта";
$text        = $name;
$text       .= " ждёт звонка на номер ";
$text       .= $tel;


$sendToMail  = mail($to,$subject,$text,$headers);

if ($sendToMail) {
  echo "ok";
}

?>
