const repeatString = function(string, num) {
    let out_str = '';
    if (num < 0) {
        return('ERROR');
    }
    for (let i = 0; i < num; i++) {
        out_str += string;
    }
    return(out_str);
};

// repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
