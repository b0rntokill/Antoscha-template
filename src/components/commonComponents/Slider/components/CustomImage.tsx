import { Box, Modal } from '@mui/material'
import React, { useState } from 'react'
import './custom-components.css'

type ImageProps = {
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
  isMain: boolean
}

function CustomImage({ props, isMain }: ImageProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <img
        className="slider-image"
        {...props}
        onClick={() => isMain && setOpen(true)}
      />
      {isMain && (
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box className="slider-modal-image">
            <img {...props} onClick={() => setOpen(true)} />
          </Box>
        </Modal>
      )}
    </>
  )
}

export default CustomImage
