import { currentLanguage } from "./language.js";
import translateFiles from "./translateFiles.js";

const translateConverter = (toTranslate, currentLanguage) => {
  try {
    return toTranslate[currentLanguage];
  } catch (error) {
    return "To Translate or language is not found!";
  }
};
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
  translateConverter(translateFiles[translateKey], currentLanguage);

export default Localization;
