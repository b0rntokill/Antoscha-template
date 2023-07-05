import { Box, Typography } from '@mui/material'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import rehypeRaw from 'rehype-raw'
import remarkGfm from 'remark-gfm'
import { markdownExample } from './const'
import { Slider } from '../../components'
import { SLIDER_CLASS } from '../../utils/const'

function MainPage() {
  const checkSliderContainer = (
    className: string | undefined,
    children: React.ReactNode & React.ReactNode[],
  ) => {
    if (className === SLIDER_CLASS) {
      return <Slider elements={children} />
    } else {
      return null
    }
  }

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
        components={{
          div({ className, children }) {
            return checkSliderContainer(className, children)
          },
        }}
      />
    </Box>
  )
}

export default MainPage
