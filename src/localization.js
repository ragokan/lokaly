import { currentLanguage } from "./language.js";
import translateFiles from "./translateFiles.js";

const translateConverter = (toTranslate, currentLanguage) => {
  try {
    return toTranslate[currentLanguage];
  } catch (error) {
    return "To Translate or language is not found!";
  }
};
let Localization = (translateKey) => translateConverter(translateFiles[translateKey], currentLanguage);

export default Localization;
