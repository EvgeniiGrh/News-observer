import { methods, status } from './constants.js';
import { handler } from './proxy/proxyHandler.js';

export default async function getSetOfNewsFromApi(channelToFind, apiKey) {
  const proxy = new Proxy({ type: methods.GET }, handler);

  return fetch(
    `https://newsapi.org/v2/top-headlines?sources=${channelToFind}&apiKey=${apiKey}`,
    proxy[methods.GET]
  )
    .then(response => response.json())
    .then(response => {
      if (response.status === status.error) {
        throw new Error(response.message);
      }
      return response.articles;
    })
    .catch(error => {
      throw error;
    });
}