
// provides utilities for working with file and directory paths. 
const path = require("node:path");
const fs = require("fs");

console.log(__filename);
console.log(__dirname);

// get extension of file 
console.log("extension file:", path.extname(__filename));

// get name of file 
console.log("file name:", path.basename(__filename));

fs.writeFile(path.join(__dirname, "message.txt"), "Message", () => {} )