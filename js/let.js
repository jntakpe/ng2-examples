function addAdminSuffix(user) {
    if (user.isAdmin) {
        let name = user.name + '_ADMIN';
        return name;
    }
    console.log(name); //not defined or undefined ???
    return user.name;
}

console.log(addAdminSuffix({name: 'Jocelyn', isAdmin: true}));
console.log(addAdminSuffix({name: 'Gauthier'}));