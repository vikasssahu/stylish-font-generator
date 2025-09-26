'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Check, CopyIcon, Gamepad2, Rocket, Lightbulb } from 'lucide-react'
import { Input } from '../ui/input'

export function HeroSection() {
  const [previewName, setPreviewName] = useState('')

  const generatePreviewStyles = (name: string) => {
    if (!name) return []
    
    const styles = [
      {
        name: 'Fancy',
        text: name.toLowerCase().split('').map(char => {
          const fancyChars: Record<string, string> = {
            'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ғ', 'g': 'ɢ', 'h': 'ʜ',
            'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ', 'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ',
            'q': 'ǫ', 'r': 'ʀ', 's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x',
            'y': 'ʏ', 'z': 'ᴢ'
          }
          return fancyChars[char] || char
        }).join('')
      },
      {
        name: 'Bold',
        text: name.toUpperCase()
      },
      {
        name: 'Cursive',
        text: name.toLowerCase().split('').map(char => {
          const cursiveChars: Record<string, string> = {
            'a': '𝒶', 'b': '𝒷', 'c': '𝒸', 'd': '𝒹', 'e': '𝑒', 'f': '𝒻', 'g': '𝑔', 'h': '𝒽',
            'i': '𝒾', 'j': '𝒿', 'k': '𝓀', 'l': '𝓁', 'm': '𝓂', 'n': '𝓃', 'o': '𝑜', 'p': '𝓅',
            'q': '𝓆', 'r': '𝓇', 's': '𝓈', 't': '𝓉', 'u': '𝓊', 'v': '𝓋', 'w': '𝓌', 'x': '𝓍',
            'y': '𝓎', 'z': '𝓏'
          }
          return cursiveChars[char] || char
        }).join('')
      },
      {
        name: 'Double',
        text: name.toLowerCase().split('').map(char => {
          const doubleChars: Record<string, string> = {
            'a': '𝕒', 'b': '𝕓', 'c': '𝕔', 'd': '𝕕', 'e': '𝕖', 'f': '𝕗', 'g': '𝕘', 'h': '𝕙',
            'i': '𝕚', 'j': '𝕛', 'k': '𝕜', 'l': '𝕝', 'm': '𝕞', 'n': '𝕟', 'o': '𝕠', 'p': '𝕡',
            'q': '𝕢', 'r': '𝕣', 's': '𝕤', 't': '𝕥', 'u': '𝕦', 'v': '𝕧', 'w': '𝕨', 'x': '𝕩',
            'y': '𝕪', 'z': '𝕫'
          }
          return doubleChars[char] || char
        }).join('')
      }
    ]
    
    return styles
  }


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
<div className="max-w-3xl mx-auto">
          <Input
                 value={previewName}
                 onChange={(e) => setPreviewName(e.target.value)}
                 placeholder="Enter your name to see magic..."
                 showSearchIcon={true}
                 className="w-full text-base h-16 bg-white border-0 rounded-full shadow-lg focus:ring-0 transition-all duration-200"
               />
              </div>
          {/* Compact Preview Generator */}
          <div className="p-6 max-w-2xl sm:max-w-3xl mx-auto">
            <div className="space-y-4">
              {previewName && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {generatePreviewStyles(previewName).map((style, index) => (
                    <button
                      key={index}
                      onClick={() => navigator.clipboard.writeText(style.text)}
                      className="relative flex flex-col items-center justify-center backdrop-blur-sm bg-muted/20 border p-2 rounded-xl hover:bg-muted/25 transition-all duration-200 group focus:outline-none focus:ring-1 focus:ring-orange-300"
                      aria-label={`Copy ${style.name} style`}
                      tabIndex={0}
                      type="button"
                    >
                      {/* Style name in absolute top-left */}
                      <span className="absolute top-2 left-3 text-muted-foreground text-xs font-medium pointer-events-none select-none z-10">
                        {style.name}
                      </span>
                      {/* Copy icon in absolute top-right */}
                      <span
                        className="absolute top-2 right-3 text-muted-foreground group-hover:text-white transition-colors text-base z-10 pointer-events-none"
                      >
                        <CopyIcon className="text-muted-foreground w-4 h-4" />
                      </span>
                      {/* Stylish name text */}
                      <div className="flex flex-1 items-center justify-center w-full">
                        <p className="pt-3 pb-2 px-1 w-full text-center text-foreground text-lg font-bold break-all">
                          {style.text}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
              
              {!previewName && (
                <div className="text-center pb-6">
                  <div className="text-foreground/60 text-base mb-3 flex items-center justify-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    Try typing your name above
                  </div>
                  <div className="flex flex-wrap justify-center gap-2 text-xs text-background/80">
                    <span className="bg-purple-500 px-3 py-2 rounded-full">Fancy</span>
                    <span className="bg-green-500 px-3 py-2 rounded-full">Bold</span>
                    <span className="bg-orange-500 px-3 py-2 rounded-full">Cursive</span>
                    <span className="bg-blue-500 px-3 py-2 rounded-full">Double</span>
                  </div>
                </div>
              )}
            </div>
            
            {/* Compact CTA */}
            <div className="mt-6">
              <Link href="/instagram-stylish-names">
                <Button 
                  variant="gradient"
                  size="lg" 
                  className="w-full h-12 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <Rocket/> Generate Names Now - FREE
                </Button>
              </Link>
            </div>
            
            {/* Compact Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-foreground/70 text-xs">
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

      </div>
    </section>
  )
}
