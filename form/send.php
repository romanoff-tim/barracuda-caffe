<?php

// получим данные с элементов формы

$login = $_POST['login'];
$pass = $_POST['pass'];
$email = $_POST['email'];
$tel = $_POST['tel'];

// обработаем полученные данные

$login = htmlspecialchars($login); // преобразование символов в сущности (мнемоники)
$pass = htmlspecialchars($pass);
$email = htmlspecialchars($email);
$tel = htmlspecialchars($tel);

$login = urldecode($login); // декодирование URL
$pass = urldecode($pass);
$email = urldecode($email);
$tel = urldecode($tel);

$login = trim($login); // удалениепробельных символов с обеих сторон
$pass = trim($pass);
$email = trim($email);
$tel = trim($tel);

// отправляем данные на почту 

if(mail("barracuda-caffe@mail.ru",
        "Новое письмо с сайта",
        "Логин: ".$login."\n".
        "Пароль: ".$pass."\n".
        "Email: ".$email."\n".
        "Телефон: ".$tel,
        "From: no-reply@mydomain.ru \r\n")

) {
    echo ('Письмо успешно отправленно!');
}
else {
    echo ('Есть ошибки! Пожалуйста проверьте данные...');
}

?>