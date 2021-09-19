const fs = require("fs");

var data = fs.readFileSync(process.argv[2]);

let num = data.toString().split("\n");
console.log(num.length - 1);
