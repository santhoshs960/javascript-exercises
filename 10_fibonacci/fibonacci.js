const fibonacci = function (a) {
    let init = 1;
    let init1 = 0;
    let num = Number(a)
    console.log(num)
    let total = 0;
    if (num > 1) {
        for (i = 2; i <= num; i++) {
            total = init + init1
            init1 = init;
            init = total;
        }
        return total
    } else if(num == 0){
        return 0;
    } else if (num<0){
        return "OOPS"
    } else {
        return init;
    }
};


// Do not edit below this line
module.exports = fibonacci;
