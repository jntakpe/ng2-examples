const user = {username: 'gpeel', authority: 'admin', address: {city: 'Aix'}};

function createUser() {
    return user;
}

// renaming field
const {username, authority: role} = user;
console.log(username);
console.log(role);

console.log('//////');
//func exec, cascading
const {address: {city}} = createUser();
console.log(city);

console.log('//////');
const arr = ['Jocelyn', 'Gauthier', 'Benjamin'];
const [first, second] = arr;
console.log(first);
console.log(second);