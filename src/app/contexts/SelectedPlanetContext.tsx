'use client'
import { createContext, useState, ReactNode } from 'react'

interface SelectedPlanetContextType {
  selectedPlanet: string | null
  setSelectedPlanet: (planet: string | null) => void
}

export const SelectedPlanetContext = createContext<SelectedPlanetContextType>({
  selectedPlanet: null,
  setSelectedPlanet: () => {},
})

interface SelectedPlanetProviderProps {
  children: ReactNode
}

export const SelectedPlanetProvider = ({
  children,
}: SelectedPlanetProviderProps) => {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null)

  return (
    <SelectedPlanetContext value={{ selectedPlanet, setSelectedPlanet }}>
      {children}
    </SelectedPlanetContext>
  )
}
