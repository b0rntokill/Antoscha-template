import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import ExampleApi from '../../api/example/exampleApi'

const SOURCE_TYPE_REGEXP = /[a-zA-Z]/g

function ExamplePage() {
  const { pathname } = useLocation()
  const { id } = useParams<{ id: string }>()
  const [post, setPost] = useState<any>()

  useEffect(() => {
    const source = pathname.match(SOURCE_TYPE_REGEXP)?.join('')

    ExampleApi.getPost(source, id)
      .then((res: any): any => {
        setPost(res)
      })
      .catch((err: any) => {
        throw new Error('Network error', err)
      })
  }, [pathname])

  return (
    <Box>
      <Typography textAlign="center">EXAMPLE</Typography>
      <Box display="flex" flexDirection="column">
        {/* {posts?.map((post) => (
          <Box>
            <Typography paddingBottom={0.5}>{post.title}</Typography>
          </Box>
        ))} */}
      </Box>
    </Box>
  )
}

export default ExamplePage
