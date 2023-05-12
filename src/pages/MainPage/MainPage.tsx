import { Box, Typography } from '@mui/material'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import remarkGfm from 'remark-gfm'
import { markdownExample } from './const'

function MainPage() {
  return (
    <Box>
      <Typography paddingBottom={2} textAlign="center">
        MAIN
      </Typography>
      <ReactMarkdown children={markdownExample} remarkPlugins={[remarkGfm]} />
    </Box>
  )
}

export default MainPage
