'use client'

import { useState, useEffect } from 'react'

interface FAQItemProps {
  question: string
  answer: string | React.ReactNode
  defaultOpen?: boolean
  id?: string
}

export default function FAQItem({ question, answer, defaultOpen = false, id }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  useEffect(() => {
    // check if URL hash matches this FAQ's id
    if (id && window.location.hash === `#${id}`) {
      setIsOpen(true)
    }

    // listen for hash changes
    const handleHashChange = () => {
      if (id && window.location.hash === `#${id}`) {
        setIsOpen(true)
      }
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [id])

  return (
    <div id={id} className="border-b border-gray-200 dark:border-gray-700 pb-4 scroll-mt-20">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center gap-4 py-2 hover:opacity-70 transition-opacity"
      >
        <h3 className="text-xl font-semibold">{question}</h3>
        <span className="text-2xl flex-shrink-0 transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 text-lg leading-relaxed text-gray-700 dark:text-gray-300 animate-in fade-in duration-200">
          {answer}
        </div>
      )}
    </div>
  )
}
