'use client'
import { useContext, useEffect, useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Stack,
  Divider,
  Modal,
  styled,
} from '@mui/material'
import { OrvilleCast } from './characterData'
import { SelectedPlanetContext } from '@/app/contexts/SelectedPlanetContext'
import { characterData } from './characterData'
import Image from 'next/image'

const StyledBox = styled(Box)`
  background-color: ${({ theme }) => theme.palette.baige};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 800px;
  padding: 20px;
`

export const Characters = () => {
  const [characters, setCharacters] = useState<OrvilleCast[]>(characterData)
  const [openDetails, setOpenDetails] = useState(false)
  const [selectedCharacter, setSelectedCharacter] =
    useState<OrvilleCast | null>(null)

  const { setSelectedPlanet, selectedPlanet } = useContext(
    SelectedPlanetContext
  )

  const handleClick = (character: OrvilleCast) => {
    setOpenDetails(true)
    setSelectedCharacter(character)
  }

  useEffect(() => {
    if (selectedPlanet) {
      setCharacters(
        characterData.filter((character) => {
          return character.character === selectedPlanet
        })
      )
    } else {
      setCharacters(characterData)
    }
  }, [selectedPlanet])

  return (
    <Box sx={{ mt: 6 }}>
      <Modal
        open={openDetails}
        onClose={() => setOpenDetails(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledBox>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedCharacter?.character}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedCharacter?.planet?.name}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedCharacter?.planet?.moons}
          </Typography>
          <Image
            src={selectedCharacter?.planet?.image || ''}
            alt={selectedCharacter?.planet?.name || ''}
            width={500}
            height={500}
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </StyledBox>
      </Modal>
      <Grid container spacing={2}>
        {characters.map((character) => (
          <Grid size={{ xs: 6, md: 4, lg: 4 }} key={character.id}>
            <Card
              sx={{ cursor: 'pointer' }}
              onClick={() => handleClick(character)}
            >
              <CardContent>
                <Typography variant="h4" color="secondary">
                  {character.character}
                </Typography>
                <Divider sx={{ mt: 1, mb: 3 }} />
                <Stack direction="column">
                  <Typography variant="body1" color="primary.dark">
                    Played by: {character.actor}
                  </Typography>
                  <Typography variant="body2" color="primary.main">
                    {character.rank}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
