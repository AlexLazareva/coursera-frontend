/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var promises = [];

    operations.forEach(operation => {
        let promise = new Promise((resolve, reject) => {


        });
        promises.push(promise);
    });

    Promise.all(promises)
        .then(callback => {
            callback();
        }, error => {
            console.log(error);
        });
};