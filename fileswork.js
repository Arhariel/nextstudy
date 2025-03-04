const fs = require('fs');
const fsp = require('fs').promises;

function readFileAsync(path, callback) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) return callback(err);
    callback(null, data.toUpperCase());
  });
}

function reverseTextPromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data.split('').reverse().join(''));
    });
  });
}

async function processFiles() {
  try {
    const first = await fsp.readFile('file3.txt', 'utf8');
    const second = await fsp.readFile('file4.txt', 'utf8');
    return `${first} ${second}`;
  } catch (err) {
    console.error('Ошибка:', err);
  }
}

module.exports = { readFileAsync, reverseTextPromise, processFiles };
