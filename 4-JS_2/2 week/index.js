module.exports = Collection;


/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this.acc = [];
}


// Методы коллекции
// возвращает массив элементов коллекции
Collection.prototype.values = function () {
    if (this.acc instanceof Array) {
        return this.acc;
    } else {
        throw new Error('Должен быть передан массив');
    }
};

// возвращает массив элементов коллекции
Collection.prototype.count = function () {
    return this.acc.length;
};

// возвращает элемент с определенной позиции
Collection.prototype.at = function (el) {};

// добавляет элемент в коллекцию
Collection.prototype.append = function (el) {
    this.acc.push(el);

    return this.acc;
};

// удаляет элемент с переданной позиции
Collection.prototype.removeAt = function (pos) {
    // if () {
    //     return true;
    // }
    // return false;
};

/**
 * Создание коллекции из массива значений
 */


Collection.from = function (arr) {
    if (arr instanceof Array) {
        if (this.acc != undefined) {
            return this.acc.concat(arr);
        } else {
            this.acc = arr;
        }
    } else {
        throw new Error('Должен быть передан массив');
    }
};
//
// var numbers = new Collection;
var letters = Collection.from(['a', 'b', 'c']);
// console.info(numbers);
// debugger
// var numbers = Collection.from(['a', 'b', 'c']);

console.info(letters.values());
console.info(letters.count());
letters.append('d');

