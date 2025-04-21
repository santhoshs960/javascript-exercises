const sumAll = function(a,b) {
    let total = 0;
    let bool = Number.isInteger(a);
    let bool1 = Number.isInteger(b);
    if (a<0){
        return "ERROR";
    } else if(bool==true&&bool1==true){
        if (a<b){
            for (i=a;i<=b;i++){
                total += i;
            }
        } else if(a>b){
            for (i=b;i<=a;i++){
                total += i;
            }
        }
        return total;
    } else {
        return "ERROR";
    }
}

sumAll(1,-4000);

// Do not edit below this line
module.exports = sumAll;
