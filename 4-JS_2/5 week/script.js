'use strict';

// Код валидации формы

function showError(container, errorMessage) {
    container.className = 'form_invalid';
    var messageElem = document.createElement('span');
    messageElem.className = 'form__error-msg';
    messageElem.innerHTML = errorMessage;
    container.appendChild(messageElem);
}

function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "form_invalid") {
        container.removeChild(container.lastChild);
    }
}

function validateForm(obj) {
    console.log(obj);
    return obj;
}
