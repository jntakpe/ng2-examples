const formateurs = [];

function oldPush(formateursToPush) {
    for (let i = 0; i < arguments.length; i++) {
        formateurs.push(arguments[i]);
    }
}

oldPush('Jocelyn', 'Gauthier', 'Sébastien');
console.log(formateurs);

formateurs.length = 0;

function newPush(...formateursToPush) {
    for (let formateur of formateursToPush) {
        formateurs.push(formateur);
    }
}

newPush('Jocelyn', 'Gauthier', 'Sébastien');
console.log(formateurs);

formateurs.length = 0;

function functionalPush(...formateursToPush) {
    formateursToPush.forEach(function (formateur) {
        formateurs.push(formateur);
    });
}

functionalPush('Jocelyn', 'Gauthier', 'Sébastien');
console.log(formateurs);

const [firstForm, ...others] = formateurs;
console.log('First : ' + firstForm + ' ||| Rest: ' + others);