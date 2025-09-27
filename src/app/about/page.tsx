'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { LogoIcon } from '@/components/ui/logo-icon'
import { useState, useEffect } from 'react'
import { Check, Users, Zap, Heart, Target, Award, Sparkles } from 'lucide-react'

export default function AboutPage() {
  const [isDarkMode, setIsDarkMode] = useState(false)

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

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Generate hundreds of stylish names in seconds with our advanced algorithms"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Driven",
      description: "Built by gamers and social media enthusiasts for the community"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "100% Free",
      description: "No hidden costs, no premium tiers - everything is completely free"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Platform Specific",
      description: "Tailored name styles for Instagram, Facebook, Free Fire, BGMI and more"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Quality",
      description: "Curated collection of the most stylish and unique name variations"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Always Updated",
      description: "Regular updates with new styles and trending name formats"
    }
  ]

  const stats = [
    { number: "500+", label: "Unique Styles" },
    { number: "10K+", label: "Happy Users" },
    { number: "50K+", label: "Names Generated" },
    { number: "24/7", label: "Free Access" }
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] dark:bg-gray-800">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-700 dark:to-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
              <LogoIcon size="lg" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">StylishNames</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We&apos;re passionate about helping you stand out in the digital world with unique, stylish names that reflect your personality and creativity.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                In a world where your online identity matters more than ever, we believe everyone deserves a name that truly represents who they are. Whether you&apos;re a gamer looking for the perfect in-game name or a social media enthusiast wanting to make your profile stand out, we&apos;ve got you covered.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Our mission is simple: to provide you with the most comprehensive, creative, and stylish name generator that helps you express your unique personality across all platforms.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  "No registration required",
                  "Instant name generation",
                  "Multiple platform support",
                  "Regular style updates",
                  "Mobile-friendly design",
                  "Completely free forever"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Makes Us Special
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We&apos;ve built StylishNames with the user experience in mind, focusing on speed, quality, and accessibility.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-orange-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Join thousands of users who have found their perfect stylish names with us.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-orange-100 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                StylishNames was born from a simple observation: finding the perfect name for your online presence shouldn&apos;t be complicated or expensive. As avid gamers and social media users ourselves, we experienced the frustration of spending hours searching for unique names that truly represented our personalities.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                We noticed that most name generators were either too basic, required payment, or didn&apos;t understand the specific needs of different platforms. That&apos;s when we decided to create something better - a comprehensive, free, and user-friendly solution that would help everyone find their perfect stylish name.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, StylishNames serves thousands of users worldwide, helping them express their creativity and stand out in the digital world. We&apos;re constantly improving and adding new features based on user feedback, ensuring that our platform remains the go-to destination for stylish name generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
