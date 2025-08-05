/*const acountid = 60606
📌 Simple Definition (in Urdu with English letters):
let acountemail = "fahad@gmail.com"
acountcity = "lahore"
acountcity = "lahore"
acountemail = "abid@gmail.com"
acountpassword = "303030"
acountcity = "peshawar"
console.table([acountid, acountemail, acountpassword, acountcity, acountcity])*/

// const student = {
//   fullName: "obidkhan",
//   age: 20,
//   cgpa: 8.2,
//   isPass: false,
// };

// console.table([student]);
//  let a = 5
// let b = 2
// console.log(" a = ", a, " & b =", b);
//  console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b);
//a = ++a
//a = --a;
//console.log("a =", a )

// let a = 5;
//  a /= 3;
// a += 3;
// a -= 3;
// a %= 3;
// a *= 4;

// console.log(a);

// Comparison Operators
// let a = 5;
// let b = 2;
// console.log(" 5 >= 2 ", (a) >= b);
// console.log(" 5===2", 5 === 2); // strict equal to
// console.log(" 5!==2", 5 !== 2); // strict not equal to
// console.log(" 5 > 2", 5 > 2);

// logial operators//
// let a = 4;
// let b = 5;
// console.log("cond1 && cond2", a < b && a < b);// both cond  must be true
// console.log("cond1 || cond2", a > b || a < b)// only one cond must be true
// console.log("a > b ! ",  ! a > b )

// let age = 17;

// if (age >= 18) {
//     console.log("You can vote.");// true
// } else {
//     console.log("You cannot vote.");// false
// }

//
// Ye code mode ke hisaab se color set karta hai: "dark" ke liye "black", "black" ke liye "black", "pink" ke liye "pink", aur kisi aur value ke liye "white".
// let mode = "yellow";
// let color;

// if (mode === "dark") {
//     color = "black";
// } else if (mode === "black") {
//     color = "black"; // "back" ko "black" se replace kiya gaya hai
// } else if (mode === "pink") {
//     color = "pink";
// } else {
//     color = "white";
// }

// console.log(color);

//alert and popup ?
// let name = prompt(" hello fadi");// 1 popup box show karega notificton type
// console.log(name);

// alert(" hello fadi"); //1 popup box show karega notificton type same kaam

// question write a code which can give grades to students acording to their scores
// practise question number 1

let score = Number("Enter your score between 0 to 100 to check your grade :");
let grade =7;
if (score >= 90 && score <= 100) {
  grade = " grade A";
} else if (score >= 70 && score <= 89) {
  grade = "grade B";
} else if (score >= 60 && score <= 69) {
  grade = " grade C";
} else if (score >= 50 && score <= 59) {
  grade = " grade D";
} else if (score >= 0 && score <= 49) {
  grade = " grade F";
}
console.log(grade);








  








// loops in js
// for (let count = 1; count <= 100; count++) {
//   console.log("fadi");
// }
//initialization , stopaing condition ,  updation  //

//for loop
// Pehle se pata ho kitni baar loop chalani hai, ya kisi list ko loop karna ho
// Use jab tumhe exact range ya list ke items pe loop chalani ho.

// for (let i = 1; i <= 10; i++) {
//count 1 to 10
//   console.log("hello fadi");
// }

// while loop
// Use jab tumhe nahi pata kitni dafa chalana hai — sirf yeh maloom ho ke "jab tak yeh condition true hai", tab tak loop chale.
// let i = 1;
// while (i <= 5) {
//   console.log(" hellow world "); // same kaam for loop ki tarha
//   i++;
// }

// let a = 3;
// let b = 4;
// let c = 7;

// if (a + b === c || b + c === a || a + c === b) {
//   console.log(
//     "Yes, triangle is possible because the sum of two sides is equal to the third side."
//   );
// } else {
//   console.log(
//     "No, triangle cannot be formed because no two sides sum to the third side."
//   );
// }





// let a = 3;
// let b = 4;
// let c = 7;

// if (a + b == c || a + c == b || b + c == a) {
//   console.log(
//     "Yes, triangle is possible because the sum of two sides equals the third side."
//   );
// } else {
//   console.log(
//     "No, triangle cannot be formed because no two sides sum to the third side."
//   );
// }
