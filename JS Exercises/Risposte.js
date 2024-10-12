// RISPOTA 1.

const pets = ['dog', 'cat', 'hamster', 'redfish']
console.log([pets]);

// RISPOTA 2.

pets.sort ();
console.log(pets);


// RISPOTA 3.

pets.reverse();
console.log(pets);

// RISPOTA 4.

let arr = ['dog', 'cat', 'hamster', 'redfish']
let removedElement = arr.splice(0,1)[0];
arr.push(removedElement);
console.log(arr);

// RISPOTA 5.

const cars = [
    {
      brand: 'Ford',
      model: 'Fiesta',
      color: 'red',
      trims: ['titanium', 'st', 'active'],
    },
    {
      brand: 'Peugeot',
      model: '208',
      color: 'blue',
      trims: ['allure', 'GT'],
    },
    {
      brand: 'Volkswagen',
      model: 'Polo',
      color: 'black',
      trims: ['life', 'style', 'r-line'],
    },
  ]
  cars.forEach(car => {car.licensePlate = ('ABC') + Math.floor(Math.random()* 1000);})
  console.log(cars);

  // RISPOTA 6.

cars.push({
    brand: 'OMODA 5',
    model: 'Model 290T',
    color: 'BLACK',
    trims: ['standard', 'long range', 'performance'],
  });
  
  cars.forEach(car => {
    car.trims.pop();
  });
  console.log(cars);

  // RISPOTA 7.

const justTrims = [];
cars.forEach(car => {
  justTrims.push(car.trims[0]);
});
console.log(justTrims);


// RISPOTA 8.

cars.forEach(car => {
    if (car.color.charAt(0) === 'b') {
      console.log('Fizz');
    } else {
      console.log('Buzz');
    }
  });

  // RISPOTA 9.

const numericArray = [
    6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
  ];
  
  let i = 0;
  while (numericArray[i] !== 32) {
    console.log(numericArray[i]);
    i++;
  }

  // RISPOTA 10.

const charactersArray = ['g', 'n', 'u', 'z', 'd'];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const positionsArray = [];
charactersArray.forEach(char => {
  positionsArray.push(alphabet.indexOf(char) + 1);
});
console.log(positionsArray); 