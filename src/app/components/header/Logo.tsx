import { Typography, styled } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'

const StyledLogo = styled(Typography)`
  color: ${({ theme }) => theme.palette.white};
  white-space: nowrap;
`

export const Logo = () => {
  return (
    <>
      <AdbIcon />
      <StyledLogo variant="h4">Built</StyledLogo>
      <StyledLogo variant="h4" sx={{ color: 'primary.dark' }}>
        On
      </StyledLogo>
      <StyledLogo variant="h4" sx={{ fontWeight: 'bold' }}>
        A
      </StyledLogo>
      <StyledLogo variant="h4" sx={{ fontWeight: 'bold' }}>
        Dare
      </StyledLogo>
    </>
  )
}
