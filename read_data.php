<?php
$file_path = 'data.txt';

// Проверяем, существует ли файл
if (file_exists($file_path)) {
    // Читаем содержимое файла в массив построчно
    $data = file($file_path, FILE_IGNORE_NEW_LINES);

    // Выводим данные на страницу
    foreach ($data as $line) {
        echo $line . "<br>";
    }
} else {
    echo "Файл не найден.";
}
?>
