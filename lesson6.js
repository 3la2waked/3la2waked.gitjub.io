String.prototype.filter = function (bannedWordsArray) {
    let result = this;
    bannedWordsArray.forEach(function (item) {
        result = result.replaceAll(item, '');
    });
    return result;
}

console.log("Filter the following sentence: 'The quick brown fox jumps over the lazy dog' to filter the words lazy and over")
console.log("The quick brown fox jumps over the lazy dog".filter(['lazy', 'over']));

Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < (this.length - i - 1); j++) {
            if (this[j] > this[j + 1]) {
                let temp = this[j]
                this[j] = this[j + 1]
                this[j + 1] = temp
            }
        }
    }
    return this;
}

console.log("Sort the following array using bubble sort algorithm: [6,4,0, 3,-2,1]");
console.log([6, 4, 0, 3, -2, 1].bubbleSort());

class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }

    teach() {
        return this.getName() + " is now teaching " + this.subject;
    }
}

let teacher = new Teacher("Ala Fandi", "Algorithms");

console.log(teacher.teach());

const Person2 = function (name) {
    this.name = name;
}

Person2.prototype.getName = function() {
    return this.name;
}

const Teacher2 = function(name, subject) {
    Person2.call(this, name);
    this.subject = subject;
}

Teacher2.prototype = Object.create(Person2.prototype);

Teacher2.prototype.teach = function() {
    return this.getName() + " is now teaching " + this.subject;
}

const teacher2 = new Teacher2("Ala Fandi 2", "MPP");
console.log(teacher2.teach());


const Person3 = function(name, age) {
    this.name = name;
    this.age = age;
}

Person3.prototype.greeting = function() {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age + " years old.");
}

Person3.prototype.salute = function() {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!")
}

const Student = function(name, age, major) {
    Person3.call(this, name, age);
    this.major = major;
}

Student.prototype = Object.create(Person3.prototype);

Student.prototype.greeting = function() {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

const Professor = function(name, age, department) {
    Person3.call(this, name, age);
    this.department = department;
}

Professor.prototype = Object.create(Person3.prototype);

Professor.prototype.salute = function() {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
}

const student = new Student("Mohammad Khader", 30, "CS");

student.greeting();
student.salute();

const prof = new Professor("Sami Taha", 40, "Information Technology");
prof.greeting();
prof.salute();