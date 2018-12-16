/**
 * @param {String} tweet
 * @returns {String[]}
 */

function stringToArr(string) {
    if (string && string.length > 0) {
        var wordsArr = string.split(' ');
    }

    return wordsArr;
}


module.exports = function (tweet) {
    var words = stringToArr(tweet);

    var hashTags = [];

    for (var i = 0; i < words.length; i++) {
        var word = words[i];

        if (word[0] === '#') {
            var hashtag = word.slice(1);

            hashTags.push(hashtag);
        }
    }
    return hashTags;
};
