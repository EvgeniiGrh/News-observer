export default function newsCardFactory(newsItem, placeholderForNews) {
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