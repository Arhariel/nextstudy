const fs = require('fs').promises;

async function processFiles() {
  try {
    const data1 = await fs.readFile('file1.txt', 'utf8');
    const data2 = await fs.readFile('file2.txt', 'utf8');
    await fs.writeFile('result.txt', data1 + data2);
    console.log('Готово! Файл result.txt создан.');
  } catch (err) {
    console.error('Ошибка:', err);
  }
}

processFiles();
