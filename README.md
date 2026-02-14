# Panglish

pulling up with older words that sound more "rooted"

![panglish home page](./images/screenshot1.png)

an LLM-based dictionary/translation website
(a "big tongue tool"-rooted word-book/tongue-shifting web work)

## Forewords

What would English look like if it had no outside borrowings? 

> Panglish is a linguistic experiment that translates modern English words and phrases back to their Germanic etymological roots (not to be confused with the current _German language_). By stripping away Latin, French, Greek (and most other) borrowings, we reveal the "pure" Germanic core of the English language.<br />
English is a Germanic language that has borrowed heavily from Romance and other languages. Panglish imagines: what if English had developed without these influences?

Those words would have looked like this:

> Panglish is a <strong>speechlore try-out</strong> that <strong>tongue-shifts</strong> the English words and <strong>word-rows</strong> of <strong>today</strong> back to their Germanic <strong>word-birth</strong> roots (not to be <strong>mixed-up</strong> with <strong>today's</strong> <em>German</em> <strong>language</strong>). By stripping away Latin, French and Greek borrowings, we <strong>show</strong> the <strong>"rooted"</strong> Germanic <strong>heart</strong> of the English <strong>tongue</strong>. <br />
English is a Germanic <strong>tongue</strong> that has borrowed <strong>strongly</strong> from "Romance" and other <strong>tongues</strong>. Panglish <strong>thinks</strong>: what if English had <strong>grown</strong> without these <strong>borrowings?</strong>

Panglish gets its "drive" from another work called [Anglish](https://anglish.org/wiki/Anglish); however, Anglish chooses old outlandish-sounding words, Panglish tries to choose words that an everyday English speaker could understand!

## Hallmarks

This web work has:

* an input field to "translate" from English to Panglish (20 word limit)
* a screen of output with:
  * most likely "translations" (powered by AI)
  * "etymology" (word origins)
  * "alternative translations"
* about page
* FAQ page
* dark mode (for those kind of days and nights!)

![panglish results page](./images/screenshot2.png)

This web work makes note of: 

* front-end frameworks: `next.js` and `tailwind`
* big tongue tool (LLM): `llama-3.3-70b-versatile`

## Runtimes (Demos)!

Run the build on either:

<a href="https://panglish.joncoded.com" target="_blank"><button>panglish.joncoded.com</button></a>

or

<a href="https://panglish.vercel.app" target="_blank"><button>panglish.vercel.app</button></a>
  
![panglish home page](./images/screenshot3.png)

## Setup 

### clone repo

Run the following on your Terminal (command line):

```bash
% git clone https://github.com/joncoded/panglish.git panglish && cd panglish
% npm install
```

### .env file

Set your `.env.local` file on the root folder (this must be done):

```
GROQ_API_KEY=your_groq_api_key
```

If you don't have this you can get it for free at:

* [groq](https://console.groq.com/keys)
  * `GROQ_API_KEY` : "Create API Key" > (copy and paste an API key)
    * you can later use the same API key for any LLM

### run it locally

Finally, back in the Terminal, run the software with:

```
npm run dev
```

It will load by itself onto `http://localhost:3000` on your browser...

(if you already have something on port 3000, it will host the app on `:3001` or on the next free port)

## Thanksgiving

Thanks to: 

* [Groq](https://groq.com/) for LLMs
* [Claude (Sonnet)](https://claude.ai) for helping me build this in a much shorter time than we could before