import * as https from "https";

export const translate = (texts, targetLang, sourceLang, context) => {
  if (!Array.isArray(texts)) {
    // The code here will execute if someVariable is not an array
    return console.error("The provided variable is not an array.");
  }
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      text: texts,
      source_lang: sourceLang.toUpperCase(),
      target_lang: targetLang.toUpperCase(),
      context: context,
    });

    const options = {
      hostname: "api-free.deepl.com",
      port: 443,
      path: "/v2/translate",
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key a376eba9-e182-cdd1-c4f0-442599238704:fx`,
        "User-Agent": "YourApp/1.2.3",
        "Content-Type": "application/json",
      },
    };

    const req = https.request(options, (res) => {
      let responseBody = "";

      res.on("data", (chunk) => {
        responseBody += chunk;
      });

      res.on("end", () => {
        console.log("Response from API:", responseBody); // Log the full response
        try {
          const response = JSON.parse(responseBody);

          if (response.translations.length === 1) {
            return resolve(response.translations[0].text);
          }

          return resolve(response.translations.map((obj) => obj.text));
        } catch (error) {
          reject("Error parsing JSON: " + error);
        }
      });
    });

    req.on("error", (error) => {
      console.log(data);
      console.log("Request error: " + error);
      reject("Request error: " + error);
    });

    req.write(data);
    req.end();
  });
};

// Example usage
//const yourAuthKey = 'a376eba9-e182-cdd1-c4f0-442599238704:fx'; // Replace with your DeepL Auth Key
//translateString('Hello, world!', 'es', 'en')
//  .then(translatedText => console.log('Translated text:', translatedText))
//.catch(error => console.error(error));
