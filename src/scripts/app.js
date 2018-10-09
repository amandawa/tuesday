// var sayHello = require('./sayHello.js');
// window.addEventListener('load', function(){
//     document.getElementById('welcome-message')
//         .innerHTML = sayHello.greet('Your name');
// });

//const sayHello = require('./sayHello.js');
import * as sayHello from './sayHello.js';

window.addEventListener('load', () => {
    document.getElementById('welcome-message').innerHTML = sayHello.greet('Chris');
});
