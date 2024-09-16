const palindromes = function (myStr) {
    myArr  = myStr.split('')

    function isPunc(letter) {
        const alphanum = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('')
        return alphanum.includes(letter.toLowerCase())
    }
    
    noPuncArray = myArr.filter(isPunc)

    caseInsensitiveArr = noPuncArray.map(letter => letter.toLowerCase())

    return caseInsensitiveArr.join("") === caseInsensitiveArr.reverse().join("")
};

// Do not edit below this line
module.exports = palindromes;
