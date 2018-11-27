export default function errorFactory(placeholderForNews) {
  const errorMessage = document.createElement('h3');
  errorMessage.innerText = 'Ooops, invalid request...';
  errorMessage.classList.add('error-message');
  placeholderForNews.appendChild(errorMessage);
}