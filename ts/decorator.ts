const Log = function () {
    return (target: any, name: string, descriptor: any) => {
        console.log({target, name, descriptor});
        return descriptor;
    };
};

class GreetingsService {

    @Log()
    sayHello(username: string) {
        console.log(`Bonjour ${username}`);
    }
}

new GreetingsService().sayHello('jntakpe');