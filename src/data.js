// Array to be destructured

const animals = [
  {
    name: "cat",
    sound: "meow",
    foodRequirements: {
      food: 3,
      water: 2
    }
  },
  { name: "dog", sound: "woof" }
];

// useState

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };
