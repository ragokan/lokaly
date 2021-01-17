import fs from "fs";
import path from "path";
export let translateFiles;

try {
  if (typeof window === "undefined") {
    translateFiles = JSON.parse(fs.readFileSync(path.resolve("lokaly.json")));
  } else {
    const data = require("../../../lokaly.json");
    translateFiles = data;
  }
} catch (_) {
  translateFiles = {};
}

export default translateFiles;
