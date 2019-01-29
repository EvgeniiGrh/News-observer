const express        = require('express');
let path = require('path');
const bodyParser     = require('body-parser');
let logger = require('./src/js/logger');

const app = express();

const port = 8000;

app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
	logger.info(`Url: ${req.url}, Date: ${(new Date()).toLocaleTimeString()}`);
	next();
});


app.listen(port, () => {
  console.log('We are live on ' + port);
});

app.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/articles', require('./routes/routes'));

app.use('/users', require('./routes/usersRoutes'));

app.use((req, res, next) => {
  res.render('error', { message: 'Sorry, but something went wrong!' });
});