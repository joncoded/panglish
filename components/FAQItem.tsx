'use client'

import { useState } from 'react'

interface FAQItemProps {
  question: string
  answer: string | React.ReactNode
  defaultOpen?: boolean
}

export default function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
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
