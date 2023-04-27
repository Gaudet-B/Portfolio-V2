// import { getWindowHeight } from '../../../../scripts/basic'
import ChevronButton from '../ChevronButton'
import {
  StyledDemoImg,
  StyledThumbnailContainer,
  StyledImageContainer,
  StyledImage,
  StyledMask,
  StyledImageControls,
} from './styles'

const DemoImg = (props: {
  index: number
  source: string
  project: string
  activeIndex: number | undefined
  activeHeight?: number
  activeWidth?: number
  getWindowHeight: () => number
  getWindowWidth: () => number
  onClick?: (index: number) => void
  demo?: boolean
  noMask?: boolean
  handleImageBrowse?: (index: number, direction: string) => void
  hideScrollbar?: boolean
  modal?: boolean
  hideDemo?: boolean
}) => {
  const getPlacement = () => {
    const height = props.getWindowHeight()
    if (height > 1000) return '-220px'
    if (height > 850) return '-300px'
    if (height > 780) return '-350px'
    if (height > 650) return '-450px'
    return '-500px'
  }

  const getYaxis = () => {
    if (props.demo && props.getWindowHeight() < 800) return '-1400px'
    if (props.demo && props.project === 'P!ZZA') return '-1300px'
    if (props.project === 'P!ZZA') return getPlacement()
    if (props.demo) return '-1200px'
    if (props.getWindowHeight() < 800) return '-350px'
    return ''
  }

  const getXaxis = () => {
    if (props.demo) return `${props.getWindowWidth() / 2 - 200}px`
    if (props.demo) return '425px'
    return ''
  }

  const getMaxSize = () => {
    const height = props.getWindowHeight()
    if (height < 700) return 15
  }

  const handleBrowse = (index: number, direction: string) => {
    if (props.handleImageBrowse) props.handleImageBrowse(index, direction)
  }

  const handleClick = (index: number | undefined) => {
    /** @TODO clean up consoles */
    console.log(index)
    if (!index && index !== 0) return
    if (props.onClick) props.onClick(index)
  }

  return (
    <StyledDemoImg
      data-active={props.activeIndex === props.index}
      hideDemo={props.hideDemo}
    >
      <StyledThumbnailContainer
        data-active={props.activeIndex === props.index}
        portrait={props.project === 'P!ZZA'}
        activeHeight={props.activeHeight}
        activeWidth={props.activeWidth}
        translateY={getYaxis()}
        translateX={getXaxis()}
        maxHeight={getMaxSize()}
        hideScrollbar={props.hideScrollbar}
      >
        <StyledImageContainer
          data-active={props.activeIndex === props.index}
          maxHeight={getMaxSize()}
        >
          <StyledImage
            onClick={() => {
              console.log(props.index)
              handleClick(props.index)
            }}
            style={{ backgroundImage: `url(${props.source})` }}
            modal={props.modal}
          >
            {props.noMask ? null : (
              <StyledMask
                data-active={props.activeIndex === props.index}
              ></StyledMask>
            )}
          </StyledImage>
        </StyledImageContainer>
        {props.handleImageBrowse ? (
          <StyledImageControls data-active={props.activeIndex === props.index}>
            <ChevronButton
              direction={'left'}
              handleClick={() => handleBrowse(props.index, 'left')}
            />
            <ChevronButton
              direction={'right'}
              handleClick={() => handleBrowse(props.index, 'right')}
            />
          </StyledImageControls>
        ) : null}
      </StyledThumbnailContainer>
    </StyledDemoImg>
  )
}

export default DemoImg
