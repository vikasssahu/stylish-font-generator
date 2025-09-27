'use client'

import { useState, useCallback, useRef, useEffect, Suspense } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CategoryTabs } from './category-tabs'
import { NameGrid } from './name-grid'
import { useNameGeneration } from '@/hooks/use-name-generation'
import { useSearchParams } from 'next/navigation'

export type Category = 'all' | 'pro' | 'squad' | 'clan' | 'legendary' | 'cool'

interface NameCard {
  id: string
  name: string
  isLoading: boolean
}

function NameGeneratorContent() {
  const [nameInput, setNameInput] = useState('')
  const [currentCategory, setCurrentCategory] = useState<Category>('all')
  const [nameCards, setNameCards] = useState<NameCard[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [, setSelectedTag] = useState<string | null>(null)
  const debounceTimer = useRef<NodeJS.Timeout | null>(null)
  const searchParams = useSearchParams()
  
  const { generateStylishNames, generateTagBasedNames } = useNameGeneration()

  // Handle URL parameters on component mount
  useEffect(() => {
    const tag = searchParams.get('tag')
    if (tag) {
      setSelectedTag(tag)
      // Auto-generate names for the tag
      const tagNames = generateTagBasedNames(tag)
      if (tagNames && tagNames.length > 0) {
        const newCards: NameCard[] = tagNames.slice(0, 24).map((name, index) => ({
          id: `tag-${Date.now()}-${index}`,
          name,
          isLoading: true
        }))
        
        setNameCards(newCards)
        
        // Animate cards
        setTimeout(() => {
          setNameCards(prev => prev.map(card => ({ ...card, isLoading: false })))
        }, 100)
      }
    }
  }, [searchParams, generateTagBasedNames])

  // Handle style-based pages (from URL path)
  useEffect(() => {
    const pathname = window.location.pathname
    const styleMatch = pathname.match(/\/([^\/]+)-names$/)
    
    if (styleMatch) {
      // Check if it's a style page (not a platform page)
      const platformMatch = pathname.match(/\/([^\/]+)-([^\/]+)-names$/)
      if (platformMatch) {
        const [, , styleName] = platformMatch
        setSelectedTag(styleName)
        // Auto-generate names for the style
        const styleNames = generateTagBasedNames(styleName)
        if (styleNames && styleNames.length > 0) {
          const newCards: NameCard[] = styleNames.slice(0, 24).map((name, index) => ({
            id: `style-${Date.now()}-${index}`,
            name,
            isLoading: true
          }))
          
          setNameCards(newCards)
          
          // Animate cards
          setTimeout(() => {
            setNameCards(prev => prev.map(card => ({ ...card, isLoading: false })))
          }, 100)
        }
      }
    }
  }, [generateTagBasedNames])

  const generateAndDisplayNames = useCallback(async (inputText: string, category: Category, count = 24) => {
    if (!inputText || isGenerating) return
    
    setIsGenerating(true)
    
    try {
      const newNames = generateStylishNames(inputText, category)
      
      if (newNames && newNames.length > 0) {
        const namesToShow = newNames.slice(0, count)
        const newCards: NameCard[] = namesToShow.map((name, index) => ({
          id: `${Date.now()}-${index}`,
          name,
          isLoading: true
        }))
        
        setNameCards(prev => [...prev, ...newCards])

        // Animate cards
        setTimeout(() => {
          setNameCards(prev => prev.map(card => ({ ...card, isLoading: false })))
        }, 100)
      }
    } catch (error) {
      console.error('Error generating names:', error)
    } finally {
      setIsGenerating(false)
    }
  }, [generateStylishNames, isGenerating])

  const handleInputChange = useCallback((value: string) => {
    setNameInput(value)
    
    if (value.trim()) {
      // Clear previous results
      setNameCards([])
      
      // Clear previous debounce timer
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
      
      // Set new debounce timer
      debounceTimer.current = setTimeout(() => {
        generateAndDisplayNames(value.trim(), currentCategory)
      }, 500)
    } else {
      setNameCards([])
    }
  }, [currentCategory, generateAndDisplayNames])

  const handleCategoryChange = useCallback((category: Category) => {
    setCurrentCategory(category)
    
    // Regenerate names based on current input or default
    const inputToUse = nameInput.trim() || 'StylishNames'
    setNameCards([])
    generateAndDisplayNames(inputToUse, category, nameInput.trim() ? 24 : 12)
  }, [nameInput, generateAndDisplayNames])

  const loadMoreNames = useCallback(async () => {
    if (isGenerating) return
    
    setIsGenerating(true)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const inputToUse = nameInput.trim() || 'StylishNames'
    await generateAndDisplayNames(inputToUse, currentCategory, 24)
    
    setIsGenerating(false)
  }, [nameInput, currentCategory, isGenerating, generateAndDisplayNames])


  // Generate default names on mount
  useEffect(() => {
    const defaultName = 'StylishNames'
    generateAndDisplayNames(defaultName, 'all', 12)
  }, [generateAndDisplayNames])

  // Cleanup debounce timer
  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current)
      }
    }
  }, [])

  return (
    <div className="space-y-8">
      {/* Input Section - Sticky */}
      <div className="sticky top-14 lg:top-24 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl py-6 shadow-lg">
        <div className="max-w-2xl px-6 mx-auto space-y-6">
        <Input
          value={nameInput}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Enter your name here..."
          maxLength={20}
          showSearchIcon={true}
          className="w-full h-12 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
        />
        
        <CategoryTabs
          currentCategory={currentCategory}
          onCategoryChange={handleCategoryChange}
        />
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-6 pt-8">
        <NameGrid nameCards={nameCards} />

        {nameCards.length > 0 && (
          <div className="text-center">
            <Button
              onClick={loadMoreNames}
              disabled={isGenerating}
              variant="gradient"
              size="lg"
              className={isGenerating ? 'animate-pulse' : ''}
            >
              {isGenerating ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Load More Names
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export function NameGenerator() {
  return (
    <Suspense fallback={
      <div className="space-y-8">
        <div className="sticky top-20 lg:top-24 z-30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl py-6 shadow-lg">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-full h-12 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse" />
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-10 w-20 bg-gray-200 dark:bg-gray-700 rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="h-8 w-64 bg-gray-200 dark:bg-gray-700 rounded mx-auto mb-4 animate-pulse" />
          <div className="h-4 w-96 bg-gray-200 dark:bg-gray-700 rounded mx-auto animate-pulse" />
        </div>
      </div>
    }>
      <NameGeneratorContent />
    </Suspense>
  )
}
