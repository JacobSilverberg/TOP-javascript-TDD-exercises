const sumAll = function(num1, num2) {
    if (typeof(num1) != 'number' || typeof(num2) != 'number' || num1 < 0 || num2 < 0) {
        return('ERROR');
    }
    
    let start = null;
    let stop = null;
    let sum = 0;
    if (num1 < num2) {
        start = num1;
        stop = num2;
    }
    else {
        start = num2;
        stop = num1;
    }
    for (let i = start; i != stop + 1; i++){
        sum += i;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;
