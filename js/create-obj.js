function createUserOld() {
    const username = 'gpeel';
    const role = 'admin';
    return {username: username, role: role};
}

function createUserNew() {
    const username = 'gpeel';
    const role = 'admin';
    return {username, role};
}

console.log(createUserOld());
console.log(createUserNew());