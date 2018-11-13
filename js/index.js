const apiKey = '1fb0b9f3544e4bc98a84f5abc494eb71';

const placeholderForNews = document.querySelector('#placeholder');
const form = document.querySelector('#form');

form.addEventListener('submit', getSetOfNews);

function getSetOfNews() {
  event.preventDefault();
  placeholderForNews.innerHTML = '';

  const channelToFind = this[0].value.trim().toLowerCase();

  fetch(`https://newsapi.org/v2/top-headlines?sources=${channelToFind}&apiKey=${apiKey}`)
  .then(response => response.json())
  .then((response) => {
    response.articles.forEach((article) => {
      newsCardFactory(article);
    });
  })
  .catch(() => {
    errorFactory();
  });
}

function newsCardFactory(newsItem) {
  const { urlToImage, title, url, description } = newsItem;
  const cardContainer = document.createElement('div');
  cardContainer.classList.add('card-item');

  const image = document.createElement('img');
  image.src = urlToImage;
  image.classList.add('card-image');

  const cardlink = document.createElement('a');
  cardlink.innerText = 'Read more...';
  cardlink.href = url;
  cardlink.classList.add('card-link');

  const newsTitle = document.createElement('h3');
  newsTitle.innerText = title;
  newsTitle.classList.add('card-title');

  const newsArticle = document.createElement('article');
  newsArticle.innerText = description;
  newsArticle.classList.add('card-article');

  cardContainer.appendChild(image);
  cardContainer.appendChild(newsTitle);
  cardContainer.appendChild(newsArticle);
  cardContainer.appendChild(cardlink);

  placeholderForNews.appendChild(cardContainer);
}

function errorFactory() {
  const errorMessage = document.createElement('h3');
  errorMessage.innerText = 'Ooops, invalid request...';
  errorMessage.classList.add('error-message');
  placeholderForNews.appendChild(errorMessage);
}