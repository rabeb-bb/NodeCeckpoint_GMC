const fs = require("fs");
const mymodule = (dir, ext, func) => {
  let lst = fs.readdir(dir, func(ext));
};

module.exports = require("./mymodule.js");
