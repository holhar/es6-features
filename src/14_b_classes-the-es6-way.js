console.log('===========================');
console.log('14.b. Classes (the ES6 way)');
console.log('---------------------------');

class Automobile {
    constructor({ title }) {
        this.title = title;
    }

    drive() {
        return 'vroom';
    }
}

class Audi extends Automobile {
    constructor(options) {
        super(options);
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const audi = new Audi({ color: 'red', title: 'Daily Driver' });
console.log(audi);
console.log(audi.drive());
console.log(audi.honk());