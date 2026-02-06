'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  name: string
  href: string
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const pathname = usePathname()

  const navigation: NavItem[] = [
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
  ]

  const cycleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const getThemeIcon = () => {
    if (theme === 'light') return '☀️'
    if (theme === 'dark') return '🌙'
    return '💻'
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 dark:bg-gray-800 text-white dark:text-gray-100 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* branding */}
          <Link href="/" className="text-xl font-semibold hover:opacity-80 transition-opacity">
            <span aria-hidden="true">🐼🇬🇧</span> Panglish
          </Link>

          {/* wayfinding */}
          <nav className="hidden md:flex items-center gap-6">
            {pathname !== '/' && (
              <Link 
                href="/" 
                className="hover:opacity-70 transition-opacity"
                title="Search"
              >
                🔍
              </Link>
            )}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:opacity-70 transition-opacity"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={cycleTheme}
              className="text-xl hover:opacity-70 transition-opacity"
              title={`Current: ${theme || 'system'}`}
            >
              {getThemeIcon()}
            </button>
          </nav>

          {/* mobile wayfinding */}
          <div className="flex md:hidden items-center gap-4">
            {pathname !== '/' && (
              <Link href="/" title="Search">
                🔍
              </Link>
            )}
            <button
              onClick={cycleTheme}
              className="text-xl"
              title={`Current: ${theme || 'system'}`}
            >
              {getThemeIcon()}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl"
              aria-label="Toggle menu"
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 hover:opacity-70 transition-opacity"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
