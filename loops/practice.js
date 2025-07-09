//  01. Print numbers from 1 to 10 using a for loop
for(let i = 1; i<= 10; i++){
    console.log(i);
}


// 02. Print numbers from 10 to 1 using a while loop.
for(let i = 10; i >=1; i--){
    console.log(i);

}


// 03. Print even numbers from 1 to 20 using a for loop.
for(let i = 1; i<=20; i++){
    if (i%2===0) {
        console.log("even number: ", i);

    }
}


//  04. Print odd number from 1 to 15 using a while loop.
let i = 1;
while ( i <= 16) {
if (i % 2 !== 0) {
    console.log("odd: ", i);
}
i++;
}


// 05. Print the multiplication table of 5(i.e., 5 x 1 = ...)
for(let i = 1; i<=10; i++){
    const a = 5 * i;
    console.log(`5 x ${i} = ${a}`);

}

let x = 1;
while (x <=10) {
    console.log(`5 x ${x} = ${5 * x}`);
    x++;
}


// 06. Find the sum of numbers from 1 to 100 using a loop.
let sum = 0
for(let i = 1; i<=100; i++){
   sum = sum + i
}
console.log(sum);


// 07. Print all numbers between 1 to 50 taht are divisible by 3.
for( let i = 1; i <= 50; i++){
    if (i % 3 === 0) {
        console.log(i);
    }
}


// 08. Ask the user for a number and print whether each number from 1 to that number is even or odd.
// let value = prompt("give a number");
let value = 13;
for(let i = 1; i<=value; i++){
    if (i % 2 === 0) {
        console.log("even: ", i);
    } else {
        console.log("odd: ", i);
    }
}


//  09. Count how many number between 1 to 100 are divisible by both 3 and 5.
for(let i = 1; i <= 100; i++){
    if (i %3 === 0 && i % 5 === 0) {
        console.log(i);
    }
}


// 10. Stop at first Multiple of 7
for(let i = 1; i <= 100; i++){
    if (i % 7 === 0) {
        console.log("break at: ", i);
        break;
    }
    console.log(i);
}


// 11. Skip Multiples of 3
for( let i = 1; i <= 20; i++){
    if (i % 3 === 0) {
        console.log("continue from value: ", i);
        continue;
    }
    console.log(i);
}


// 12. Print First 5 Odd Number Only
let count = 0;
for(let i = 1; i<= 100; i++){
    if (i % 2 !== 0) {
        count++;
        console.log(i);
    }
    if (count === 5) {
        break;
    }
}
