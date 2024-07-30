import React, { useCallback, useMemo } from 'react'
import { CaseStudyProps, MobileCaseStudyProps } from '../ProjectCaseStudy'
import { Bookend } from './Bookend'
import { DemoImg } from '../../../components'
import PauseButton from '../../../../../StyleGuide/icons/PauseButton'
import PlayButton from '../../../../../StyleGuide/icons/PlayButton'
import {
  StyledCaseStudyColumn,
  StyledCaseStudyContentContainer,
  StyledCaseStudyImageContainer,
  StyledCaseStudyRow,
  StyledCaseStudyText,
  StyledCaseStudyTextContainer,
  StyledControlButton,
  StyledImageRow,
  StyledMobileContentContainer,
  StyledMobileText,
  StyledMobileTextContainer,
} from '../styles'

const CASE_STUDY_INDEXES = {
  MetTel: 8,
  Viasat: 9,
} as const

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
  handleProjectClick,
  containerRef,
  activeWidth,
  activeHeight,
  isPaused,
}: CaseStudyProps) => {
  const title = useMemo(() => {
    if (Object.keys(CASE_STUDY_INDEXES).includes(caseStudy.title)) {
      return caseStudy.title as keyof typeof CASE_STUDY_INDEXES
    } else return null
  }, [caseStudy])

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

  const handleNavigateCaseStudies = () => {
    if (!title) return
    handleProjectClick(CASE_STUDY_INDEXES[title])
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
      // $mobile={getWindowWidth() < 800}
    >
      {/* <WindowPanes /> */}

      {!title ? (
        <ControlButton isPaused={isPaused} handlePause={handlePause} />
      ) : null}

      <Bookend />

      {caseStudy.sections.map((section, idx) => {
        return (
          <StyledCaseStudyContentContainer
            /** @TODO use this 'key' syntax where each case study is mapped */
            key={`Case_Study_${caseStudy.title.replaceAll(' ', '_')}_${idx}`}
            // $isClickable={!!title}
            $reverse={section.type === 'reverse' || section.type === 'sandwich'}
            // onClick={!!title ? handleNavigateCaseStudies : undefined}
          >
            {section.secondaryText && (
              <StyledCaseStudyTextContainer>
                <StyledCaseStudyText>
                  {section.secondaryText}
                </StyledCaseStudyText>
              </StyledCaseStudyTextContainer>
            )}
            {section.image && (
              <StyledCaseStudyImageContainer
                $isClickable={!!title}
                onClick={!!title ? handleNavigateCaseStudies : undefined}
              >
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
              </StyledCaseStudyImageContainer>
            )}
            {section.images && (
              <StyledImageRow>
                {section.images.map((image, i) => {
                  return (
                    <DemoImg
                      key={`Case_Study_${caseStudy.title.replaceAll(
                        ' ',
                        '_'
                      )}_${idx}_Image_${i}`}
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

export const MobileCaseStudyContent = ({
  project,
  caseStudy,
  getWindowWidth,
  // cancelScroll,
  // startScroll,
  // pauseScroll,
  // resumeScroll,
  handleProjectClick,
  // containerRef,
  activeWidth,
  activeHeight,
}: // isPaused,
MobileCaseStudyProps) => {
  const title = useMemo(() => {
    if (Object.keys(CASE_STUDY_INDEXES).includes(caseStudy.title)) {
      return caseStudy.title as keyof typeof CASE_STUDY_INDEXES
    } else return null
  }, [caseStudy])

  const handleNavigateCaseStudies = () => {
    if (!title) return
    handleProjectClick(CASE_STUDY_INDEXES[title])
  }

  return (
    <StyledCaseStudyRow $mobile={getWindowWidth() < 800}>
      <Bookend />

      {caseStudy.sections.map((section, idx) => {
        return (
          <StyledMobileContentContainer
            /** @TODO use this 'key' syntax where each case study is mapped */
            key={`Case_Study_${caseStudy.title.replaceAll(' ', '_')}_${idx}`}
            // $isClickable={!!title}
            $reverse={section.type === 'reverse' || section.type === 'sandwich'}
            // onClick={!!title ? handleNavigateCaseStudies : undefined}
          >
            {section.secondaryText && (
              <StyledMobileTextContainer>
                <StyledMobileText>{section.secondaryText}</StyledMobileText>
              </StyledMobileTextContainer>
            )}
            {section.image && (
              <StyledCaseStudyImageContainer
                $isClickable={!!title}
                $mobile={getWindowWidth() < 800}
                onClick={!!title ? handleNavigateCaseStudies : undefined}
              >
                <DemoImg
                  source={section.image?.source as string}
                  index={-1}
                  project={project.title}
                  activeIndex={-1}
                  activeHeight={
                    (section.image?.height && section.image?.height * 0.8) ||
                    activeHeight
                  }
                  getWindowWidth={getWindowWidth}
                  activeWidth={
                    (section.image?.width && section.image?.width * 0.8) ||
                    activeWidth
                  }
                  hideScrollbar
                  noMask
                  hideLink
                />
              </StyledCaseStudyImageContainer>
            )}
            {section.images && (
              <StyledImageRow $mobile={getWindowWidth() < 800}>
                {section.images.map((image, i) => {
                  return (
                    <DemoImg
                      key={`Case_Study_${caseStudy.title.replaceAll(
                        ' ',
                        '_'
                      )}_${idx}_Image_${i}`}
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
            <StyledMobileTextContainer>
              <StyledMobileText>{section.text}</StyledMobileText>
            </StyledMobileTextContainer>
          </StyledMobileContentContainer>
        )
      })}

      <Bookend />
    </StyledCaseStudyRow>
  )
}
