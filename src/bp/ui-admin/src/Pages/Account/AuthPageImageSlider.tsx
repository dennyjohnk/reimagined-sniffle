import React, { FC } from 'react'
import AwesomeSlider from 'react-awesome-slider'
import AwsSliderStyles from 'react-awesome-slider/src/styles'
import withAutoplay from 'react-awesome-slider/dist/autoplay'

//import Captioned from 'react-awesome-slider/src/hoc/captioned-images/hoc'
//import CaptionedStyles from 'react-awesome-slider/src/hoc/captioned-images'

import sliderImage1 from '../../media/slider-image/media-1.jpg'
import sliderImage2 from '../../media/slider-image/media-2.jpg'
import sliderImage3 from '../../media/slider-image/media-3.png'

const AutoplaySlider = withAutoplay(AwesomeSlider)

const AuthPageImageSlider = props => {
  return (
    <div>
      <div>
        <AutoplaySlider
          cssModule={AwsSliderStyles}
          interval={4000}
          fillParent={true}
          bullets={false}
          infinite={true}
          play={true}
        >
          <div data-src={sliderImage1} />
          <div data-src={sliderImage2} />
          <div data-src={sliderImage3} />
        </AutoplaySlider>
      </div>
    </div>
  )
}

export default AuthPageImageSlider
