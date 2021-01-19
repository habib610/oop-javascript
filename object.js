class User {

    constructor(name, email) {
        this.name = name,
        this.email = email,
        this.score = 0
    }
    login(){
        console.log(`${this.name} just login`);
        return this;
    }
    logout() {
        console.log(`${this.name} just log out`);
        return this;
    }
    updateScore() {
        this.score++;
        console.log(`${this.name} has score ${this.score}`)
        return this;
    }
}

const userOne = new User("habib", "habib@example.com");
const userTwo = new User("rahman", "rahman@example.com");

userOne.login().updateScore().updateScore().logout().login().updateScore().logout();