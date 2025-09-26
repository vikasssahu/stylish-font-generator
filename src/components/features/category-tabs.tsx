'use client'

import { cn } from '@/lib/utils'
import type { Category } from './name-generator'
import { Sparkles, Trophy, Users, Crown, Star, Smile } from 'lucide-react'

interface CategoryTabsProps {
  currentCategory: Category
  onCategoryChange: (category: Category) => void
}

const categories = [
  { id: 'all' as Category, label: 'All Styles', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'pro' as Category, label: 'Pro', icon: <Trophy className="w-4 h-4" /> },
  { id: 'squad' as Category, label: 'Squad', icon: <Users className="w-4 h-4" /> },
  { id: 'clan' as Category, label: 'Clan', icon: <Crown className="w-4 h-4" /> },
  { id: 'legendary' as Category, label: 'Cute', icon: <Star className="w-4 h-4" /> },
  { id: 'cool' as Category, label: 'Cool', icon: <Smile className="w-4 h-4" /> },
]

export function CategoryTabs({ currentCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "backdrop-blur-sm bg-white/20 border-border/30 px-4 py-2 rounded-full text-sm font-medium",
            "hover:bg-white/30 shadow-lg",
            currentCategory === category.id
              ? "bg-foreground text-background shadow-md border-border/50"
              : "text-foreground"
          )}
        >
          <div className="flex flex-row items-center">
            <span className="mr-2">{category.icon}</span>
            <span>{category.label}</span>
          </div>
        </button>
      ))}
    </div>
  )
}
