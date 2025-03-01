const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err, data1) => {
  if (err) {
    console.error('Ошибка:', err);
    return;
  }
  fs.readFile('file2.txt', 'utf8', (err, data2) => {
    if (err) {
      console.error('Ошибка:', err);
      return;
    }
    fs.writeFile('result.txt', data1 + data2, (err) => {
      if (err) {
        console.error('Ошибка:', err);
        return;
      }
      console.log('Готово! Файл result.txt создан.');
    });
  });
});
