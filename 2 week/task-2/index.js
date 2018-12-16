/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {

    var normalizeHashtags = hashtags.reduce(getUniqueHashtags, []);

    function getUniqueHashtags(acc, item) {
        if (acc.indexOf(item.toLowerCase()) === -1) {
            acc.push(item.toLowerCase());
        }

        return acc;
    }

    return normalizeHashtags.join(', ');
};
