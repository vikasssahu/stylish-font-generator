'use client'

interface TagCloudSectionProps {
  platform?: {
    name: string
  }
  title?: string
  subtitle?: string
  description?: string
  className?: string
}

export function TagCloudSection({ 
  platform = { name: 'Stylish' },
  title = 'Explore by',
  subtitle = 'Categories',
  description,
  className = ''
}: TagCloudSectionProps) {
  const defaultDescription = `Click on any tag below to generate ${platform.name} names in that specific style or category`

  const tags = [
    { name: 'Cool', color: 'from-blue-500 to-cyan-500', count: '2.5K' },
    { name: 'Cute', color: 'from-pink-500 to-rose-500', count: '1.8K' },
    { name: 'Gaming', color: 'from-green-500 to-emerald-500', count: '3.2K' },
    { name: 'Funny', color: 'from-purple-500 to-violet-500', count: '2.1K' },
    { name: 'Heart', color: 'from-red-500 to-pink-500', count: '1.5K' },
    { name: 'Royal', color: 'from-yellow-500 to-orange-500', count: '1.2K' },
    { name: 'Fire', color: 'from-red-500 to-orange-500', count: '2.8K' },
    { name: 'Ice', color: 'from-cyan-400 to-blue-500', count: '1.9K' },
    { name: 'Shadow', color: 'from-indigo-600 to-purple-600', count: '1.7K' },
    { name: 'Light', color: 'from-yellow-300 to-yellow-500', count: '2.3K' },
    { name: 'Mystic', color: 'from-purple-600 to-pink-600', count: '1.4K' },
    { name: 'Warrior', color: 'from-red-600 to-red-800', count: '2.6K' },
    { name: 'Magic', color: 'from-violet-500 to-purple-600', count: '1.8K' },
    { name: 'Ninja', color: 'from-gray-600 to-gray-800', count: '2.0K' },
    { name: 'Angel', color: 'from-white to-gray-200', count: '1.6K' },
    { name: 'Demon', color: 'from-red-700 to-red-900', count: '1.9K' },
    { name: 'Dragon', color: 'from-orange-600 to-red-600', count: '2.4K' },
    { name: 'Phoenix', color: 'from-orange-500 to-red-500', count: '1.3K' },
    { name: 'Storm', color: 'from-blue-600 to-indigo-600', count: '1.7K' },
    { name: 'Cosmic', color: 'from-indigo-500 to-purple-500', count: '1.5K' },
    { name: 'Nickname', color: 'from-teal-500 to-cyan-500', count: '2.7K' },
    { name: 'Style', color: 'from-purple-500 to-indigo-500', count: '3.1K' },
    { name: 'Danger', color: 'from-red-600 to-red-800', count: '1.9K' },
    { name: 'Hacker', color: 'from-green-600 to-emerald-600', count: '2.2K' },
    { name: 'Attitude', color: 'from-orange-500 to-red-500', count: '2.8K' },
    { name: 'Ego', color: 'from-yellow-500 to-orange-500', count: '1.6K' },
    { name: 'Girl', color: 'from-pink-500 to-rose-500', count: '2.4K' },
    { name: 'Instagram', color: 'from-pink-500 to-purple-500', count: '3.5K' },
    { name: 'Invisible', color: 'from-gray-500 to-gray-700', count: '1.3K' },
    { name: 'Alone', color: 'from-blue-600 to-indigo-600', count: '1.8K' },
    { name: 'Anime', color: 'from-purple-500 to-pink-500', count: '2.9K' },
    { name: 'Bold', color: 'from-gray-700 to-gray-900', count: '2.1K' },
    { name: 'Boy', color: 'from-blue-500 to-cyan-500', count: '2.3K' },
    { name: 'Fonts', color: 'from-indigo-500 to-purple-500', count: '3.8K' },
    { name: 'Happy', color: 'from-yellow-400 to-orange-400', count: '2.6K' },
    { name: 'Wishes', color: 'from-pink-400 to-rose-400', count: '1.7K' },
    { name: 'Name', color: 'from-blue-500 to-indigo-500', count: '4.2K' },
    { name: 'BGMI', color: 'from-orange-500 to-red-500', count: '3.1K' },
    { name: 'Birthday', color: 'from-pink-500 to-purple-500', count: '1.9K' }
  ]

  const handleTagClick = (tagName: string) => {
    const tagRoute = tagName.toLowerCase().replace(/\s+/g, '-')
    const platformRoute = platform.name.toLowerCase().replace(/[\s-]/g, '-')
    window.location.href = `/${platformRoute}-${tagRoute}-names`
  }

  return (
    <section className={`py-24 bg-white dark:bg-gray-800 ${className}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-5 py-2.5 rounded-full text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              Popular Tags
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"> {subtitle}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {description || defaultDescription}
            </p>
          </div>

          {/* Tag Cloud */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => handleTagClick(tag.name)}
                className={`group relative px-3 py-1.5 rounded-full font-medium text-white transition-all duration-200 hover:scale-105 hover:shadow-md bg-gradient-to-r ${tag.color}`}
                style={{
                  animationDelay: `${index * 0.05}s`
                }}
              >
                <span className="relative z-10 text-sm">{tag.name}</span>
                <span className="absolute -top-1.5 -right-1.5 bg-white/30 backdrop-blur-sm rounded-full px-1.5 py-0.5 text-[10px] font-medium">
                  {tag.count}
                </span>
                {/* Compact hover overlay */}
                <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
