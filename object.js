class User {

    constructor(name, email) {
        this.name = name,
        this.email = email
    }
}

const userOne = new User("habib", "habib@example.com");
const userTwo = new User("rahman", "rahman@example.com");

console.log(userOne);
console.log(userTwo.name);