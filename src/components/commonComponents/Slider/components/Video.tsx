import React, { useRef } from 'react'

type VideoProps = {
  props: React.DetailedHTMLProps<
    React.VideoHTMLAttributes<HTMLVideoElement>,
    HTMLVideoElement
  >
  slide: number
  activeSlide: number | undefined
  isMain: boolean
}

function Video({ props, slide, activeSlide, isMain }: VideoProps) {
  const videoRef = useRef<any>()

  if (activeSlide && activeSlide !== slide) {
    videoRef.current.pause()
  }

  return (
    <video ref={videoRef} {...props} controls={isMain ? true : false}></video>
  )
}

export default Video
