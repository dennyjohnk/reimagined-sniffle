import React, { FC } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from 'react-awesome-slider/src/styles'

import sliderImage1 from '../../media/slider-image/media-1.jpg'

const AuthPageImageSlider = props => {
  return (
    <div>
      <AwesomeSlider cssModule={AwsSliderStyles} fillParent={true}>
        <div data-src={sliderImage1} />
        <div data-src="../banner-1.jpeg" />
        <div data-src="https://image.freepik.com/free-vector/artificial-intelligence-machine-learning-poster_35632-60.jpg" />
      </AwesomeSlider>
    </div>
  )
}

export default AuthPageImageSlider
