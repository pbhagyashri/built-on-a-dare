'use client'
import { useState } from 'react'
import {
  AppBar,
  Box,
  Menu,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Button,
  styled,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import { Logo } from './Logo'
import { Autocomplete } from '../autocomplete'

const StyledButton = styled(Button)`
  color: ${({ theme }) => theme.palette.white};
  display: box;
`

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const pages = ['Products', 'Pricing', 'Documentation']

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }} mx={4}>
          <Logo />
        </Box>
        <Box flexGrow={1} display={{ xs: 'flex', md: 'none' }}>
          <IconButton
            size="large"
            aria-label="user account"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu}>
                <Typography>{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}>
          {pages.map((page) => (
            <StyledButton key={page}>{page}</StyledButton>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }} flexGrow={1}>
          <Logo />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
