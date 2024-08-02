// Copyright 2024 Uncover-F
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//     http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// index.js
import fetch from 'node-fetch';

async function translateText(text, sourceLang = 'en', targetLang = 'fr') {
    const workerUrl = 'https://655.mtis.workers.dev/translate';
    
    // Parameters for translation (customize as needed)
    const params = {
        text,  // Text to translate
        source_lang: sourceLang,  // Source language code
        target_lang: targetLang   // Target language code
    };

    // Construct URL with query parameters
    const url = new URL(workerUrl);
    url.search = new URLSearchParams(params).toString();

    try {
        // Send GET request to the Cloudflare Worker endpoint
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse JSON response
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export default translateText;
