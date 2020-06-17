const nconf = require('nconf');
const path = require('path');

nconf.argv() // прочитати конфігурацію з командної стрічки
    .env() // прочитати конфігурацію з змінних оточення
    .file({file: path.join(__dirname, 'config.json')}); // прочитати конфігурацію з файлу

module.exports = nconf;
