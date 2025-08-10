import {
  Avatar,
  Box,
  Divider,
  Modal,
  Stack,
  Typography,
  alpha,
  styled,
} from '@mui/material'
import { OrvilleCast } from '@/types/types'
import Image from 'next/image'

interface CrewModalProps {
  crew: OrvilleCast
  open: boolean
  onClose: () => void
}

const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: ${({ theme }) => theme.spacing(60)};
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 24;
  padding: ${({ theme }) => theme.spacing(2)};
  outline: 1px solid ${({ theme }) => theme.palette.primary.light};
  background-color: ${({ theme }) => alpha(theme.palette.primary.dark, 0.95)};
  border-radius: 10px;
`

export const CrewModal = ({ crew, open, onClose }: CrewModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <StyledBox>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
        >
          <Avatar
            src={crew.avatar}
            alt={crew.avatar}
            sx={{ backgroundColor: 'orvilleGold', width: 50, height: 50 }}
          />
          <Box>
            <Typography id="modal-modal-title" variant="h3" fontWeight="bold">
              {crew.name}
            </Typography>
            <Typography id="modal-modal-title" variant="body1">
              {crew.actor}
            </Typography>
          </Box>
        </Stack>
        <Divider sx={{ margin: 2 }} />
        <Typography id="modal-modal-title" variant="h3" fontWeight="bold">
          Bio
        </Typography>
        <Typography id="modal-modal-title" variant="body1">
          {crew.bio}
        </Typography>
        <Divider
          sx={{ margin: 2, backgroundColor: 'orvilleGold', height: 1 }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box width={200} height={200}>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={0.5}
            >
              <Typography variant="h3" fontWeight="bold">
                Homeworld
              </Typography>
              <Typography variant="body1">{crew.homeworld.name}</Typography>
            </Stack>
            <Image
              src={crew.homeworld.image}
              alt={crew.homeworld.name}
              width={200}
              height={200}
              style={{
                borderRadius: '10px',
                margin: '20px 0',
                objectFit: 'cover',
              }}
            />
          </Box>
          {crew.funFacts && (
            <Box height={200} width={200}>
              <Typography variant="h3" fontWeight="bold" marginBottom={2}>
                Fun Facts
              </Typography>
              <Typography variant="body1">
                {crew.funFacts?.map((fact) => fact).join(', ')}
              </Typography>
            </Box>
          )}
        </Box>
        <Typography variant="body1" marginTop={2}>
          {crew.homeworld.description}
        </Typography>
      </StyledBox>
    </Modal>
  )
}
