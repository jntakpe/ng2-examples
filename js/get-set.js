class User {

    constructor(login) {
        this._login = login;
    }

    get login() {
        return this._login.toLowerCase();
    }

    set login(login) {
        if (login) {
            this._login = login.trim();
        }
    }

    toString() {
        return 'Login : \'' + this._login + '\'';
    }
}

const jntakpe = new User();
jntakpe.login = ' JNtakpe';
console.log(jntakpe.toString());
console.log(jntakpe.login);