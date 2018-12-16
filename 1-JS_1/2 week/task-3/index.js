// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

//'ADD Ivan 555-10-01,555-10-03';

module.exports = function (command) {
    var commandArr = command.split(' ');
    var commandName = commandArr[0];

    function changePhoneList(phones, newPhonesArr) {
        return newPhonesArr.reduce(function (acc, item) {
            if (acc.indexOf(item) === -1) {
                acc.push(item);
            }
            return acc;
        }, phones);
    }
    
    function removeContactPhoneAt(person, index) {
        phoneBook[person].splice(index, 1);

        if (phoneBook[person].length === 0) {
            delete phoneBook[person];
        }
    }

    /**
     * Добавление контакта
     * @param name - string
     * @param phones - array
     */
    function addContact(name, phones) {
        phoneBook[name] = phoneBook.hasOwnProperty(name) ?
                        changePhoneList(phoneBook[name], phones) :
                        phones;

        return phoneBook[name];
    }

    function removeContact(number) {
        for (person in phoneBook) {
            var index = phoneBook[person].indexOf(number);

            if (index !== -1) {
                removeContactPhoneAt(person, index);

                return true;
            }
        }

        return false;
    }

    function showContacts() {
        var contacts = [];

        for (person in phoneBook) {
            if (phoneBook[person] && phoneBook[person].length > 0) {
                contacts.push(person + ': ' + phoneBook[person].join(', '));
            }
        }

        return contacts.sort();
    }

    /**
     * проверяем, какая команда пришла вначале строки
     */
    switch (commandName) {
        case 'ADD':
            var phones = commandArr[2].split(',');
            return addContact(commandArr[1], phones);
            break;


        case 'REMOVE_PHONE':
            return removeContact(commandArr[1]);
            break;

        case 'SHOW':
            return showContacts();
            break;

        default:
            throw new TypeError('Такой команды не существует!!!');
    }
};

// phoneBookP('ADD Anton 555-10-01');
