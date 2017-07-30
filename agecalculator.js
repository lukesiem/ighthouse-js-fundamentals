function howManyHundreds(name,YearOfBirth,currentYear) {
  return  name + " is " + (currentYear - YearOfBirth) + " " + "years old.";
}
console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Jack", 2003, 2015));
console.log(ageCalculator("Ali", 2015, 2015));