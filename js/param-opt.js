function paginateUsersOldNaive(page, size) {
    if (!size) {
        size = 10;
    }
    if (!page) {
        page = 1;
    }
    //calling server
    return {page, size};
}

function paginateUsersOldSmarter(page, size) {
    size = size || 10;
    page = page || 1;
    return {page, size};
}

function paginateUsersNew(page = 1, size = defaultSize()) {
    return {page, size};
}

function defaultSize() {
    return 10;
}

let {page, size} = paginateUsersOldNaive();
console.log('Old naive => page: ' + page + '| size:' + size);

({page, size} = paginateUsersOldSmarter());
console.log('Old       => page: ' + page + '| size:' + size);

({page, size} = paginateUsersNew());
console.log('New       => page: ' + page + '| size:' + size);