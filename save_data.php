<?php
$data = $_POST['data']; // Получаем данные из запроса

// Путь к файлу для сохранения данных
$file_path = 'data.txt';

// Открываем файл для записи (флаг 'a' означает, что данные будут добавлены в конец файла)
$file = fopen($file_path, 'a');

// Записываем данные в файл
fwrite($file, $data . PHP_EOL);

// Закрываем файл
fclose($file);
?>
