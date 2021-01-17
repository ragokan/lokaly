const translateConverter = (toTranslate, currentLanguage) => {
  try {
    return toTranslate[currentLanguage];
  } catch (error) {
    return "To Translate or language is not found!";
  }
};

export default translateConverter;
