'use strict';

// Код валидации формы

function showFormError(container, formId) {
    formId.classList.add(container.formInvalidClass);
}

function resetError(container, formId) {
    formId.classList.remove(container.formInvalidClass);
}

function validForm(container, formId) {
    resetError(container, formId);
    formId.classList.add(container.formValidClass);
}

function checkInput(el, container) {
    switch (el.dataset.validator) {
        case "number":
            if (+el.value > el.dataset.validatorMax) {
                el.classList.add(container.inputErrorClass);
            } else {
                el.classList.remove(container.inputErrorClass);
            }
            break;
        case "letters":
            if (/^[a-zA-Zа-яА-Я]+$/.test(el.value)) {
                el.classList.remove(container.inputErrorClass);
            } else {
                el.classList.add(container.inputErrorClass);
            }
            break;
        case "regexp":
            console.info(el.value);
            break;
        default:
            validForm(container, container.formId);
    }
}

function validateForm(obj) {
    var form = document.getElementById(obj.formId);
    var elems = form.elements;

    function checkSubmit() {
        for (var el in elems) {
            console.log(elems[el].value);
            if (!elems[el].value) {
                showFormError(obj, form);
                event.preventDefault();
            } else {
                console.info('Без ошибок!');
            }
        }
    }
    form.addEventListener('submit', checkSubmit);
    form.addEventListener('blur', function(event) {
        if (event.target.tagName === "INPUT")
        checkInput(event.target, obj);
    }, true);
    return obj;
}



