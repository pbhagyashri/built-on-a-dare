import { Box, Container, Paper } from '@mui/material'
import { Header } from './header'
import '../globals.css'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        minHeight: '100vh',
      }}
    >
      <Paper
        elevation={2}
        sx={{
          minHeight: '100vh',
          backgroundColor: 'primary.dark',
        }}
      >
        <Header />
        <Box p={2}>{children}</Box>
      </Paper>
    </Container>
  )
}

export default Layout
