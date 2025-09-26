'use client'

import { useState, useCallback, useRef, useEffect } from 'react'
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

export function NameGenerator() {
  const [nameInput, setNameInput] = useState('')
  const [currentCategory, setCurrentCategory] = useState<Category>('all')
  const [nameCards, setNameCards] = useState<NameCard[]>([])
  const [isGenerating, setIsGenerating] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
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
    
    // Regenerate if input exists
    if (nameInput.trim()) {
      setNameCards([])
      generateAndDisplayNames(nameInput.trim(), category)
    }
  }, [nameInput, generateAndDisplayNames])

  const loadMoreNames = useCallback(async () => {
    if (!nameInput.trim() || isGenerating) return
    
    setIsGenerating(true)
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    await generateAndDisplayNames(nameInput.trim(), currentCategory, 24)
    
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
      {/* Input Section */}
      <div className="max-w-2xl mx-auto space-y-6">
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

      {/* Results Section */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 mb-4">
            {selectedTag ? `${selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)} Style Names` : 'Your Stylish Names'}
          </h2>
          <div className="inline-block mb-4">
            {selectedTag ? (
              <span className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                🏷️ {selectedTag.charAt(0).toUpperCase() + selectedTag.slice(1)} Theme
              </span>
            ) : (
              <span className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 text-orange-700 dark:text-orange-300 px-4 py-2 rounded-full text-sm font-medium border border-orange-200 dark:border-orange-800">
                {currentCategory === 'all' && '✨ All Styles'}
                {currentCategory === 'pro' && '🏆 Pro'}
                {currentCategory === 'squad' && '👥 Squad'}
                {currentCategory === 'clan' && '👑 Clan'}
                {currentCategory === 'legendary' && '⭐ Legendary'}
                {currentCategory === 'cool' && '😎 Cool'}
              </span>
            )}
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {selectedTag 
              ? `Click the copy button on any ${selectedTag} style name to copy it instantly!`
              : 'Click the copy button on any stylish name to copy it instantly! Use the Load More button to get unlimited stylish names.'
            }
          </p>
        </div>

        <NameGrid nameCards={nameCards} />

        {nameInput && nameCards.length > 0 && (
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
