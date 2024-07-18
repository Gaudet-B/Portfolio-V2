import { PropsWithChildren, useEffect, useMemo } from 'react'
import _ from 'lodash'
import { Project } from '../../../Projects'
import { StyledScrollableContainer } from './styles'
import { MetTel, Viasat } from './case-studies'
import useSlowScroll, {
  ALTERNATING_DELAY,
} from '../../../../../hooks/useSlowScroll'
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
  getWindowWidth: () => number
  cancelScroll: () => void
  startScroll: () => void
  containerRef: React.RefObject<HTMLDivElement>
  activeWidth: number
  activeHeight: number
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
  idx,
  project,
  getWindowWidth,
}: {
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
  // const activeWidth = IMG_DIMENSIONS.desktop.width

  const activeHeight = useMemo(
    () =>
      windowWidth < 800
        ? IMG_DIMENSIONS.mobile.height
        : IMG_DIMENSIONS.desktop.height,
    [windowWidth]
  )
  // const activeHeight = IMG_DIMENSIONS.desktop.height

  const scroller = useSlowScroll()

  useEffect(() => {
    const timeout = idx * ALTERNATING_DELAY // 2 second delay for each case study after the first
    setTimeout(() => scroller.start(), timeout)
    return () => {
      scroller.cancel()
    }
  }, [project])

  const args = {
    project,
    getWindowWidth,
    cancelScroll: () => scroller.cancel(),
    startScroll: () => scroller.start(),
    containerRef: scroller.containerRef,
    activeWidth,
    activeHeight,
  }

  return (
    <CaseStudyContainer
      key={`${project.title}-case-study-${idx}`}
      hidden={project.title === 'Viasat' && idx === 1}
    >
      {project.title === 'MetTel' && <MetTel {...{ ...args }} />}
      {project.title === 'Viasat' && <Viasat {...{ ...args }} />}
    </CaseStudyContainer>
  )
}
