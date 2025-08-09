import { Chip, styled, SxProps, Theme } from '@mui/material'

interface TagProps {
  label: string
  sx?: SxProps<Theme>
  variant?: 'default' | 'department' | 'rank'
  onClick?: () => void
}

const StyledChip = styled(Chip)`
  background-color: ${({ theme }) => theme.palette.warmAmberDarker};
  color: ${({ theme }) => theme.palette.primary.dark};
  min-width: ${({ theme }) => theme.spacing(9)};
  height: ${({ theme }) => theme.spacing(3)};
  font-weight: 600;
`

export const Tag = ({ label, sx, variant = 'default', onClick }: TagProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'department':
        return { backgroundColor: 'purple', color: 'softGrey' }
      case 'rank':
        return { backgroundColor: 'warmAmberDarker', color: 'primary.dark' }
      default:
        return {}
    }
  }

  return (
    <StyledChip
      label={label}
      variant="filled"
      color="primary"
      sx={{ ...getVariantStyles(), ...sx }}
      onClick={onClick}
    />
  )
}
