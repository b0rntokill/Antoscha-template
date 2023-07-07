import { Box } from '@mui/material'
import React, { useState } from 'react'
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import CustomImage from './components/CustomImage'
import Iframe from './components/Iframe'
import Video from './components/Video'
import { IFRAME_TAG, IMG_TAG, VIDEO_TAG } from './const'

const BOX_MAIN_WRAPPER_STYLE = {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '640px',
  height: '360px',
}

const BOX_WRAPPER_STYLE = {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '100%',
  height: '160px',
}

type SliderProps = {
  elements: React.ReactNode & React.ReactNode[]
}

function Slider({ elements }: SliderProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)
  const [activeSlide, setActiveSlide] = useState<number>()

  const pureElements = elements.filter((el) =>
    React.isValidElement(el),
  ) as React.ReactElement[]

  const getSlide = (
    element: React.ReactElement,
    index: number,
    isMain: boolean,
  ) => {
    if (element.type === IMG_TAG) {
      return (
        <SwiperSlide key={index}>
          <Box sx={isMain ? BOX_MAIN_WRAPPER_STYLE : BOX_WRAPPER_STYLE}>
            <CustomImage props={element.props} isMain={isMain} />
          </Box>
        </SwiperSlide>
      )
    }

    if (element.type === VIDEO_TAG) {
      return (
        <SwiperSlide key={index}>
          <Box sx={isMain ? BOX_MAIN_WRAPPER_STYLE : BOX_WRAPPER_STYLE}>
            <Video
              props={element.props}
              slide={index}
              activeSlide={activeSlide}
              isMain={isMain}
            />
          </Box>
        </SwiperSlide>
      )
    }

    if (element.type === IFRAME_TAG) {
      return (
        <SwiperSlide key={index}>
          <Box sx={isMain ? BOX_MAIN_WRAPPER_STYLE : BOX_WRAPPER_STYLE}>
            <Iframe
              props={element.props}
              slide={index}
              activeSlide={activeSlide}
              isMain={isMain}
            />
          </Box>
        </SwiperSlide>
      )
    }
  }

  return (
    <Box maxWidth={640} paddingTop="20px" paddingBottom="20px">
      <Swiper
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Thumbs]}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onSlideChange={({ activeIndex }) => setActiveSlide(activeIndex)}
      >
        {pureElements && pureElements.map((el, i) => getSlide(el, i, true))}
      </Swiper>
      <Swiper
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
      >
        {pureElements && pureElements.map((el, i) => getSlide(el, i, false))}
      </Swiper>
    </Box>
  )
}

export default Slider
