// arguments object - no longer bound with arrow function

// const add = (a, b) => {
//     console.log(arguments); // no longer be able to access arguments by arrow function
//     return a+b;
// }

// console.log(add(55,11,1001));

// this keyword - no longer bound

const user = {
    name: "Danilo Assis",
    cities: ['João Pessoa', 'Intermares'],
    printPlacesLived () {
        return this.cities.map((city) => this.name + " has lived in " + city);
    }
}

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply () {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());