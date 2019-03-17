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
        return this;
        // throw new Error('Должен быть передан массив');
    }
};

// возвращает массив элементов коллекции
Collection.prototype.count = function () {
    return this.acc.length;
};

// возвращает элемент с определенной позиции
Collection.prototype.at = function (el) {
    if ((el <= 0) || typeof el !== 'number' || el > this.acc.length) {
        return null;
    } else {
        var pos = el - 1;
        return this.acc[pos];
    }
};

// добавляет элемент в коллекцию
Collection.prototype.append = function () {
    if (arguments.length > 0 ){
        for (var i = 0; i < arguments.length; i++){
            if (arguments[i] instanceof Collection){
                this.acc = this.acc.concat(Collection.prototype.values.call(arguments[i]));
            } else if (Array.isArray(arguments[i])){
                this.acc = this.acc.concat(arguments[i]);
            } else {
                this.acc.push(arguments[i]);
            }
        }
    }
};

// удаляет элемент с переданной позиции
Collection.prototype.removeAt = function (pos) {
    if ((pos <= 0)||(pos > this.acc.length)||(typeof pos !== 'number')){
        return false;
    } else {
        this.acc.splice((pos - 1), 1);
        return true;
    }
};

/**
 * Создание коллекции из массива значений
 */


Collection.from = function (arr) {
    var collection = new Collection();
    if (arr instanceof Array) {
        collection.acc = collection.acc.concat(Collection.prototype.values.call(arr));
    }

    return collection;
};





