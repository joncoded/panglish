import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About - Panglish',
  description: 'bringing English back to its Germanic roots',
}

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">About Panglish</h1>
      
      <div className="max-w-none">
        <section className="mb-8">          
          <p className="text-lg leading-relaxed">
            Panglish is a linguistic experiment that translates modern English words and phrases 
            back to their Germanic etymological roots (not to be confused with the current <em>German language</em>). By stripping away Latin, French, and Greek 
            borrowings, we reveal the "pure" Germanic core of the English language.
          </p>
          <p className="text-lg leading-relaxed">
            English is a Germanic language that has borrowed heavily from Romance and other
            languages. Panglish imagines: what if English had developed without these influences?
          </p>
          <p className="text-lg leading-relaxed">
            The last two paragraphs would have looked like this:
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 my-4">
            <p>Panglish is a <strong>speechlore try-out</strong> that <strong>tongue-shifts</strong> <strong>same-timely</strong> English words and <strong>word-rows</strong> back to their Germanic <strong>word-birth</strong> roots (not to be <strong>mixed-up</strong> with <strong>today's</strong> <em>German</em> <strong>language</strong>). By stripping away Latin, French and Greek borrowings, we <strong>show</strong> the <strong>"rooted"</strong> Germanic <strong>heart</strong> of the English <strong>tongue</strong>. </p>
            <p className="mt-4">English is a Germanic <strong>tongue</strong> that has borrowed <strong>strongly</strong> from "Romance" and other <strong>tongues</strong>. Panglish <strong>thinks</strong>: what if English had <strong>grown</strong> without these <strong>borrowings?</strong></p>
          </div>          

        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Look stuff up!</h2>          
          <p className="text-lg">
            Simply type any English word or phrase (up to 50 words) into the <Link href="/">search bar</Link> and click "Translate" to see the "Panglish" version!
          </p>
          <ul className="list-disc list-inside space-y-3 text-lg ml-4">
            <li>Start with simple, common words to understand the patterns</li>
            <li>Try both single words and short phrases</li>
            <li>Technical and scientific terms often have interesting Germanic alternatives</li>
            <li>Compare translations of synonyms to see different Germanic approaches</li>
            <li>Concrete objects work better than abstract concepts but try both!</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">How does this work?</h2>
          <p className="text-lg leading-relaxed">
            I (<a href="https://www.joncoded.com" target="_blank">@joncoded</a>) have used, quite aptly, a <a href="https://simple.wikipedia.org/wiki/Large_language_model" target="_blank">large language model</a> to generate the translation from your English input to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg ml-4">
            <li>identify words with non-Germanic origins</li>
            <li>find Germanic root alternatives or calques</li>
            <li>construct natural-sounding "Panglish" expressions</li>
            <li>provide etymological (word origin) explanations when relevant</li>
          </ul>
          <p className="text-lg leading-relaxed">
            On top of that, my goal is to ensure the translations would sound like something an average English speaker would understand. I'm also a web developer, so I wanted to learn some things about AI but make something that looked more like a website.
          </p>
        </section>

      </div>
    </div>
  )
}
