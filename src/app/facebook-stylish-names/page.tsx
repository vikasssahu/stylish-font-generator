import { Metadata } from 'next'
import { PlatformLayout } from '@/components/layout/platform-layout'
import { Facebook } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Facebook Stylish Names Generator 2025 | FB Profile Names',
  description: 'Generate unique Facebook stylish names with fancy fonts and symbols. Create eye-catching FB profile names that stand out. Best Facebook name generator.',
  keywords: 'facebook stylish names, fb names, facebook profile names, facebook username generator, stylish fb names',
}

const facebookData = {
  name: 'Facebook',
  icon: <Facebook className="text-white size-8" />,
  color: 'from-blue-500 to-blue-700',
  description: 'Create unique Facebook profile names that reflect your personality',
  about: 'Facebook stylish names help you create a memorable social media presence. Our generator creates unique combinations of fonts, symbols, and decorative characters that work perfectly with Facebook\'s platform, making your profile stand out in the social media crowd.',
  tips: [
    'Keep your Facebook name readable for friends and family',
    'Use symbols that represent your interests or personality', 
    'Avoid overly complex characters that might not display on all devices',
    'Consider using your real name with stylish formatting for authenticity',
    'Test your name on both mobile and desktop Facebook'
  ]
}

export default function FacebookPage() {
  return <PlatformLayout platform={facebookData} />
}
