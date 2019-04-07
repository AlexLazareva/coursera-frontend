'use strict';

// Код валидации формы

function showError(container, formId) {
    formId.classList.add(container.formInvalidClass);
}

function resetError(container, formId) {
    formId.classList.remove(container.formInvalidClass);
}

function validateForm(obj) {
    var form = document.getElementById(obj.formId);
    var elems = form.elements;

    form.onsubmit = function () {
        for (var el in elems) {
            console.log(elems[el].value);
            if(!elems[el].value) {
                showError(obj, form);
                event.preventDefault();
            }
        }
        // if (!elems.name.value) {
        //     showError(obj, form);
        //     event.preventDefault();
        // }

        console.log('checked!', event);
    };
    return obj;
}
