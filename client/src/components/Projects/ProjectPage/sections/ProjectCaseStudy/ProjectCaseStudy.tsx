import { PropsWithChildren, useEffect, useMemo } from 'react'
import _ from 'lodash'
import { Project } from '../../../Projects'
import { StyledMobileContainer, StyledScrollableContainer } from './styles'
import { MobileCaseStudyContent, ProjectCaseStudyContent } from './case-studies'
import useSlowScroll, {
  ALTERNATING_DELAY,
} from '../../../../../hooks/useSlowScroll'
import { CaseStudy } from '../../../../../scripts/getCaseStudy'

const IMG_DIMENSIONS = {
  mobile: {
    height: 100,
    width: 200,
  },
  desktop: {
    height: 200,
    width: 400,
  },
}

/** @TODO this is TEMPORARY - don't need two separate types */
export type MobileCaseStudyProps = {
  project: Project
  caseStudy: CaseStudy
  getWindowWidth: () => number
  // cancelScroll: () => void
  // startScroll: () => void
  // pauseScroll: () => void
  // resumeScroll: () => void
  handleProjectClick: (index: number) => void
  // containerRef: React.RefObject<HTMLDivElement>
  activeWidth: number
  activeHeight: number
  // isPaused: boolean
}

export type CaseStudyProps = {
  project: Project
  caseStudy: CaseStudy
  getWindowWidth: () => number
  cancelScroll: () => void
  startScroll: () => void
  pauseScroll: () => void
  resumeScroll: () => void
  handleProjectClick: (index: number) => void
  containerRef: React.RefObject<HTMLDivElement>
  activeWidth: number
  activeHeight: number
  isPaused: boolean
}

const CaseStudyContainer = ({
  children,
  shouldRender,
}: PropsWithChildren<{ shouldRender: boolean }>) => (
  <StyledScrollableContainer $shouldRender={shouldRender}>
    {children}
  </StyledScrollableContainer>
)

export const ProjectCaseStudy = ({
  caseStudy,
  idx,
  project,
  getWindowWidth,
  handleProjectClick,
}: {
  caseStudy: CaseStudy
  idx: number
  project: Project
  getWindowWidth: () => number
  handleProjectClick: (index: number) => void
}) => {
  const windowWidth = getWindowWidth()

  const activeWidth = useMemo(
    () =>
      windowWidth < 800
        ? IMG_DIMENSIONS.mobile.width
        : IMG_DIMENSIONS.desktop.width,
    [windowWidth]
  )
  const activeHeight = useMemo(
    () =>
      windowWidth < 800
        ? IMG_DIMENSIONS.mobile.height
        : IMG_DIMENSIONS.desktop.height,
    [windowWidth]
  )

  const [scroller, isPaused] = useSlowScroll()

  useEffect(() => {
    const timeout = idx * ALTERNATING_DELAY // 2 second delay for each case study after the first
    setTimeout(() => scroller.start(), timeout)
    return () => {
      scroller.cancel()
    }
  }, [project])

  const args: CaseStudyProps = {
    project,
    caseStudy,
    getWindowWidth,
    cancelScroll: () => scroller.cancel(),
    startScroll: () => scroller.start(),
    pauseScroll: () => scroller.pause(),
    resumeScroll: () => scroller.resume(),
    handleProjectClick,
    containerRef: scroller.containerRef,
    activeHeight,
    activeWidth,
    isPaused,
  }

  return (
    <CaseStudyContainer
      key={`${project.title}-case-study-${idx}`}
      shouldRender={caseStudy.title !== 'Placeholder - SHOULD NOT RENDER'}
    >
      <ProjectCaseStudyContent {...{ ...args }} />
    </CaseStudyContainer>
  )
}

const MobileCaseStudyContainer = ({
  children,
  shouldRender,
}: PropsWithChildren<{ shouldRender: boolean }>) => (
  <StyledMobileContainer $shouldRender={shouldRender}>
    {children}
  </StyledMobileContainer>
)

export const MobileCaseStudy = ({
  caseStudy,
  idx,
  project,
  getWindowWidth,
  handleProjectClick,
}: {
  caseStudy: CaseStudy
  idx: number
  project: Project
  getWindowWidth: () => number
  handleProjectClick: (index: number) => void
}) => {
  const windowWidth = getWindowWidth()

  const activeWidth = useMemo(
    () =>
      windowWidth < 800
        ? IMG_DIMENSIONS.mobile.width
        : IMG_DIMENSIONS.desktop.width,
    [windowWidth]
  )
  const activeHeight = useMemo(
    () =>
      windowWidth < 800
        ? IMG_DIMENSIONS.mobile.height
        : IMG_DIMENSIONS.desktop.height,
    [windowWidth]
  )

  const args: MobileCaseStudyProps = {
    project,
    caseStudy,
    getWindowWidth,
    // cancelScroll: _.noop,
    // startScroll: _.noop,
    // pauseScroll: _.noop,
    // resumeScroll: _.noop,
    handleProjectClick,
    // containerRef: { current: null },
    activeHeight,
    activeWidth,
    // isPaused: false,
  }

  return (
    <MobileCaseStudyContainer
      key={`${project.title}-case-study-${idx}`}
      shouldRender={caseStudy.title !== 'Placeholder - SHOULD NOT RENDER'}
    >
      <MobileCaseStudyContent {...{ ...args }} />
    </MobileCaseStudyContainer>
  )
}
