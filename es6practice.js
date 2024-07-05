// Step 1: Create Arrays
const numbers1 = [1, 2, 3, 4]; // First array of numbers
const numbers2 = [5, 6, 7, 8]; // Second array of numbers

// Step 2: Combine Arrays using the spread operator
const numbers = [...numbers1, ...numbers2]; // Combines numbers1 and numbers2 into a single array called 'numbers'

// Step 3: Square Function
const square = (num) => num * num; // Arrow function that takes a number 'num' and returns its square

// Step 4: Map Method
const squares = numbers.map(square); // Uses the 'map' method to apply the 'square' function to each element in 'numbers' array, resulting in a new array 'squares'

// Step 5: Even Check Function
const isEven = (num) => num % 2 === 0; // Arrow function that takes a number 'num' and returns 'true' if it's even, otherwise 'false'

// Step 6: Filter Method
const evenSquares = squares.filter(isEven); // Uses the 'filter' method to create a new array 'evenSquares' containing only even numbers from 'squares' array

// Step 7: Destructuring
const [firstEvenSquare, secondEvenSquare] = evenSquares; // Uses destructuring to extract the first and second elements from 'evenSquares' array into constants 'firstEvenSquare' and 'secondEvenSquare'

// Step 8: Log Results using template literals
console.log(`Original numbers: ${numbers}`); // Logs the original 'numbers' array
console.log(`Squares: ${squares}`); // Logs the 'squares' array
console.log(`Even squares: ${evenSquares}`); // Logs the 'evenSquares' array
console.log(`First even square: ${firstEvenSquare}, Second even square: ${secondEvenSquare}`); // Logs the first and second even squares from 'evenSquares'
