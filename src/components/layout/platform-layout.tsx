'use client'

import { useState, useEffect, Suspense } from 'react'
import { Header } from './header'
import { Footer } from './footer'
import { NameGenerator } from '@/components/features/name-generator'
import Image from 'next/image'
import { CopyPlus, Lightbulb } from 'lucide-react'

interface PlatformLayoutProps {
  platform: {
    name: string
    icon: React.ReactElement
    color: string
    description: string
    about: string
    tips: string[]
  }
}

export function PlatformLayout({ platform }: PlatformLayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
    
    setIsDarkMode(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDarkMode
    setIsDarkMode(newTheme)
    
    if (newTheme) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <main className="min-h-screen">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Platform Hero */}
      <section className={`relative bg-gradient-to-br ${platform.color} overflow-hidden`}>
        {/* Professional Background */}
        <div className="absolute inset-0 bg-black/5" />
        {/* Dynamic background image with overlay gradient */}
        <div className="absolute inset-0">
          {/* Dynamic image based on platform color */}
          <Image
            src={`/${platform.name.toLowerCase().replace(/[\s-]/g, '-')}.png`}
            alt={`${platform.name} background`}
            width={1000}
            height={1000}
            className="w-full h-full object-cover object-center opacity-60"
            style={{ mixBlendMode: 'multiply' }}  
          />
          {/* Overlay gradient for color harmony */}
          <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-80`} />
          {/* Subtle top-to-bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20" />
        </div>

        {/* Subtle Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-12 w-32 h-32 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        <div className="relative z-10 container mx-auto px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Platform Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-white/15 backdrop-blur-sm rounded-full border border-white/25 shadow-2xl">
              <span className="text-6xl drop-shadow-lg">{platform.icon}</span>
            </div>
            
            {/* Main Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {platform.name}
              {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-white animate-shine">
                Stylish Names
              </span>
            </h1>
            
            {/* Description */}
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
              {platform.description}
            </p>
            
            {/* Platform Badge */}
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 px-6 py-3 rounded-full shadow-xl hover:bg-white/20 transition-all duration-300">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white font-semibold text-base">
                ✨ {platform.name} Ready
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                Name Generator
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Create Your Perfect
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> {platform.name} </span>
                Name
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Generate unique, stylish names that perfectly match your personality and {platform.name} style
              </p>
            </div>
            
            <Suspense fallback={
              <div className="flex items-center justify-center py-12">
                <div className="w-8 h-8 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
                <span className="ml-3 text-gray-600 dark:text-gray-300">Loading name generator...</span>
              </div>
            }>
              <NameGenerator />
            </Suspense>
          </div>
        </div>
      </section>

      {/* About Platform */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                About {platform.name}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Why Choose {platform.name} 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Stylish Names?</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                {platform.about}
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Pro Tips */}
              <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 rounded-3xl p-8 border border-orange-100 dark:border-orange-800/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold"><Lightbulb size={20} /></span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Pro Tips for {platform.name}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {platform.tips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-4 group">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{tip}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Platform Guidelines */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-3xl p-8 border border-blue-100 dark:border-blue-800/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold"><CopyPlus size={20} /></span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Platform Guidelines
                  </h3>
                </div>
                <div className="space-y-4">
                  {[
                    `Use Unicode characters supported by ${platform.name}`,
                    'Keep names readable and memorable',
                    `Follow ${platform.name}'s community guidelines`,
                    'Test on different devices for compatibility'
                  ].map((guideline, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300">{guideline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tag Cloud Section */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                Popular Tags
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Explore by
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"> Categories</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Click on any tag below to generate {platform.name} names in that specific style or category
              </p>
            </div>

            {/* Tag Cloud */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {[
                { name: 'Cool', color: 'from-blue-500 to-cyan-500', count: '2.5K' },
                { name: 'Cute', color: 'from-pink-500 to-rose-500', count: '1.8K' },
                { name: 'Gaming', color: 'from-green-500 to-emerald-500', count: '3.2K' },
                { name: 'Anime', color: 'from-purple-500 to-violet-500', count: '2.1K' },
                { name: 'Dark', color: 'from-gray-700 to-gray-900', count: '1.5K' },
                { name: 'Royal', color: 'from-yellow-500 to-orange-500', count: '1.2K' },
                { name: 'Fire', color: 'from-red-500 to-orange-500', count: '2.8K' },
                { name: 'Ice', color: 'from-cyan-400 to-blue-500', count: '1.9K' },
                { name: 'Shadow', color: 'from-indigo-600 to-purple-600', count: '1.7K' },
                { name: 'Light', color: 'from-yellow-300 to-yellow-500', count: '2.3K' },
                { name: 'Mystic', color: 'from-purple-600 to-pink-600', count: '1.4K' },
                { name: 'Warrior', color: 'from-red-600 to-red-800', count: '2.6K' },
                { name: 'Magic', color: 'from-violet-500 to-purple-600', count: '1.8K' },
                { name: 'Ninja', color: 'from-gray-600 to-gray-800', count: '2.0K' },
                { name: 'Angel', color: 'from-white to-gray-200', count: '1.6K' },
                { name: 'Demon', color: 'from-red-700 to-red-900', count: '1.9K' },
                { name: 'Dragon', color: 'from-orange-600 to-red-600', count: '2.4K' },
                { name: 'Phoenix', color: 'from-orange-500 to-red-500', count: '1.3K' },
                { name: 'Storm', color: 'from-blue-600 to-indigo-600', count: '1.7K' },
                { name: 'Cosmic', color: 'from-indigo-500 to-purple-500', count: '1.5K' }
              ].map((tag, index) => (
                <button
                  key={index}
                  onClick={() => {
                    const tagRoute = tag.name.toLowerCase().replace(/\s+/g, '-')
                    window.location.href = `/${platform.name.toLowerCase().replace(/[\s-]/g, '-')}-${tagRoute}-names`
                  }}
                  className={`group relative px-3 py-1.5 rounded-full font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-md bg-gradient-to-r ${tag.color}`}
                  style={{
                    animationDelay: `${index * 0.05}s`
                  }}
                >
                  <span className="relative z-10 text-sm">{tag.name}</span>
                  <span className="absolute -top-1.5 -right-1.5 bg-white/30 backdrop-blur-sm rounded-full px-1.5 py-0.5 text-[10px] font-medium">
                    {tag.count}
                  </span>
                  {/* Compact hover overlay */}
                  <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
