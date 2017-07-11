<?php

$recepient = "the.victor@bk.ru";
$sitename = "transferservice.ru";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["e-mail"]);
$message = "Имя: $name \nТелефон: $phone \nE-mail: $text";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");