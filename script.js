// Sum function - first check if parameter is an integer
// function sum() {

// }

// Factorial function - takes a number and returns the factorial of that number
function factorial(num) {
    let result = 1;
    for (let i = num; i > 0; i--) {
        result *= i;
    }
    return result;
}
console.log(`Factorial of 4: ${factorial(4)}`);

// // funkyMath Function - 
// function funkyMath(a, b, c, d) {
//     if 
// }

// Loop that removes odd numbers from string and adds them to a new array from smallest to biggest.
let nums = [1, 2, 33, 45, 6, 44]
let oddNums = []

for (let i = nums.length -1; i >= 0; i--) {
    if (nums[i] % 2 !== 0) {
        oddNums.push(nums.splice(i, 1)[0]);
    } 
}

oddNums.sort((a, b) => a - b);
console.log(`Even numbers: ${nums}`);
console.log(`Odd numbers: ${oddNums}`);


// Create object with properties of first name, last name, age, favourite colour, dream car.
let me = {
    firstName: "Angela",
    lastName: "Solomons",
    age: "50",
    favColour: "yellow",
    dreamCar: "Porsche",
}
console.log(me);

// Add a new property - favourite food
me.favouriteFood = "Sushi";
console.log(me);

// Delete the age property
delete me.age;
console.log(me);