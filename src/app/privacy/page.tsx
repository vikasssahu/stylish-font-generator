'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useState, useEffect } from 'react'
import { Shield, Eye, Lock, Database, Users, Globe } from 'lucide-react'

export default function PrivacyPage() {
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

  const privacyPrinciples = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Protection",
      description: "We implement industry-standard security measures to protect your information"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Transparency",
      description: "We clearly explain what data we collect and how we use it"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Minimal Collection",
      description: "We only collect the data necessary to provide our services"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "No Storage",
      description: "Your generated names are not stored on our servers"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User Control",
      description: "You have full control over your data and can request deletion anytime"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Standards",
      description: "We comply with international privacy standards and regulations"
    }
  ]

  return (
    <main className="min-h-screen bg-[#f5f5f5] dark:bg-gray-800">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-orange-100 to-red-100 dark:from-gray-700 dark:to-gray-800 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-orange-500" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Policy</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use StylishNames.
          </p>
          
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Privacy Principles
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We believe in transparency, security, and user control when it comes to your personal information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {privacyPrinciples.map((principle, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {principle.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1.1 Information You Provide</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• Names you enter for style generation (not stored)</li>
                <li>• Contact information if you reach out to us</li>
                <li>• Feedback and suggestions you provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">1.2 Information We Collect Automatically</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Browser type and version</li>
                <li>• IP address (anonymized)</li>
                <li>• Pages visited and time spent on site</li>
                <li>• Device information (type, operating system)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. How We Use Your Information</h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">We use the information we collect to:</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Provide and improve our name generation services</li>
                <li>• Analyze usage patterns to enhance user experience</li>
                <li>• Respond to your inquiries and provide customer support</li>
                <li>• Ensure the security and integrity of our services</li>
                <li>• Comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. Information Sharing and Disclosure</h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• With your explicit consent</li>
                <li>• To comply with legal requirements or court orders</li>
                <li>• To protect our rights, property, or safety</li>
                <li>• With service providers who assist in our operations (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Data Security</h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">We implement appropriate security measures to protect your information:</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• SSL encryption for all data transmission</li>
                <li>• Regular security audits and updates</li>
                <li>• Limited access to personal information</li>
                <li>• Secure data storage and backup procedures</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Cookies and Tracking</h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">We use cookies and similar technologies to:</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Remember your preferences (like dark/light mode)</li>
                <li>• Analyze website traffic and usage patterns</li>
                <li>• Improve website performance and user experience</li>
              </ul>
              <p className="text-gray-600 dark:text-gray-300 mt-4">
                You can control cookie settings through your browser preferences. Note that disabling cookies may affect some website functionality.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Your Rights</h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">You have the right to:</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Access the personal information we hold about you</li>
                <li>• Request correction of inaccurate information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Object to processing of your information</li>
                <li>• Withdraw consent at any time</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Children&apos;s Privacy</h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Changes to This Policy</h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              
              <p className="mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              
              <div className="space-y-2">
                <p><strong>Email:</strong> privacy@stylishnamez.com</p>
                <p><strong>Subject Line:</strong> Privacy Policy Inquiry</p>
              </div>
              
              <p className="mt-4 text-orange-100">
                We will respond to your inquiry within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
