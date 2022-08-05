import animals, { useAnimals } from "./data.js";

// Let's Destructure Objects

// To desctrure array, assign names to the two objects in data.js with array literal
const [cat, dog] = animals;
/*
console.log(dog);

// Similar can be done to destructure the object, with curly braces
const { name: catName, sound: catSound } = cat;
const { name: dogName, sound: dogSound } = dog;

console.log(dogSound);
// or just GET
console.log(animals[1].sound);

// Now let's destructure the nested object
const { food: catFood, water } = cat.foodRequirements;

console.log(water);

// Destructure all in one line (if i need all)
const {
  name,
  sound,
  foodRequirements: { food, water }
} = cat;
*/

// useAnimals
const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();
