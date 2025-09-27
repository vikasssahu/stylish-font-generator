'use client'

import Image from 'next/image'
import * as React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { AnimatedTabs } from '@/components/ui/tabs'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Users, 
  Gamepad2, 
  Palette, 
  GraduationCap, 
  Sparkles,
  Copy,
  Star,
  Zap,
  Shield,
  Clock,
  Heart,
  Target,
  Rocket,
  Pencil
} from 'lucide-react'


const features = [
  {
    icon: <Copy className="w-8 h-8" />,
    title: "One-Click Copy",
    description: "Copy any font style instantly with a single click",
    stat: "12M+",
    statLabel: "Fonts Copied"
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Instant Generation",
    description: "Generate unlimited stylish fonts in real-time",
    stat: "500+",
    statLabel: "Font Styles"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Premium Quality",
    description: "High-quality Unicode fonts for all platforms",
    stat: "100%",
    statLabel: "Free to Use"
  }
]

const faqData = [
  {
    question: "How do I use the font generator?",
    answer: "Simply type your text in the input field, choose a style category, and click the copy button on any generated font. It's that easy!"
  },
  {
    question: "Are these fonts free to use?",
    answer: "Yes! All our fonts are completely free to use for personal and commercial projects. No registration or payment required."
  },
  {
    question: "Do these fonts work on all platforms?",
    answer: "Our fonts use Unicode characters that work on most modern platforms including social media, games, messaging apps, and websites."
  },
  {
    question: "Can I use these fonts for commercial purposes?",
    answer: "Absolutely! You can use our generated fonts for any purpose including commercial projects, social media, branding, and more."
  },
  {
    question: "How many font styles are available?",
    answer: "We offer 500+ unique font styles across different categories like Pro, Squad, Clan, Legendary, and Cool styles."
  },
  {
    question: "Do I need to download anything?",
    answer: "No downloads required! Our font generator works entirely in your browser. Just copy and paste the generated fonts wherever you need them."
  }
]

const benefits = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "100% Safe",
    description: "No malware, no tracking, completely secure"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Instant Results",
    description: "Generate fonts in milliseconds, no waiting"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "User Friendly",
    description: "Simple interface, easy to use for everyone"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "High Quality",
    description: "Premium Unicode fonts that look amazing"
  }
]

export function GuidesSection() {
  const [selectedTab, setSelectedTab] = React.useState('social-media')

  const tabOptions = [
    {
      value: 'social-media',
      label: 'Social Media',
      icon: <Users className="w-4 h-4" />
    },
    {
      value: 'games',
      label: 'Games',
      icon: <Gamepad2 className="w-4 h-4" />
    },
    {
      value: 'art',
      label: 'Art',
      icon: <Palette className="w-4 h-4" />
    },
    {
      value: 'education',
      label: 'Education',
      icon: <GraduationCap className="w-4 h-4" />
    }
  ]

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'social-media':
        return (
          <motion.div 
            key="social-media"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Social Media Fonts
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We know that <strong>Social Media</strong> is one of the biggest use cases of our font generator tool. We see a lot of <strong>LinkedIn</strong> and <strong>Twitter bios</strong> created with our fonts to pimp up social profiles, but it is also pretty cool to use fonts for titles on <strong>Instagram</strong> or <strong>Facebook posts</strong> to grab attention. <strong>Using our fonts in TikTok</strong> on your video or in your description/comments is also getting popular. You can also find our fonts on platforms like <strong>Youtube</strong> or <strong>Snapchat</strong>.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">LinkedIn</Badge>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">Twitter</Badge>
                  <Badge variant="secondary" className="bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300">Instagram</Badge>
                  <Badge variant="secondary" className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300">TikTok</Badge>
                  <Badge variant="secondary" className="bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300">YouTube</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <Image src="/1.png" alt="Social Media Fonts" width={500} height={500} />
              </div>
            </div>
          </motion.div>
        )
      case 'games':
        return (
          <motion.div 
            key="games"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Gaming Fonts
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Create unique gaming usernames and clan names that stand out in the gaming community. Perfect for <strong>Free Fire</strong>, <strong>BGMI</strong>, <strong>PUBG</strong>, and other popular games. Make your gaming identity memorable with stylish fonts that work across all gaming platforms.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">Free Fire</Badge>
                  <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300">BGMI</Badge>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">PUBG</Badge>
                  <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">Clan Names</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image src="/2.png" alt="Gaming Fonts" width={500} height={500} />
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'art':
        return (
          <motion.div 
            key="art"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Art & Design Fonts
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Add artistic flair to your creative projects with our stylish fonts. Perfect for <strong>digital art</strong>, <strong>graphic design</strong>, <strong>posters</strong>, and <strong>creative presentations</strong>. Make your artwork stand out with unique typography that captures attention.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-pink-100 dark:bg-pink-900/20 text-pink-700 dark:text-pink-300">Digital Art</Badge>
                  <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">Graphic Design</Badge>
                  <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300">Posters</Badge>
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">Presentations</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image src="/3.png" alt="Art & Design Fonts" width={500} height={500} />
                </div>
              </div>
            </div>
          </motion.div>
        )
      case 'education':
        return (
          <motion.div 
            key="education"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Education Fonts
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  Make learning materials more engaging with stylish fonts. Perfect for <strong>presentations</strong>, <strong>educational content</strong>, <strong>study materials</strong>, and <strong>academic projects</strong>. Help students stay focused with visually appealing typography.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300">Presentations</Badge>
                  <Badge variant="secondary" className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300">Study Materials</Badge>
                  <Badge variant="secondary" className="bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300">Academic Projects</Badge>
                  <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300">Educational Content</Badge>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <Image src="/4.png" alt="Education Fonts" width={500} height={500} />
                </div>
              </div>
            </div>
          </motion.div>
        )
      default:
        return null
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20">
      <div className="container max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800">
            <Sparkles className="w-4 h-4 mr-2" />
            Font & Text Generator
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 mb-6">
            18M+ fonts have been copied 🤯
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            This is how the tool works. Transform your text into stunning, unique fonts that work everywhere.
          </p>
        </div>

        {/* Features Section */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Our Font Generator?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Powerful features that make font generation effortless
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`
                relative p-8 text-center border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                shadow-lg transition-all duration-300
                rounded-3xl
                group
                hover:scale-105 hover:-rotate-2
                hover:shadow-2xl
                before:content-[''] before:absolute before:inset-0 before:rounded-3xl
                before:bg-gradient-to-br before:from-orange-200/40 before:to-red-200/30 dark:before:from-orange-900/10 dark:before:to-red-900/10
                before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
                overflow-hidden
              `}
              style={{
                zIndex: 10 - index, // subtle stacking
              }}
            >
              {/* Playing card "shine" effect */}
              <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1/4 bg-white/30 dark:bg-white/10 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Playing card border accent */}
              <span className="pointer-events-none absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-orange-400/60 group-hover:shadow-[0_8px_32px_0_rgba(255,122,0,0.10)] transition-all duration-300" />

              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                {feature.icon}
              </div>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-2 drop-shadow-sm">
                {feature.stat}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {feature.statLabel}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        <Separator className="my-16" />

        {/* Benefits Section */}
        <div className="relative text-center mb-16">
          <h4 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 drop-shadow-lg mb-3 tracking-tight">
            Why Choose Us?
          </h4>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-xl mx-auto mb-2">
            <span className="bg-gradient-to-r from-blue-100/60 via-purple-100/60 to-pink-100/60 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 px-3 py-1 rounded-full font-medium">
              More reasons to love our font generator
            </span>
          </p>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1/2 h-24 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 blur-2xl rounded-full pointer-events-none -z-10" />
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {/* Decorative background glow */}
          <div className="absolute inset-0 pointer-events-none -z-10">
            <div className="w-full h-full bg-gradient-to-br from-blue-200/30 via-purple-200/20 to-pink-200/20 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10 blur-2xl rounded-3xl" />
          </div>
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`
                relative p-8 text-center border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl
                shadow-xl hover:shadow-2xl transition-all duration-300
                rounded-2xl group overflow-hidden
                hover:scale-105
                before:content-[''] before:absolute before:inset-0 before:rounded-2xl
                before:bg-gradient-to-br before:from-blue-400/10 before:to-purple-400/10 dark:before:from-blue-900/10 dark:before:to-purple-900/10
                before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-300
              `}
              style={{
                zIndex: 10 - index,
              }}
            >
              {/* Shine effect */}
              <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-2/3 h-1/4 bg-white/40 dark:bg-white/10 rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-300" />
              {/* Border accent */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-400/40 group-hover:shadow-[0_8px_32px_0_rgba(80,70,255,0.10)] transition-all duration-300" />

              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 rounded-xl mb-5 text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 text-2xl">
                {benefit.icon}
              </div>
              <h4 className="font-semibold text-lg md:text-xl text-gray-900 dark:text-white mb-2 tracking-tight">
                {benefit.title}
              </h4>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Use Cases Tabs Section */}
        <section className="mb-24">
          <div className="text-center mb-14">
            <h3 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-lg">
              People use these fonts for...
            </h3>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
              Discover the endless possibilities of stylish fonts
            </p>
          </div>
          <div className="flex justify-center mb-10">
            <AnimatedTabs
              options={tabOptions}
              value={selectedTab}
              onValueChange={setSelectedTab}
              defaultValue="social-media"
              containerClassName="mx-auto"
            />
          </div>
          <div className="space-y-10">
            <AnimatePresence mode="wait">
              {renderTabContent()}
            </AnimatePresence>
          </div>
        </section>

        {/* How It Works Section - Unique & Cool */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#312e81] to-[#be185d] dark:from-[#18181b] dark:via-[#312e81] dark:to-[#be185d] rounded-[2.5rem] p-0 md:p-0 border-0 shadow-[0_8px_64px_0_rgba(80,70,255,0.18)] mb-28 overflow-hidden group">
          {/* Neon Glow Border */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="w-full h-full rounded-[2.5rem] border-4 border-transparent group-hover:border-pink-500/40 transition-all duration-500 animate-pulse" style={{
              boxShadow: '0 0 80px 10px #a21caf55, 0 0 120px 30px #2563eb33'
            }} />
          </div>
          {/* Floating Blobs */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-400/30 rounded-full blur-3xl animate-blob1 z-0" />
          <div className="absolute -bottom-12 -right-12 w-52 h-52 bg-blue-400/30 rounded-full blur-3xl animate-blob2 z-0" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-400/20 rounded-full blur-2xl animate-blob3 z-0" style={{transform: 'translate(-50%,-50%)'}} />
          
          <div className="relative z-10 px-6 md:px-16 py-16 md:py-24">
            <div className="text-center mb-16">
              <h3 className="text-5xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(168,85,247,0.5)] animate-gradient-x">
                <span className="inline-block transform -rotate-2">How It Works</span>
              </h3>
              <p className="text-2xl md:text-3xl text-white/80 dark:text-white/90 max-w-2xl mx-auto font-medium tracking-wide animate-fade-in">
                <span className="inline-block px-3 py-1 rounded-xl bg-white/10 dark:bg-black/10 shadow-lg backdrop-blur-md border border-white/10">
                  Just 3 steps to your <span className="font-bold text-pink-400">perfect</span> style
                </span>
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center relative group">
                {/* Icon with floating animation */}
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl mb-7 text-white text-4xl font-black shadow-2xl border-4 border-white/20 group-hover:scale-110 group-hover:rotate-[-6deg] transition-all duration-300 animate-float">
                  <span className="drop-shadow-[0_2px_12px_rgba(59,130,246,0.5)]"><Pencil className="w-8 h-8" /></span>
                </div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-wide drop-shadow">
                  Enter Your Text
                </h4>
                <p className="text-lg md:text-xl text-white/80 dark:text-white/80 font-medium">
                  Type anything you want to transform into a <span className="text-pink-300 font-semibold">stylish font</span>.
                </p>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-400 via-emerald-500 to-cyan-400 rounded-3xl mb-7 text-white text-4xl font-black shadow-2xl border-4 border-white/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 animate-float2">
                  <span className="drop-shadow-[0_2px_12px_rgba(16,185,129,0.5)]"><Palette className="w-8 h-8" /></span>
                </div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-wide drop-shadow">
                  Choose Style
                </h4>
                <p className="text-lg md:text-xl text-white/80 dark:text-white/80 font-medium">
                  Pick from <span className="text-cyan-300 font-semibold">hundreds of unique</span> font styles &amp; categories.
                </p>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center relative group">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-3xl mb-7 text-white text-4xl font-black shadow-2xl border-4 border-white/20 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300 animate-float3">
                  <span className="drop-shadow-[0_2px_12px_rgba(251,191,36,0.5)]"><Rocket className="w-8 h-8" /></span>
                </div>
                <h4 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-wide drop-shadow">
                  Copy &amp; Use
                </h4>
                <p className="text-lg md:text-xl text-white/80 dark:text-white/80 font-medium">
                  <span className="text-yellow-300 font-semibold">Copy</span> your stylish font &amp; use it <span className="underline decoration-pink-400">anywhere</span> you want!
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Animations for blobs and float */}
        <style jsx>{`
          @keyframes blob1 {
            0%, 100% { transform: scale(1) translateY(0) }
            50% { transform: scale(1.15) translateY(20px) }
          }
          @keyframes blob2 {
            0%, 100% { transform: scale(1) translateY(0) }
            50% { transform: scale(1.1) translateY(-18px) }
          }
          @keyframes blob3 {
            0%, 100% { transform: scale(1) }
            50% { transform: scale(1.2) }
          }
          .animate-blob1 { animation: blob1 7s ease-in-out infinite; }
          .animate-blob2 { animation: blob2 8s ease-in-out infinite; }
          .animate-blob3 { animation: blob3 6s ease-in-out infinite; }
          @keyframes float {
            0%, 100% { transform: translateY(0) }
            50% { transform: translateY(-12px) }
          }
          .animate-float { animation: float 3.5s ease-in-out infinite; }
          .animate-float2 { animation: float 4.2s ease-in-out infinite; }
          .animate-float3 { animation: float 3.8s ease-in-out infinite; }
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50% }
            50% { background-position: 100% 50% }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 5s ease-in-out infinite;
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: none;}
          }
          .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
        `}</style>

        {/* FAQ Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Everything you need to know about our font generator
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 dark:border-gray-700 rounded-lg px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
