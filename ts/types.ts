import { User } from './user';

(function tsTypes() {
    let variable: string;
    const firstName: string = 'Jocelyn';
    const jntakpe: User = new User();
    let users: Array<User> = [new User()];
    //users = 2; // compilation error
    let someVar: any = 20;
    someVar = true;
    let changing: boolean|number = 2;
    changing = true;
})();