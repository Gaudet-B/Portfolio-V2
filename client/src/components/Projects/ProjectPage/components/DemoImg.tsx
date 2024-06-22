import { useEffect, useState } from 'react'
import { ChevronButton } from './ChevronButton'
import {
  StyledDemoImg,
  StyledThumbnailContainer,
  StyledImageContainer,
  StyledImage,
  StyledMask,
  StyledImageControls,
  StyledLinkContainer,
} from './styles'
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

export const DemoImg = ({
  index,
  source,
  project,
  activeIndex,
  activeHeight,
  activeWidth,
  imgDimensions,
  containerDimensions,
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

  const getContainerHeight = () => {
    const width = getWindowWidth?.()
    if (width && width < 800) return containerDimensions?.mobile.height
    else return containerDimensions?.desktop.height
  }

  const getContainerWidth = () => {
    const width = getWindowWidth?.()
    if (width && width < 800) return containerDimensions?.mobile.width
    else return containerDimensions?.desktop.width
  }

  const getImgHeight = () => {
    const width = getWindowWidth?.()
    if (width && width < 800) return imgDimensions?.mobile.height
    else return imgDimensions?.desktop.height
  }

  const getImgWidth = () => {
    const width = getWindowWidth?.()
    if (width && width < 800) return imgDimensions?.mobile.width
    else return imgDimensions?.desktop.width
  }

  const hoverHeight = imgDimensions?.desktop.height
  const hoverWidth = imgDimensions?.desktop.width

  return (
    <StyledDemoImg
      data-active={activeIndex === index}
      $hideDemo={hideDemo}
      $height={getContainerHeight()}
      $width={getContainerWidth()}
    >
      <StyledThumbnailContainer
        data-active={activeIndex === index}
        $portrait={project === 'P!ZZA'}
        $activeHeight={activeHeight}
        $activeWidth={activeWidth}
        $hideScrollbar={hideScrollbar}
        $height={getImgHeight()}
        $width={getImgWidth()}
        $hoverHeight={hoverHeight}
        $hoverWidth={hoverWidth}
      >
        <StyledImageContainer data-active={activeIndex === index}>
          <StyledImage
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              handleClick(e, index)
            }
            style={{ backgroundImage: `url(${source})` }}
            $modal={!!modal}
          >
            {hideLink ? null : showRestartLink ? (
              <StyledMask data-active={false} $showRestartLink />
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
            $hideLink={!!hideLink}
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
