<?php

if($_GET !== null){


    $host = '127.0.0.1';
    $db = 'reg';
    $user = 'root';
    $pass = '';
    $charset = 'utf8';

    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $opt = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ];
    // Получение объекта PDO
    $pdo = new PDO($dsn, $user, $pass, $opt);

    //$result = json_encode($_GET );
    $nickname = htmlspecialchars($_GET['nickname']);
    $password = htmlspecialchars($_GET['password']);

    $stmt = $pdo->prepare("INSERT INTO rebasa (nickname, password) VALUES (?, ?)");
    $stmt->bindParam(1, $nickname);
    $stmt->bindParam(2, $password);
    $stmt->execute();
}else{
    return false;
}

?>
