'use strict';

/**
 * Функция, разворачивающая вложенный массив любой глубины в плоский массив
 * @param {Array} array - массив, который может содержать другие массивы
 *
 * @example
 * // returns [1, 2, 3, 4, 5, 6]
 * flatten([1, [2, [3, 4], 5], 6]);
 *
 * @returns {Array}
 */
const flatten = array => array.flatMap(item => (Array.isArray(item) ? flatten(item) : item));
