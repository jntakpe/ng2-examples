function getUser(login, cb) {
    //calling server => $.get('/mon_url/user', {login}, cb);
    setTimeout(function () {
        console.log('Calling server to get user ' + login);
        if (login === 'jntakpe') {
            cb({id: 1, name: 'Jocelyn NTAKPE'});
        } else if (login === 'gpeel') {
            cb({id: 2, name: 'Gauthier PEEL'});
        }
    }, 500);
}

function getRights(user, cb) {
    //calling server => $.get('/mon_url/rights', {id: user.id}, cb);
    if (user) {
        setTimeout(function () {
            console.log('Calling to get rights for ' + user.name);
            if (user.id === 1) {
                cb(['USER']);
            } else if (user.id === 2) {
                cb(['ADMIN']);
            }
        }, 500);
    }
}

function updateNavbar(rights) {
    console.log('Updating navbar with rights ' + rights);
}

getUser('jntakpe', function (user) {
    getRights(user, function (rights) {
        updateNavbar(rights);
    })
});

getUser('gpeel', function (user) {
    getRights(user, function (rights) {
        updateNavbar(rights);
    })
});
