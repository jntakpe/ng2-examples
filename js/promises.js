function getUser(login) {
    //calling server => $.get('/mon_url/user', {login}, cb);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Calling server to get user ' + login);
            if (login === 'jntakpe') {
                resolve({id: 1, name: 'Jocelyn NTAKPE'});
            } else if (login === 'gpeel') {
                resolve({id: 2, name: 'Gauthier PEEL'});
            } else {
                reject('Erreur côté serveur');
            }
        }, 500);
    });
}

function getRights(user) {
    //calling server => $.get('/mon_url/rights', {id: user.id}, cb);
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log('Calling to get rights for ' + user.name);
            if (user.id === 1) {
                resolve(['USER']);
            } else if (user.id === 2) {
                resolve(['ADMIN']);
            } else {
                reject('Erreur côté serveur');
            }
        }, 500);
    });
}

function updateNavbar(rights) {
    console.log('Updating navbar with rights ' + rights);
}

getUser('jntakpe').then(function (user) {
    return getRights(user);
}, function (err) {
    return Promise.reject('Some local error :' + err);
}).then(function (rights) {
    updateNavbar(rights);
});
getUser('sdf').then(function (user) {
    return getRights(user);
}).then(function (rights) {
    updateNavbar(rights);
}).catch(function (err) {
    console.log('Catching all errors : ' + err);
});
