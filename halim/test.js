import * as https from 'https';

function translateString(text, targetLang, sourceLang) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            text: [text],
            source_lang: sourceLang,
            target_lang: targetLang
        });

        const options = {
            hostname: 'api-free.deepl.com',
            port: 443,
            path: '/v2/translate',
            method: 'POST',
            headers: {
                'Authorization': `DeepL-Auth-Key a376eba9-e182-cdd1-c4f0-442599238704:fx`,
                'User-Agent': 'YourApp/1.2.3',
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(options, (res) => {
            let responseBody = '';

            res.on('data', (chunk) => {
                responseBody += chunk;
            });

            res.on('end', () => {
                console.log('Response from API:', responseBody);  // Log the full response
                try {
                    const response = JSON.parse(responseBody);
                    resolve(response.translations[0].text);
                } catch (error) {
                    reject('Error parsing JSON: ' + error);
                }
            });
        });

        req.on('error', (error) => {
            reject('Request error: ' + error);
        });

        req.write(data);
        req.end();
    });
}

// Example usage
//const yourAuthKey = 'a376eba9-e182-cdd1-c4f0-442599238704:fx'; // Replace with your DeepL Auth Key
//translateString('Hello, world!', 'es', 'en')
  //  .then(translatedText => console.log('Translated text:', translatedText))
    //.catch(error => console.error(error));
