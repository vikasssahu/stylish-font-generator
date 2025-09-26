'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Map, Home, Users, Mail, FileText, Shield, Facebook, Instagram, Flame, Gamepad2, ArrowRight } from 'lucide-react'

export default function SitemapPage() {
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

  const mainPages = [
    {
      icon: <Home className="w-5 h-5" />,
      title: "Home",
      description: "Main page with name generator and platform selection",
      href: "/",
      color: "text-blue-500"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "About Us",
      description: "Learn about StylishNames and our mission",
      href: "/about",
      color: "text-green-500"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Contact",
      description: "Get in touch with our support team",
      href: "/contact",
      color: "text-purple-500"
    }
  ]

  const legalPages = [
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Privacy Policy",
      description: "How we collect, use, and protect your information",
      href: "/privacy",
      color: "text-orange-500"
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Terms of Service",
      description: "Terms and conditions for using our service",
      href: "/terms",
      color: "text-red-500"
    }
  ]

  const platformPages = [
    {
      icon: <Facebook className="w-5 h-5" />,
      title: "Facebook Stylish Names",
      description: "Generate unique names for your Facebook profile",
      href: "/facebook-stylish-names",
      color: "text-blue-600"
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      title: "Instagram Stylish Names",
      description: "Create stylish names for your Instagram account",
      href: "/instagram-stylish-names",
      color: "text-pink-500"
    },
    {
      icon: <Flame className="w-5 h-5" />,
      title: "Free Fire Stylish Names",
      description: "Get cool names for your Free Fire gaming profile",
      href: "/free-fire-stylish-names",
      color: "text-orange-500"
    },
    {
      icon: <Gamepad2 className="w-5 h-5" />,
      title: "BGMI Stylish Names",
      description: "Generate stylish names for your BGMI gaming account",
      href: "/bgmi-stylish-names",
      color: "text-green-500"
    }
  ]

  const allPages = [
    ...mainPages,
    ...legalPages,
    ...platformPages
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] dark:bg-gray-800">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-700 dark:to-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
              <Map className="w-10 h-10 text-orange-500" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Map</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Navigate through all pages and sections of StylishNames. Find exactly what you&apos;re looking for with our comprehensive site map.
          </p>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Main Pages
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Essential pages for navigation and information
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${page.color} flex-shrink-0`}>
                    {page.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-3 flex items-center text-orange-500 text-sm font-medium">
                      <span>Visit Page</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Pages */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Platform Generators
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Generate stylish names for your favorite platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platformPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="group bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${page.color} flex-shrink-0`}>
                    {page.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-3 flex items-center text-orange-500 text-sm font-medium">
                      <span>Generate Names</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Pages */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Legal & Information
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Important legal documents and policies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {legalPages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${page.color} flex-shrink-0`}>
                    {page.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {page.description}
                    </p>
                    <div className="mt-3 flex items-center text-orange-500 text-sm font-medium">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Complete List */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Complete Page List
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              All pages available on StylishNames
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allPages.map((page, index) => (
                <Link
                  key={index}
                  href={page.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white dark:hover:bg-gray-700 transition-colors group"
                >
                  <div className={`${page.color} flex-shrink-0`}>
                    {page.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-900 dark:text-white font-medium group-hover:text-orange-500 transition-colors">
                      {page.title}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {page.href}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEO Information */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              SEO & Accessibility
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Our commitment to search engine optimization and accessibility
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Search Engine Friendly
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Clean, semantic HTML structure</li>
                <li>• Optimized meta tags and descriptions</li>
                <li>• Fast loading times</li>
                <li>• Mobile-responsive design</li>
                <li>• Structured data markup</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Accessibility Features
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Keyboard navigation support</li>
                <li>• Screen reader compatibility</li>
                <li>• High contrast mode support</li>
                <li>• Alt text for all images</li>
                <li>• Focus indicators for interactive elements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
