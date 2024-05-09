// Exercise 1
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here

const num2 = nums.map((currentElement) => {
    return currentElement * 2;

});

console.log(num2);

//Exercise 2
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here

const [firstTop, secTop] = pizzaToppings;

console.log(firstTop, secTop);

//Exercise 3
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
const { make, model } = car;

console.log(make, model);

//Exercise 4
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

//const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppings];

console.log(controversialPizzaToppings);

//Exercise 5
// Duplicate the following object and spread its values into a new variable `myCar`.

// const car = {
//     make: 'Audi',
//     model: 'q5',
//   };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
const myCar = { ...car };

myCar.model = 'q7';

console.log(car, myCar);

//Exercise 6
// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = 'romel'; //variable as a dynamic key

const userProfile = {
    [propertyName]: 5,
};

console.log(userProfile);

//Exercise 7

//Exercise 8
// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
function sentence(noun = 'cat', adjective = 'white') {
    return 'The ' + noun + ' is  ' + adjective + '.';
}

sentence();

console.log(sentence());

//Exercise 9
// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
let goodPizza = pizza === 'tasty' ? 'yum' : 'yuck';

console.log(goodPizza);

//Exercise 10
// Simulated language configuration (change this variable to test)
const localLangConfig = null || 'fr'; // Change to 'es', 'fr', etc., or keep it null

// Create a variable called LANG
// Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = 'en';
// Log the result
console.log('Language setting:', LANG);

// Simulated user theme preference (change this variable to test)
const userSavedTheme = 'dark' && 'contrast'; // Change to 'dark', 'contrast', etc., or keep it null

// Create a variable called USER_THEME
// Assign USER_THEME the value of userSavedTheme or 'light' as a default
const USER_THEME = userSavedTheme;
// Your code here

// Log the result
console.log('User theme setting:', USER_THEME);

//Exercise 11
// Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.

const adventurer = {
    name: 'Alice',
  };
  
let cat = adventurer.cat?.age; // Your code here
  
console.log(cat);