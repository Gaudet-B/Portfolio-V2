import { useCallback } from 'react'
import { CaseStudyProps } from '../ProjectCaseStudy'
import {
  StyledCaseStudyContentContainer,
  StyledCaseStudyRow,
  StyledCaseStudyText,
  StyledCaseStudyTextContainer,
} from '../styles'
import { Bookend } from './Bookend'
import { DemoImg } from '../../../components'

export const ProjectCaseStudyContent = ({
  project,
  caseStudy,
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
    <StyledCaseStudyRow
      ref={containerRef}
      onMouseOver={(e: React.MouseEvent) => scroll(e, 'cancel')}
      onMouseOut={(e: React.MouseEvent) => scroll(e, 'start')}
      $mobile={getWindowWidth() < 800}
    >
      <Bookend />
      {caseStudy.sections.map((section, idx) => {
        return (
          /** @TODO use this 'key' syntax where each case study is mapped */
          <StyledCaseStudyContentContainer
            key={`Case_Study_${caseStudy.title.replaceAll(' ', '_')}_${idx}`}
            reverse={section.type === 'reverse'}
          >
            {section.image && (
              <DemoImg
                source={section.image}
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
            )}
            <StyledCaseStudyTextContainer>
              <StyledCaseStudyText>{section.text}</StyledCaseStudyText>
            </StyledCaseStudyTextContainer>
          </StyledCaseStudyContentContainer>
        )
      })}
      <Bookend />
    </StyledCaseStudyRow>
  )
}
