"use strict";
const romanToArabicNumerals = function (str) {
    let result = 0;
    const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    for (let i = 0; i <= decimal.length; i++) {
        while (str.indexOf(roman[i]) === 0) {
            result += decimal[i];
            str = str.replace(roman[i], '');
        }
    }
    return result;
};
module.exports = romanToArabicNumerals;