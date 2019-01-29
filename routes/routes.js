const express = require('express');
const router = express.Router();
const fs = require('fs');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/frontcamp', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log('we are connected');
});

const Schema = mongoose.Schema;
const articleScheme = new Schema({
    title: String,
    text: String
});
const articlesModel = mongoose.model('articles', articleScheme);

router.get('/', (req, res) => {
  articlesModel.find({}, (error, articlesArray) => {
      res.render('articles', {articles: articlesArray})
  });
});

router.get('/:id', function(req, res, next) {
	let id = req.params.id;

	articlesModel.findOne({title: id}, (error, article) => {
		res.render('article', { article: article })
	});
});

router.delete('/:id', function(req, res, next) {
	articlesModel.deleteOne({title: req.params.id}, (err, res) => {
		console.log(res);
	});

	res.redirect('/articles');
});

router.put('/:id', function (req, res, next) {
	const Article = mongoose.model("articles", articleScheme);
	const article = new Article({
		title: req.body.title,
		text: req.body.text,
	});
	article.save()

	res.end('/');
});

router.post('/:title', function(req, res, next) {
	articlesModel.update({title: req.body.title}, {
		$set: {'text': req.body.text}
	});

	res.redirect('/articles');
});

module.exports = router;