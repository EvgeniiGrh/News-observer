export default async function getSetOfNewsFromApi(channelToFind, apiKey) {
  return fetch(`https://newsapi.org/v2/top-headlines?sources=${channelToFind}&apiKey=${apiKey}`)
  .then(response => response.json())
  .then((response) => {
    return response.articles;
  });
}