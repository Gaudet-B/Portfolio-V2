/* GLOBAL */
import { useEffect, useState } from 'react'

/* PROJECT */
import AnimatedBackground from './AnimatedBackground'
import Typewriter from './Typewriter'
import LandingButtons from './LandingButtons'

import styles from '../../styles/landing.style.module.css'

/* SCRIPTS */
import {
  getSessionStorageOrDefault,
  getWindowHeight,
  getWindowWidth,
} from '../../scripts/basic'
import {
  typeWriter,
  displayCopyright,
  displayBackground,
} from '../../scripts/dynamic'
import getImages from '../../scripts/images'

/* STYLES */
import {
  LandingFonts,
  StyledLandingBackground,
  StyledMainWrapper,
  StyledMainContainer,
} from './styles'

/* CONSTANTS  */
const IMAGES = getImages()
const TYPEWRITER_TEXT = ['Brian F. Gaudet', '  ', 'Full Stack', 'Web Developer']

/**
 * @description - Landing page component
 * @param none - none
 * @returns - JSX
 */
const Landing = () => {
  // height and width of window are stored in local state
  const [windowHeight, setWindowHeight] = useState(getWindowHeight(window))
  const [windowWidth, setWindowWidth] = useState(getWindowWidth(window))
  const [showButtons, setShowButtons] = useState(false)
  const [showSocial, setShowSocial] = useState(false)
  const [loaded, setLoaded] = useState<boolean>(
    getSessionStorageOrDefault('loaded', false) === 'true'
  )

  // function to be added to the onResize event listener
  const resizeWindow = () => {
    setWindowHeight(window.innerHeight)
    setWindowWidth(window.innerWidth)
  }

  // function to start the typewriter
  const StartTextAnimation = (i: number) => {
    if (typeof TYPEWRITER_TEXT[i] == 'undefined') {
      return
    }
    // check that we haven't hit the final (FOURTH) word in the array
    if (i < 4) {
      // if the typewriter has finished, display the rest of the content
      if (i >= 3) setTimeout(() => setShowButtons(true), 1000)
      // call the Typewriter function
      typeWriter(TYPEWRITER_TEXT[i], 0, function () {
        // start the next line
        StartTextAnimation(i + 1)
      })
    }
  }

  useEffect(() => {
    // allows vertical scrolling on smaller screens
    getWindowWidth(window) > 800
      ? document
          .querySelector('html')
          ?.setAttribute('style', 'overflow-x: hidden; overflow-y: hidden;')
      : document
          .querySelector('html')
          ?.setAttribute('style', 'overflow-x: hidden; overflow-y: auto;')

    if (!loaded) {
      // start the animation
      StartTextAnimation(0)
      // delay, then call the function to display background
      setTimeout(() => displayBackground(windowWidth, styles), 5000)
      // delay, then call the function to display socail links
      setTimeout(() => setShowSocial(true), 8000)
      // delay, then call the function to display copyright and est. text
      setTimeout(() => displayCopyright(windowWidth, styles), 8200)
      // store "loaded" state in session, so user will not see typerwriter animation after first visit
      sessionStorage.setItem('loaded', JSON.stringify(true))
      // add the resizeWindow function to the window as an event listener
      window.addEventListener('resize', resizeWindow)
    } else if (loaded) {
      // just display the page loading animations without typewriter and without delays
      setShowButtons(true)
      setShowSocial(true)
      setTimeout(() => {
        displayBackground(windowWidth, styles)
        displayCopyright(windowWidth, styles)
      }, 1000)
      // add the resizeWindow function to the window as an event listener
      window.addEventListener('resize', resizeWindow)
    }
    return () => {
      // store "loaded" state in session, so user will not see typerwriter animation after first visit
      sessionStorage.setItem('loaded', JSON.stringify(true))
      // remove event listener when component unmounts
      window.removeEventListener('resize', resizeWindow)
      //
      document.querySelector('html')?.removeAttribute('style')
    }
  }, [loaded])

  return (
    // only display background w/ anmations if screen is large enough - otherwise, use bg image
    <StyledLandingBackground
      id={'background-image'}
      $responsive={windowWidth < 800}
    >
      {windowWidth <= 800 ? null : (
        <AnimatedBackground windowHeight={windowHeight} />
      )}

      <LandingFonts />
      <StyledMainWrapper
        $responsive={windowWidth < 800}
        $small={windowHeight < 500}
      >
        <StyledMainContainer
          $responsive={windowWidth < 800}
          $small={windowHeight < 800}
        >
          <Typewriter
            text={TYPEWRITER_TEXT}
            loaded={!!loaded}
            windowWidth={windowWidth}
          />
          {showButtons ? (
            <LandingButtons
              images={IMAGES}
              windowWidth={windowWidth}
              showSocial={showSocial}
            />
          ) : null}
        </StyledMainContainer>
      </StyledMainWrapper>
    </StyledLandingBackground>
  )
}

export default Landing
