import fs from "fs";
import path from "path";

const translateFiles = JSON.parse(fs.readFileSync(path.resolve("lokaly.json")));

export default translateFiles;
