import { Box, Typography } from '@mui/material'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { markdownExample } from './const'

function MainPage() {
  return (
    <Box>
      <Typography paddingBottom={2} textAlign="center">
        MAIN
      </Typography>
      <ReactMarkdown
        className="markdown-body"
        children={markdownExample}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </Box>
  )
}

export default MainPage
