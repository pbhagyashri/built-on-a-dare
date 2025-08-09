'use client'
import { useContext } from 'react'
import { SelectedPlanetContext } from '@/app/contexts/SelectedPlanetContext'
import {
  MenuItem,
  Autocomplete as MuiAutocomplete,
  TextField,
} from '@mui/material'

interface AutocompleteProps<T extends { id: number }> {
  children: (option: T) => React.ReactNode
  options: T[]
  getOptionLabel: (option: T) => string
  label?: string
  placeholder?: string
  onInputChange?: (
    event: React.SyntheticEvent,
    value: string,
    reason: string
  ) => void
  onChange?: (
    event: React.SyntheticEvent,
    value: (T & { id: number }) | null
  ) => void
}

export const Autocomplete = <T,>({
  children,
  options,
  getOptionLabel,
  label,
  placeholder,
  onInputChange,
  onChange,
}: AutocompleteProps<T & { id: number }>) => {
  const { setSelectedPlanet } = useContext(SelectedPlanetContext)

  const handleInputChange = (
    event: React.SyntheticEvent,
    value: string,
    reason: string
  ) => {
    // Only update selectedPlanet when an option is actually selected
    if (reason === 'selectOption') {
      setSelectedPlanet(value?.toLocaleLowerCase())
    }

    if (reason === 'input') {
      setSelectedPlanet(value)
    }

    if (reason === 'clear') {
      setSelectedPlanet(null)
    }
  }

  const handleChange = (
    event: React.SyntheticEvent,
    value: (T & { id: number }) | null
  ) => {
    if (value) {
      // Extract the character name from the selected option
      const characterName = (value as any).character
      setSelectedPlanet(characterName)
    }
    if (onChange) {
      onChange(event, value)
    }
  }

  return (
    <MuiAutocomplete
      options={options}
      getOptionLabel={getOptionLabel}
      onInputChange={handleInputChange}
      onChange={handleChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          placeholder={placeholder}
          sx={{ borderRadius: '50px' }}
        />
      )}
      renderOption={(props, option) => {
        return (
          <MenuItem {...props} key={option.id}>
            {children(option)}
          </MenuItem>
        )
      }}
      sx={{
        width: { xs: '100%', md: '50%' },
      }}
    />
  )
}
