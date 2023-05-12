import { Box, Container, useTheme } from '@mui/material'
import { Footer, Header } from '..'

type HeaderProps = {
  children: React.ReactElement
}

function Layout({ children }: HeaderProps) {
  const theme = useTheme()

  return (
    <>
      <Box bgcolor={theme.palette.primary.light}>
        <Container disableGutters maxWidth="xl">
          <Header />
        </Container>
      </Box>
      <Container
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          paddingTop: '30px',
          paddingBottom: '30px',
        }}
        disableGutters
        maxWidth="xl"
      >
        {children}
      </Container>
      <Box bgcolor={theme.palette.primary.dark}>
        <Container disableGutters maxWidth="xl">
          <Footer />
        </Container>
      </Box>
    </>
  )
}

export default Layout
