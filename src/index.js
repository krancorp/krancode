"use strict";
const parser = require("./parser");
const pos = require("./position");

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' FILENAME');
    console.log('Using internal test data');
    parser.lexer.setInput("   M I IV III   MMMMMMMMMMMMMMDCCVIII");
    main();
}
else {
    const fs = require('fs')
        , filename = process.argv[2];
    fs.readFile("examples/" + filename, 'utf8', function (err, data) {
        if (err) throw err;

        console.log('OK: ' + filename);
        console.log(parser.parse(data));
    });
}