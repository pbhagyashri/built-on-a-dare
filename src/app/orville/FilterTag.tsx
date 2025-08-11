import { Tag } from '@/app/components/tag'
import { alpha, useTheme } from '@mui/material'

interface FilterTagProps {
  label: string
  onClick: () => void
}

export const FilterTag = ({ label, onClick }: FilterTagProps) => {
  const theme = useTheme()
  return (
    <Tag
      label={label}
      variant="default"
      onClick={onClick}
      sx={{
        backgroundColor: 'primary.main',
        border: '1px solid',
        borderColor: 'primary.light',
        height: '35px',
        width: '100px',
        color: 'white',
        '&:hover': {
          backgroundColor: alpha(theme.palette.spaceShuttleBlue, 0.6),
          color: 'white',
          transform: 'scale(1.2)',
          transition: 'transform 0.3s ease',
        },
      }}
    />
  )
}
