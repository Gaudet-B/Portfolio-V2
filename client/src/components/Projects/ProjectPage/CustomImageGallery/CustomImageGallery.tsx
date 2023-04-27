/* LOCAL */
import DemoImg from '../DemoImg'
import {
  StyledGalleryContainer,
  StyledGalleryHeader,
  StyledImageGrid,
  StyledGalleryTabs,
  StyledGalleryTab,
  StyledTabSeparator,
} from './styles'

/* CONSTANTS */
const TABS = ['version 1.0 (2021)', 'version 2.0 (2022)']

/**
 * CustomImageGallery
 * @description CustomImageGallery component - a stateless (controlled by parent) component that renders an array of images and displays them in a grid
 * @param props
 * @returns JSX.Element
 */
const CustomImageGallery = (props: {
  project: any
  images: string[]
  activeIndex: number | undefined
  setActiveIndex: (index: number) => void
  handleModal: (content: JSX.Element) => void
  styles: any
  getWindowHeight: () => number
  getWindowWidth: () => number
  getActiveDimensions: () => any
  getModalContent?: (index: number) => JSX.Element
  redesign?: boolean
  handleTabs?: (index: number) => void
  activeTab?: number
}) => {
  const {
    project,
    images,
    activeIndex,
    // handleModal,
    styles,
    getWindowHeight,
    getWindowWidth,
  } = props

  const getModalContent = (index: number): JSX.Element => {
    const Content = DemoImg
    const contentProps = {
      key: `${images[index]}-demo`,
      index: index,
      source: images[index],
      project: project.title,
      activeIndex: index,
      activeHeight: props.getActiveDimensions().height,
      activeWidth: props.getActiveDimensions().width,
      handleImageBrowse: handleImageBrowse,
      getWindowHeight: getWindowHeight,
      getWindowWidth: getWindowWidth,
      modal: true,
    }
    return <Content {...contentProps} />
  }

  const handleImageBrowse = (idx: number, direction: string) => {
    console.log(idx, direction)
    let newIndex
    if (direction === 'left') {
      if (idx === 0) newIndex = images.length - 1
      else newIndex = idx - 1
    } else {
      if (idx === images.length - 1) newIndex = 0
      else newIndex = idx + 1
    }
    props.setActiveIndex && props.setActiveIndex(newIndex)
    props.handleModal && props.handleModal(getModalContent(newIndex))
  }

  const handleClick = (idx: number) => {
    console.log(idx)
    if (idx === activeIndex) {
      props.setActiveIndex && props.setActiveIndex(-1)
      return
    }
    console.log(idx)
    props.setActiveIndex && props.setActiveIndex(idx)
    props.handleModal && props.handleModal(getModalContent(idx))
  }

  const handleTabs = (index: number) => {
    props.handleTabs && props.handleTabs(index)
  }

  const renderRedesignTabs = () => {
    return (
      <StyledGalleryTabs>
        {TABS.map((tab, idx) => {
          return (
            <>
              <StyledGalleryTab
                key={tab}
                onClick={() => handleTabs(idx)}
                data-active={idx === props.activeTab}
              >
                {tab}
              </StyledGalleryTab>
              {idx === 0 ? <StyledTabSeparator>|</StyledTabSeparator> : null}
            </>
          )
        })}
      </StyledGalleryTabs>
    )
  }

  /** @TODO make gallery image sizes asymetrical (some square, some rectangle, some small, medium, large, etc.) */

  return (
    <StyledGalleryContainer>
      <StyledGalleryHeader>gallery</StyledGalleryHeader>
      <p className={styles.instruction}>click or tap on images to expand</p>
      {props.redesign ? renderRedesignTabs() : null}
      <StyledImageGrid>
        {images.map((img: string, idx: number) => {
          if (idx !== activeIndex)
            return (
              <DemoImg
                key={`${img}-demo`}
                index={idx}
                source={img}
                project={project.title}
                activeIndex={activeIndex}
                onClick={handleClick}
                handleImageBrowse={handleImageBrowse}
                getWindowHeight={getWindowHeight}
                getWindowWidth={getWindowWidth}
              />
            )
        })}
      </StyledImageGrid>
    </StyledGalleryContainer>
  )
}

export default CustomImageGallery
