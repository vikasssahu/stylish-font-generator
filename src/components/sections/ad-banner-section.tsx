'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function AdBannerSection() {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-r from-teal-400 to-emerald-300 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 flex flex-row lg:flex-row gap-8 items-center">
            {/* Left side - Text content */}
            <div className="text-white space-y-6 w-2/3 flex-1">
              {/* 75% width */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Find Your Perfect Name in Seconds
              </h2>
              
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Get Your Perfect Name in Every Style
              </p>
              
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Start for free
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            
            {/* Right side - Illustration */}
            <div className="relative flex justify-center lg:justify-end flex-1 w-1/3">
              {/* 25% width */}
              <div className="relative">
                {/* Logo */}
                <Image
                  src="/illu.png"
                  alt="Ad Banner"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
