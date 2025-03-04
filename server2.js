const http = require('http');
const { readFileAsync, reverseTextPromise, processFiles } = require('./fileswork');

readFileAsync('file2.txt', (err, data) => {
  if (err) console.error(err);
  else console.log('UPPERCASE:', data);
});

reverseTextPromise('file1.txt')
  .then((data) => console.log('REVERSED:', data))
  .catch(console.error);

processFiles().then((data) => console.log('MERGED FILES:', data));

const server = http.createServer((req, res) => {
  if (req.url === '/hello' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (req.url === '/time' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Сейчас: ${new Date().toLocaleString()}`);
  } else if (req.url === '/check-age' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        const data = JSON.parse(body);
        if (!data.age || typeof data.age !== 'number') {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Ошибка: age должен быть числом!');
        } else if (data.age < 18) {
          res.writeHead(400, { 'Content-Type': 'text/plain' });
          res.end('Ошибка: Вам нет 18 лет!');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end('Возраст подтверждён!');
        }
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        res.end('Ошибка: Некорректный JSON!');
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Страница не найдена');
  }
});

const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});