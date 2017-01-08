interface Writer {
    write(message: string): void;
}

let user = {name: 'Jocelyn NTAKPE'};

function writeUserName(writer: Writer) {
    writer.write(user.name);
}

writeUserName({write: message => console.log(message)});