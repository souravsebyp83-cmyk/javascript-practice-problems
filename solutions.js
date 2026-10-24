// JavaScript Practice Problems


// 1. Print numbers from 1 to 10
console.log("1. Numbers from 1 to 10:");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Function that takes an array of numbers and returns the sum
function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}
console.log("\n2. Sum:", sumArray([1, 2, 3, 4, 5]));

// 3. Function to find the largest number in an array
function findLargest(numbers) {
  if (numbers.length === 0) {
    throw new Error("Array must not be empty.");
  }
  return Math.max(...numbers);
}
console.log("3. Largest:", findLargest([12, 5, 27, 9, 18]));

// 4. Function to check whether a number is even or odd
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
console.log("4. 7 is:", evenOrOdd(7));

// 5. Function that reverses a string
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log("5. Reversed:", reverseString("Hello"));

// 6. Merge two arrays using the spread operator
const a = [1, 2];
const b = [3, 4];
const merged = [...a, ...b];
console.log("6. Merged array:", merged);

// 7. Use ES6 filter to return even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("7. Even numbers:", evenNumbers);

// 8. Rewrite using template literals
const name = "Alice";
const msg = `Hello ${name}, welcome!`;
console.log("8.", msg);

// 9. Rewrite the function using an arrow function
const greet = (name) => {
  return "Hello, " + name;
};
console.log("9.", greet("Alice"));
