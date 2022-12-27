// 1. Function Declaration
// Example 1
function calculateAge(birthyear) {
  const age = 2022 - birthyear;
  return age;
}
const age1 = calculateAge(1980);
console.log(age1);
console.log(`Your age is now ${age1} Years`);

// Example 2
function calculateCost(cost) {
  const dailyCost = 1500 - cost;
  return dailyCost;
}
const day1 = calculateCost(130);
console.log(day1);
const day2 = calculateCost(250);
console.log(day2);

// Example 3
function calculateBook(book) {
  const bookNumber = 12 - book;
  return bookNumber;
}
const abookNumber = calculateBook(6);
console.log(`A have ${abookNumber} book(s)`);

// Example 4 (Another way to data return without take a "const")
function calculate(absent) {
  return 24 - absent;
}
const presentPerson = calculate(7);
console.log(`There is ${presentPerson} person is present today.`);

// Example 5
function distance(road) {
  //   const total = 520;
  //   return total - road;
  return road;
}
const bogura = distance(265);
console.log(`The distance of Bogura to Dhaka is ${bogura} KM.`);

// 2.  Function Exprision
// Example 1
const calculateAge2 = function (birthyear) {
  return 2022 - birthyear;
};
const age2 = calculateAge2(1990);
console.log(age2);

// Example 2
const workHour = function (hour) {
  return 24 - hour;
};
const restTime = workHour(8);
console.log(`You have ${restTime} hours for rest.`);

// Example 3
const dayLeft = function (day) {
  return 31 - day;
};
const dutyDay = dayLeft(25);
console.log(`You have ${dutyDay} day left on duty.`);

//Example 4
const distance2 = function (killometter) {
  return 105 - killometter;
};
const distanceLeft = distance2(30);
console.log(`You have ${distanceLeft} km more to drive.`);

// Example 5
const dailySavings = function (cost) {
  return 850 - cost;
};
const savings = dailySavings(740);
console.log(`Today you save ${savings} tk.`);

// Arrow Function

// Example 1 //Without return
const calculateAge3 = (birthyear) => 2022 - birthyear;
const rahimAge = calculateAge3(1996);
console.log(rahimAge); //or
console.log(`Rahim is ${rahimAge} years old.`);

// Example 2 //With return
const travelCost = (bybus) => {
  return 2550 - bybus;
};
const refund = travelCost(550);
console.log(`You refund ${refund} tk.`);

// Example 3
const joblLft = (birthyear) => {
  const age = 2022 - birthyear;
  return 62 - age;
};
const aAge = joblLft(1980);
console.log(aAge);
console.log(`You job left ${aAge} Years.`);

// Array

// Example 1
const students = ["Asif", "Rakib", "Rahim"];
console.log(students);
console.log(students[0]);
console.log(students[1]);
console.log(students[2]); // Single data is collected by using index like [2]. Remember that First data index is always be 0.

// Example 2
const players = new Array("Sakib", "Tamim", "Miraj");
console.log(players[0]); //first data
console.log(players[2]); //Last data

// Example 3 (Change data into array)
const studentsGroup = ["Asif", "Rakib", "Rahim"];
console.log(studentsGroup);
studentsGroup[0] = "Karim"; //Replace Asif to Karim.
console.log(studentsGroup);

console.log(studentsGroup.length); //to see how many data into an Array.

// Example 4
const employes = new Array("E1", "E2", "E3", "E4", "E5");
console.log(employes); //To see all data
console.log(employes.length); // To see How many data

//Get Array Last item
console.log(employes[employes.length - 1]); // use to see last data into an Array. its returns E5.

// Example 4
const user = ["Ponkoj", "Mondol", 1984, 2022 - 1984, "Web Devloper"];
console.log(user);

// Array Method
const allUser = ["User1", "User2", "User3", "User4"];
console.log(allUser);

//Push Method (Add a new Last item into an Array)
allUser.push("User5");
console.log(allUser);

// Unshift Method (Add a new First item into an Array)
allUser.unshift("First User");
console.log(allUser);

// pop Method (Remove  Last item into an Array)
allUser.pop();
console.log(allUser);

// shift Method (Remove  First item into an Array)
allUser.shift();
console.log(allUser);

// How to delete & return Last removed item
console.log(allUser);
const removeItem = allUser.pop(); // Last removed item return function
console.log(removeItem);

// How to delete & return First removed item
const removeItem1 = allUser.shift();
console.log(allUser);
console.log(removeItem1);
