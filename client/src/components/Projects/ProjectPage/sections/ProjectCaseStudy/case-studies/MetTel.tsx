import { useCallback } from 'react'
import { Bookend } from './Bookend'
import { CaseStudyProps } from '../ProjectCaseStudy'
import { DemoImg } from '../../../components'
import {
  StyledCaseStudyContentContainer,
  StyledCaseStudyRow,
  StyledCaseStudyText,
  StyledCaseStudyTextContainer,
} from '../styles'
import mettel1 from '../../../../../../assets/estimatica/before_01.PNG'
import mettel2 from '../../../../../../assets/estimatica/after_02.PNG'

export const MetTel = ({
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
            source={mettel1}
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
              MetTel is a leading provider of integrated digital communications
              solutions for enterprise customers. By converging all
              communications over a proprietary network, MetTel enables
              enterprise companies to easily deploy and manage technology-driven
              voice, data, wireless and cloud solutions nationwide.
            </StyledCaseStudyText>
          </StyledCaseStudyTextContainer>
        </StyledCaseStudyContentContainer>
        <StyledCaseStudyContentContainer>
          <StyledCaseStudyTextContainer>
            <StyledCaseStudyText>
              MetTel’s comprehensive portfolio of customer solutions boosts
              enterprise productivity, reduces costs and simplifies operations.
              Combining customized and managed communication solutions with a
              powerful platform of cloud-based software, the company’s MetTel
              Portal® enables customers to manage their inventory, usage, spend
              and repairs from one simple, user friendly interface.
            </StyledCaseStudyText>
          </StyledCaseStudyTextContainer>
          <DemoImg
            source={mettel2}
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
        <StyledCaseStudyContentContainer>
          <StyledCaseStudyTextContainer>
            <StyledCaseStudyText>
              MetTel is a PCI DSS V3.0 Level 1 compliant solution provider.
            </StyledCaseStudyText>
          </StyledCaseStudyTextContainer>
        </StyledCaseStudyContentContainer>
        <Bookend />
      </StyledCaseStudyRow>
    </>
  )
}
