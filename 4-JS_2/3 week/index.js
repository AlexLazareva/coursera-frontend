/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var promises = [];

    operations.forEach(operation => {
        operation = new Promise((resolve, reject) => {
                    var next = function (err, ms) {
                        if (err !== null) {
                            reject(err);
                        } else {
                            resolve(ms);
                        }
                        operation(next);
                    };
            setTimeout(function(){
                resolve("Success!"); // Ура! Всё прошло хорошо!
                reject();
            }, 250);
        });

                console.info(operation);
    });

    Promise.all(promises)
            .then(function (resolve, reject) {
                callback(resolve, reject);
            }, function (resolve, reject) {
                callback(resolve, reject);
            });
};