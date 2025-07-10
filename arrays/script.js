// Create an array with 3 fruits and print the seocnd fruit.
let fruit = ['apple', 'banana', 'cherry'];
const secondfuit = fruit[1];
console.log(secondfuit);

// Add 'Mango' at end and 'Pineapple" at the beginnin of this array.
let fruits = ['apple', 'banana', 'cherry'];
fruits.push("Mango")
fruits.unshift("Pineapple")
console.log(fruits);

// Replace "Banana" with "Kiwi" in the array above.
let fruit1 = ['apple', 'banana'];
fruit1.pop()
fruit1.push("Kiwi")
console.log(fruit1);


// Insert "Red" and "Blue" at index 1 in this array
let colors = ["Green", "Yellow"];
colors.splice(1, 0, "Red", "Blue")
console.log(colors);


// Extract only three middel 3 elements from this array
let items = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(items.slice(1, 4));
