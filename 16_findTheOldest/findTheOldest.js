const findTheOldest = function(array) {
    let sortedArray = array.sort((a, b) => {
        if (getAge(a.yearOfBirth, a.yearOfDeath) > getAge(b.yearOfBirth, b.yearOfDeath)){
            return 1
        } if (getAge(a.yearOfBirth, a.yearOfDeath) == getAge(b.yearOfBirth, b.yearOfDeath)) {
            return 0
        } if (getAge(a.yearOfBirth, a.yearOfDeath) < getAge(b.yearOfBirth, b.yearOfDeath)) {
            return -1
        }
    })
    console.log(sortedArray)
    return sortedArray.at(-1).name
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;
