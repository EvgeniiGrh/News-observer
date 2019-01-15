let express = require('express');
let router = express.Router();

let articlesArray = [
	{
		id: '1',
    name: 'News1',
    message: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	},
	{
		id: '2',
    name: 'News2',
    message: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
	}
];

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

module.exports = router;