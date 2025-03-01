const fs = require('fs');

const readFilePromise = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFilePromise('file1.txt')
  .then((data1) => {
    return readFilePromise('file2.txt').then((data2) => {
      return { data1, data2 };
    });
  })
  .then(({ data1, data2 }) => {
    return new Promise((resolve, reject) => {
      fs.writeFile('result.txt', data1 + data2, (err) => {
        if (err) reject(err);
        else resolve('Готово! Файл result.txt создан.');
      });
    });
  })
  .then(console.log)
  .catch((err) => console.error('Ошибка:', err));
