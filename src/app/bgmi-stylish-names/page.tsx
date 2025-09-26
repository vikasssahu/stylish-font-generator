import { Metadata } from 'next'
import { PlatformLayout } from '@/components/layout/platform-layout'
import { Gamepad2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'BGMI Stylish Names Generator 2025 | Battlegrounds Mobile Names',
  description: 'Generate BGMI stylish names with battle royale fonts and symbols. Create unique Battlegrounds Mobile usernames. Best BGMI name generator.',
  keywords: 'bgmi stylish names, battlegrounds mobile names, bgmi username generator, pubg mobile names, bgmi pro names',
}

const bgmiData = {
  name: 'BGMI',
  icon: <Gamepad2 className="text-white size-8" />,
  color: 'from-green-500 to-emerald-600',
  description: 'BGMI battle royale names for ultimate survival',
  about: 'BGMI stylish names are crafted for battle royale excellence and tactical gameplay. Our generator combines military-inspired symbols, strategic fonts, and survival-themed decorations perfect for Battlegrounds Mobile India players who want to showcase their tactical prowess.',
  tips: [
    'Use tactical symbols like Target, Shield, Sword for military aesthetics',
    'Consider squad-based names for team coordination',
    'Use fonts that are easily readable during intense gameplay',
    'Include rank indicators or achievement symbols',
    'Keep it professional for competitive tournaments'
  ]
}

export default function BGMIPage() {
  return <PlatformLayout platform={bgmiData} />
}
