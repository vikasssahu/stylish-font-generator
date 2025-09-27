'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Facebook, Flame, Gamepad2, Instagram, ArrowUpRight } from 'lucide-react'

/**
 * PlatformCardsSection
 * Redesigned as per @ui-ux-pro.mdc (Glassmorphism, Swiss, and Brutalist influences)
 * - Glassmorphic card surfaces with subtle blur and layered gradients
 * - Swiss-style grid, clear hierarchy, and strong contrast
 * - Bold, accessible buttons and iconography
 * - Responsive, accessible, and visually distinct
 */
export function PlatformCardsSection() {
  const platforms = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-7 h-7" />,
      color: 'from-pink-500 via-fuchsia-500 to-purple-600',
      route: '/instagram-stylish-names',
      popular: true,
      accent: 'bg-gradient-to-br from-pink-100/60 to-purple-100/40 dark:from-pink-900/30 dark:to-purple-900/20'
    },
    {
      name: 'Facebook',
      icon: <Facebook className="w-7 h-7" />,
      color: 'from-blue-500 via-blue-600 to-blue-700',
      route: '/facebook-stylish-names',
      popular: false,
      accent: 'bg-gradient-to-br from-blue-100/60 to-blue-200/40 dark:from-blue-900/30 dark:to-blue-900/20'
    },
    {
      name: 'Free Fire',
      icon: <Flame className="w-7 h-7" />,
      color: 'from-orange-500 via-red-500 to-red-600',
      route: '/free-fire-stylish-names',
      popular: true,
      accent: 'bg-gradient-to-br from-orange-100/60 to-red-100/40 dark:from-orange-900/30 dark:to-red-900/20'
    },
    {
      name: 'BGMI',
      icon: <Gamepad2 className="w-7 h-7" />,
      color: 'from-green-500 via-emerald-500 to-emerald-600',
      route: '/bgmi-stylish-names',
      popular: false,
      accent: 'bg-gradient-to-br from-green-100/60 to-emerald-100/40 dark:from-green-900/30 dark:to-emerald-900/20'
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-background/40 dark:from-[#101214] dark:to-[#181a1f]">
      <div className="container mx-auto max-w-7xl">
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground mb-2 drop-shadow-sm">
              Choose Your Platform
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Instantly generate stylish names for your favorite platform. Each card is a gateway to a unique experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.route}
                className="focus:outline-none group"
                tabIndex={0}
                aria-label={`Generate ${platform.name} stylish names`}
              >
                <div
                  className={`
                    relative flex flex-col items-center justify-between
                    rounded-3xl p-7 h-full min-h-[270px]
                    border border-transparent
                    shadow-[0_4px_32px_0_rgba(34,34,34,0.08)]
                    bg-white/70 dark:bg-[#181a1f]/80
                    backdrop-blur-[10px]
                    transition-all duration-300
                    hover:scale-[1.03] hover:shadow-xl
                    focus:ring-2 focus:ring-primary focus:ring-offset-2
                    ${platform.accent}
                  `}
                  style={{
                    boxShadow:
                      '0 2px 12px 0 rgba(34,34,34,0.10), 0 1.5px 0 0 rgba(0,0,0,0.02)'
                  }}
                >
                  {/* Glassmorphic floating icon */}
                  <div
                    className={`
                      flex items-center justify-center mb-5
                      w-16 h-16 rounded-full
                      bg-gradient-to-br ${platform.color}
                      shadow-lg
                      transition-all duration-300
                      group-hover:scale-105 text-white
                    `}
                  >
                    {platform.icon}
                  </div>
                  {/* Platform name and description */}
                  <div className="flex-1 w-full flex flex-col items-center text-center">
                    <h3 className="text-xl font-bold text-[#181a1f] dark:text-white mb-1 leading-tight tracking-tight">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Generate <span className="font-medium">{platform.name}</span> stylish names
                    </p>
                  </div>
                  {/* Action button */}
                  <Button
                    className={`
                      w-full h-11 rounded-full font-semibold
                      bg-gradient-to-br ${platform.color}
                      text-white shadow-md
                      transition-all duration-200
                      hover:from-primary/80 hover:to-accent/80
                      focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                      flex items-center justify-center gap-1
                    `}
                    tabIndex={-1}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                    Generate
                  </Button>
                  {/* Popular badge (Brutalist accent) */}
                  {platform.popular && (
                    <span className="absolute top-4 right-4 bg-black/80 text-white text-xs font-bold px-3 py-1 rounded-full tracking-wide shadow-md border-2 border-white dark:border-[#23272f] uppercase z-10 select-none pointer-events-none"
                      style={{ letterSpacing: '0.04em' }}
                    >
                      Popular
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
