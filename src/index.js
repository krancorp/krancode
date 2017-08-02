"use strict";
let lexer = require("./lexer.js");
let pos = require("./position");

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    console.log('Using internal test data');
}
else {
    const fs = require('fs')
        , filename = process.argv[2];
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        console.log('OK: ' + filename);
        console.log(data)
    });
}
lexer.setInput("   M I IV III   MMMMMMMMMMMMMMDCCVIII");
let tok;
do {
    tok = lexer.lex();
    console.log(tok);
} while (tok !== "EOF");

console.log(pos.col, pos.row);
