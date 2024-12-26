// Загружаем модуль http
const http = require('http');

// Создаем сервер
const server = http.createServer((req, res) => {
    // Устанавливаем заголовок ответа
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Отправляем текст
    res.end('Hello, World!\n');
});

// Сервер слушает на порту 3000
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
