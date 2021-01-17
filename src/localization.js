import { currentLanguage } from "./language.js";
import translateFiles from "./translateFiles.js";
import translateConverter from "./translateConverter.js";

let data = Object.assign({}, translateFiles);

/**
 *
 * @param {Object} object - The object that you want to add to lokaly.json or replace.
 * @function
 * @example
 * // Object :
 * // const translateObject = {"working": {"en": "Lokaly is working!","tr": "Lokaly çalışıyor!"}};
 * // ----------------------------
 * addMoreFile(translateObject);
 * // ----------------------------
 * console.log(lokaly("working"));
 * // Output : Lokaly is Working.
 */
export function addMoreFile(object) {
  try {
    data = { ...translateFiles, ...object };
  } catch (_) {
    console.log("The file you added is not working!");
  }
}

/**
 *
 * @param {String} translateKey - Translate key is the key you declared in lokaly.json
 * @returns {String} translateResult - Returns the message you declared in lokaly.json
 * @function
 * @example
 * // lokaly.json :
 * // "working": {"en": "Lokaly is working!","tr": "Lokaly çalışıyor!"}
 * // ----------------------------
 * console.log(lokaly("working"));
 * // Output : Lokaly is Working.
 */
let Localization = (translateKey) =>
  translateConverter(data[translateKey], currentLanguage);

export default Localization;
