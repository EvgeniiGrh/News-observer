const articlesList = document.querySelector('.articlesList');
const button = document.querySelector('#button');
const input = document.querySelector('#input');

const updateArticleButton = document.querySelector('.updateArticleButton');
const updateArticleTitle = document.querySelector('.updateArticleTitle');
const updateArticleText = document.querySelector('.updateArticleText');

articlesList.addEventListener('click', e => {
    if (e.target.className != 'deleteArticle') return;

    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/articles/' + e.target.dataset.title);
  
    xhr.onreadystatechange = function () {
          window.location.href = '/articles';
      };
  
    xhr.send();

  });

  button.addEventListener('click', e => {

    if(input.value == '') return;
    
    let xhr = new XMLHttpRequest(),
      jsonData = {
        id: input.value,
        title: input.value,
        text: 'message'
      };

    xhr.open('PUT', '/articles/' + input.value);
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    xhr.onreadystatechange = function () {
          window.location.href = '/articles';
      };
    xhr.send(JSON.stringify(jsonData));
  });

  updateArticleButton.addEventListener('click', () => {
    let articleTitle = updateArticleTitle.value;
    let articleText = updateArticleText.value;
    let xhr;
    let body;
    
     if (articleTitle) {
        xhr = new XMLHttpRequest();
        body = {
            'title': articleTitle,
            'text': articleText
        };

         xhr.open('POST', '/articles/' + articleTitle, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4 && xhr.status === 200) {
                window.location.href = '/articles';
            }
        };
        xhr.send(JSON.stringify(body));
    }
});