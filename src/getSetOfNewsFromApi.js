import { methods, status } from './constants.js';
import requestFactory from './requestFactory.js';

export default async function getSetOfNewsFromApi(channelToFind, apiKey) {
  return fetch(`https://newsapi.org/v2/top-headlines?sources=${channelToFind}&apiKey=${apiKey}`, requestFactory(methods.get))
  .then(response => response.json())
  .then((response) => {
    if (response.status === status.error) {
      throw new Error(response.message);
    }
    return response.articles;
  })
  .catch((error) => {
    throw error;
  });
}