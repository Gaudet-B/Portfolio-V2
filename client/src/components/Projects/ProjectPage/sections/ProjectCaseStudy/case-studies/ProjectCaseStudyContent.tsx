import React, { useCallback } from 'react'
import { CaseStudyProps } from '../ProjectCaseStudy'
import { Bookend } from './Bookend'
import { DemoImg } from '../../../components'
import PauseButton from '../../../../../StyleGuide/icons/PauseButton'
import PlayButton from '../../../../../StyleGuide/icons/PlayButton'
import {
  StyledCaseStudyContentContainer,
  StyledCaseStudyRow,
  StyledCaseStudyText,
  StyledCaseStudyTextContainer,
  StyledControlButton,
  StyledImageRow,
} from '../styles'

const ControlButton = ({
  isPaused,
  handlePause,
}: {
  isPaused: boolean
  handlePause: (e: React.MouseEvent, isPaused: boolean) => void
}) => {
  return (
    <StyledControlButton
      onClick={(e: React.MouseEvent) => handlePause(e, isPaused)}
    >
      {isPaused ? (
        <PlayButton height={75} width={75} />
      ) : (
        <PauseButton height={75} width={75} />
      )}
    </StyledControlButton>
  )
}

export const ProjectCaseStudyContent = ({
  project,
  caseStudy,
  getWindowWidth,
  cancelScroll,
  startScroll,
  pauseScroll,
  resumeScroll,
  containerRef,
  activeWidth,
  activeHeight,
  isPaused,
}: CaseStudyProps) => {
  const handleScroll = useCallback(
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

  const handlePause = (e: React.MouseEvent, isPaused: boolean) => {
    e.preventDefault()
    if (isPaused) {
      resumeScroll()
    } else {
      pauseScroll()
    }
  }

  return (
    <StyledCaseStudyRow
      ref={containerRef}
      onMouseOver={
        isPaused
          ? undefined
          : (e: React.MouseEvent) => handleScroll(e, 'cancel')
      }
      onMouseOut={
        isPaused ? undefined : (e: React.MouseEvent) => handleScroll(e, 'start')
      }
      $mobile={getWindowWidth() < 800}
    >
      <ControlButton isPaused={isPaused} handlePause={handlePause} />

      <Bookend />

      {caseStudy.sections.map((section, idx) => {
        return (
          <StyledCaseStudyContentContainer
            /** @TODO use this 'key' syntax where each case study is mapped */
            key={`Case_Study_${caseStudy.title.replaceAll(' ', '_')}_${idx}`}
            $reverse={section.type === 'reverse' || section.type === 'sandwich'}
          >
            {section.secondaryText && (
              <StyledCaseStudyTextContainer>
                <StyledCaseStudyText>
                  {section.secondaryText}
                </StyledCaseStudyText>
              </StyledCaseStudyTextContainer>
            )}
            {section.image && (
              <DemoImg
                source={section.image?.source as string}
                index={-1}
                project={project.title}
                activeIndex={-1}
                activeHeight={section.image?.height || activeHeight}
                getWindowWidth={getWindowWidth}
                activeWidth={section.image?.width || activeWidth}
                hideScrollbar
                noMask
                hideLink
              />
            )}
            {section.images && (
              <StyledImageRow>
                {section.images.map((image) => {
                  return (
                    <DemoImg
                      source={image.source as string}
                      index={-1}
                      project={project.title}
                      activeIndex={-1}
                      activeHeight={image.height || activeHeight}
                      getWindowWidth={getWindowWidth}
                      activeWidth={image.width || activeWidth}
                      hideScrollbar
                      noMask
                      hideLink
                    />
                  )
                })}
              </StyledImageRow>
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
