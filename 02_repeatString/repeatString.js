const repeatString = function(string,num) {
let string2 = "";
    if (num<0){
        return "ERROR";
    } else {
    for (i=0;i<num;i++){
        string2 += string;
    }
    return string2;
    }
};
repeatString("hey",3);
repeatString("hello",10);
repeatString("hi",1);
repeatString("goodbye",-1);
repeatString("",10);
repeatString("hey",Math.floor(Math.random()*10))
// Do not edit below this line
module.exports = repeatString;

