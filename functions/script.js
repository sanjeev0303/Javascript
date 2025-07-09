//  Use rest parameter to accept any number of scores and reutnr the total.

// function getScore(...scores) {
//   let total = 0;
//   scores.forEach((score) => {
//     total = total + score;
//   });
//   return total;
// }
// let score = getScore(1, 2, 3, 4, 5, 6, 7, 8);
// console.log("total score: ", score);

// Pass a function into another funciton and execute it inside.
// function abcd(val){
// val()
// }
// abcd(function(){
//     console.log("hey");
// })

// Write a BMI calculator
// function bmi (weight, height){
// return weight / (height * height)
// }

// const value = bmi(69, 1.7).toFixed(2)
// console.log(value);

// Create a resuable discount calculator(HOF)
function discontCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let ten = discontCalculator(10);
let twenty = discontCalculator(20);

console.log(ten(200));
console.log(twenty(200));
