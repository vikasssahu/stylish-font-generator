'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Facebook, Flame, Gamepad2, Instagram, ArrowUpRight } from 'lucide-react'

export function PlatformCardsSection() {
  const platforms = [
    { name: 'Instagram', icon: <Instagram className="w-6 h-6" />, color: 'from-pink-500 to-purple-600', route: '/instagram-stylish-names', popular: true },
    { name: 'Facebook', icon: <Facebook className="w-6 h-6" />, color: 'from-blue-500 to-blue-700', route: '/facebook-stylish-names', popular: false },
    { name: 'Free Fire', icon: <Flame className="w-6 h-6" />, color: 'from-orange-500 to-red-600', route: '/free-fire-stylish-names', popular: true },
    { name: 'BGMI', icon: <Gamepad2 className="w-6 h-6" />, color: 'from-green-500 to-emerald-600', route: '/bgmi-stylish-names', popular: false }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Platform Cards */}
        <div>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Choose Your Platform
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <Link
                key={platform.name}
                href={platform.route}
                className="focus:outline-none"
              >
                <div className="group relative flex flex-col items-start bg-white dark:bg-[#16181c] border border-gray-200 dark:border-[#23272f] rounded-2xl p-5 h-full shadow-sm hover:shadow-lg transition-all duration-200 cursor-pointer hover:bg-[#f7f9fa] dark:hover:bg-[#23272f]">
                  {/* Twitter-style avatar/icon */}
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br text-white ${platform.color} shadow-md`}>
                      {platform.icon}
                    </div>
                  </div>
                  {/* Platform name and description */}
                  <div className="flex-1 w-full">
                    <h3 className="text-lg font-bold text-[#0f1419] dark:text-white mb-1 leading-tight">
                      {platform.name}
                    </h3>
                    <p className="text-sm text-[#536471] dark:text-[#8899a6] mb-4">
                      Generate {platform.name} stylish names
                    </p>
                  </div>
                  {/* Twitter-style action button */}
                  <Button className="w-full h-9 rounded-full">
                    <span className="mr-1"><ArrowUpRight /></span> Generate
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
