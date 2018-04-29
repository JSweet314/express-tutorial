const express = require('express');
const path = require('path');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL: ', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime: ', new Date(Date.now()).toString());
  next();
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'));
app.use('/sunsets', express.static(path.join(__dirname, 'sunsets')));

app.get('/json', (request, response) => {
  response.status(200).json({"name": "Jon"});
});

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});