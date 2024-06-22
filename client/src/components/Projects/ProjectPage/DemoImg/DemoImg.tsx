// import { getWindowHeight } from '../../../../scripts/basic'
import { useEffect, useState } from 'react'
import { ChevronButton } from '../components'
import {
  StyledDemoImg,
  StyledThumbnailContainer,
  StyledImageContainer,
  StyledImage,
  StyledMask,
  StyledImageControls,
  StyledLinkContainer,
} from './styles'
// import { StyledLinkContainer } from '../styles'
import { DemoLink } from '../ProjectDemo'

export type ImgDimensionType = {
  mobile: {
    height: number
    width: number
  }
  desktop: {
    height: number
    width: number
  }
}

const DemoImg = ({
  index,
  source,
  project,
  activeIndex,
  activeHeight,
  activeWidth,
  imgDimensions,
  containerDimensions,
  getWindowHeight,
  getWindowWidth,
  onClick,
  demo,
  noMask,
  handleImageBrowse,
  hideScrollbar,
  modal,
  hideDemo,
  hideLink,
  restartLink,
  restartDemo,
  totalTime = 0,
}: {
  index: number
  source: string
  project: string
  activeIndex: number | undefined
  activeHeight?: number
  activeWidth?: number
  imgDimensions?: ImgDimensionType
  containerDimensions?: ImgDimensionType
  getWindowHeight?: () => number
  getWindowWidth?: () => number
  onClick?: (i: number) => void
  demo?: boolean
  noMask?: boolean
  handleImageBrowse?: (index: number, direction: 'left' | 'right') => void
  hideScrollbar?: boolean
  modal?: boolean
  hideDemo?: boolean
  hideLink?: boolean
  restartLink?: boolean
  restartDemo?: () => void
  totalTime?: number
}) => {
  const [showRestartLink, setShowRestartLink] = useState(false)
  const [restartLinkTimeout, setRestartLinkTimeout] = useState<number>()

  const getPlacement = () => {
    const height = getWindowHeight?.()
    if (!height) return '-500px'
    if (height > 1000) return '-220px'
    if (height > 850) return '-300px'
    if (height > 780) return '-350px'
    if (height > 650) return '-450px'
    return '-500px'
  }

  const getYaxis = () => {
    const height = getWindowHeight?.()
    if (demo && height && height < 800) return '-1400px'
    if (demo && project === 'P!ZZA') return '-1300px'
    if (project === 'P!ZZA') return getPlacement()
    if (demo) return '-1200px'
    if (height && height < 800) return '-350px'
    return ''
  }

  const getXaxis = () => {
    const width = getWindowWidth?.()
    if (demo && width) return `${width / 2 - 200}px`
    if (demo) return '425px'
    return ''
  }

  const getMaxSize = () => {
    const height = getWindowHeight?.()
    if (height && height < 700) return 15
  }

  const handleBrowse = (index: number, direction: 'left' | 'right') => {
    if (handleImageBrowse) handleImageBrowse(index, direction)
  }

  const handleClick = (
    e: React.MouseEvent<HTMLDivElement>,
    index: number | undefined
  ) => {
    e.preventDefault()
    if (index === undefined) return
    else onClick?.(index)
  }

  const delayLinkRender = () => {
    return setTimeout(() => {
      setShowRestartLink(true)
    }, totalTime)
  }

  const handleDemoLinkClick = () => {
    restartDemo?.()
    clearTimeout(restartLinkTimeout)
    setRestartLinkTimeout(undefined)
    setShowRestartLink(false)
    setRestartLinkTimeout(delayLinkRender)
  }

  useEffect(() => {
    setRestartLinkTimeout(delayLinkRender)
    return () => {
      clearTimeout(restartLinkTimeout)
      setRestartLinkTimeout(undefined)
      setShowRestartLink(false)
    }
  }, [totalTime])

  const hoverHeight = `${imgDimensions?.desktop.height}px`
  const hoverWidth = `${imgDimensions?.desktop.width}px`

  return (
    <StyledDemoImg
      data-active={activeIndex === index}
      hideDemo={hideDemo}
      // responsive={getWindowWidth() < 800}
      // height={getWindowWidth() < 800 ? '120px' : '200px'}
      // width={getWindowWidth() < 800 ? '120px' : '200px'}
      $height={() => {
        const width = getWindowWidth?.()
        if (width && width < 800) return `${imgDimensions?.mobile.height}px`
        else return `${imgDimensions?.desktop.height}px`
      }}
      $width={() => {
        const width = getWindowWidth?.()
        if (width && width < 800) return `${imgDimensions?.mobile.width}px`
        else return `${imgDimensions?.desktop.width}px`
      }}
    >
      <StyledThumbnailContainer
        data-active={activeIndex === index}
        portrait={project === 'P!ZZA'}
        activeHeight={activeHeight}
        activeWidth={activeWidth}
        translateY={getYaxis()}
        translateX={getXaxis()}
        maxHeight={getMaxSize()}
        hideScrollbar={hideScrollbar}
        // responsive={getWindowWidth() < 800}
        // height={getWindowWidth() < 800 ? '100px' : '150px'}
        // width={getWindowWidth() < 800 ? '100px' : '150px'}
        $height={() => {
          const width = getWindowWidth?.()
          if (width && width < 800)
            return `${containerDimensions?.mobile.height}px`
          else return `${containerDimensions?.desktop.height}px`
        }}
        $width={() => {
          const width = getWindowWidth?.()
          if (width && width < 800)
            return `${containerDimensions?.mobile.width}px`
          else return `${containerDimensions?.desktop.width}px`
        }}
        hoverHeight={hoverHeight}
        hoverWidth={hoverWidth}
      >
        <StyledImageContainer
          data-active={activeIndex === index}
          maxHeight={getMaxSize()}
        >
          <StyledImage
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              handleClick(e, index)
            }
            style={{ backgroundImage: `url(${source})` }}
            modal={modal}
          >
            {hideLink ? null : showRestartLink ? (
              <StyledMask data-active={false} showRestartLink />
            ) : noMask ? null : (
              <StyledMask data-active={activeIndex === index} />
            )}
          </StyledImage>
        </StyledImageContainer>
        {handleImageBrowse ? (
          <StyledImageControls data-active={activeIndex === index}>
            <ChevronButton
              direction={'left'}
              handleClick={() => handleBrowse(index, 'left')}
            />
            <ChevronButton
              direction={'right'}
              handleClick={() => handleBrowse(index, 'right')}
            />
          </StyledImageControls>
        ) : null}
        {showRestartLink && restartLink && (
          <StyledLinkContainer
            data-active={showRestartLink}
            hideLink={hideLink}
          >
            <DemoLink
              callback={() => handleDemoLinkClick()}
              action={'restart'}
            />
          </StyledLinkContainer>
        )}
      </StyledThumbnailContainer>
    </StyledDemoImg>
  )
}

export default DemoImg
