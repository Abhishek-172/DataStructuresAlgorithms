class Student {
    constructor(firstname, lastname, grade) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.grade = grade;
        this.tardies = 0;
    }
    fullName() {
        return `Your Full Name is ${this.firstname} ${this.lastname}`;
    }
    markLate() {
        this.tardies += 1;
        if (this.tardies >= 3) {
            return 'You are Expelled';
        }
        return `Dear ${this.firstname} ${this.lastname} You are late ${this.tardies} times`;
    }
} 

// Creating a Object

let student2 = new Student('Abhishek', 'Pandey', 3);
