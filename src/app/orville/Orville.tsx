'use client'
import { useState, useEffect } from 'react'
import {
  Stack,
  Typography,
  useTheme,
  TextField,
  Grid,
  Box,
} from '@mui/material'
import { CrewCard } from './CrewCard'
import { crew } from './crew'
import { debouncer } from '@/utils/debouncer'
import { FilterTag } from './FilterTag'
import { useTextFieldStyles } from './helpers/useTextFieldStyles'
import AIChat from './AIChat'
import { useAskAi } from '../hooks/useAskAi'

export const Orville = () => {
  const theme = useTheme()
  const textFieldStyles = useTextFieldStyles()
  const [search, setSearch] = useState('')
  const [filteredCrew, setFilteredCrew] = useState(crew)

  const handleFilterCrew = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearch(value)
  }

  useEffect(() => {
    if (search === '') {
      setFilteredCrew(crew)
      return
    }
    const timeout = debouncer(() => {
      const filtered = crew.filter((crew) =>
        crew.name.toLowerCase().includes(search.toLowerCase())
      )
      setFilteredCrew(filtered ? filtered : crew)
    }, 300)

    return () => {
      timeout()
    }
  }, [search])

  return (
    <>
      <Stack direction="column" alignItems="center" mx="auto" mt={3}>
        <Typography
          variant="h1"
          fontWeight={700}
          color="typographyColors.purple"
          sx={{
            textShadow: `0 0 20px ${theme.palette.spaceShuttleBlue}`,
          }}
        >
          USS Orville
        </Typography>
        <Typography variant="h4" color="typographyColors.main" mb={5}>
          Crew Database • Planetary Union Fleet
        </Typography>
        <TextField
          sx={textFieldStyles}
          placeholder="Search crew members..."
          value={search}
          onChange={handleFilterCrew}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        mt={6}
        gap={2}
      >
        <FilterTag label="All" onClick={() => setFilteredCrew(crew)} />
        <FilterTag
          label="Science"
          onClick={() =>
            setFilteredCrew(
              crew.filter((crew) => crew.department === 'Science')
            )
          }
        />
        <FilterTag
          label="Command"
          onClick={() =>
            setFilteredCrew(
              crew.filter((crew) => crew.department === 'Command')
            )
          }
        />
        <FilterTag
          label="Engineering"
          onClick={() =>
            setFilteredCrew(
              crew.filter((crew) => crew.department === 'Engineering')
            )
          }
        />
        <FilterTag
          label="Security"
          onClick={() =>
            setFilteredCrew(
              crew.filter((crew) => crew.department === 'Security')
            )
          }
        />
        <FilterTag
          label="Medical"
          onClick={() =>
            setFilteredCrew(
              crew.filter((crew) => crew.department === 'Medical')
            )
          }
        />
      </Stack>
      <Grid container spacing={3} mt={6}>
        {filteredCrew.map((crew) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={crew.id}>
            <CrewCard crew={crew} />
          </Grid>
        ))}
      </Grid>
      <Box mb={8} mt={8} minHeight="100vh">
        <Stack direction="column" alignItems="center">
          <Typography variant="h2" color="typographyColors.main" mb={2}>
            Ask the AI
          </Typography>
        </Stack>
        <AIChat />
      </Box>
    </>
  )
}
