const numbers = [1, 2, 3, 4];

///////////////////////////////////////////////////////////////////////
const maxFinder = {
    max: 0,
    find: function (numbers) {
        numbers.forEach(function (number) {
            if (number > this.max) {
                this.max = number;
            }
        });
    }
};
maxFinder.find(numbers);
console.log('Normal : ' + maxFinder.max);

///////////////////////////////////////////////////////////////////////////
const selfMaxFinder = {
    max: 0,
    find: function (numbers) {
        const self = this;
        numbers.forEach(function (number) {
            if (number > self.max) {
                self.max = number;
            }
        });
    }
};
selfMaxFinder.find(numbers);
console.log('Self : ' + selfMaxFinder.max);

///////////////////////////////////////////////////////////////////////////////
const bindMaxFinder = {
    max: 0,
    find: function (numbers) {
        numbers.forEach(function (number) {
            if (number > this.max) {
                this.max = number;
            }
        }.bind(this));
    }
};
bindMaxFinder.find(numbers);
console.log('Bind : ' + bindMaxFinder.max);

////////////////////////////////////////////////////////////////////////////////
const readDocMaxFinder = {
    max: 0,
    find: function (numbers) {
        numbers.forEach(function (number) {
            if (number > this.max) {
                this.max = number;
            }
        }, this);
    }
};
readDocMaxFinder.find(numbers);
console.log('Read doc : ' + readDocMaxFinder.max);

/////////////////////////////////////////////////////////////////////////////////////
const es6MaxFinder = {
    max: 0,
    find: function (numbers) {
        numbers.forEach(number => {
            if (number > this.max) {
                this.max = number;
            }
        });
    }
};
es6MaxFinder.find(numbers);
console.log('ES 6 : ' + es6MaxFinder.max);