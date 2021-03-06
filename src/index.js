import 'babel-polyfill';
import 'whatwg-fetch';
import '../styles/reset.css';
import '../styles/style.css';

import newsCardFactory from './newsCardFactory';
import getSetOfNewsFromApi from './getSetOfNewsFromApi';
import jsonFile from '../customLoader/test.json';

const apiKey = '1fb0b9f3544e4bc98a84f5abc494eb71';

const placeholderForNews = document.querySelector('#placeholder');
const form = document.querySelector('#form');

form.addEventListener('submit', searchSetOfNews);

async function searchSetOfNews() {
  event.preventDefault();
  placeholderForNews.innerHTML = '';

  // just for testing JSON loader
  console.log(jsonFile);
  
  const channelToFind = this[0].value.trim().toLowerCase();

  try {
    const articles = await getSetOfNewsFromApi(channelToFind, apiKey);
    articles.forEach(article => newsCardFactory(article, placeholderForNews));
  } 
  catch(error) {
    import('./errorsHandler').then((module) => {
      module.default.generateErrorMessage(placeholderForNews, error);
    });
  }
}

