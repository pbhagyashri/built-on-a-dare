export interface CrewBioData {
  name: string
  bio: string
  image: string
  quote: string
  quoteSource: string
  quoteSourceUrl: string
  quoteSourceImage: string
  quoteSourceImageUrl: string
}

export function parseCrewBio(aiResponse: string): CrewBioData {
  const defaultData: CrewBioData = {
    name: '',
    bio: '',
    image: '',
    quote: '',
    quoteSource: '',
    quoteSourceUrl: '',
    quoteSourceImage: '',
    quoteSourceImageUrl: '',
  }

  if (!aiResponse) return defaultData

  // Extract data using regex patterns (using [\s\S]*? instead of .*? with s flag for ES2017 compatibility)
  const nameMatch = aiResponse.match(/<name>([\s\S]*?)<\/name>/)
  const bioMatch = aiResponse.match(/<bio>([\s\S]*?)<\/bio>/)
  const imageMatch = aiResponse.match(/<image>([\s\S]*?)<\/image>/)
  const quoteMatch = aiResponse.match(/<quote>([\s\S]*?)<\/quote>/)
  const quoteSourceMatch = aiResponse.match(
    /<quote_source>([\s\S]*?)<\/quote_source>/
  )
  const quoteSourceUrlMatch = aiResponse.match(
    /<quote_source_url>([\s\S]*?)<\/quote_source_url>/
  )
  const quoteSourceImageMatch = aiResponse.match(
    /<quote_source_image>([\s\S]*?)<\/quote_source_image>/
  )
  const quoteSourceImageUrlMatch = aiResponse.match(
    /<quote_source_image_url>([\s\S]*?)<\/quote_source_image_url>/
  )

  return {
    name: nameMatch?.[1]?.trim() || defaultData.name,
    bio: bioMatch?.[1]?.trim() || defaultData.bio,
    image: imageMatch?.[1]?.trim() || defaultData.image,
    quote: quoteMatch?.[1]?.trim() || defaultData.quote,
    quoteSource: quoteSourceMatch?.[1]?.trim() || defaultData.quoteSource,
    quoteSourceUrl:
      quoteSourceUrlMatch?.[1]?.trim() || defaultData.quoteSourceUrl,
    quoteSourceImage:
      quoteSourceImageMatch?.[1]?.trim() || defaultData.quoteSourceImage,
    quoteSourceImageUrl:
      quoteSourceImageUrlMatch?.[1]?.trim() || defaultData.quoteSourceImageUrl,
  }
}
