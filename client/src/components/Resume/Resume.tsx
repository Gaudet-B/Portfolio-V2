import { useState, useEffect, PropsWithChildren } from 'react'
import Navigation from '../Navigation'
import ResumeHeader, { ResumeLinks } from './sections/ResumeHeader'
import { StyledResumeContainer } from './styles'
import { StyledBackground } from '../Projects/styles'
import styleGuide from '../StyleGuide/StyleGuide'
import TechnologiesSection from './sections/TechnologiesSection'
import ExperienceSection from './sections/ExperienceSection'
import EducationSection from './sections/EducationSection'
import ResumeFooter from './sections/ResumeFooter'

const OuterContainer = ({
  children,
  isDesktop,
}: PropsWithChildren<{ isDesktop: boolean }>) => (
  <div className={`${isDesktop ? 'px-5' : ''} d-flex flex-column`}>
    {children}
  </div>
)

const ResumeBorder = ({
  children,
  isDesktop,
}: PropsWithChildren<{ isDesktop: boolean }>) => (
  <div
    className={`rounded text-light d-flex flex-column justify-content-center ${
      isDesktop ? 'py-2' : 'py-1'
    }`}
    style={{
      backgroundColor: styleGuide.colors.SpaceBlack,
      maxWidth: '1000px',
      margin: 'auto',
    }}
  >
    {children}
  </div>
)

const Separator = () => (
  <div className="mx-5 border-top border-secondary my-4"></div>
)

const Resume = () => {
  // functions that track height and width of the window for responsive components
  const getWindowWidth = () => {
    return window.innerWidth
  }

  // width of window are stored in local state
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())

  // function to be added to the onResize event listener
  const resizeWindow = () => setWindowWidth(window.innerWidth)

  useEffect(() => {
    // add Bootstrap to document, remove when component unmounts
    const link = document.createElement('link')
    link.href =
      'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css'
    link.rel = 'stylesheet'
    link.integrity =
      'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC'
    link.crossOrigin = 'anonymous'
    document.body.appendChild(link)

    // allow scrolling, in case that was disabled from Landing component
    document.querySelector('html')?.setAttribute('style', 'overflow: auto;')
    // add the resizeWindow function to the window as an event listener
    window.addEventListener('resize', resizeWindow)
    // remove event listener and link when component unmounts
    return () => {
      window.removeEventListener('resize', resizeWindow)
      document.body.removeChild(link)
    }
  }, [])

  return (
    <StyledBackground>
      <OuterContainer isDesktop={windowWidth > 900}>
        <Navigation windowWidth={windowWidth} />
        <ResumeBorder isDesktop={windowWidth > 900}>
          <StyledResumeContainer
            className={'border border-light rounded p-4'}
            style={{ backgroundColor: styleGuide.colors.GrayShadow }}
          >
            <ResumeHeader isDesktop={windowWidth > 900} />
            {/* displays social links below summary on smaller screens */}
            {windowWidth > 900 ? null : <ResumeLinks />}
            <Separator />
            <TechnologiesSection isDesktop={windowWidth > 800} />
            <ExperienceSection
              isDesktop={windowWidth > 900}
              smallHeaders={windowWidth > 500}
            />
            <Separator />
            <EducationSection />
            <Separator />
            <ResumeFooter />
          </StyledResumeContainer>
        </ResumeBorder>
      </OuterContainer>
    </StyledBackground>
  )
}

export default Resume
