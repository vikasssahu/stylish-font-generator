'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { MobileMenu } from './mobile-menu'
import Link from 'next/link'
import { Facebook, Flame, Gamepad2, Instagram, ChevronDown, Zap } from 'lucide-react'
import { LogoIcon } from '../ui/logo-icon'

interface HeaderProps {
  isDarkMode: boolean
  toggleTheme: () => void
}

export function Header({ isDarkMode, toggleTheme }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg shadow-gray-900/5' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 lg:h-20 items-center justify-between">
            
            {/* Logo Section */}
            <Link href="/" className="flex items-center space-x-3 group relative">
              <div className="relative">
                <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zinc-100 to-zinc-50 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm backdrop-blur-sm`}>
                  <LogoIcon size="sm" className='text-foreground' />
                </div>
              </div>
              
              <div className="flex flex-col">
                <h1 className={`text-xl lg:text-2xl font-bold transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 dark:text-white' 
                    : 'text-foreground drop-shadow-lg'
                }`}>
                  StylishNames
                </h1>
                <span className={`text-xs lg:text-sm font-medium transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-gray-500 dark:text-gray-400' 
                    : 'text-foreground'
                }`}>
                  Name Generator
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                href="/" 
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400' 
                    : 'text-foreground hover:text-white hover:bg-white/10'
                }`}
              >
                Home
              </Link>
              
              <Link 
                href="/about" 
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400' 
                    : 'text-foreground hover:text-white hover:bg-white/10'
                }`}
              >
                About
              </Link>
              
              {/* Platforms Dropdown */}
              <div className="relative">
                <button 
                  onMouseEnter={() => setIsPlatformsOpen(true)}
                  onMouseLeave={() => setIsPlatformsOpen(false)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 flex items-center space-x-1 ${
                    isScrolled 
                      ? 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400' 
                      : 'text-foreground hover:text-white hover:bg-white/10'
                  }`}
                >
                  <span>Platforms</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isPlatformsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div 
                  onMouseEnter={() => setIsPlatformsOpen(true)}
                  onMouseLeave={() => setIsPlatformsOpen(false)}
                  className={`absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-xl transition-all duration-300 ${
                    isPlatformsOpen 
                      ? 'opacity-100 visible translate-y-0' 
                      : 'opacity-0 invisible -translate-y-2'
                  }`}
                >
                  <div className="p-2">
                    <div className="grid grid-cols-2 gap-1">
                      <Link
                        href="/facebook-stylish-names"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 group"
                      >
                        <div className="size-8 bg-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Facebook className="size-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">FB</div>
                        </div>
                      </Link>
                      
                      <Link
                        href="/instagram-stylish-names"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Instagram className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">Insta</div>
                        </div>
                      </Link>
                      
                      <Link
                        href="/free-fire-stylish-names"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Flame className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">Free Fire</div>
                        </div>
                      </Link>
                      
                      <Link
                        href="/bgmi-stylish-names"
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 group"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Gamepad2 className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">BGMI</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/contact" 
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 hover:scale-105 ${
                  isScrolled 
                    ? 'text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:text-orange-600 dark:hover:text-orange-400' 
                    : 'text-foreground hover:text-white hover:bg-white/10'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-2">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className={`w-10 h-10 rounded-xl transition-all duration-200 hover:scale-110 ${
                  isScrolled 
                    ? 'hover:bg-orange-100 dark:hover:bg-orange-900/20 text-gray-700 dark:text-gray-300' 
                    : 'text-foreground hover:text-white'
                }`}
              >
                {isDarkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </Button>
              
              {/* CTA Button */}
              <Link href="/instagram-stylish-names">
                <Button 
                  className={`hidden sm:flex items-center space-x-2 px-4 py-2 rounded-xl font-semibold transition-all duration-100 hover:scale-105 ${
                    isScrolled 
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25' 
                      : 'bg-white hover:bg-white/30 text-zinc-900 backdrop-blur-sm border border-white/20'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Generate</span>
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className={`lg:hidden w-10 h-10 rounded-xl transition-all duration-200 hover:scale-110 ${
                  isScrolled 
                    ? 'hover:bg-orange-100 dark:hover:bg-orange-900/20 text-gray-700 dark:text-gray-300' 
                    : 'hover:bg-white/20 text-foreground hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-20" />

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  )
}
