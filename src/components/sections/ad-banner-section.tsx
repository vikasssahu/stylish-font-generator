'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export function AdBannerSection() {
  return (
    <section
      className="
        py-12 px-4
        bg-gradient-to-br from-white via-blue-50 to-blue-100
        dark:from-neutral-900 dark:via-blue-950 dark:to-blue-900
        transition-colors duration-500
      "
      aria-label="Promotional Banner"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className="
            relative overflow-hidden rounded-2xl
            bg-glass
            shadow-xl
            border border-blue-100 dark:border-blue-900
            flex flex-col md:flex-row items-center
            px-6 md:px-12 py-10 md:py-16
            gap-8
            transition-all duration-500
          "
        >
          {/* Glassmorphic floating shapes */}
          <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-cyan-200/10 rounded-full blur-2xl z-0" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-emerald-300/20 to-blue-200/10 rounded-full blur-2xl z-0" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 w-24 h-24 bg-white/10 rounded-full blur-lg -translate-x-1/2 -translate-y-1/2 z-0" />

          {/* Left: Content */}
          <div className="relative z-10 flex-1 min-w-0">
            <h2
              className="
                text-3xl md:text-4xl lg:text-5xl font-extrabold
                leading-tight tracking-tight
                text-neutral-900 dark:text-white
                drop-shadow-sm
                mb-4
                transition-colors
              "
            >
              Find Your Perfect Name <span className="bg-gradient-to-r from-blue-500 to-emerald-400 bg-clip-text text-transparent">in Seconds</span>
            </h2>
            <p
              className="
                text-lg md:text-xl text-neutral-700 dark:text-neutral-200
                mb-6
                max-w-xl
                transition-colors
              "
            >
              Instantly generate unique, memorable names for your brand, product, or project—across every style and vibe.
            </p>
            <div>
              <Link href="/sitemap" passHref>
                <Button
                  asChild
                  size="lg"
                  className="
                    px-8 py-4 text-lg font-semibold rounded-full
                    bg-gradient-to-r from-blue-600 to-emerald-500
                    hover:from-blue-700 hover:to-emerald-600
                    text-white shadow-xl hover:shadow-2xl
                    transition-all duration-300
                    focus:ring-4 focus:ring-blue-300 focus:ring-offset-2
                    focus:outline-none
                  "
                  aria-label="Start for free"
                >
                  <span className="flex flex-row items-center">
                    Start for free
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative z-10 flex-1 flex justify-center md:justify-end w-full md:w-auto">
            <div
              className="
                aspect-square w-40 md:w-56 lg:w-64
                flex items-center justify-center
                bg-gradient-to-tr from-white/60 to-blue-100/40 dark:from-blue-900/40 dark:to-blue-800/20
                rounded-2xl shadow-lg
                ring-1 ring-blue-100 dark:ring-blue-900
                backdrop-blur-md
                transition-all
              "
            >
              <Image
                src="/illu.png"
                alt="Ad Banner Illustration"
                width={180}
                height={180}
                className="object-contain w-32 h-32 md:w-44 md:h-44 drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
