import React, { FC } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from 'react-awesome-slider/src/styles'

import sliderImage1 from '../../media/slider-image/media-1.jpg'
import sliderImage2 from '../../media/slider-image/media-2.jpg'
import sliderImage3 from '../../media/slider-image/media-3.png'

const AuthPageImageSlider = props => {
  return (
    <div>
      <AwesomeSlider cssModule={AwsSliderStyles} fillParent={true}>
        <div data-src={sliderImage1} />
        <div data-src={sliderImage2} />
        <div data-src={sliderImage3} />
      </AwesomeSlider>
    </div>
  )
}

export default AuthPageImageSlider
