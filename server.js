const express        = require('express');
const path = require('path');
const bodyParser     = require('body-parser');
const logger = require('./src/js/logger');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const User = require('./models/User');

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
app.use(passport.initialize());
app.use(passport.session());

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));


passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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