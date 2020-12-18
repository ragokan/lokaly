const fs = require("fs");
const path = require("path");
let translateFiles;

if (typeof window === "undefined") {
  translateFiles = JSON.parse(fs.readFileSync(path.resolve("lokaly.json")));
} else {
  translateFiles = require("../../../lokaly.json");
}

module.exports = translateFiles;
