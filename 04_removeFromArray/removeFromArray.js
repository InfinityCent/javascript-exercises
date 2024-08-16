const removeFromArray = function(array, ...otherArgs) {
    let index = -1;
    for (const arg of otherArgs) {
        index = array.findIndex(x => x === arg);
        while (index !== -1) {
            array.splice(index, 1)
            index = array.findIndex(x => x === arg)
        };
    };
    return(array);
};


// Do not edit below this line
module.exports = removeFromArray;
