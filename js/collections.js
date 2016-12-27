const jntakpe = {login: 'jntakpe', name: 'Jocelyn NTAKPE'};
const gpeel = {login: 'gpeel', name: 'Gauthier PEEL'};

const usersMap = new Map();
usersMap.set(jntakpe.login, jntakpe);
usersMap.set(gpeel.login, gpeel);
console.log(usersMap.has('jntakpe'));
console.log(usersMap.size);
usersMap.delete('jntakpe');
console.log(usersMap);

console.log('//////////////////////////////////////////////////////////');

const usersSet = new Set();
usersSet.add(jntakpe);
usersSet.add(gpeel);
console.log(usersSet.has(jntakpe));
console.log(usersSet.size);
usersSet.delete(jntakpe);
console.log(usersSet);

console.log('////////////////////////////////////////////////////////////////');

usersMap.forEach((v, k) => console.log('Key : ' + k, 'Value name: ' + v.name));