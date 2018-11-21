function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var apiKey = '1fb0b9f3544e4bc98a84f5abc494eb71';
var placeholderForNews = document.querySelector('#placeholder');
var form = document.querySelector('#form');
form.addEventListener('submit', searchSetOfNews);

function searchSetOfNews() {
  return _searchSetOfNews.apply(this, arguments);
}

function _searchSetOfNews() {
  _searchSetOfNews = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var channelToFind, articles;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            placeholderForNews.innerHTML = '';
            channelToFind = this[0].value.trim().toLowerCase();
            _context.next = 5;
            return getSetOfNewsFromApi(channelToFind);

          case 5:
            articles = _context.sent;

            if (articles) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", errorFactory());

          case 8:
            articles.forEach(function (article) {
              return newsCardFactory(article);
            });

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _searchSetOfNews.apply(this, arguments);
}

function getSetOfNewsFromApi(_x) {
  return _getSetOfNewsFromApi.apply(this, arguments);
}

function _getSetOfNewsFromApi() {
  _getSetOfNewsFromApi = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(channelToFind) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", fetch("https://newsapi.org/v2/top-headlines?sources=".concat(channelToFind, "&apiKey=").concat(apiKey)).then(function (response) {
              return response.json();
            }).then(function (response) {
              return response.articles;
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _getSetOfNewsFromApi.apply(this, arguments);
}

function newsCardFactory(newsItem) {
  var urlToImage = newsItem.urlToImage,
      title = newsItem.title,
      url = newsItem.url,
      description = newsItem.description;
  var cardContainer = document.createElement('div');
  cardContainer.classList.add('card-item');
  var image = document.createElement('img');
  image.src = urlToImage;
  image.classList.add('card-image');
  var cardlink = document.createElement('a');
  cardlink.innerText = 'Read more...';
  cardlink.href = url;
  cardlink.classList.add('card-link');
  var newsTitle = document.createElement('h3');
  newsTitle.innerText = title;
  newsTitle.classList.add('card-title');
  var newsArticle = document.createElement('article');
  newsArticle.innerText = description;
  newsArticle.classList.add('card-article');
  cardContainer.appendChild(image);
  cardContainer.appendChild(newsTitle);
  cardContainer.appendChild(newsArticle);
  cardContainer.appendChild(cardlink);
  placeholderForNews.appendChild(cardContainer);
}

function errorFactory() {
  var errorMessage = document.createElement('h3');
  errorMessage.innerText = 'Ooops, invalid request...';
  errorMessage.classList.add('error-message');
  placeholderForNews.appendChild(errorMessage);
}
