import { Metadata } from 'next'
import { PlatformLayout } from '@/components/layout/platform-layout'
import { Flame } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Free Fire Stylish Names Generator 2025 | FF Pro Names',
  description: 'Generate Free Fire stylish names with gaming fonts and symbols. Create unique FF usernames for pro players. Best Free Fire name generator.',
  keywords: 'free fire stylish names, ff names, free fire username generator, ff pro names, garena free fire names',
}

const freeFireData = {
  name: 'Free Fire',
  icon: <Flame className="text-white size-8" />,
  color: 'from-orange-500 to-red-600',
  description: 'Pro Free Fire gaming names that dominate the battlefield',
  about: 'Free Fire stylish names are designed for competitive gaming and battle royale dominance. Our generator creates powerful combinations with gaming symbols, competitive fonts, and battle-ready decorations that showcase your skills and strike fear into opponents.',
  tips: [
    'Use competitive symbols like Trophy, Lightning, Skull for intimidation',
    'Keep names short for quick recognition in matches',
    'Include clan tags or squad identifiers if needed',
    'Use bold fonts that stand out in the game interface',
    'Consider your gameplay style - aggressive, strategic, supportive'
  ]
}

export default function FreeFirePage() {
  return <PlatformLayout platform={freeFireData} />
}
