import { useTheme } from '@mui/material'

export const useTextFieldStyles = () => {
  const theme = useTheme()
  const styles = {
    border: '2px solid',
    borderColor: theme.palette.spaceShuttleBlue,
    borderRadius: '50px',
    width: '100%',
    maxWidth: '650px',
    '&:hover': {
      borderColor: theme.palette.spaceShuttleBlue,
    },
    '&:focus-within': {
      borderColor: theme.palette.primary.light,
      boxShadow: '0 0 20px ' + theme.palette.spaceShuttleBlue,
      '& .MuiInputBase-root': {
        borderRadius: '50px',
      },
    },
    '&:active': {
      borderColor: theme.palette.primary.light,
      boxShadow: '0 0 20px ' + theme.palette.spaceShuttleBlue,
      '& .MuiInputBase-root': {
        borderRadius: '50px',
      },
    },
  }

  return styles
}
