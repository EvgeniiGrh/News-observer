let express = require('express');
let router = express.Router();
let fs = require('fs');

let data = fs.readFileSync('./src/articles.json', 'utf8');
let articlesArray = JSON.parse(data);

router.get('/', function(req, res) {
	res.render('articles', { articles: articlesArray});
});


router.get('/:id', function(req, res, next) {
	let id = req.params.id,
  article = articlesArray.find(el => el.id === id);

	if (article) {
		res.render('article', {article: article});
	} else {
		next();
	}
});

router.delete('/:id', function(req, res, next) {
	articlesArray = articlesArray.filter(el => el.id !== req.params.id);
	fs.writeFileSync('./src/articles.json', JSON.stringify(articlesArray));
	res.redirect('/articles');
});

router.put('/:id', function(req, res, next) {
	articlesArray.push(req.body);
	fs.writeFileSync('./src/articles.json', JSON.stringify(articlesArray));
	res.end('/');
});

module.exports = router;