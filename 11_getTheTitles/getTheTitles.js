const getTheTitles = function(bookArr) {
    function getTitle(bookObj) {
        return bookObj.title
    }

    return bookArr.map(getTitle)
};

// Do not edit below this line
module.exports = getTheTitles;
