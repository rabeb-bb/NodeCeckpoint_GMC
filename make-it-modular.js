const mymodule = require("./mymodule.js");
const callB = (err, list, ext) => {
  if (err) console.log(err);
  else {
    list
      .filter((el) => el.endsWith(`.${ext}`))
      .map((file) => {
        console.log(file);
      });
  }
};
mymodule(process.argv[2], process.argv[3], callB(process.argv[3]));
