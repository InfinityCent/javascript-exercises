const findTheOldest = function(personArr) {
    
    calculateAge = function(person) {
        if (!("yearOfDeath" in person)) {
            person["yearOfDeath"] = new Date().getFullYear()
        }
        person["age"] = person.yearOfDeath - person.yearOfBirth
        return person
    }

    ageArr = personArr.map(calculateAge)
    highestAge = Math.max(...ageArr.map((p) => p.age))
    return ageArr.filter((p) => p.age == highestAge)[0]
};

// Do not edit below this line
module.exports = findTheOldest;
