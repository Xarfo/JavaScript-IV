// CODE here for your Lambda Classes
class Person {
    constructor(personAttr){
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }

    speak() {
        return `Hello my name is ${this.name}, I am from ${this.location}`;
    }
};

const Fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    gender: 'male',
  });

  console.log(fred.speak());