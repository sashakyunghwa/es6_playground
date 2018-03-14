class Person {
    constuctor(name){
        this.name = name;
    }

    sayHi(){
        return `Hello, my name is ${this.name}`;
    }
}

class SuperPerson extends Person {
    constructor(name, catchPhrase){
        super(name);
        this.phrase = catchPhrase;
    }

    sayPhrase(){
    return this.phrase;
}

sayBye(){
        return `My name is ${this.name}, good day.`;
    }

sayHello(){
    return super.sayHi() + ' I\'m a super person now';
}
}

const bob = new SuperPerson('Bob', 'Up up and Bob\'s away!');

console.log('Bob:', bob.sayHi());
console.log('Bob:', bob.sayBye());
console.log('Bob:', bob.sayPhrase());
console.log('Bob:', bob.sayHello());