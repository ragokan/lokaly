import lokaly from "./src/localization.js";
import { currentLanguage, setLanguage } from "./src/language.js";

console.log(lokaly("working"));

export { currentLanguage, setLanguage };
export default lokaly;
