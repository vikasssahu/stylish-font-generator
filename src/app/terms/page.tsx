'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { useState, useEffect } from 'react'
import { ScaleIcon, Shield, AlertTriangle, CheckCircle, Users } from 'lucide-react'

export default function TermsPage() {
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

  const keyPoints = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Free to Use",
      description: "Our name generator is completely free with no hidden costs"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Registration",
      description: "Use our service without creating an account or providing personal information"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Guidelines",
      description: "Respectful use that benefits the entire community"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Fair Use",
      description: "Use generated names responsibly and in accordance with platform rules"
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
              <ScaleIcon className="w-10 h-10 text-orange-500" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Service</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Please read these terms carefully before using StylishNames. By using our service, you agree to be bound by these terms.
          </p>
          
          <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Key Points
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Here are the most important things you need to know about using our service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {point.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {point.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">1. Acceptance of Terms</h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                By accessing and using StylishNames (&quot;the Service&quot;), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              
              <p className="text-gray-600 dark:text-gray-300">
                These Terms of Service (&quot;Terms&quot;) govern your use of our website and services. By using our service, you agree to these terms in full.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">2. Description of Service</h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                StylishNames is a free online name generator that provides users with various stylish name formats for use on social media platforms, gaming platforms, and other online services.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">2.1 What We Provide</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Free name generation for multiple platforms</li>
                <li>• Various style formats and variations</li>
                <li>• No registration or account required</li>
                <li>• Regular updates with new styles</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">3. User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3.1 Appropriate Use</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">You agree to use our service responsibly and in accordance with:</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 mb-6">
                <li>• All applicable laws and regulations</li>
                <li>• Terms of service of the platforms where you use generated names</li>
                <li>• Community guidelines and standards</li>
                <li>• Respectful and non-harmful behavior</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">3.2 Prohibited Uses</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">You may not use our service for:</p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Creating offensive, harmful, or inappropriate content</li>
                <li>• Impersonating others or misrepresenting identity</li>
                <li>• Violating any platform&apos;s terms of service</li>
                <li>• Any illegal or unauthorized purpose</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">4. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4.1 Our Content</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                The StylishNames website, including its design, functionality, and content, is owned by us and protected by intellectual property laws.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">4.2 Generated Names</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Names generated by our service are provided for your personal use. You may use these names on your social media profiles, gaming accounts, and other personal platforms. We do not claim ownership of the names you generate.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">5. Disclaimers and Limitations</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5.1 Service Availability</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                We strive to provide continuous service availability, but we cannot guarantee that our service will be available at all times. We may experience downtime for maintenance, updates, or technical issues.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">5.2 No Warranties</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Our service is provided &quot;as is&quot; without any warranties, express or implied. We do not warrant that:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• The service will meet your specific requirements</li>
                <li>• The service will be uninterrupted or error-free</li>
                <li>• Generated names will be available on all platforms</li>
                <li>• The service will be free from viruses or other harmful components</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">6. Limitation of Liability</h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                To the maximum extent permitted by law, StylishNames shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or relating to your use of our service.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">7. Privacy</h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices. By using our service, you consent to the collection and use of information as described in our Privacy Policy.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">8. Changes to Terms</h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on this page and updating the &quot;Last updated&quot; date. Your continued use of the service after such modifications constitutes acceptance of the updated terms.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">9. Termination</h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the service will cease immediately.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">10. Governing Law</h2>
              
              <p className="text-gray-600 dark:text-gray-300">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which our company is established, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-2">
                <p><strong>Email:</strong> legal@stylishnamez.com</p>
                <p><strong>Subject Line:</strong> Terms of Service Inquiry</p>
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
