import join from 'lodash/join';
class Greet{
  constructor(public message: string) { }
  sayHello (): void {
    console.log(join(['hello', ' ', this.message], ''));
  }
}

const greet = new Greet('world');
greet.sayHello();