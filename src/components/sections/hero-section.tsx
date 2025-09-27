'use client'

import { Check, Gamepad2 } from 'lucide-react'
import { NameGenerator } from '@/components/features/name-generator'

export function HeroSection() {


  return (
    <section className="flex items-center justify-center">      
      {/* Minimal Floating Elements - Only 3 for Performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-8 text-4xl animate-float text-white/40" style={{ animationDelay: '4s' }}>
          <Gamepad2/>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center space-y-4 mb-12">
          {/* Compact Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground leading-tight">
          Find your stylish name now
          </h1>
          {/* Compact Description */}
          <p className="text-base sm:text-xl text-semibold text-foreground/90 max-w-2xl mx-auto leading-relaxed">
          500+ Unique, stylish names for all your favorite styles!
          </p>
          
          {/* Name Generator */}
          <div className="max-w-5xl mx-auto">
            <NameGenerator />
          </div>
          
          {/* Compact Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 text-foreground/70 text-xs">
            <div className="flex items-center gap-1">
              <span><Check className="w-4 h-4" /></span>
              <span>100% Free</span>
            </div>
            <div className="flex items-center gap-1">
              <span><Check className="w-4 h-4" /></span>
              <span>No Registration</span>
            </div>
            <div className="flex items-center gap-1">
              <span><Check className="w-4 h-4" /></span>
              <span>Instant Results</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
