module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {}


// Методы коллекции
// возвращает массив элементов коллекции
Collection.prototype.values = function () {};

// возвращает элемент с определенной позиции
Collection.prototype.at = function (el) {};

// добавляет элемент в коллекцию
Collection.prototype.append = function (el) {};

// удаляет элемент с переданной позиции
Collection.prototype.removeAt = function (pos) {
    return true;
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arr) {
    // перевести массив arr в объект
    return arr;
};

