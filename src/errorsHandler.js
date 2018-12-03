class ErrorsHandler {
  generateErrorMessage(placeholderForNews, error){
    const errorMessage = document.createElement('h3');
    errorMessage.innerText = 'Ooops, invalid request...';
    errorMessage.classList.add('error-message');
    placeholderForNews.appendChild(errorMessage);

    console.error(error);
  }
}

const errorsHandler = new ErrorsHandler();

export default errorsHandler;