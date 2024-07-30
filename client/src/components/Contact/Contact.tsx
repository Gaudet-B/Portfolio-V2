import { useEffect, useState } from 'react'

import Navigation from '../Navigation'
import Form from './Form'

import {
  StyledBackground,
  StyledContactContainer,
  StyledFormContainer,
  StyledTitle,
} from './styles'

const Contact = () => {
  // functions that track height and width of the window for responsive components
  const getWindowWidth = () => {
    return window.innerWidth
  }

  // height and width of window are stored in local state
  const [windowWidth] = useState(getWindowWidth())

  // status of the menu - either "open" or "closed"
  const [containerStatus, setContainerStatus] = useState<string>('closed')

  const openContainer = () => setContainerStatus('open')
  // const closeContainer = () => setContainerStatus('closed')

  useEffect(() => {
    setTimeout(() => {
      openContainer()
    }, 300)
  }, [])

  return (
    <StyledBackground>
      <StyledContactContainer>
        <Navigation windowWidth={windowWidth} />
        <StyledFormContainer
          $mobile={windowWidth < 800}
          id="container"
          data-open={containerStatus === 'open'}
          data-closed={containerStatus === 'closed'}
        >
          <StyledTitle $mobile={windowWidth < 800}>Contact Brian</StyledTitle>
          <Form windowWidth={windowWidth} />
        </StyledFormContainer>
      </StyledContactContainer>
    </StyledBackground>
  )
}

export default Contact
