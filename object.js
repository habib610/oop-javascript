var userOne = {
    email: "habib@mail.com",
    name: "habib",
    login(){
        console.log(this.email, "has login");
    },
    logout() {
        console.log(this.email, "has logout!");
    }
}

console.log(userOne.name)