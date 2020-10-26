const fs = require("fs");

console.log('Opening files...');
for (let i = 0; i < 50000; i++) {
  const fd = fs.openSync("./data/app.log");
  console.log(fd)
  // without this, program crashes with too many open files
  fs.closeSync(fd)
}
