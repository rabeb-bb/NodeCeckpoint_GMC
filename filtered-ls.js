const fs = require("fs");
let lst = fs.readdir(process.argv[2], (err, list) => {
  if (err) console.log(err);
  else {
    list
      .filter((el) => el.endsWith(`.${process.argv[3]}`))
      .map((file) => {
        console.log(file);
      });
  }
});
