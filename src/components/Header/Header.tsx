import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

const navItems = [
  { text: 'Main', link: '/main' },
  { text: 'Example', link: '/example' },
  { text: 'Logout', link: '/' },
]

function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: '64px',
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        // onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography
        variant="h6"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: 'none', sm: 'block' },
          color: '#fff',
        }}
      >
        ANTOSCHA
      </Typography>
      <Box sx={{ display: { xs: 'none', sm: 'flex' } }} gap={2}>
        {navItems.map((item) => (
          <Link className="link" key={item.text} to={item.link}>
            <Typography
              sx={{
                color: '#fff',
                textTransform: 'uppercase',
              }}
              component="span"
            >
              {item.text}
            </Typography>
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default Header
