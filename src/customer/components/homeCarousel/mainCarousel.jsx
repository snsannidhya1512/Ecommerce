import React from 'react'
import {mainCarouselData} from './mainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const mainCarousel=()=>{
  const items=mainCarouselData.map((item)=> <img className='cursor-pointer'
  role='presentation' src={item.image} alt=""/>)

  return(
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite //last k baad firse start
    />
  )
}
export default mainCarousel;