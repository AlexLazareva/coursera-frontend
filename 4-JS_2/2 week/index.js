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
Collection.prototype.append = function (item) {
    if (item instanceof Collection) {
        this._acc = this._acc.concat(item.values());
    } else {
        this._acc.push(item);
    }
};

// удаляет элемент с переданной позиции
Collection.prototype.removeAt = function (pos) {
    var valid = this._validPosition(pos);

    if (valid) {
        this._acc.splice(pos - 1, 1);
    }

    return valid;
};

Collection.prototype._validPosition = function (position) {
    return position > 0 && position <= this.count();
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





