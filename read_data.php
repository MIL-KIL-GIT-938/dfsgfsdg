<?php
$file_path = 'data.txt';

// Проверяем, существует ли файл
if (file_exists($file_path)) {
    // Читаем содержимое файла в переменную
    $data = file_get_contents($file_path);

    // Выводим данные
    echo "<h2>Сохраненные данные:</h2>" . nl2br($data);
} else {
    echo "<h2>Нет сохраненных данных</h2>";
}
?>
