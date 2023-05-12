import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '64px',
      }}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{
          color: '#fff',
        }}
      >
        ANTOSCHA: all rights reserved
      </Typography>
    </Box>
  )
}

export default Footer
