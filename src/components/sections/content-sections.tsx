'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function AboutSection() {
  return (
    <section id="what-are-names" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
            What are Stylish Names?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform ordinary text into extraordinary expressions
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed mb-8 text-justify">
                <strong>Stylish names</strong> are specially formatted usernames created using our advanced 
                <strong> font generator</strong> that incorporates unique fonts, symbols, and decorative 
                characters to make your profile stand out across all platforms. Whether you&apos;re creating 
                names for <strong>Instagram</strong>, <strong>Facebook</strong>, <strong>Free Fire</strong>, 
                <strong>BGMI</strong>, or any other platform, our generator creates eye-catching variations 
                that help you express your personality.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl">
                <h4 className="font-bold text-lg mb-4 col-span-full text-transparent bg-clip-text bg-gradient-primary">
                  Examples of Stylish Names:
                </h4>
                
                <div className="space-y-3">
                  <div className="p-4 bg-card rounded-lg shadow-sm">
                    <span className="text-transparent bg-clip-text bg-gradient-primary text-xl font-bold">『𝓢𝓽𝔂𝓵𝓮★𝓖𝓮𝓷』</span>
                  </div>
                  <div className="p-4 bg-card rounded-lg shadow-sm">
                    <span className="text-transparent bg-clip-text bg-gradient-primary text-xl font-bold">◤🔥 𝐏𝐫𝐨 🔥◥</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="p-4 bg-card rounded-lg shadow-sm">
                    <span className="text-transparent bg-clip-text bg-gradient-primary text-xl font-bold">★彡 𝔾𝔞𝕞𝔢𝔯 彡★</span>
                  </div>
                  <div className="p-4 bg-card rounded-lg shadow-sm">
                    <span className="text-transparent bg-clip-text bg-gradient-primary text-xl font-bold">🏆 ᴸᵉᵍᵉⁿᵈ 🏆</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export function HowToUseSection() {
  const steps = [
    {
      number: '1',
      title: 'Enter Your Name',
      description: 'Type any name in our font generator input field. Our algorithm will instantly create stylish variations.',
      icon: '✏️'
    },
    {
      number: '2',
      title: 'Choose Category',
      description: 'Select from Pro, Squad, Clan, Legendary, Cool, or All Styles to match your gaming personality.',
      icon: '🎯'
    },
    {
      number: '3',
      title: 'Copy Your Favorite',
      description: 'Browse the generated names and click the copy button on any style you like.',
      icon: '📋'
    },
    {
      number: '4',
      title: 'Use Anywhere',
      description: 'Paste your stylish name in Instagram, Facebook, Free Fire, BGMI, or any platform!',
      icon: '🚀'
    }
  ]

  return (
    <section id="how-to-use" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
            How To Use Our Generator
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Follow these simple steps to create amazing stylish names
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={step.number} hover gradient className="text-center">
              <CardHeader>
                <div className="bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  <span className="text-white font-bold">{step.number}</span>
                </div>
                <CardTitle className="text-xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl mb-4">{step.icon}</div>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CategoriesSection() {
  const categories = [
    {
      name: 'Pro Player',
      icon: '🏆',
      description: 'Professional gaming names with competitive symbols and elite styling.',
      examples: ['⚡ᴾʳᵒ⚡', '🎯Elite🎯', '💯Champion💯']
    },
    {
      name: 'Squad',
      icon: '👥',
      description: 'Team-oriented names perfect for squad gameplay and group identity.',
      examples: ['🤝Squad🤝', '⚔️Team⚔️', '🛡️Unity🛡️']
    },
    {
      name: 'Clan',
      icon: '👑',
      description: 'Prestigious clan names for leaders and members showing unity and strength.',
      examples: ['👑King👑', '🏰Castle🏰', '⚜️Noble⚜️']
    },
    {
      name: 'Legendary',
      icon: '⭐',
      description: 'Epic and mythical names for veteran players and top-tier gamers.',
      examples: ['🌟Legend🌟', '💫Mythic💫', '✨Epic✨']
    },
    {
      name: 'Cool',
      icon: '😎',
      description: 'Trendy and stylish names with modern symbols and cool aesthetics.',
      examples: ['😎Cool😎', '🔥Fire🔥', '💎Gem💎']
    },
    {
      name: 'All Styles',
      icon: '✨',
      description: 'Mix of all categories providing the widest variety of creative options.',
      examples: ['✨Mixed✨', '🎭Various🎭', '🌈Rainbow🌈']
    }
  ]

  return (
    <section id="categories" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
            Style Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect category that matches your gaming personality
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Card key={category.name} hover gradient className="text-center">
              <CardHeader>
                <div className="text-6xl mb-4">{category.icon}</div>
                <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-primary">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{category.description}</p>
                <div className="space-y-2">
                  {category.examples.map((example, index) => (
                    <div key={index} className="p-2 bg-muted/50 rounded-lg">
                      <span className="text-transparent bg-clip-text bg-gradient-primary font-semibold">{example}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'How does the stylish font generator work?',
      answer: 'Our font generator uses Unicode characters and symbols that are supported across all major platforms including Instagram, Facebook, Free Fire, and BGMI. It transforms regular text into stylish variations using different character mappings and decorative elements.'
    },
    {
      question: 'Are the generated names safe to use on all platforms?',
      answer: 'Yes! All stylish names generated by our tool use standard Unicode characters that are supported by Instagram, Facebook, Free Fire, BGMI, Discord, TikTok, and most other platforms. However, always check platform-specific guidelines.'
    },
    {
      question: 'Can I use these names for different games and social media?',
      answer: 'Absolutely! Our generator creates universal stylish names that work across all platforms - from social media like Instagram and Facebook to games like Free Fire, BGMI, PUBG Mobile, Call of Duty Mobile, and more.'
    },
    {
      question: 'How many stylish names can I generate?',
      answer: 'There\'s no limit! Our font generator provides unlimited name generation. You can create as many stylish variations as you want and save your favorites for different platforms.'
    },
    {
      question: 'What if a stylish name doesn\'t display correctly?',
      answer: 'If a name doesn\'t display properly, it might be due to device-specific font rendering or outdated app versions. Try updating your apps or generating different style variations using our font generator.'
    },
    {
      question: 'Can I customize the symbols and decorations?',
      answer: 'Our generator automatically selects appropriate symbols based on your chosen category (Pro, Squad, Clan, etc.). Each category uses symbols that match its theme and gaming culture.'
    }
  ]

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to know about our stylish font generator
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-border/50 last:border-b-0">
                    <Button
                      variant="ghost"
                      className="w-full justify-between p-4 h-auto text-left hover:bg-muted/50"
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    >
                      <span className="font-semibold text-foreground">{faq.question}</span>
                      <svg
                        className={cn(
                          'w-5 h-5 transition-transform duration-200',
                          activeIndex === index ? 'rotate-180' : ''
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </Button>
                    {activeIndex === index && (
                      <div className="px-4 pb-4">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
