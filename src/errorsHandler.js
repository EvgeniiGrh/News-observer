class ErrorsHandler {
  generateErrorMessage(placeholderForNews, error){
    const defaultErrorMessage = document.createElement('h3');
    const trueErrorMessage = document.createElement('h3');

    defaultErrorMessage.innerText = `Ooops, invalid request...`;
    trueErrorMessage.innerText = error;

    defaultErrorMessage.classList.add('error-message-default');
    trueErrorMessage.classList.add('error-message-default', 'error-message-true');

    placeholderForNews.appendChild(defaultErrorMessage);
    placeholderForNews.appendChild(trueErrorMessage);

    console.error(error);
  }
}

const errorsHandler = new ErrorsHandler();

export default errorsHandler;