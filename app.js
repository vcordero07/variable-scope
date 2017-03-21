
//global
console.log(window.foo); // => undefined
var foo = 'fooo';
console.log(window.foo); // => 'fooo'

function logFoo() {
  console.log(foo);
}

logFoo(); // => 'fooo';


//local
var foo = 'fooo';

function logFoo() {
  var foo = 'barrrrrr';
  console.log(
    'inside this function, `foo` == "' + foo + '"');
}

logFoo(); // => 'inside this function, `foo` == "barrrrrr"'
console.log(foo); // => 'fooo'
