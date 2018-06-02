class Person {
    constructor(name = 'anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGretting() {
        // return "Hi! I am " + this.name + "!";
        return `Hi. i am ${this.name}!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()) description += ` Their major is ${this.major}`;
        return description;
    }
} 

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGretting();
        if(this.homeLocation) {
            return greeting + ` I'm visiting from ${this.homeLocation}.`
        }

        return greeting;
    }

}

const me = new Person("Danilo Assis", 32);
console.log(me);
console.log(me.getDescription());


const other = new Person();
console.log(other);
console.log(other.getDescription());

const student = new Student("Duilio", 10, "Computer Science");
console.log('Has major? ',student.hasMajor());
console.log(student);
console.log(student.getDescription())

const traveler = new Traveler("Traveler", 11, "Rua Evandil Bandeira, 151");
console.log(traveler);
console.log(traveler.getDescription());
console.log(traveler.getGreeting());

const traveler2 = new Traveler("Traveler 2", 111);
console.log(traveler2);
console.log(traveler2.getDescription());
console.log(traveler2.getGreeting());