import { Box } from '@mui/material'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import React from 'react'
import { IFRAME_TAG, IMG_TAG } from './const'
import './slider.css'

const BOX_WRAPPER_STYLE = {
  display: 'flex',
  maxWidth: '640px',
  maxHeight: '360px',
}

type SliderProps = {
  elements: React.ReactNode & React.ReactNode[]
}

const Slider = ({ elements }: SliderProps) => {
  const getSlide = (element: React.ReactNode, index: number) => {
    if (React.isValidElement(element)) {
      if (element.type === IMG_TAG) {
        return (
          <SwiperSlide key={index}>
            <Box sx={BOX_WRAPPER_STYLE}>
              <img {...element.props} />
            </Box>
          </SwiperSlide>
        )
      }

      if (element.type === IFRAME_TAG) {
        return (
          <SwiperSlide key={index}>
            <Box sx={BOX_WRAPPER_STYLE}>
              <iframe {...element.props}></iframe>
            </Box>
          </SwiperSlide>
        )
      }
    }
  }

  return (
    <Box maxWidth={640} paddingTop="20px" paddingBottom="40px">
      <Swiper
        spaceBetween={10}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {elements &&
          elements.map((el, i) => {
            return getSlide(el, i)
          })}
      </Swiper>
    </Box>
  )
}

export default Slider
