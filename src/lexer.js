"use strict";
let Lexer = require("lex");
let pos = require("./position");

let lexer = new Lexer(function (char) {
    throw new Error("Unexpected character at row " + pos.row + ", col " + pos.col + ": " + char);
});

//match roman numerals
lexer.addRule(/(?=[MDCLXVI])M*(C[MD]|D?C{0,3})(X[CL]|L?X{0,3})(I[XV]|V?I{0,3})/, function (lexeme) {
    pos.col = pos.col + lexeme.length;
    this.yytext = lexeme;
    return "NUMBER";
}).addRule(/([a-z|_]+[0-9]*)+/, function (lexeme) {
    pos.col = pos.col + lexeme.length;
    this.yytext = lexeme;
    return "ID";
}).addRule(/\+/, function () {
    pos.col++;
    return "+";
}).addRule(/-/, function () {
    pos.col++;
    return "-";
}).addRule(/\//, function () {
    pos.col++;
    return "/";
}).addRule(/\*/, function () {
    pos.col++;
    return "*";
}).addRule(/=/, function () {
    pos.col++;
    return "=";
}).addRule(/\/\/.*/, function () {
    //comment, so do nothing
}).addRule(/\n/, function () {
    pos.row++;
    pos.col = 1;
}).addRule(/\s/, function () {
    pos.col++;
}).addRule(/$/, function () {
    return "EOF";
});

module.exports = lexer;