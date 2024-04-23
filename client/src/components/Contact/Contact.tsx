import { useEffect, useState } from 'react'

import Navigation from '../Navigation'
import Form from './Form'

import navStyles from '../../styles/nav.style.module.css'

import {
  StyledBackground,
  StyledContactContainer,
  StyledFormContainer,
  StyledTitle,
} from './styles'

/** @TODO make styles look good, especially mobile */

const Contact = () => {
  // functions that track height and width of the window for responsive components
  const getWindowHeight = () => {
    return window.innerHeight
  }
  const getWindowWidth = () => {
    return window.innerWidth
  }

  // height and width of window are stored in local state
  const [windowHeight, setWindowHeight] = useState(getWindowHeight())
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  // status of the menu - either "open" or "closed"
  const [containerStatus, setContainerStatus] = useState<string>('closed')

  const openContainer = () => setContainerStatus('open')
  const closeContainer = () => setContainerStatus('closed')

  useEffect(() => {
    setTimeout(() => {
      openContainer()
    }, 300)
  }, [])

  return (
    <StyledBackground>
      <StyledContactContainer>
        <Navigation styles={navStyles} windowWidth={windowWidth} />
        <StyledFormContainer
          id="container"
          data-open={containerStatus === 'open'}
          data-closed={containerStatus === 'closed'}
        >
          <StyledTitle>Contact Brian</StyledTitle>
          <Form windowWidth={windowWidth} />
        </StyledFormContainer>
      </StyledContactContainer>
    </StyledBackground>
  )
  // }
}

export default Contact
