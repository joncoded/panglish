'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import SearchBar from './SearchBar'
import TranslationResults from './TranslationResults'
import { TranslationResponse } from '@/types/translation'

export default function SearchInterface() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const [result, setResult] = useState<TranslationResponse | undefined>()
  const [error, setError] = useState<string | undefined>()
  
  const searchParams = useSearchParams()
  const router = useRouter()

  // check if URL contains ?q= string on initial load
  useEffect(() => {
    const queryFromUrl = searchParams.get('q')
    if (queryFromUrl) {
      handleSearch(queryFromUrl, false) 
    }
  }, [])

  const handleSearch = async (query: string, updateUrl = true) => {
    setIsLoading(true)
    setSearchQuery(query)
    setHasSearched(true)
    setError(undefined)
    setResult(undefined)

    // when queried from the search bar, update the URL
    if (updateUrl) {
      router.push(`/?q=${encodeURIComponent(query)}`, { scroll: false })
    }

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to translate')
      }

      setResult(data.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setSearchQuery('')
    setHasSearched(false)
    setResult(undefined)
    setError(undefined)
    setIsLoading(false)
    
    // remove query when user clicks reset
    router.push('/', { scroll: false })
  }

  return (
    <div>
      {/* hero - shrinks after first search */}
      <div 
        className={`flex flex-col items-center justify-center px-4 transition-all duration-700 ease-in-out ${
          hasSearched 
            ? 'pt-8 pb-4' 
            : 'py-20 md:py-32'
        }`}
      >
        {/* Title - fades out after search */}
        <div 
          className={`text-center mb-8 transition-all duration-500 ${
            hasSearched 
              ? 'opacity-0 h-0 overflow-hidden' 
              : 'opacity-100'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Panglish
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover the Germanic roots of English words
          </p>
        </div>

        {/* Search bar */}
        <SearchBar 
          onSearch={handleSearch}
          onReset={handleReset}
          isCompact={hasSearched}
        />
      </div>

      {/* Results section */}
      {hasSearched && (
        <div className="flex flex-col items-center px-4 pb-12">
          <TranslationResults 
            query={searchQuery} 
            isLoading={isLoading}
            result={result}
            error={error}
          />
        </div>
      )}
    </div>
  )
}
