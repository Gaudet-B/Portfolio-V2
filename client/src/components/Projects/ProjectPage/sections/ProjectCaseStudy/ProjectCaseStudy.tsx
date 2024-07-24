import { PropsWithChildren, useEffect, useMemo } from 'react'
import _ from 'lodash'
import { Project } from '../../../Projects'
import { StyledScrollableContainer } from './styles'
import { ProjectCaseStudyContent } from './case-studies'
import useSlowScroll, {
  ALTERNATING_DELAY,
} from '../../../../../hooks/useSlowScroll'
import { CaseStudy } from '../../../../../scripts/getCaseStudy'
// import viasatLogo from '../../../assets/viasat-logo.png'
// import mettelLogo from '../../../assets/mettel-logo.png'

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

export type CaseStudyProps = {
  project: Project
  caseStudy: CaseStudy
  getWindowWidth: () => number
  cancelScroll: () => void
  startScroll: () => void
  pauseScroll: () => void
  resumeScroll: () => void
  containerRef: React.RefObject<HTMLDivElement>
  activeWidth: number
  activeHeight: number
  isPaused: boolean
}

const CaseStudyContainer = ({
  children,
  hidden,
}: PropsWithChildren<{ hidden: boolean }>) => (
  <StyledScrollableContainer $hidden={hidden}>
    {children}
  </StyledScrollableContainer>
)

export const ProjectCaseStudy = ({
  caseStudy,
  idx,
  project,
  getWindowWidth,
}: {
  caseStudy: CaseStudy
  idx: number
  project: Project
  getWindowWidth: () => number
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

  const args = {
    project,
    caseStudy,
    getWindowWidth,
    cancelScroll: () => scroller.cancel(),
    startScroll: () => scroller.start(),
    pauseScroll: () => scroller.pause(),
    resumeScroll: () => scroller.resume(),
    containerRef: scroller.containerRef,
    activeHeight,
    activeWidth,
    isPaused,
  }

  return (
    <CaseStudyContainer
      key={`${project.title}-case-study-${idx}`}
      hidden={project.title === 'Viasat' && idx === 1}
    >
      <ProjectCaseStudyContent {...{ ...args }} />
    </CaseStudyContainer>
  )
}
