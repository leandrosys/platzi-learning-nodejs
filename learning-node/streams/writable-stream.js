const { Writable } = require('stream');

const writableStream = new Writable({
    write(chunck, encoding, callback) {
        console.log(chunck.toString());
        callback();
    }
});

process.stdin.pipe(writableStream);