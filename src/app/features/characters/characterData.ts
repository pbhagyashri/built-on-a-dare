export type OrvilleCast = {
  id: number
  character: string
  actor: string
  rank: string
  planet?: {
    id: number
    name: string
    image: string
    moons: number
  }
}

export const characterData: OrvilleCast[] = [
  {
    id: 1,
    character: 'Kelly Grayson',
    actor: 'Adrianne Palicki',
    rank: 'Commander, First Officer',
    planet: {
      id: 3,
      name: 'Earth',
      image: '/static/images/earth.jpg',
      moons: 1,
    },
  },
  {
    id: 2,
    character: 'Dr. Claire Finn',
    actor: 'Penny Johnson Jerald',
    rank: 'Commander, Chief Medical Officer',
    planet: {
      id: 3,
      name: 'Earth',
      image: '/static/images/earth.jpg',
      moons: 1,
    },
  },
  {
    id: 3,
    character: 'Bortus',
    actor: 'Peter Macon',
    rank: 'Lt. Commander',
    planet: {
      id: 14,
      name: 'Y-Dwarf 1280',
      image: '/static/images/Ydwarf1280.jpg',
      moons: 1,
    },
  },
  {
    id: 4,
    character: 'Gordon Malloy',
    actor: 'Scott Grimes',
    rank: 'Lieutenant, Pilot',
    planet: {
      id: 3,
      name: 'Earth',
      image: '/static/images/earth.jpg',
      moons: 1,
    },
  },
  {
    id: 6,
    character: 'Ed Mercer',
    actor: 'Seth MacFarlane',
    rank: 'Captain',
    planet: {
      id: 3,
      name: 'Earth',
      image: '/static/images/earth.jpg',
      moons: 1,
    },
  },
  {
    id: 7,
    character: 'Alara Kitan',
    actor: 'Halston Sage',
    rank: 'Lieutenant, Chief of Security',
    planet: {
      id: 9,
      name: 'Kepler-186f',
      image: '/static/images/Science_1-kepler186f-(1).webp',
      moons: 3,
    },
  },
  {
    id: 8,
    character: 'John LaMarr',
    actor: 'J. Lee',
    rank: 'Lieutenant, Chief of Engineering',
    planet: {
      id: 3,
      name: 'Earth',
      image: '/static/images/earth.jpg',
      moons: 1,
    },
  },
  {
    id: 9,
    character: 'Talla Keyali',
    actor: 'Jessica Szohr',
    rank: 'Commander, Chief of Security',
    planet: {
      id: 9,
      name: 'Kepler-186f',
      image: '/static/images/Science_1-kepler186f-(1).webp',
      moons: 3,
    },
  },
  {
    id: 10,
    character: 'Charly Burke',
    actor: 'Ann Winter',
    rank: 'Ensign',
    planet: {
      id: 11,
      name: 'Aetheris',
      image: '/static/images/exoplanets1.webp',
      moons: 12,
    },
  },
  {
    id: 11,
    character: 'Yaphit',
    actor: 'Norm MacDonald',
    rank: 'Lieutenant',
    planet: {
      id: 9,
      name: 'Kepler-186f',
      image: '/static/images/Science_1-kepler186f-(1).webp',
      moons: 3,
    },
  },
  {
    id: 12,
    character: 'Chad Coleman',
    actor: 'Klyden',
    rank: 'Civilian',
    planet: {
      id: 10,
      name: 'Nyx Prime',
      image: '/static/images/exoplanets-could-be-hi.jpg',
      moons: 7,
    },
  },
]
