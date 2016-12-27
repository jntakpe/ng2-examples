class Person {
    age() {
        return 30;
    }
}

class User extends Person {

    static defaultRole() {
        return 'ROLE_USER';
    }

    constructor(login) {
        super();
        this.login = login;
    }

    toString() {
        return 'Utilisateur : ' + this.login;
    }
}

let jntakpe = new User('jntakpe');
console.log(jntakpe.toString());
console.log(jntakpe.age());
console.log(User.defaultRole());
