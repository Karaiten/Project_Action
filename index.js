const express = require('express'); // Підключення бібліотеки Express
const app = express(); // Створення додатку Express

app.get('/', (req, res) => { // Налаштування маршруту для GET-запиту на головну сторінку
  res.send('Hello World!'); // Відповідь на запит "Hello World!"
});

const port = process.env.PORT || 3000; // Встановлення порту: змінна середовища PORT або 3000 за замовчуванням
app.listen(port, () => { // Запуск сервера на заданому порту
  console.log(`App listening at http://localhost:${port}`); // Виведення повідомлення про роботу сервера
});
