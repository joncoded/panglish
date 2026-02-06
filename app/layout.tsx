import './globals.css'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Barlow_Semi_Condensed } from 'next/font/google'
import type { Metadata } from 'next'

const barlowSemiCondensed = Barlow_Semi_Condensed({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow-semi-condensed',
})

export const metadata: Metadata = {
  title: 'Panglish - English to Germanic Roots',
  description: 'Translate English words to their Germanic etymological roots',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${barlowSemiCondensed.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors flex flex-col min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="pt-16 flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
