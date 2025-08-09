'use client'
import { AppBar, Toolbar, Stack } from '@mui/material'

import { Logo } from './Logo'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack
          direction="row"
          justifyContent={{ xs: 'center', md: 'flex-start' }}
          width="100%"
        >
          <Stack mx={4} alignItems="center" direction="row">
            <Logo />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Header
