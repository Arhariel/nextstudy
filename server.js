require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

app.get('/', (req, res) => {
  res.send('API работает!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));


// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('Hello World!');
//   } else {
//     res.writeHead(404);
//     res.end('Page not found');
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Запуск на 3к сервере http://localhost:${PORT}/`);
// });
