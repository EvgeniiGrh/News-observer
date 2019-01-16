const articlesList = document.querySelector('.articlesList');
button = document.querySelector('#button'),
input = document.querySelector('#input');
  
articlesList.addEventListener('click', e => {
    if (e.target.className != 'deleteArticle') return;

    const url = '/articles/' + e.target.dataset.id;

    let xhr = new XMLHttpRequest();
    xhr.open('DELETE', '/articles/' + e.target.dataset.id);
  
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
        name: input.value,
        message: 'message'
      };
    debugger

    xhr.open('PUT', '/articles/' + input.value);
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    xhr.onreadystatechange = function () {
          window.location.href = '/articles';
      };
    xhr.send(JSON.stringify(jsonData));
  });
