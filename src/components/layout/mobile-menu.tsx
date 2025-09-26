'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import {
  Home,
  Facebook,
  Instagram,
  Flame,
  Gamepad2,
  Info,
  Mail,
  Shield,
  FileText,
  Map
} from 'lucide-react'
import { LogoIcon } from '../ui/logo-icon'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-zinc-100 to-zinc-50 w-8 h-8 rounded-lg flex items-center justify-center shadow-md p-1">
                <LogoIcon size="sm" className='text-foreground' />
              </div>
              <h2 className="text-lg font-semibold text-foreground">StylishNames</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  onClick={onClose}
                  className="text-lg font-medium text-gray-800 dark:text-gray-200 hover:text-orange-500 transition-colors py-2 flex items-center gap-2"
                >
                  <Home className="w-5 h-5" /> Home
                </Link>
              </li>
              <li>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Platforms</div>
                <ul className="space-y-2 ml-4">
                  <li>
                    <Link
                      href="/facebook-stylish-names"
                      onClick={onClose}
                      className="text-base text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors py-1 flex items-center gap-2"
                    >
                      <Facebook className="w-5 h-5 text-blue-600 dark:text-blue-400" /> Facebook Names
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/instagram-stylish-names"
                      onClick={onClose}
                      className="text-base text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors py-1 flex items-center gap-2"
                    >
                      <Instagram className="w-5 h-5 text-pink-600 dark:text-pink-400" /> Instagram Names
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/free-fire-stylish-names"
                      onClick={onClose}
                      className="text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors py-1 flex items-center gap-2"
                    >
                      <Flame className="w-5 h-5 text-orange-500 dark:text-orange-400" /> Free Fire Names
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bgmi-stylish-names"
                      onClick={onClose}
                      className="text-base text-gray-700 dark:text-gray-300 hover:text-green-500 transition-colors py-1 flex items-center gap-2"
                    >
                      <Gamepad2 className="w-5 h-5 text-green-600 dark:text-green-400" /> BGMI Names
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Information</div>
                <ul className="space-y-2 ml-4">
                  <li>
                    <Link
                      href="/about"
                      onClick={onClose}
                      className="text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors py-1 flex items-center gap-2"
                    >
                      <Info className="w-5 h-5" /> About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      onClick={onClose}
                      className="flex text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors py-1 items-center gap-2"
                    >
                      <Mail className="w-5 h-5" /> Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/sitemap"
                      onClick={onClose}
                      className="flex text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors py-1 items-center gap-2"
                    >
                      <Map className="w-5 h-5" /> Sitemap
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <div className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">Legal</div>
                <ul className="space-y-2 ml-4">
                  <li>
                    <Link
                      href="/privacy"
                      onClick={onClose}
                      className="flex text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors py-1 items-center gap-2"
                    >
                      <Shield className="w-5 h-5" /> Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/terms"
                      onClick={onClose}
                      className="flex text-base text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors py-1 items-center gap-2"
                    >
                      <FileText className="w-5 h-5" /> Terms of Service
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Stylish Name Generator
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
