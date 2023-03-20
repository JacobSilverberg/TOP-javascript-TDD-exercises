const reverseString = function(string) {
    let rev_string = '';
    for (let i = (string.length - 1); i > -1; i--) {
        //console.log(string[i]);
        rev_string += string[i]
    }
    return rev_string;
};

//reverseString("asdfg");

// Do not edit below this line
module.exports = reverseString;
