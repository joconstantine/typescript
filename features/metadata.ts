import 'reflect-metadata';

@printMetadata
class Plane {
  color: string = 'red';

  @get('/login')
  fly(): void {
    console.log('vrrrrrrrr');
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata('path', path, target, key);
  };
}

function printMetadata(target: typeof Plane) {
  //typeof Plane = constructor function of the Plane class
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key);

    // router.get(path, target.prototype[key]);
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly');
// console.log(secret);

// const plane = {
//   color: 'red',
// };

// Metadata of a property
// Reflect.defineMetadata('note', 'hi there', plane, 'color');
// const note = Reflect.getMetadata('note', plane, 'color');
// console.log(note);

// Metadata of a target object
// Reflect.defineMetadata('note', 'hi there', plane);
// Reflect.defineMetadata('height', 10, plane);

// console.log(plane);

// const note = Reflect.getMetadata('note', plane);
// const height = Reflect.getMetadata('height', plane);
// console.log(note);
// console.log(height);
