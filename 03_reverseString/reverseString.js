const reverseString = function(string) {
let letters = string.split("");
let reverse = "";
for (i=letters.length-1;i>=0;i--){
    reverse += letters[i];
}
return reverse;

}
reverseString("hello");
reverseString("hello there");
reverseString("123! abc! Hello, Odinite.")
reverseString(" ");



// Do not edit below this line
module.exports = reverseString;
