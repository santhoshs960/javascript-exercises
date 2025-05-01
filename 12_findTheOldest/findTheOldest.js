const findTheOldest = function(people) {
    return people.sort((a, b) => {
      const lastPersonAge = (a.yearOfDeath ?? new Date().getFullYear()) - a.yearOfBirth;
      const nextPersonAge = (b.yearOfDeath ?? new Date().getFullYear()) - b.yearOfBirth;
      return nextPersonAge - lastPersonAge;
    })[0];
  };
  

// Do not edit below this line
module.exports = findTheOldest;
