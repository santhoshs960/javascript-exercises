const palindromes = function (str) {
 let reverse = str.toLowerCase().replace(/[^a-z0-9]/g, '');
 return reverse === reverse.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
