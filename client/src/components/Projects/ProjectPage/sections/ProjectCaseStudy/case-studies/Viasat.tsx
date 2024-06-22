import { useCallback } from 'react'
import { DemoImg } from '../../../components'
import { CaseStudyProps } from '../ProjectCaseStudy'
import {
  StyledCaseStudyContentContainer,
  StyledCaseStudyRow,
  StyledCaseStudyText,
  StyledCaseStudyTextContainer,
} from '../styles'
import viasat1 from '../../../../../../assets/estimatica/before_01.PNG'
import viasat2 from '../../../../../../assets/estimatica/after_02.PNG'
import { Bookend } from './Bookend'

export const Viasat = ({
  project,
  getWindowWidth,
  cancelScroll,
  startScroll,
  containerRef,
  activeWidth,
  activeHeight,
}: CaseStudyProps) => {
  const scroll = useCallback(
    (e: React.MouseEvent, action: 'cancel' | 'start') => {
      e.preventDefault()
      if (action === 'cancel') {
        cancelScroll()
      } else {
        startScroll()
      }
    },
    [cancelScroll, startScroll]
  )
  return (
    <>
      <StyledCaseStudyRow
        ref={containerRef}
        onMouseOver={(e: React.MouseEvent) => scroll(e, 'cancel')}
        onMouseOut={(e: React.MouseEvent) => scroll(e, 'start')}
        $mobile={getWindowWidth() < 800}
      >
        <Bookend />
        <StyledCaseStudyContentContainer>
          <DemoImg
            source={viasat1}
            index={-1}
            project={project.title}
            activeIndex={-1}
            activeHeight={activeHeight}
            getWindowWidth={getWindowWidth}
            activeWidth={activeWidth}
            hideScrollbar
            noMask
            hideLink
          />
          <StyledCaseStudyTextContainer>
            <StyledCaseStudyText>
              Viasat Inc. is a global communications company that believes
              everyone and everything in the world can be connected. For more
              than 30 years, Viasat has helped shape how consumers, businesses,
              governments and militaries around the world communicate. Today,
              the Company is developing the ultimate global communications
              network to power high-quality, secure, affordable, fast
              connections to impact people's lives anywhere they are—on the
              ground, in the air or at sea.
            </StyledCaseStudyText>
          </StyledCaseStudyTextContainer>
        </StyledCaseStudyContentContainer>
        <StyledCaseStudyContentContainer>
          <StyledCaseStudyTextContainer>
            <StyledCaseStudyText>
              Viasat, with its corporate headquarters in Carlsbad, California,
              offers a diverse portfolio of high-quality, secure, affordable
              broadband solutions and services with global reach that are
              delivered through satellite and other wireless networks. Viasat is
              a leader in high-speed satellite broadband services and secure
              networking systems covering military and commercial markets.
            </StyledCaseStudyText>
          </StyledCaseStudyTextContainer>
          <DemoImg
            source={viasat2}
            index={-1}
            project={project.title}
            activeIndex={-1}
            activeHeight={activeHeight}
            getWindowWidth={getWindowWidth}
            activeWidth={activeWidth}
            hideScrollbar
            noMask
            hideLink
          />
        </StyledCaseStudyContentContainer>
        <Bookend />
      </StyledCaseStudyRow>
    </>
  )
}
