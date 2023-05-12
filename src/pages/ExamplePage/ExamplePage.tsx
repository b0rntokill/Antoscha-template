import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { ExamplePosts } from '../../api/example/types'
import ExampleApi from '../../api/example/exampleApi'

function ExamplePage() {
  const [posts, setPosts] = useState<ExamplePosts>()

  useEffect(() => {
    ExampleApi.getExamplePosts()
      .then((res) => {
        setPosts(res)
      })
      .catch((err) => {
        throw new Error('Network error', err)
      })
  }, [])

  return (
    <Box>
      <Typography textAlign="center">EXAMPLE</Typography>
      <Box display="flex" flexDirection="column">
        {posts?.map((post) => (
          <Box>
            <Typography paddingBottom={0.5}>{post.title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ExamplePage
