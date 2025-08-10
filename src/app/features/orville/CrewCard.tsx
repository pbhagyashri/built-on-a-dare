import {
  Card,
  CardContent,
  Avatar,
  CardHeader,
  styled,
  Typography,
  Box,
  Stack,
} from '@mui/material'
import { Tag } from '@/components/tag'
import { CrewModal } from './CrewModal'
import { OrvilleCast } from '@/types'
import { useState } from 'react'

const StyledCard = styled(Card)`
  background-color: ${({ theme }) => theme.palette.orvilleGray};
  &:hover {
    transform: translateY(-8px);
    transition: transform 0.3s ease;
    box-shadow: 0 0 20px ${({ theme }) => theme.palette.spaceShuttleBlue};
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.palette.primary.light};
  }
`

interface CrewCardProps {
  crew: OrvilleCast
}

export const CrewCard = ({ crew }: CrewCardProps) => {
  const [open, setOpen] = useState(false)

  const { name, role, rank, department, species, avatar, actor } = crew
  return (
    <>
      <CrewModal crew={crew} open={open} onClose={() => setOpen(false)} />
      <StyledCard onClick={() => setOpen(true)}>
        <CardHeader
          action={<Tag label={rank} variant="rank" />}
          sx={{
            backgroundColor: 'primary.light',
          }}
        />
        <CardContent sx={{ p: 0 }}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: 'primary.light',
              pb: 5,
              borderBottom: '2px solid',
              borderColor: 'softBlue',
            }}
          >
            <Avatar sx={{ width: 70, height: 70, bgcolor: 'white' }}>
              <Typography variant="h6">{avatar}</Typography>
            </Avatar>
          </Stack>
          <Box pt={2} px={2}>
            <Box mb={2}>
              <Typography variant="h2" fontSize="1.4rem">
                {name}
              </Typography>
              <Typography variant="body1" mb={3}>
                {actor}
              </Typography>
            </Box>
            <Stack direction="row" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2">Role</Typography>
              <Typography variant="h6">{role}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2">Species</Typography>
              <Tag label={species} variant="department" />
            </Stack>
            <Stack direction="row" justifyContent="space-between" mb={0.5}>
              <Typography variant="body2">Department</Typography>
              <Typography variant="h6">{department}</Typography>
            </Stack>
          </Box>
        </CardContent>
      </StyledCard>
    </>
  )
}
