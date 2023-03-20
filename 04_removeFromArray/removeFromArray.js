const removeFromArray = function(array, ...args) {

    return(array.filter(x => !args.includes(x)));
};

//removeFromArray([1, 2, 3, 4, 5], 1, 2, 3);

// Do not edit below this line
module.exports = removeFromArray;
