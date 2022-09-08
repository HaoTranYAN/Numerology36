// // { code: "ar", name: "عربى" },
// // { code: "de", name: "Deutsche" },
// // { code: "es", name: "Español" },
// // { code: "fr", name: "Français" },
// // { code: "hi", name: "हिन्दी" },
// // { code: "id", name: "Bahasa Indonesia" },
// // { code: "ja", name: "日本人" },
// // { code: "pt", name: "Português" },
// // { code: "ru", name: "Pусский" },
// // { code: "zh", name: "中文" },
// // console.log("system: " + languageCode);

import { _decorator, sys } from 'cc';
const LANGUAGE = "language";
export const Languages = {
    languages: [
        { code: "en", name: "English" },
        { code: "vi", name: "Tiếng Việt" },
      ],
      getSystemLanguage() {
        var languageCode = sys.languageCode;
        if(languageCode != null) languageCode = languageCode.slice(0,2);
        var result = "en";
        let len = this.languages.length;
        for (var i = 0; i < len; i++) {
          if (languageCode == this.languages[i].code) {
            result = languageCode;
            break;
          }
        }
        return result;
      },
      getLanguage() {
        var language = sys.localStorage.getItem(LANGUAGE);
        if (language == null || language == undefined || language == "null") {
          language = this.getSystemLanguage();
        }
        return language;
      },
      getLanguageName(languageCode){
        var result = "en";
        let len = this.languages.length;
        for (var i = 0; i < len; i++) {
          if (languageCode == this.languages[i].code) {
            result = this.languages[i].name;
            break;
          }
        }
        return result;
      },
      updateLanguage(language){
        sys.localStorage.setItem(LANGUAGE, language);
      }
};

/**
 * Note: The original script has been commented out, due to the large number of changes in the script, there may be missing in the conversion, you need to convert it manually
 */
// const LANGUAGE = "language";
// export const Languages = {
//     languages: [
//         // { code: "ar", name: "عربى" },
//         // { code: "de", name: "Deutsche" },
//         { code: "en", name: "English" },
//         // { code: "es", name: "Español" },
//         // { code: "fr", name: "Français" },
//         // { code: "hi", name: "हिन्दी" },
//         // { code: "id", name: "Bahasa Indonesia" },
//         // { code: "ja", name: "日本人" },
//         // { code: "pt", name: "Português" },
//         // { code: "ru", name: "Pусский" },
//         { code: "vi", name: "Tiếng Việt" },
//         // { code: "zh", name: "中文" },
//       ],
//       getSystemLanguage() {
//         var languageCode = cc.sys.languageCode;
//         // console.log("system: " + languageCode);
//         if(languageCode != null) languageCode = languageCode.slice(0,2);
//         var result = "en";
//         let len = this.languages.length;
//         for (var i = 0; i < len; i++) {
//           if (languageCode == this.languages[i].code) {
//             result = languageCode;
//             break;
//           }
//         }
//         return result;
//       },
//     
//       getLanguage() {
//         var language = cc.sys.localStorage.getItem(LANGUAGE);
//         if (language == null || language == undefined || language == "null") {
//           language = this.getSystemLanguage();
//         }
//         return language;
//       },
// 
// 
//       getLanguageName(languageCode){
//         var result = "en";
//         let len = this.languages.length;
//         for (var i = 0; i < len; i++) {
//           if (languageCode == this.languages[i].code) {
//             result = this.languages[i].name;
//             break;
//           }
//         }
//         return result;
//       },
// 
//       updateLanguage(language){
//         cc.sys.localStorage.setItem(LANGUAGE, language);
//       }
// };
