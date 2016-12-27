const gpeel = {
    firstname: 'Gauthier',
    lastname: 'PEEL'
};

const fullname = 'Monsieur ' + gpeel.firstname + ' ' + gpeel.lastname;
console.log(fullname);

const tplFullname = `Monsieur ${gpeel.firstname} ${gpeel.lastname}`;
console.log(tplFullname);

const multiLine = `<div>
    <h1>Multi</h1>
</div>`;
console.log(multiLine);