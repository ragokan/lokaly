# Lokaly

## The easiest package to use localization in your app!

## How to use

### Create lokaly.json file in your main folder, then create sentences/words to translate just like the below example

```json
{
  "enter": {
    "en": "Welcome",
    "tr": "Hoşgeldin"
  },
  "sonuc": {
    "en": "Your result",
    "tr": "Sonucunuz"
  },
  "working": {
    "en": "Lokaly is working!",
    "tr": "Lokaly çalışıyor!"
  }
}
```

### To use, import lokaly and call the sentence you want to call. Just like 'lokaly("enter")'

### To change the language, import setLanguage from lokaly
