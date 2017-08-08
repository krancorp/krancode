"use strict";
const Parser = require("jison").Parser;
const lexer = require("./lexer");
const convert = require("./convert");
const grammar = {
    "operators": [
        ["left", "+", "-"],
        ["left", "*", "/"],
        ["right", "="]
    ],
    "bnf": {
        "expression": [["e EOF", "console.log($$)"]],
        "e": [["e + e", "$$ = \"(\" +$1 + \" + \" + $3 + \")\";"],
            ["e - e", "$$ = \"(\" +$1 + \" - \" + $3 + \")\";"],
            ["e * e", "$$ = \"(\" +$1 + \" * \" + $3 + \")\";"],
            ["e / e", "$$ = \"(\" +$1 + \" / \" + $3 + \")\";"],
            ["e = e", "$$ = \"(\" +$1 + \" = \" + $3 + \")\";"],
            ["ID", "$$ = $1;"],
            ["NUMBER", "($$ = require(\"../../../src/convert\")($1));"]]
    }
};
let parser = new Parser(grammar);
parser.lexer = lexer;
module.exports = parser;