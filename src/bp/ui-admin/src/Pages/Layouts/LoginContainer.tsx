import { lang } from 'botpress/shared'
import React, { FC } from 'react'
import { Alert, Card, CardBody, CardText, CardTitle, Col } from 'reactstrap'
import AuthPageImageSlider from '../Account/AuthPageImageSlider'

import logo from '../../media/nobg_white.png'

interface Props {
  title?: string
  subtitle?: React.ReactNode
  error?: string | null
  poweredBy?: boolean
  children: React.ReactNode
}

export const LoginContainer: FC<Props> = props => {
  return (
    <div className="flex-container login-container">
      <Col xs={7} className="auth-image-slider-container hidden-xs hidden-sm no-padding">
        <AuthPageImageSlider />
      </Col>
      <Col xs={12} sm={12} md={5} lg={5}>
        <div className="">
          <div className="inner">
            <img className="logo" src={logo} alt="loading" />
            <Card body>
              <CardBody className="login-box">
                <div>
                  <CardTitle>
                    <strong>{props.title || 'Nikko'}</strong>
                  </CardTitle>
                  <CardText>{props.subtitle || ''}</CardText>
                  {props.error && <Alert color="danger">{props.error}</Alert>}
                  {props.children}
                </div>
              </CardBody>
            </Card>
            {props.poweredBy && <div className="homepage"></div>}
          </div>
        </div>
      </Col>
    </div>
  )
}
