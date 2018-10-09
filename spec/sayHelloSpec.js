//var sayHello = require('../src/scripts/sayHello.js');
import * as sayHello from '../src/scripts/sayHello.js';

describe('Greet', () => {
    it('concats Hello and a name', () => {
        var actual = sayHello.greet('World');
        var expected = 'Hello, World';
        expect(actual).toEqual(expected);
    });

    it('shows error message if name is not provided', () => {
        var actual = sayHello.greet();
        var expected = 'Please provide your name.';
        expect(actual).toEqual(expected);
    });
});