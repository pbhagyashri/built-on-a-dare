import { OrvilleCast } from '@/types/types'
import Image from 'next/image'
import CloseIcon from '@mui/icons-material/Close'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  styled,
  alpha,
  Stack,
  Avatar,
  Box,
  Divider,
  MenuList,
  MenuItem,
  IconButton,
  DialogActions,
  Button,
} from '@mui/material'
import { useGetCrewBio } from '../hooks/useGetCrewBio'
import { useMemo } from 'react'

interface CrewDialogProps {
  crew: OrvilleCast
  open: boolean
  onClose: () => void
}

const StyledDialog = styled(Dialog)`
  border: 1px solid ${({ theme }) => theme.palette.primary.light};
  border-radius: 10px;
  box-shadow: 0 0 20px ${({ theme }) => theme.palette.spaceShuttleBlue};
  & .MuiPaper-root {
    background-color: ${({ theme }) => alpha(theme.palette.primary.dark, 0.95)};
    border-radius: 10px;
    padding: ${({ theme }) => theme.spacing(2)};
    outline: 1px solid ${({ theme }) => theme.palette.primary.light};
    box-shadow: 24;
    transition: all 0.2s ease-in-out;
  }
`

const CrewDialog = ({ crew, open, onClose }: CrewDialogProps) => {
  const { messages, status, stop, sendMessage } = useGetCrewBio(crew.name)

  // Get the latest AI message only
  const aiResponse = useMemo(() => {
    const latestAiMessage = messages
      .filter((message) => message.role === 'assistant')
      .pop()

    return latestAiMessage
      ? latestAiMessage.parts
          .filter((part) => 'text' in part)
          .map((part) => (part as any).text)
          .join('')
      : ''
  }, [messages])

  return (
    <StyledDialog open={open} onClose={onClose} maxWidth="sm">
      <DialogTitle>
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
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500],
            })}
          >
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider
          sx={{ backgroundColor: 'orvilleGold', height: 1, mt: 2, mb: 2 }}
        />
      </DialogTitle>
      <DialogContent>
        {status === 'streaming' && !aiResponse && (
          <Box
            sx={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="body1" color="orvilleGold">
              Loading bio...
            </Typography>
          </Box>
        )}

        {status === 'error' && (
          <Box
            sx={{ minHeight: '60px', display: 'flex', alignItems: 'center' }}
          >
            <Typography variant="body1" color="error">
              Error loading bio. Please try again.
            </Typography>
          </Box>
        )}

        {aiResponse && (
          <Box sx={{ minHeight: '60px' }}>
            <Typography id="modal-modal-title" variant="h3" fontWeight="bold">
              Bio
            </Typography>
            <Typography id="modal-modal-title" variant="body1" sx={{ mb: 3 }}>
              {aiResponse}
            </Typography>
          </Box>
        )}

        <Divider sx={{ backgroundColor: 'orvilleGold', height: 1, mt: 3 }} />
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          gap={10}
          mt={3}
        >
          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            <Typography variant="h3" fontWeight="bold" sx={{ mr: 1 }}>
              Homeworld
            </Typography>
            <Typography variant="body1">{crew.homeworld.name}</Typography>
          </Stack>

          {crew.funFacts && (
            <Typography variant="h3" fontWeight="bold">
              Fun Facts
            </Typography>
          )}
        </Stack>
        <Stack
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          gap={2}
          mt={2}
        >
          <Image
            src={crew.homeworld.image}
            alt={crew.homeworld.name}
            width={200}
            height={200}
            style={{
              borderRadius: '10px',
              objectFit: 'cover',
            }}
          />
          {crew.funFacts && (
            <>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ backgroundColor: 'orvilleGold', mx: 2 }}
              />
              <MenuList>
                {crew.funFacts?.map((fact) => (
                  <MenuItem
                    key={fact}
                    sx={{
                      color: 'orvilleGold',
                      fontSize: 16,
                      fontWeight: 600,
                      textAlign: 'left',
                      mb: 1,
                      padding: 0,
                    }}
                  >
                    {fact}
                  </MenuItem>
                ))}
              </MenuList>
            </>
          )}
        </Stack>
        <Divider sx={{ backgroundColor: 'orvilleGold', height: 1, mt: 3 }} />
        <Typography variant="body1" marginTop={2}>
          {crew.homeworld.description}
        </Typography>
      </DialogContent>
      <DialogActions>
        {status === 'error' && (
          <Button
            variant="outlined"
            onClick={() => {
              stop()
              sendMessage({
                text: `You are a helpful assistant that can answer questions about the Hulu drama The Orville. You are given a crew member's name, in this instance, ${crew.name} please return a bio for them. Keep it short and concise. If possible under 200 words.`,
              })
            }}
            sx={{
              color: 'error.main',
              fontWeight: 600,
              borderColor: 'error.main',
              borderWidth: 1,
              borderRadius: 10,
              mr: 1,
            }}
          >
            Retry
          </Button>
        )}
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            color: 'orvilleGold',
            fontWeight: 600,
            borderColor: 'orvilleGold',
            borderWidth: 1,
            borderRadius: 10,
          }}
        >
          Close
        </Button>
      </DialogActions>
    </StyledDialog>
  )
}

export default CrewDialog
