class ConsoleWriter implements Writer {
    prop: string = 'Une variable de classe';

    constructor(public firstName: string, private lastName: string) {
    }

    write(message: string) {
        console.log(message);
        console.log(this.prop);
        console.log(`${this.firstName} ${this.lastName}`);
    }

}

new ConsoleWriter('Jocelyn', 'NTAKPE').write('Some param');