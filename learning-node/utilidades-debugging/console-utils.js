// Style formats to show in console.log
// %s = string  
// %d = number
// %j = json

// console.log('un %s y un %s', 'perrtio', 'gatito');
// console.info('Hello world');
// console.warn('Hello error');

// console.assert(42 == '42');
// console.assert(42 === '42');

//console.trace('hello');

const util = require('util');

const debuglog = util.debuglog('foo');

debuglog('hello from foo');

// to execut in terminal you need type the next: NODE_DEBUG=foo node {nombreArchivo}