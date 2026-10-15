# Website language-selection options

## Finding
For the phone-preview phase, use a language menu that opens the public homepage through Google Translate in a new tab. The example URL form `https://translate.google.com/translate?sl=auto&tl=<language-code>&u=<public-page-url>` redirected the public example site to a `*.translate.goog` page and showed the source/target language selector. In that view, the toolbar lets a visitor choose additional supported languages. This is a third-party translated view rather than a native, in-place app locale.

The menu must pass only the public root URL, never query strings, hashes, or form data. The personal To-do panel and inquiry dialog must be closed before navigating; they stay local to the original app origin. Translation may be inaccurate, especially for visa, employment or financial information, so those statements must remain independently verified.

If a later native in-app translation service is required, the site needs a selected provider, an owner-controlled account/API credential, a protected server proxy and a privacy notice. Do not place an API key in the browser. Do not claim every language is supported; availability is provider-dependent.

## Official language support references
- Google Cloud Translation's official language page distinguishes model support and experimental support; it includes Bengali, Hindi, Malay, Urdu and many other language codes. This shows a potential later API path, not an API integration already enabled: https://docs.cloud.google.com/translate/docs/languages
- Microsoft Azure Translator's official language list includes Bangla, Hindi, Malay and Urdu among its cloud text-translation options: https://learn.microsoft.com/en-us/azure/ai-services/translator/language-support
- DeepL's official API page exposes language coverage and recommends querying its language endpoint for current programmatic support: https://developers.deepl.com/docs/getting-started/supported-languages

## Browser verification
- Tested on public `https://example.com` with the Google Translate URL form. Result: a `https://example-com.translate.goog/` translated view with Spanish selected and an on-page translation/language toolbar.
