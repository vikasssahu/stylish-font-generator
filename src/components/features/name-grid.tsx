'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CopyIcon } from 'lucide-react'

interface NameCard {
  id: string
  name: string
  isLoading: boolean
}

interface NameGridProps {
  nameCards: NameCard[]
}

interface NameCardProps {
  card: NameCard
  onCopy: (text: string) => Promise<boolean>
}

function NameCardComponent({ card, onCopy }: NameCardProps) {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = async () => {
    const success = await onCopy(card.name)
    if (success) {
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    }
  }

  return (
    <Card
      hover
      gradient
      className={cn(
        "p-5 transition-all duration-500",
        card.isLoading 
          ? "opacity-0 translate-y-8 scale-95" 
          : "opacity-100 translate-y-0 scale-100"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
            <p className="text-foreground text-lg font-semibold break-words leading-relaxed">
            {card.name}
          </p>
        </div>
        
        <Button
          onClick={handleCopy}
          variant={isCopied ? "default" : "outline"}
          size="sm"
          className={cn(
            "shrink-0 transition-all duration-200",
            isCopied 
              ? "bg-green-500 hover:bg-green-600 text-white scale-105" 
              : "hover:bg-primary hover:text-primary-foreground"
          )}
        >
          {isCopied ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </>
          ) : (
            <>
            <CopyIcon className="w-4 h-4" />
            </>
          )}
        </Button>
      </div>
    </Card>
  )
}

export function NameGrid({ nameCards }: NameGridProps) {
  const [showNotification, setShowNotification] = useState(false)

  const handleCopy = async (text: string): Promise<boolean> => {
    try {
      await navigator.clipboard.writeText(text)
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
      return true
    } catch (error) {
      console.error('Failed to copy text:', error)
      return false
    }
  }

  if (nameCards.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14L17 4M9 9v8m6-8v8" />
          </svg>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          Enter a name above to generate stylish variations
        </p>
      </div>
    )
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nameCards.map((card) => (
          <NameCardComponent
            key={card.id}
            card={card}
            onCopy={handleCopy}
          />
        ))}
      </div>

      {/* Copy Notification */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
          <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full shadow-xl flex items-center space-x-2 backdrop-blur-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="font-medium">Copied to clipboard!</span>
          </div>
        </div>
      )}
    </>
  )
}
