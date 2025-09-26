'use client'

import { useCallback } from 'react'
import type { Category } from '@/components/features/name-generator'

// Character maps for different font styles
const characterMaps = {
  fancy1: {'a':'α','b':'в','c':'¢','d':'∂','e':'є','f':'ƒ','g':'g','h':'н','i':'ι','j':'נ','k':'к','l':'ℓ','m':'м','n':'η','o':'σ','p':'ρ','q':'q','r':'я','s':'ѕ','t':'т','u':'υ','v':'ν','w':'ω','x':'χ','y':'у','z':'z','A':'Α','B':'В','C':'¢','D':'∂','E':'Є','F':'Ƒ','G':'G','H':'Н','I':'Ι','J':'נ','K':'К','L':'Ł','M':'М','N':'η','O':'Σ','P':'Ρ','Q':'Q','R':'Я','S':'Ѕ','T':'Т','U':'Υ','V':'Ν','W':'Ω','X':'Χ','Y':'Ў','Z':'Z'},
  fancy2: {'a':'ᗩ','b':'ᗷ','c':'ᑕ','d':'ᗪ','e':'E','f':'ᖴ','g':'G','h':'ᕼ','i':'I','j':'ᒍ','k':'K','l':'ᒪ','m':'ᗰ','n':'ᑎ','o':'O','p':'ᑭ','q':'ᑫ','r':'ᖇ','s':'ᔕ','t':'T','u':'ᑌ','v':'ᐯ','w':'ᗯ','x':'᙭','y':'Y','z':'ᘔ','A':'ᗩ','B':'ᗷ','C':'ᑕ','D':'ᗪ','E':'E','F':'ᖴ','G':'G','H':'ᕼ','I':'I','J':'ᒍ','K':'K','L':'ᒪ','M':'ᗰ','N':'ᑎ','O':'O','P':'ᑭ','Q':'ᑫ','R':'ᖇ','S':'ᔕ','T':'T','U':'ᑌ','V':'ᐯ','W':'ᗯ','X':'᙭','Y':'Y','Z':'ᘔ'},
  cursive: {'a':'𝓪','b':'𝓫','c':'𝓬','d':'𝓭','e':'𝓮','f':'𝓯','g':'𝓰','h':'𝓱','i':'𝓲','j':'𝓳','k':'𝓴','l':'𝓵','m':'𝓶','n':'𝓷','o':'𝓸','p':'𝓹','q':'𝓺','r':'𝓻','s':'𝓼','t':'𝓽','u':'𝓾','v':'𝓿','w':'𝔀','x':'𝔁','y':'𝔂','z':'𝔃','A':'𝓐','B':'𝓑','C':'𝓒','D':'𝓓','E':'𝓔','F':'𝓕','G':'𝓖','H':'𝓗','I':'𝓘','J':'𝓙','K':'𝓚','L':'𝓛','M':'𝓜','N':'𝓝','O':'𝓞','P':'𝓟','Q':'𝓠','R':'𝓡','S':'𝓢','T':'𝓣','U':'𝓤','V':'𝓥','W':'𝓦','X':'𝓧','Y':'𝓨','Z':'𝓩'},
  bold: {'a':'𝗮','b':'𝗯','c':'𝗰','d':'𝗱','e':'𝗲','f':'𝗳','g':'𝗴','h':'𝗵','i':'𝗶','j':'𝗷','k':'𝗸','l':'𝗹','m':'𝗺','n':'𝗻','o':'𝗼','p':'𝗽','q':'𝗾','r':'𝗿','s':'𝘀','t':'𝘁','u':'𝘂','v':'𝘃','w':'𝘄','x':'𝘅','y':'𝘆','z':'𝘇','A':'𝗔','B':'𝗕','C':'𝗖','D':'𝗗','E':'𝗘','F':'𝗙','G':'𝗚','H':'𝗛','I':'𝗜','J':'𝗝','K':'𝗞','L':'𝗟','M':'𝗠','N':'𝗡','O':'𝗢','P':'𝗣','Q':'𝗤','R':'𝗥','S':'𝗦','T':'𝗧','U':'𝗨','V':'𝗩','W':'𝗪','X':'𝗫','Y':'𝗬','Z':'𝗭'},
  double: {'a':'𝕒','b':'𝕓','c':'𝕔','d':'𝕕','e':'𝖊','f':'𝕗','g':'𝕘','h':'𝕙','i':'𝕚','j':'𝕛','k':'𝕜','l':'𝕝','m':'𝕞','n':'𝕟','o':'𝕠','p':'𝕡','q':'𝕢','r':'𝕣','s':'𝕤','t':'𝕥','u':'𝕦','v':'𝕧','w':'𝕨','x':'𝕩','y':'𝕪','z':'𝕫','A':'𝔸','B':'𝔹','C':'ℂ','D':'𝔻','E':'𝔼','F':'𝔽','G':'𝔾','H':'ℍ','I':'𝕀','J':'𝕁','K':'𝕂','L':'𝕃','M':'𝕄','N':'ℕ','O':'𝕆','P':'ℙ','Q':'ℚ','R':'ℝ','S':'𝕊','T':'𝕋','U':'𝕌','V':'𝕍','W':'𝕎','X':'𝕏','Y':'𝕐','Z':'ℤ'},
  bubble: {'a':'ⓐ','b':'ⓑ','c':'ⓒ','d':'ⓓ','e':'ⓔ','f':'ⓕ','g':'ⓖ','h':'ⓗ','i':'ⓘ','j':'ⓙ','k':'ⓚ','l':'ⓛ','m':'ⓜ','n':'ⓝ','o':'ⓞ','p':'ⓟ','q':'ⓠ','r':'ⓡ','s':'ⓢ','t':'ⓣ','u':'ⓤ','v':'ⓥ','w':'ⓦ','x':'ⓧ','y':'ⓨ','z':'ⓩ','A':'Ⓐ','B':'Ⓑ','C':'Ⓒ','D':'Ⓓ','E':'Ⓔ','F':'Ⓕ','G':'Ⓖ','H':'Ⓗ','I':'Ⓘ','J':'Ⓙ','K':'Ⓚ','L':'Ⓛ','M':'Ⓜ','N':'Ⓝ','O':'Ⓞ','P':'Ⓟ','Q':'Ⓠ','R':'Ⓡ','S':'Ⓢ','T':'Ⓣ','U':'Ⓤ','V':'Ⓥ','W':'Ⓦ','X':'Ⓧ','Y':'Ⓨ','Z':'Ⓩ'}
}

// Symbol collections for different categories
const symbolCollections = {
  pro: ['🏆','⚡','🔥','💥','💯','👑','💎','🎯','🚀','⭐','🥇','🎖️','🏅','💪','⚔️','🛡️','🗡️','🔰','⚜️','💢','⚖️','🔱','🌟','🎭','🏹','💣','🗲','⚯','🔫','💥','⚡','🌪️','💀'],
  squad: ['👥','🤝','💪','🛡️','⚔️','🔗','🎯','🏆','💯','🔥','⚡','💥','🚀','⭐','🌟','💎','👑','🎖️','🏅','🥇','🎭','🏹','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯'],
  clan: ['👑','🏰','⚔️','🛡️','🗡️','🔰','⚜️','🏆','💎','⭐','🌟','🔥','⚡','💥','💯','🎯','🚀','💪','🎖️','🏅','🥇','🎭','🏹','💢','⚖️','🔱','🗲','⚯','💀','🔫'],
  legendary: ['🌟','⭐','💫','✨','👑','💎','🏆','🥇','🎖️','🏅','🔥','⚡','💥','💯','🚀','💪','⚔️','🛡️','🗡️','🔰','⚜️','💢','⚖️','🔱','🎯','🏹','🗲','⚯','💀','🔫','🌪️','💣'],
  cool: ['😎','🔥','⚡','💥','💯','🚀','⭐','🌟','💎','👑','🎯','💪','⚔️','🗡️','🔰','⚜️','🎖️','🏅','🥇','🎭','🏹','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎮','🎲'],
  all: ['🏆','⚡','🔥','💥','💯','👑','💎','🎯','🚀','⭐','🥇','🎖️','🏅','💪','⚔️','🛡️','🗡️','🔰','⚜️','💢','⚖️','🔱','🌟','🎭','🏹','💣','🗲','⚯','🔫','💥','⚡','🌪️','💀','👥','🤝','🔗','🏰','🌟','💫','✨','😎','🎮','🎲']
}

// Tag-specific symbol collections
const tagSymbols = {
  cool: ['😎','🔥','⚡','💥','💯','🚀','⭐','🌟','💎','👑','🎯','💪','⚔️','🗡️','🔰','⚜️','🎖️','🏅','🥇','🎭','🏹','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎮','🎲'],
  cute: ['💕','💖','💗','💘','💝','💞','💟','💌','💍','💎','🌸','🌺','🌻','🌷','🌹','🦄','🐰','🐱','🐶','🐨','🐼','🐻','🍭','🍬','🍫','🧸','🎀','🎁','✨','💫','🌟','⭐'],
  gaming: ['🎮','🕹️','🎯','🏆','⚡','🔥','💥','💯','🚀','⭐','🌟','💎','👑','🎖️','🏅','🥇','💪','⚔️','🛡️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎲'],
  anime: ['🌸','🌺','🌻','🌷','🌹','🦄','✨','💫','🌟','⭐','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🎨'],
  dark: ['💀','☠️','🖤','⚫','🔳','⬛','🌑','🌚','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌙','⭐','🌟','💫','✨','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','🔫','🌪️','💣'],
  royal: ['👑','💎','🏆','🥇','🎖️','🏅','🌟','⭐','💫','✨','💪','⚔️','🛡️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💥','⚡','🔥','💯','🚀'],
  fire: ['🔥','💥','⚡','💯','🚀','⭐','🌟','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💫','✨'],
  ice: ['❄️','🧊','🌨️','⛄','❅','❆','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💫','✨','🌟','⭐'],
  shadow: ['🌑','🌚','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌙','💀','☠️','🖤','⚫','🔳','⬛','⭐','🌟','💫','✨','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','🔫','🌪️','💣'],
  light: ['☀️','🌞','✨','💫','🌟','⭐','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💥','⚡','🔥','💯','🚀'],
  mystic: ['🔮','✨','💫','🌟','⭐','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💥','⚡','🔥','💯','🚀'],
  warrior: ['⚔️','🛡️','🗡️','🏹','💪','🏆','🥇','🎖️','🏅','💎','👑','⭐','🌟','💫','✨','💥','⚡','🔥','💯','🚀','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭'],
  magic: ['🔮','✨','💫','🌟','⭐','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💥','⚡','🔥','💯','🚀'],
  ninja: ['🥷','⚔️','🗡️','🏹','💪','🏆','🥇','🎖️','🏅','💎','👑','⭐','🌟','💫','✨','💥','⚡','🔥','💯','🚀','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭'],
  angel: ['👼','✨','💫','🌟','⭐','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💥','⚡','🔥','💯','🚀'],
  demon: ['👹','👺','💀','☠️','🔥','💥','⚡','💯','🚀','⭐','🌟','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','🔫','🌪️','💣','🎭','🏹'],
  dragon: ['🐉','🔥','💥','⚡','💯','🚀','⭐','🌟','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💫','✨'],
  phoenix: ['🔥','💥','⚡','💯','🚀','⭐','🌟','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💫','✨','🦅'],
  storm: ['⛈️','🌩️','⚡','💥','💯','🚀','⭐','🌟','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💫','✨'],
  cosmic: ['🌌','✨','💫','🌟','⭐','💎','👑','🎖️','🏅','🥇','💪','⚔️','🗡️','🔰','⚜️','💢','⚖️','🔱','🗲','⚯','💀','🔫','🌪️','💣','🎭','🏹','💥','⚡','🔥','💯','🚀']
}

// Category-specific prefixes and suffixes
const categoryStyles = {
  pro: {
    prefixes: ['PRO', 'ELITE', 'MASTER', 'CHAMP', 'BOSS'],
    suffixes: ['PRO', 'ELITE', 'MASTER', 'CHAMP', 'BOSS'],
    specialChars: ['★', '◆', '●', '▲', '■']
  },
  squad: {
    prefixes: ['TEAM', 'SQUAD', 'CREW', 'GANG', 'UNIT'],
    suffixes: ['TEAM', 'SQUAD', 'CREW', 'GANG', 'UNIT'],
    specialChars: ['◈', '◊', '◇', '◆', '●']
  },
  clan: {
    prefixes: ['CLAN', 'ROYAL', 'KING', 'LORD', 'EMPIRE'],
    suffixes: ['CLAN', 'ROYAL', 'KING', 'LORD', 'EMPIRE'],
    specialChars: ['♔', '♕', '♖', '♗', '♘']
  },
  legendary: {
    prefixes: ['LEGEND', 'MYTH', 'EPIC', 'CUTE', 'SWEET'],
    suffixes: ['LEGEND', 'MYTH', 'EPIC', 'CUTE', 'SWEET'],
    specialChars: ['✦', '✧', '✨', '💫', '⭐']
  },
  cool: {
    prefixes: ['COOL', 'STYLE', 'TREND', 'CHILL', 'SMOOTH'],
    suffixes: ['COOL', 'STYLE', 'TREND', 'CHILL', 'SMOOTH'],
    specialChars: ['◐', '◑', '◒', '◓', '◔']
  },
  all: {
    prefixes: ['STYLE', 'COOL', 'PRO', 'TEAM', 'LEGEND'],
    suffixes: ['STYLE', 'COOL', 'PRO', 'TEAM', 'LEGEND'],
    specialChars: ['★', '◆', '●', '▲', '■', '◈', '◊', '◇', '♔', '♕', '✦', '✧', '✨', '💫', '⭐', '◐', '◑', '◒', '◓', '◔']
  }
}

// Decorative frames and patterns
const decorativeFrames = [
  ['『', '』'], ['【', '】'], ['《', '》'], ['〖', '〗'], ['⟨', '⟩'],
  ['「', '」'], ['〔', '〕'], ['〘', '〙'], ['〚', '〛'], ['⦗', '⦘'],
  ['⦅', '⦆'], ['〈', '〉'], ['⟪', '⟫'], ['⟬', '⟭'], ['⌈', '⌉']
]

const decorationPatterns = [
  '★彡 {text} 彡★',
  '◤◢◤ {text} ◤◢◤',
  '▄︻{text}︻▄',
  '♔{text}♔',
  '◈{text}◈',
  '✦✧✦ {text} ✦✧✦',
  '◊◊◊ {text} ◊◊◊',
  '༺{text}༻',
  '✧{text}✧',
  '⟐{text}⟐'
]

export function useNameGeneration() {
  // Transform text using character maps
  const transformText = useCallback((text: string, fontType: keyof typeof characterMaps): string => {
    if (!text || !characterMaps[fontType]) return text
    return text.split('').map(char => characterMaps[fontType][char as keyof typeof characterMaps[typeof fontType]] || char).join('')
  }, [])

  // Get random symbols for category
  const getRandomSymbols = useCallback((category: Category, count = 2): string[] => {
    const symbols = symbolCollections[category] || symbolCollections.cool
    const selected: string[] = []
    for (let i = 0; i < count; i++) {
      selected.push(symbols[Math.floor(Math.random() * symbols.length)])
    }
    return selected
  }, [])

  // Generate stylish names
  const generateStylishNames = useCallback((baseName: string, category: Category): string[] => {
    if (!baseName) return []
    
    const variations: string[] = []
    const generatedNames = new Set<string>()
    const categoryStyle = categoryStyles[category]
    
    // Category-specific font transformations
    const categoryFonts: Record<Category, (keyof typeof characterMaps)[]> = {
      pro: ['fancy1', 'bold', 'double'],
      squad: ['fancy2', 'bubble', 'cursive'],
      clan: ['fancy1', 'double', 'bold'],
      legendary: ['cursive', 'bubble', 'fancy2'],
      cool: ['bold', 'fancy1', 'double'],
      all: ['fancy1', 'fancy2', 'cursive', 'bold', 'double', 'bubble']
    }
    
    const selectedFonts = categoryFonts[category] || categoryFonts.all
    
    selectedFonts.forEach(fontType => {
      const transformed = transformText(baseName, fontType)
      if (transformed !== baseName && !generatedNames.has(transformed)) {
        variations.push(transformed)
        generatedNames.add(transformed)
        
        // Add with category-specific symbols
        const symbols = getRandomSymbols(category, 1)
        const withSymbols1 = `${symbols[0]} ${transformed} ${symbols[0]}`
        const withSymbols2 = `${symbols[0]}${transformed}${symbols[0]}`
        
        if (!generatedNames.has(withSymbols1)) {
          variations.push(withSymbols1)
          generatedNames.add(withSymbols1)
        }
        if (!generatedNames.has(withSymbols2)) {
          variations.push(withSymbols2)
          generatedNames.add(withSymbols2)
        }
      }
    })

    // Category-specific prefix/suffix combinations
    const randomPrefix = categoryStyle.prefixes[Math.floor(Math.random() * categoryStyle.prefixes.length)]
    const randomSuffix = categoryStyle.suffixes[Math.floor(Math.random() * categoryStyle.suffixes.length)]
    const randomChar = categoryStyle.specialChars[Math.floor(Math.random() * categoryStyle.specialChars.length)]
    
    // Add category-specific variations with font transformations
    const categoryVariations = [
      `${randomPrefix} ${baseName}`,
      `${baseName} ${randomSuffix}`,
      `${randomPrefix} ${baseName} ${randomSuffix}`,
      `${randomChar} ${baseName} ${randomChar}`,
      `${randomChar}${baseName}${randomChar}`,
      `${randomPrefix} ${randomChar} ${baseName}`,
      `${baseName} ${randomChar} ${randomSuffix}`
    ]
    
    // Apply font transformations to category variations
    categoryVariations.forEach(variation => {
      if (!generatedNames.has(variation)) {
        variations.push(variation)
        generatedNames.add(variation)
      }
      
      // Add font-transformed versions of category variations
      selectedFonts.forEach(fontType => {
        const transformedVariation = transformText(variation, fontType)
        if (transformedVariation !== variation && !generatedNames.has(transformedVariation)) {
          variations.push(transformedVariation)
          generatedNames.add(transformedVariation)
        }
      })
    })

    // Decorative frames with category-specific fonts
    decorativeFrames.slice(0, 5).forEach(frame => {
      const framed = `${frame[0]}${baseName}${frame[1]}`
      if (!generatedNames.has(framed)) {
        variations.push(framed)
        generatedNames.add(framed)
      }
      
      // Apply category-specific fonts to framed names
      selectedFonts.forEach(fontType => {
        const fancyName = transformText(baseName, fontType)
        const framedFancy = `${frame[0]}${fancyName}${frame[1]}`
        if (!generatedNames.has(framedFancy)) {
          variations.push(framedFancy)
          generatedNames.add(framedFancy)
        }
      })
    })

    // Decoration patterns with category-specific fonts
    decorationPatterns.slice(0, 5).forEach(pattern => {
      const patterned = pattern.replace('{text}', baseName)
      if (!generatedNames.has(patterned)) {
        variations.push(patterned)
        generatedNames.add(patterned)
      }
      
      // Apply category-specific fonts to patterns
      selectedFonts.forEach(fontType => {
        const fancyName = transformText(baseName, fontType)
        const patternedFancy = pattern.replace('{text}', fancyName)
        if (!generatedNames.has(patternedFancy)) {
          variations.push(patternedFancy)
          generatedNames.add(patternedFancy)
        }
      })
    })

    // Symbol combinations with category-specific fonts
    const categorySymbols = getRandomSymbols(category, 3)
    categorySymbols.forEach(symbol => {
      // Use category-specific fonts for symbol combinations
      selectedFonts.forEach(fontType => {
        const fancyName = transformText(baseName, fontType)
        
        const variations_temp = [
          `${symbol} ${fancyName}`,
          `${fancyName} ${symbol}`,
          `${symbol}${fancyName}${symbol}`
        ]
        
        variations_temp.forEach(variation => {
          if (!generatedNames.has(variation)) {
            variations.push(variation)
            generatedNames.add(variation)
          }
        })
      })
    })

    // Return filtered variations
    return variations.filter(name => 
      name && name.length > 0 && name.length < 50
    ).slice(0, 100) // Limit to 100 variations
  }, [transformText, getRandomSymbols])

  // Generate tag-based names
  const generateTagBasedNames = useCallback((tag: string): string[] => {
    if (!tag) return []
    
    const variations: string[] = []
    const generatedNames = new Set<string>()
    const tagLower = tag.toLowerCase()
    const tagSymbolsList = tagSymbols[tagLower as keyof typeof tagSymbols] || tagSymbols.cool
    
    // Tag-specific prefixes and suffixes
    const tagPrefixes = {
      cool: ['COOL', 'CHILL', 'STYLE', 'TREND', 'SMOOTH'],
      cute: ['CUTE', 'SWEET', 'LOVELY', 'ADORABLE', 'PRETTY'],
      gaming: ['GAMER', 'PRO', 'ELITE', 'MASTER', 'BOSS'],
      anime: ['ANIME', 'KAIJU', 'SHONEN', 'KAMUI', 'NINJA'],
      dark: ['DARK', 'SHADOW', 'NIGHT', 'BLACK', 'VOID'],
      royal: ['ROYAL', 'KING', 'QUEEN', 'LORD', 'EMPIRE'],
      fire: ['FIRE', 'FLAME', 'BLAZE', 'INFERNO', 'HELLFIRE'],
      ice: ['ICE', 'FROST', 'WINTER', 'COLD', 'FREEZE'],
      shadow: ['SHADOW', 'DARK', 'NIGHT', 'VOID', 'GHOST'],
      light: ['LIGHT', 'BRIGHT', 'SHINE', 'GLOW', 'RADIANT'],
      mystic: ['MYSTIC', 'MAGIC', 'SPELL', 'ENCHANT', 'MYSTERY'],
      warrior: ['WARRIOR', 'FIGHTER', 'CHAMPION', 'HERO', 'GUARDIAN'],
      magic: ['MAGIC', 'SPELL', 'WIZARD', 'SORCERER', 'MAGE'],
      ninja: ['NINJA', 'SHADOW', 'STEALTH', 'ASSASSIN', 'SHINOBI'],
      angel: ['ANGEL', 'HEAVEN', 'DIVINE', 'HOLY', 'SERAPH'],
      demon: ['DEMON', 'HELL', 'DEVIL', 'FALLEN', 'LUCIFER'],
      dragon: ['DRAGON', 'WYVERN', 'SERPENT', 'SCALE', 'FLAME'],
      phoenix: ['PHOENIX', 'REBORN', 'FIREBIRD', 'ASH', 'RISE'],
      storm: ['STORM', 'THUNDER', 'LIGHTNING', 'TEMPEST', 'GALE'],
      cosmic: ['COSMIC', 'STAR', 'GALAXY', 'UNIVERSE', 'VOID']
    }
    
    const tagSuffixes = {
      cool: ['COOL', 'CHILL', 'STYLE', 'TREND', 'SMOOTH'],
      cute: ['CUTE', 'SWEET', 'LOVELY', 'ADORABLE', 'PRETTY'],
      gaming: ['GAMER', 'PRO', 'ELITE', 'MASTER', 'BOSS'],
      anime: ['ANIME', 'KAIJU', 'SHONEN', 'KAMUI', 'NINJA'],
      dark: ['DARK', 'SHADOW', 'NIGHT', 'BLACK', 'VOID'],
      royal: ['ROYAL', 'KING', 'QUEEN', 'LORD', 'EMPIRE'],
      fire: ['FIRE', 'FLAME', 'BLAZE', 'INFERNO', 'HELLFIRE'],
      ice: ['ICE', 'FROST', 'WINTER', 'COLD', 'FREEZE'],
      shadow: ['SHADOW', 'DARK', 'NIGHT', 'VOID', 'GHOST'],
      light: ['LIGHT', 'BRIGHT', 'SHINE', 'GLOW', 'RADIANT'],
      mystic: ['MYSTIC', 'MAGIC', 'SPELL', 'ENCHANT', 'MYSTERY'],
      warrior: ['WARRIOR', 'FIGHTER', 'CHAMPION', 'HERO', 'GUARDIAN'],
      magic: ['MAGIC', 'SPELL', 'WIZARD', 'SORCERER', 'MAGE'],
      ninja: ['NINJA', 'SHADOW', 'STEALTH', 'ASSASSIN', 'SHINOBI'],
      angel: ['ANGEL', 'HEAVEN', 'DIVINE', 'HOLY', 'SERAPH'],
      demon: ['DEMON', 'HELL', 'DEVIL', 'FALLEN', 'LUCIFER'],
      dragon: ['DRAGON', 'WYVERN', 'SERPENT', 'SCALE', 'FLAME'],
      phoenix: ['PHOENIX', 'REBORN', 'FIREBIRD', 'ASH', 'RISE'],
      storm: ['STORM', 'THUNDER', 'LIGHTNING', 'TEMPEST', 'GALE'],
      cosmic: ['COSMIC', 'STAR', 'GALAXY', 'UNIVERSE', 'VOID']
    }
    
    const prefixes = tagPrefixes[tagLower as keyof typeof tagPrefixes] || tagPrefixes.cool
    const suffixes = tagSuffixes[tagLower as keyof typeof tagSuffixes] || tagSuffixes.cool
    
    // Generate tag-specific names
    
    // Tag-specific font transformations
    const tagFonts: Record<string, (keyof typeof characterMaps)[]> = {
      cool: ['fancy1', 'bold', 'double'],
      cute: ['cursive', 'bubble', 'fancy2'],
      gaming: ['bold', 'fancy1', 'double'],
      anime: ['fancy2', 'cursive', 'bubble'],
      dark: ['fancy1', 'double', 'bold'],
      royal: ['fancy1', 'double', 'bold'],
      fire: ['bold', 'fancy1', 'double'],
      ice: ['cursive', 'bubble', 'fancy2'],
      shadow: ['fancy1', 'double', 'bold'],
      light: ['cursive', 'bubble', 'fancy2'],
      mystic: ['cursive', 'bubble', 'fancy2'],
      warrior: ['bold', 'fancy1', 'double'],
      magic: ['cursive', 'bubble', 'fancy2'],
      ninja: ['fancy1', 'double', 'bold'],
      angel: ['cursive', 'bubble', 'fancy2'],
      demon: ['bold', 'fancy1', 'double'],
      dragon: ['bold', 'fancy1', 'double'],
      phoenix: ['fancy1', 'double', 'bold'],
      storm: ['bold', 'fancy1', 'double'],
      cosmic: ['cursive', 'bubble', 'fancy2']
    }
    
    const selectedFonts = tagFonts[tagLower] || tagFonts.cool
    
    // Generate variations with tag-specific elements
    selectedFonts.forEach(fontType => {
      // Tag name with font transformation
      const transformedTag = transformText(tag, fontType)
      if (!generatedNames.has(transformedTag)) {
        variations.push(transformedTag)
        generatedNames.add(transformedTag)
      }
      
      // Tag with symbols
      const randomSymbol = tagSymbolsList[Math.floor(Math.random() * tagSymbolsList.length)]
      const withSymbol = `${randomSymbol} ${transformedTag} ${randomSymbol}`
      if (!generatedNames.has(withSymbol)) {
        variations.push(withSymbol)
        generatedNames.add(withSymbol)
      }
      
      // Tag with prefixes and suffixes
      const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)]
      const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)]
      
      const variations_temp = [
        `${randomPrefix} ${transformedTag}`,
        `${transformedTag} ${randomSuffix}`,
        `${randomPrefix} ${transformedTag} ${randomSuffix}`,
        `${randomSymbol}${transformedTag}${randomSymbol}`,
        `${randomPrefix} ${randomSymbol} ${transformedTag}`,
        `${transformedTag} ${randomSymbol} ${randomSuffix}`
      ]
      
      variations_temp.forEach(variation => {
        if (!generatedNames.has(variation)) {
          variations.push(variation)
          generatedNames.add(variation)
        }
      })
    })
    
    // Decorative frames with tag-specific fonts
    decorativeFrames.slice(0, 3).forEach(frame => {
      const framed = `${frame[0]}${tag}${frame[1]}`
      if (!generatedNames.has(framed)) {
        variations.push(framed)
        generatedNames.add(framed)
      }
      
      selectedFonts.forEach(fontType => {
        const fancyTag = transformText(tag, fontType)
        const framedFancy = `${frame[0]}${fancyTag}${frame[1]}`
        if (!generatedNames.has(framedFancy)) {
          variations.push(framedFancy)
          generatedNames.add(framedFancy)
        }
      })
    })
    
    // Decoration patterns with tag-specific fonts
    decorationPatterns.slice(0, 3).forEach(pattern => {
      const patterned = pattern.replace('{text}', tag)
      if (!generatedNames.has(patterned)) {
        variations.push(patterned)
        generatedNames.add(patterned)
      }
      
      selectedFonts.forEach(fontType => {
        const fancyTag = transformText(tag, fontType)
        const patternedFancy = pattern.replace('{text}', fancyTag)
        if (!generatedNames.has(patternedFancy)) {
          variations.push(patternedFancy)
          generatedNames.add(patternedFancy)
        }
      })
    })
    
    // Return filtered variations
    return variations.filter(name => 
      name && name.length > 0 && name.length < 50
    ).slice(0, 50) // Limit to 50 variations
  }, [transformText])

  return {
    generateStylishNames,
    generateTagBasedNames
  }
}
