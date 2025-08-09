import { Typography, Stack } from '@mui/material'

export const Logo = () => {
  return (
    <Stack direction="row" alignItems="baseline">
      <Typography variant="h4">Built</Typography>
      <Typography variant="h4">On</Typography>
      <Typography
        variant="h4"
        sx={{
          transform: 'skew(-7deg)',
          color: 'primary.light',
        }}
      >
        A
      </Typography>
      <Typography variant="h4">Dare</Typography>
    </Stack>
  )
}
