const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('hello Pluto');   
}, 'pluto is deprecate. It is not planet anymore');

helloPluto();

// If you wanna do debugging to file, you need execute the next line on terminal: node --inspect {archivo}
// according with the last, you need open your browser and typing localhost:9229 and later open 
// the terminal, finally you should be clic on the NODE button icon.