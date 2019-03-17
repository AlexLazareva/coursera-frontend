module.exports = Collection;


/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this._acc = [];
}


// Методы коллекции
// возвращает массив элементов коллекции
Collection.prototype.values = function () {
    if (this._acc instanceof Array) {
        return this._acc;
    } else {
        return this;
        // throw new Error('Должен быть передан массив');
    }
};

// возвращает массив элементов коллекции
Collection.prototype.count = function () {
    return this._acc.length;
};

// возвращает элемент с определенной позиции
Collection.prototype.at = function (el) {
    if ((el <= 0) || typeof el !== 'number' || el > this._acc.length) {
        return null;
    } else {
        var pos = el - 1;
        return this._acc[pos];
    }
};

// добавляет элемент в коллекцию
Collection.prototype.append = function () {
    if (arguments.length > 0 ){
        for (var i = 0; i < arguments.length; i++){
            if (arguments[i] instanceof Collection){
                this._acc = this._acc.concat(Collection.prototype.values.call(arguments[i]));
            } else if (Array.isArray(arguments[i])){
                this._acc = this._acc.concat(arguments[i]);
            } else {
                this._acc.push(arguments[i]);
            }
        }
    }
};

// удаляет элемент с переданной позиции
Collection.prototype.removeAt = function (pos) {
    if ((pos <= 0)||(pos > this._acc.length)||(typeof pos !== 'number')){
        return false;
    } else {
        this._acc.splice((pos - 1), 1);
        return true;
    }
};

/**
 * Создание коллекции из массива значений
 */


Collection.from = function (arr) {
    var collection = new Collection();
    if (arr instanceof Array) {
        collection._acc = collection._acc.concat(Collection.prototype.values.call(arr));
    }

    return collection;
};





