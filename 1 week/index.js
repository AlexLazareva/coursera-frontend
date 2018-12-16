var HOURS_PER_DAY = 24;
var MINUTES_PER_HOUR = 60;
/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    minutes += interval;
    hours += Math.floor(minutes / MINUTES_PER_HOUR);

    minutes %= MINUTES_PER_HOUR;
    hours %= HOURS_PER_DAY;

    minutes = (minutes < 10) ? '0' + minutes : minutes;
    hours = (hours < 10) ? '0' + hours : hours;

    return hours + ':' + minutes;
};
