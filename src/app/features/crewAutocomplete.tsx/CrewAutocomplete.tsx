import { Box, Typography, Stack } from '@mui/material'
import { orvilleCast, OrvilleCast } from '@/components/autocomplete'
import { Autocomplete } from '@/components/autocomplete'

export const CrewAutocomplete = () => {
  return (
    <Autocomplete<OrvilleCast>
      label="Search crew members..."
      options={orvilleCast}
      getOptionLabel={(option) =>
        option.character + ' - ' + option.planet + ' - ' + option.rank
      }
    >
      {(option) => (
        <Box
          px={2}
          py={1}
          sx={{
            width: '100%',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Typography
            variant="h5"
            mb={1}
            fontWeight="bold"
            color="secondary.main"
          >
            {option.character}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" gap={0.5} alignItems="baseline">
              <Typography variant="body2" color="secondary">
                Actor
              </Typography>
              <Typography variant="body1">{option.actor}</Typography>
            </Stack>
            <Stack direction="row" gap={0.5} alignItems="baseline">
              <Typography variant="body2" color="secondary">
                Rank
              </Typography>
              <Typography variant="body1">{option.rank}</Typography>
            </Stack>
            <Stack direction="row" gap={0.5} alignItems="baseline">
              <Typography variant="body2" color="secondary">
                Planet
              </Typography>
              <Typography variant="body1">{option.planet}</Typography>
            </Stack>
          </Stack>
        </Box>
      )}
    </Autocomplete>
  )
}
