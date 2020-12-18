const fs = require("fs");
const path = require("path");

const translateFiles = JSON.parse(fs.readFileSync(path.resolve("lokaly.json")));

module.exports = translateFiles;
