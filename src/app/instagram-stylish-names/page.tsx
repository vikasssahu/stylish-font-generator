import { Metadata } from 'next'
import { PlatformLayout } from '@/components/layout/platform-layout'
import { Instagram } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Instagram Stylish Names Generator 2025 | IG Username Creator',
  description: 'Generate trendy Instagram stylish names with aesthetic fonts and symbols. Create unique IG usernames that get noticed. Best Instagram name generator.',
  keywords: 'instagram stylish names, ig names, instagram username generator, aesthetic instagram names, instagram bio names',
}

const instagramData = {
  name: 'Instagram',
  icon: <Instagram className="text-white size-8" />,
  color: 'from-pink-500 to-purple-600',
  description: 'Generate trendy Instagram usernames that get noticed',
  about: 'Instagram stylish names are perfect for creating an aesthetic and memorable profile. Our generator focuses on trendy fonts, aesthetic symbols, and modern decorative elements that align with Instagram\'s visual culture and help you build a strong personal brand.',
  tips: [
    'Use aesthetic symbols that match your Instagram theme',
    'Keep it short and memorable for easy tagging',
    'Consider your niche - fashion, travel, photography, etc.',
    'Use fonts that look good in Instagram stories and posts',
    'Make sure it\'s easy to type when people want to tag you'
  ]
}

export default function InstagramPage() {
  return <PlatformLayout platform={instagramData} />
}
