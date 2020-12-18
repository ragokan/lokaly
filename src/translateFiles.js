import fs from "fs";
import path from "path";
let translateFiles;

if (typeof window === "undefined") {
  translateFiles = JSON.parse(fs.readFileSync(path.resolve("lokaly.json")));
} else {
  const data = require("../../../lokaly.json");
  translateFiles = data;
}

export default translateFiles;
