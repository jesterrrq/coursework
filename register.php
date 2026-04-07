<?php
// your_script.php
header('Content-Type: application/json');

// 🔥 Разрешаем CORS для локальной разработки
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nickname = $_POST['nickname'] ?? '';
    $password = $_POST['password'] ?? '';
    
    // 🔐 Здесь должна быть ваша логика (валидация, хеширование, БД)
    
    echo json_encode([
        'success' => true,
        'message' => 'Данные получены',
        'data' => ['nickname' => htmlspecialchars($nickname)]
    ]);
} else {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
}
?>