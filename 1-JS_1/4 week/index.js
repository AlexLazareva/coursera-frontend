/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var data = collection.slice();
    var fns = [].slice.call(arguments).slice(1);

    if (fns.length !== 0) {
        fns.sort().forEach(function (fn) {
            data = fn(data);
        });
    }

    return data;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);

    return function select(data) {
        return data.reduce(function (arr, item) {
            var selectedFields = {};

            for (key in item) {
                if (fields.indexOf(key) !== -1) {
                    selectedFields[key] = item[key];
                }
            }

            arr.push(selectedFields);

            return arr;
        }, []);
    }

}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filter(data) {
        return data.reduce(function (arr, item) {
            if (values.indexOf(item[property]) !== -1) {
                arr.push(item);
            }

            return arr;
        }, []);
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
