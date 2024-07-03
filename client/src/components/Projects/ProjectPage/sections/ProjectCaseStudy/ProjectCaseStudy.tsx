import {
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import _ from 'lodash'
import { Project } from '../../../Projects'
import {
  // StyledCaseStudyContainer,
  // StyledCaseStudyGrid,
  // StyledCaseStudyHeader,
  StyledScrollableContainer,
} from './styles'
import { MetTel, Viasat } from './case-studies'
// import viasatLogo from '../../../assets/viasat-logo.png'
// import mettelLogo from '../../../assets/mettel-logo.png'

const SCROLL_INTERVAL = 4000 // 4 seconds
const ALTERNATING_DELAY = 2000 // 2 seconds

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

const CaseStudyContainer = ({ children }: PropsWithChildren) => (
  <StyledScrollableContainer>{children}</StyledScrollableContainer>
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

  const activeHeight = useMemo(
    () =>
      windowWidth < 800
        ? IMG_DIMENSIONS.mobile.height
        : IMG_DIMENSIONS.desktop.height,
    [windowWidth]
  )

  const containerRef = useRef<HTMLDivElement>(null)
  const scrollingRef: MutableRefObject<number | null> = useRef<number>(null)

  const containerScroll = useCallback(
    (scrollStep: number) => {
      const container = containerRef.current
      if (!container) return
      const { clientWidth, scrollLeft, scrollWidth } = container
      if (scrollLeft + clientWidth + scrollStep >= scrollWidth) {
        container.scrollTo({
          left: 0,
          behavior: 'smooth',
        })
      } else {
        container.scrollTo({
          left: scrollLeft + scrollStep,
          behavior: 'smooth',
        })
      }
    },
    [containerRef.current?.scrollLeft]
  )

  const slowScroll = useCallback(() => {
    const container = containerRef.current
    if (!container) return null
    const { scrollWidth, clientWidth } = container
    const steps = container.childElementCount - 2 // subtract 2 to account for the "bookends" that are empty divs
    const scrollStep = (scrollWidth - clientWidth) / steps
    const timeout = idx % 2 === 0 ? 0 : ALTERNATING_DELAY
    return new Promise<number>((resolve) =>
      setTimeout(() => {
        const interval = setInterval(
          () => containerScroll(scrollStep),
          SCROLL_INTERVAL
        )
        resolve(interval)
      }, timeout)
    )
  }, [scrollingRef.current])

  const cancelScroll = () => {
    if (scrollingRef.current) clearInterval(scrollingRef.current)
    scrollingRef.current = null
  }

  const startScroll = async () => {
    if (scrollingRef.current) clearInterval(scrollingRef.current)
    const interval = await slowScroll()
    scrollingRef.current = interval
  }

  useEffect(() => {
    startScroll()
    return () => {
      cancelScroll()
    }
  }, [])

  const args = {
    project,
    getWindowWidth,
    cancelScroll,
    startScroll,
    containerRef,
    activeWidth,
    activeHeight,
  }

  return (
    // <StyledCaseStudyContainer>
    //   <StyledCaseStudyHeader>
    //     Primary Projects/Initiatives Contributed to:
    //   </StyledCaseStudyHeader>
    //   <StyledCaseStudyGrid>
    <CaseStudyContainer>
      {project.title === 'MetTel' && <MetTel {...{ ...args }} />}
      {project.title === 'Viasat' && <Viasat {...{ ...args }} />}
    </CaseStudyContainer>
    // <CaseStudyContainer>
    //   {project.title === 'MetTel' && <MetTel {...{ ...args }} />}
    //   {project.title === 'Viasat' && <Viasat {...{ ...args }} />}
    // </CaseStudyContainer>
    //   </StyledCaseStudyGrid>
    // </StyledCaseStudyContainer>
  )
}
