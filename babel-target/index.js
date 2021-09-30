
const fn = () => {
    console.log('wens')
};

const p = new Promise((resolve, reject) => {
    resolve('wens')
});

class Person {
    constructor(name) {
        this.name = name
    }
}

let xiaoming = new Person('小明')

const list = [1, 2, 3, 4].map(item => item * 2);