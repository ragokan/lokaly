const fs = require("fs");
const path = require("path");
let translateFiles;

if (typeof window === "undefined") {
  translateFiles = JSON.parse(fs.readFileSync(path.resolve("lokaly.json")));
} else {
  const blob = new Blob([json], { type: "application/json" });
  const reader = new FileReader();
  reader.addEventListener("load", (e) => {
    path.resolve("lokaly.json");
  });
  translateFiles = JSON.parse(reader.readAsText(blob));
}

module.exports = translateFiles;
