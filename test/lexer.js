"use strict";
const lexer = require("../src/lexer");
const expect = require("chai").expect;
const pos = require("../src/position");
const it = require("mocha").it;
const describe = require("mocha").describe;

describe("Character stream to token stream conversion", function () {
    it("matches Roman numerals", function () {
        const input = "MMMDCVIII";
        const res = lexer.setInput(input).lex();
        expect(res).to.equal("NUMBER");
        expect(pos.col).to.equal(input.length + 1);
    });
});

