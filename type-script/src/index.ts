
class Greet{
  constructor(public message: string) { }
  sayHello (): void {
    console.log('hello' + this.message);
  }
}

const greet = new Greet('world');
greet.sayHello();