'use client'

import { useContext } from 'react'
import {
  Box,
  Typography,
  Grid,
  CardContent,
  CardMedia,
  Card,
  styled,
} from '@mui/material'
import { planetsData } from './planetsData'
import { SelectedPlanetContext } from '../../contexts/SelectedPlanetContext'

const StyledCard = styled(Card)<{ ismatching: string | undefined }>`
  overflow: 'visible';
  cursor: 'pointer';
  background-color: ${({ theme, ismatching }) =>
    ismatching ? theme.palette.primary.light : 'white'};
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`

export const Planets = () => {
  const { selectedPlanet } = useContext(SelectedPlanetContext)

  console.log({ selectedPlanet })

  const isMatchingPlanet = (planet: string) => {
    if (!planet || !selectedPlanet) return undefined
    return planet
      .toLocaleLowerCase()
      .startsWith(selectedPlanet?.toLocaleLowerCase())
  }

  return (
    <>
      <Box
        sx={{
          width: '100%',
          mt: 6,
        }}
      >
        <Grid container spacing={2}>
          {planetsData.map((planet) => (
            <Grid size={{ xs: 6, md: 4, lg: 3 }} key={planet.id}>
              <StyledCard
                ismatching={
                  isMatchingPlanet(planet.name) ? planet.name : undefined
                }
              >
                <CardMedia
                  component="img"
                  image={planet.image}
                  alt={planet.name}
                  height="200px"
                  width="200px"
                  sx={{
                    objectFit: 'cover',
                    backgroundColor: 'black',
                  }}
                />
                <CardContent>
                  <Typography variant="h6">{planet.name}</Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}
