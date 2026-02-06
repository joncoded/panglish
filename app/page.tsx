import { Suspense } from 'react'
import SearchInterface from '@/components/SearchInterface'

export default function Home() {
  return (
    <Suspense fallback={
      <div className="flex flex-col items-center justify-center px-4 py-20 md:py-32">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Welcome to Panglish
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-500 my-2">
            (<strong>Panglish</strong> = <em className="mr-1">"Pan-"</em> ["all"] + "English")
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Find out how English would have looked had it stuck with its earlier word roots!
          </p>
        </div>
      </div>
    }>
      <SearchInterface />
    </Suspense>
  )
}
