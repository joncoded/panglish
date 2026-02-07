import type { Metadata } from 'next'
import FAQItem from '@/components/FAQItem'

export const metadata: Metadata = {
  title: 'FAQ - Panglish',
  description: 'questions about the Panglish language experiment',
}

interface FAQData {
  question: string
  answer: string | React.ReactNode
}

const faqData: FAQData[] = [
  {    
    question: 'Why Panglish?',
    answer: (
      <>
        <p className="text-lg leading-relaxed">
          This project serves multiple purposes:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg ml-4">
          <li><strong>Educational:</strong> for learners, discover English's origins and linguistic history</li>
          <li><strong>Creative:</strong> for writers and creators, find simpler words for your writing</li>
          <li><strong>Cultural:</strong> link up with English's older roots</li>
          <li><strong>Linguistic:</strong> show how borrowing shapes "speechcraft"</li>
        </ul>
      </>
    )
  },
  {    
    question: "What counts as 'Germanic'?",
    answer: "Germanic roots include words from Old English, Old Norse, Old Saxon, and other Germanic languages. This excludes Latin, French, Greek, and other Romance or Classical borrowings that entered English after the Norman Conquest."
  },
  {    
    question: 'Is Panglish a real language?',
    answer: (
      <>
        <p>No, Panglish is for now a linguistic thought experiment. It's not meant to be spoken but rather to illustrate English's Germanic foundations and how borrowing has shaped modern English. However, you can choose to write in Panglish if you like ... I use it for my <a href="https://t.me/s/jonchius" target="_blank">poetry</a>!</p>
        <p>Maybe one day, people will speak in a way similar to Panglish, depending on how the culture rolls!</p>
      </>
    )
  },
  {    
    question: 'Is this a ripoff of Anglish?',
    answer: (
      <>
        <p>Now, similar languages like Dutch and German aren't ripoffs of each other, are they? Also, even with "constructed" languages, inspiration has to come from somewhere!</p>
        <p>An influencer to Panglish, <a href="https://anglish.org/wiki/Anglish" target="_blank">Anglish</a> is a similar but distinct project that also tries to take English back to its Germanic roots. However, Anglish has a different approach that ends up making words sound more 'foreign' or 'medieval'. Its <a href="https://wordbook.anglish.org/">wordbook </a> often uses forgotten words like 'frith' and 'ovet', which still makes it a fun way to explore English's Germanic heritage.</p>
        <p>On the other hand, Panglish tries to make natural-sounding translations, in a way that contemporary English speakers (you and I) can understand!</p>
      </>
    )
  },
  {    
    question: "'Panglish' isn't even Panglish!",
    answer: "Not a question, but hey, is 'German' even German? The name 'Panglish' is meant to be catchy and convey the idea of 'all-English'. You can call it Danglish if you really give a dang!"
  },
  {    
    question: 'Why are some translations longer?',
    answer: "Many borrowed words are concise labels for complex concepts. Germanic equivalents often require compound words or descriptive phrases (which is kind of why languages like German, Dutch and Swedish have long compound words!). For example, 'telephone' becomes 'far-speaker' or 'distance-talker.'"
  },
  {    
    question: 'Why are translations inconsistent? Like when I try the same word twice, I get different translations?',
    answer: "The large language model (AI) generates translations based on patterns in its training data, which can lead to multiple valid translations for the same word or phrase. Etymology isn't an exact science, so there may be several Germanic alternatives for a given English word. Think of these as interpretations coming from various sources rather than definitive answers."
  },
  {    
    question: 'Can I suggest improvements?',
    answer: (
      <>
        <p>Unfortunately, the large language model (AI) is already pre-trained by <a href="https://www.llama.com/docs/model-cards-and-prompt-formats/llama3_3/" target="_blank">people smarter than me</a> and can't be fine-tuned further. This app is highly experimental and meant for fun and learning. Some of the generate words could sound alien to the common English user. As you get the hang out this 'dialect', you might even make up your own words that sound "more English", but also "more rooted"!</p>
      </>
    )
  },
  {    
    question: 'Why the 20-word limit?',
    answer: "The limit ensures quality translations and reasonable response times. For longer texts, try breaking them into smaller meaningful chunks. It's meant to be more of a dictionary or phrasebook, rather than a translator."
  },
  {    
    question: 'How accurate are the translations?',
    answer: "Translations are AI-generated and based on etymological databases and linguistic patterns. While the large language model tries to find the best fit, word roots can be complex and debated. Think of these as educated interpretations rather than exact answers."
  }
]

export default function FAQ() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">FAQ (Frantically Answered Questions)</h1>

      <section className="mb-8">          
        <div className="space-y-6">
          {faqData.map((faq, index) => (
            <FAQItem 
              key={`faq-${index}`}
              id={`faq-${index}`}
              defaultOpen={index === 0}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </section>
    </div>    
  )
}
