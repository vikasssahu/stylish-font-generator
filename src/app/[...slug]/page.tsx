'use client'

import { useState, useEffect } from 'react'
import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { NameGenerator } from '@/components/features/name-generator'
import { Facebook, Flame, Gamepad2, Instagram, ArrowLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Platform configurations
const platformConfigs = {
  'instagram': {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    color: 'from-pink-500 to-purple-600',
    description: 'Create stunning Instagram usernames that stand out in the crowd',
    about: 'Instagram is all about visual storytelling and personal branding. Your username is often the first thing people see, so it needs to be memorable, unique, and reflect your personality. Our Instagram name generator creates stylish usernames that are perfect for influencers, content creators, and anyone looking to make their mark on this visual platform.',
    tips: [
      'Keep it under 30 characters for better visibility',
      'Use underscores or dots to separate words',
      'Make it memorable and easy to spell',
      'Consider your niche or content theme',
      'Avoid numbers that look random',
      'Test how it looks in your bio'
    ]
  },
  'facebook': {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-700',
    description: 'Generate professional Facebook usernames for your profile',
    about: 'Facebook usernames should be professional yet personal, reflecting your real identity while being memorable. Whether you\'re building a personal brand or connecting with friends and family, the right username can make all the difference in how people find and remember you.',
    tips: [
      'Use your real name or a variation',
      'Keep it professional for networking',
      'Make it easy to find and remember',
      'Consider your privacy settings',
      'Use consistent naming across platforms',
      'Avoid overly complex characters'
    ]
  },
  'free-fire': {
    name: 'Free Fire',
    icon: <Flame className="w-6 h-6" />,
    color: 'from-orange-500 to-red-600',
    description: 'Create epic Free Fire gaming names that strike fear in opponents',
    about: 'Free Fire is all about survival, strategy, and dominance. Your gaming name should reflect your playstyle, intimidate opponents, and make you memorable in the battlefield. Whether you prefer aggressive names or tactical ones, our generator creates names that match your gaming persona.',
    tips: [
      'Choose names that reflect your playstyle',
      'Use intimidating or powerful words',
      'Keep it short for quick recognition',
      'Consider your squad or team theme',
      'Make it unique to avoid confusion',
      'Test how it looks in-game'
    ]
  },
  'bgmi': {
    name: 'BGMI',
    icon: <Gamepad2 className="w-6 h-6" />,
    color: 'from-green-500 to-emerald-600',
    description: 'Generate legendary BGMI player names for the ultimate gaming experience',
    about: 'BGMI (Battlegrounds Mobile India) is the ultimate battle royale experience. Your player name should command respect, show your skills, and make you stand out in the leaderboards. From tactical operators to fierce warriors, find the perfect name that matches your gaming style.',
    tips: [
      'Use military or tactical themes',
      'Consider your favorite weapon or strategy',
      'Make it sound professional and skilled',
      'Keep it memorable for teammates',
      'Avoid overly long names',
      'Consider your clan or squad name'
    ]
  }
}

// Style configurations
const styleConfigs = {
  'cool': {
    name: 'Cool',
    description: 'Cool and trendy names that make you stand out',
    color: 'from-blue-500 to-cyan-500',
    icon: '😎'
  },
  'cute': {
    name: 'Cute',
    description: 'Adorable and sweet names that are simply charming',
    color: 'from-pink-500 to-rose-500',
    icon: '💕'
  },
  'gaming': {
    name: 'Gaming',
    description: 'Epic gaming names for the ultimate player experience',
    color: 'from-green-500 to-emerald-500',
    icon: '🎮'
  },
  'anime': {
    name: 'Anime',
    description: 'Anime-inspired names with Japanese flair',
    color: 'from-purple-500 to-violet-500',
    icon: '🌸'
  },
  'dark': {
    name: 'Dark',
    description: 'Mysterious and edgy names with dark vibes',
    color: 'from-gray-700 to-gray-900',
    icon: '🌑'
  },
  'royal': {
    name: 'Royal',
    description: 'Regal and majestic names fit for royalty',
    color: 'from-yellow-500 to-orange-500',
    icon: '👑'
  },
  'fire': {
    name: 'Fire',
    description: 'Burning hot names that ignite passion',
    color: 'from-red-500 to-orange-500',
    icon: '🔥'
  },
  'ice': {
    name: 'Ice',
    description: 'Cool and crisp names with icy elegance',
    color: 'from-cyan-400 to-blue-500',
    icon: '❄️'
  },
  'shadow': {
    name: 'Shadow',
    description: 'Stealthy and mysterious shadow-themed names',
    color: 'from-indigo-600 to-purple-600',
    icon: '🌙'
  },
  'light': {
    name: 'Light',
    description: 'Bright and radiant names full of positivity',
    color: 'from-yellow-300 to-yellow-500',
    icon: '☀️'
  },
  'mystic': {
    name: 'Mystic',
    description: 'Magical and mystical names with enchanting vibes',
    color: 'from-purple-600 to-pink-600',
    icon: '🔮'
  },
  'warrior': {
    name: 'Warrior',
    description: 'Strong and powerful warrior-inspired names',
    color: 'from-red-600 to-red-800',
    icon: '⚔️'
  },
  'magic': {
    name: 'Magic',
    description: 'Enchanting magical names with spellbinding charm',
    color: 'from-violet-500 to-purple-600',
    icon: '✨'
  },
  'ninja': {
    name: 'Ninja',
    description: 'Stealthy ninja names for the ultimate warrior',
    color: 'from-gray-600 to-gray-800',
    icon: '🥷'
  },
  'angel': {
    name: 'Angel',
    description: 'Divine and heavenly angelic names',
    color: 'from-white to-gray-200',
    icon: '👼'
  },
  'demon': {
    name: 'Demon',
    description: 'Powerful demonic names with dark energy',
    color: 'from-red-700 to-red-900',
    icon: '👹'
  },
  'dragon': {
    name: 'Dragon',
    description: 'Mighty dragon names with legendary power',
    color: 'from-orange-600 to-red-600',
    icon: '🐉'
  },
  'phoenix': {
    name: 'Phoenix',
    description: 'Reborn phoenix names rising from the ashes',
    color: 'from-orange-500 to-red-500',
    icon: '🔥'
  },
  'storm': {
    name: 'Storm',
    description: 'Thunderous storm names with electric energy',
    color: 'from-blue-600 to-indigo-600',
    icon: '⛈️'
  },
  'cosmic': {
    name: 'Cosmic',
    description: 'Stellar cosmic names from the universe',
    color: 'from-indigo-500 to-purple-500',
    icon: '🌌'
  }
}

export default function DynamicPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const params = useParams()
  const slug = params.slug as string[]

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
    
    setIsDarkMode(shouldUseDark)
    document.documentElement.classList.toggle('dark', shouldUseDark)
  }, [])

  // Toggle theme
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

  // Parse the slug to extract platform and style
  const parseSlug = () => {
    if (!slug || slug.length === 0) return null
    
    const fullPath = slug.join('-')
    
    // Check if it's a style page (platform-style-names format)
    const styleMatch = fullPath.match(/^([^-]+)-([^-]+)-names$/)
    if (styleMatch) {
      const [, platform, style] = styleMatch
      return { type: 'style', platform, style }
    }
    
    // Check if it's a platform page (platform-stylish-names format)
    const platformMatch = fullPath.match(/^([^-]+)-stylish-names$/)
    if (platformMatch) {
      const [, platform] = platformMatch
      return { type: 'platform', platform }
    }
    
    return null
  }

  const parsed = parseSlug()
  
  if (!parsed) {
    return (
      <main className="min-h-screen bg-[#f5f5f5] dark:bg-gray-800">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Page Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The requested page could not be found.</p>
          <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  const platformConfig = platformConfigs[parsed.platform as keyof typeof platformConfigs]
  
  if (!platformConfig) {
    return (
      <main className="min-h-screen bg-[#f5f5f5] dark:bg-gray-800">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Platform Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The requested platform could not be found.</p>
          <Link href="/" className="text-orange-500 hover:text-orange-600 font-medium">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  // If it's a style page
  if (parsed.type === 'style') {
    const styleConfig = styleConfigs[parsed.style as keyof typeof styleConfigs]
    
    if (!styleConfig) {
      return (
        <main className="min-h-screen bg-[#f5f5f5] dark:bg-gray-800">
          <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Style Not Found</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">The requested style could not be found.</p>
            <Link href={`/${parsed.platform}-stylish-names`} className="text-orange-500 hover:text-orange-600 font-medium">
              ← Back to {platformConfig.name}
            </Link>
          </div>
          <Footer />
        </main>
      )
    }

    return (
      <main className="min-h-screen">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        
        {/* Style Hero */}
        <section className={`relative bg-gradient-to-br ${styleConfig.color} overflow-hidden`}>
          {/* Background Effects */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-12 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0s' }} />
            <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
          </div>

          <div className="relative z-10 container mx-auto px-6 py-20">
            <div className="max-w-5xl mx-auto text-center">
              {/* Back Button */}
              <div className="flex justify-center mb-8">
                <Link 
                  href={`/${parsed.platform}-stylish-names`}
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full text-white hover:bg-white/30 transition-all duration-300"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {platformConfig.name}
                </Link>
              </div>

              {/* Style Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 mb-8 bg-white/15 backdrop-blur-sm rounded-full border border-white/25 shadow-2xl">
                <span className="text-6xl drop-shadow-lg">{styleConfig.icon}</span>
              </div>
              
              {/* Main Title */}
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                {styleConfig.name}
                {" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-white animate-shine">
                  {platformConfig.name} Names
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed font-light">
                {styleConfig.description}
              </p>
              
              {/* Style Badge */}
              <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 px-6 py-3 rounded-full shadow-xl hover:bg-white/20 transition-all duration-300">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <span className="text-white font-semibold text-lg">
                  ✨ {styleConfig.name} Style Ready
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
                  {styleConfig.name} Name Generator
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Create Your Perfect
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> {styleConfig.name} </span>
                  {platformConfig.name} Name
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Generate unique, {styleConfig.name.toLowerCase()} names that perfectly match your personality and {platformConfig.name} style
                </p>
              </div>
              
              <NameGenerator />
            </div>
          </div>
        </section>

        {/* Style Info Section */}
        <section className="py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Section Header */}
              <div className="text-center mb-20">
                <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                  About {styleConfig.name} Style
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Why Choose {styleConfig.name} 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500"> Style Names?</span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
                  {styleConfig.description} Perfect for {platformConfig.name} users who want to express their unique personality and stand out from the crowd.
                </p>
              </div>

              {/* Style Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Unique & Creative
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Each {styleConfig.name.toLowerCase()} name is carefully crafted to be unique and memorable, ensuring you stand out on {platformConfig.name}.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">{styleConfig.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {styleConfig.name} Themed
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    All names follow the {styleConfig.name.toLowerCase()} theme, using appropriate symbols, fonts, and styling elements.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Instant Generation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Get unlimited {styleConfig.name.toLowerCase()} names instantly. No waiting, no limits - just pure creativity at your fingertips.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  // If it's a platform page, redirect to the existing platform page
  if (parsed.type === 'platform') {
    // This should not happen as platform pages are handled by static routes
    return (
      <main className="min-h-screen bg-[#f5f5f5] dark:bg-gray-800">
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Redirecting...</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">Please wait while we redirect you.</p>
        </div>
        <Footer />
      </main>
    )
  }

  return null
}
