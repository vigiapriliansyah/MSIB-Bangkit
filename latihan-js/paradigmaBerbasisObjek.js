class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name} is eating`);
  }
}

const person1 = new Person("Alice", 30);
const person2 = new Person("Vigi", 20);

console.log(person1.name);
console.log(person1.age);
console.log(person2.name);
console.log(person2.age);

person1.eat();
person2.eat();
