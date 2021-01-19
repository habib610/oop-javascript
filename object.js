class User {

    constructor(name, email) {
        this.name = name,
        this.email = email
    }
    login(){
        console.log(`${this.name} just login`);
    }
    logout() {
        console.log(`${this.name} just log out`)
    }
}

const userOne = new User("habib", "habib@example.com");
const userTwo = new User("rahman", "rahman@example.com");

userOne.login();
userTwo.login()