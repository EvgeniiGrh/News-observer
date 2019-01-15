const express        = require('express');
let path = require('path');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/articles', require('./routes/routes'));
