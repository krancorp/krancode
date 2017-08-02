"use strict";
let Lexer = require("lex");
let pos = require("./position");

let lexer = new Lexer;
//match roman numerals
lexer.addRule(/(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})/, function (lexeme) {
    pos.col = pos.col + lexeme.length;
    return "NUMBER";
}).addRule(/\n/, function () {
    pos.row++;
    pos.col = 1;
}).addRule(/\s/, function () {
    pos.col++;
}).addRule(/$/, function () {
    return "EOF";
});

module.exports = lexer;