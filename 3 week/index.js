function prependZero(number) {
    return number < 10 ? '0' + number : number;
}

function formatDate(date) {
    var dateObj = {
        year: date.getFullYear(),
        month: prependZero(date.getMonth() + 1),
        day: prependZero(date.getDate()),
        hours: prependZero(date.getHours()),
        minutes: prependZero(date.getMinutes())
    };

    return dateObj.year + '-' + dateObj.month + '-' + dateObj.day + ' ' + dateObj.hours + ':' + dateObj.minutes;
}

function checkNumber(number) {
    if (isNaN(number) || number < 0) {
        throw TypeError('Число не может быть отрицательным');
    }
    return number;
}

function changeDate(number, date, times) {
    switch (times) {
        case 'years':
            date.setFullYear(date.getFullYear() + number);
            break;
        case 'months':
            date.setMonth(date.getMonth() + number);
            break;
        case 'days':
            date.setDate(date.getDate() + number);
            break;
        case 'hours':
            date.setHours(date.getHours() + number);
            break;
        case 'minutes':
            date.setMinutes(date.getMinutes() + number);
            break;
        default:
            throw TypeError('нет такого периода времени');
    }
}

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    date = new Date(date);

    return {
        get value() {return formatDate(date)},
        add: function (number, times) {
            checkNumber(number);
            changeDate(number, date, times);

            return this;
        },
        subtract: function (number, times) {
            checkNumber(number);
            number *= -1;
            changeDate(number, date, times);

            return this;
        }
    }
};
