// Math Operator
const now = 2037;
const ageJonas = now - 1991;

const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// 2 ** 3 means 2 to the power of 3 = 2 * 2* 2
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);


// Assignment Operator
let x = 10 + 5;


x += 10; //x = x + 10
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


let c, y;
c = y = 25 - 10 - 5;
console.log(c, y);

const averageAge = (ageJonas + ageSarah) / 2; // first (agejonas + ageSaraf) then devided with 2 and the answer is 32.5 because group is has the highest operator 
console.log(ageJonas, ageSarah, averageAge)

