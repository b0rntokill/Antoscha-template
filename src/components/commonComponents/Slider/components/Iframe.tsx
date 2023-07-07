import { Box } from '@mui/material'
import React, { useRef } from 'react'

type IframeProps = {
  props: React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  >
  slide: number
  activeSlide: number | undefined
  isMain: boolean
}

function Iframe({ props, slide, activeSlide, isMain }: IframeProps) {
  const videoRef = useRef<any>()

  if (activeSlide && activeSlide !== slide) {
    videoRef.current.contentWindow.postMessage(
      '{"event":"command","func":"' + 'pauseVideo' + '","args":""}',
      '*',
    )
  }

  return (
    <>
      {isMain ? (
        <iframe ref={videoRef} src={props.src} allowFullScreen={true}></iframe>
      ) : (
        <>
          <Box className="iframe-wrapper"></Box>
          <iframe ref={videoRef} src={props.src}></iframe>
        </>
      )}
    </>
  )
}

export default Iframe
