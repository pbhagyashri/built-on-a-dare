export type OrvilleCast = {
  id: number
  name: string
  avatar: string
  role: string
  actor: string
  bio: string
  rank: string
  department: string
  species: string
  funFacts?: string[]
  homeworld: {
    name: string
    image: string
    description: string
  }
}

export enum ColorMap {
  science = 'krillGreen',
  command = 'orvilleBlue',
  engineering = 'orvilleRed',
  security = 'orvilleBlue',
  medical = 'krillGreen',
}
