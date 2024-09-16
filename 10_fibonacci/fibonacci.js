const fibonacci = function(position) {
    
    let initFib = [1, 1]
    i = 3
    while (i <= +position) {
        initFib.push(initFib[initFib.length - 1] + initFib[initFib.length - 2])
        i++
    }

    if (+position === 0) {
        return 0
    } else if (+position < 0) {
        return "OOPS"
    } else {
        return initFib[initFib.length - 1]
    }
};

// Do not edit below this line
module.exports = fibonacci;
