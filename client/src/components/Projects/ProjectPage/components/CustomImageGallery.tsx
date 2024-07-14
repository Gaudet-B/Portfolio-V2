import { useState } from 'react'
import { DemoImg } from './DemoImg'
import {
  StyledGalleryContainer,
  StyledGalleryHeader,
  StyledImageGrid,
  StyledGalleryTabs,
  StyledGalleryTab,
  StyledTabSeparator,
} from './styles'
import styleGuide from '../../../StyleGuide/StyleGuide'

/* TYPES */
import { Project } from '../../Projects'

// ================================= \\
/**
 * @TODO
 * the image modal has problems:
 *  1. the "left" and "right" buttons do not display as they are outside of the mobile view
 *  2. the modal does not close when clicking outside of the modal
 *  3. other things (mainly the rest of the thumbnails) on the page are not disabled when the modal is open
 */

/* CONSTANTS */
const TABS = ['version 1.0 (2021)', 'version 2.0 (2022)']
const CONTAINER_DIMENSIONS_SM = {
  mobile: {
    height: 120,
    width: 120,
  },
  desktop: {
    height: 240,
    width: 210,
  },
}
const CONTAINER_DIMENSIONS_MD = {
  mobile: {
    height: 140,
    width: 140,
  },
  desktop: {
    height: 340,
    width: 250,
  },
}
const CONTAINER_DIMENSIONS_LG = {
  mobile: {
    height: 160,
    width: 160,
  },
  desktop: {
    height: 420,
    width: 320,
  },
}

const IMG_DIMENSIONS_SM = {
  mobile: {
    height: 100,
    width: 100,
  },
  desktop: {
    height: 150,
    width: 150,
  },
}
const IMG_DIMENSIONS_MD = {
  mobile: {
    height: 120,
    width: 120,
  },
  desktop: {
    height: 190,
    width: 190,
  },
}
const IMG_DIMENSIONS_LG = {
  mobile: {
    height: 140,
    width: 140,
  },
  desktop: {
    height: 250,
    width: 250,
  },
}

const MobileTabs = (props: { handleTabs: (index: number) => void }) => {
  const [activeTab, setActiveTab] = useState(0)
  const handleTabs = (index: number) => {
    setActiveTab(index)
    props.handleTabs(index)
  }
  return (
    <StyledGalleryTabs>
      {activeTab === 1 ? (
        <StyledTabSeparator onClick={() => handleTabs(0)}>
          {'<'}
        </StyledTabSeparator>
      ) : (
        <StyledTabSeparator> </StyledTabSeparator>
      )}
      {TABS.map((tab, idx) => {
        return (
          <>
            {idx === activeTab && (
              <StyledGalleryTab
                key={tab}
                // onClick={() => handleTabs(idx)}
                data-active={idx === activeTab}
              >
                <div style={{}}>
                  {tab.split(' ').map((word, idx) => {
                    return (
                      <>
                        <span
                          style={
                            idx === 2
                              ? { color: styleGuide.colors.GhostGray }
                              : {}
                          }
                        >
                          {word}
                        </span>
                        {idx === 1 ? <br /> : null}
                      </>
                    )
                  })}
                </div>
              </StyledGalleryTab>
            )}
          </>
        )
      })}
      {activeTab === 0 ? (
        <StyledTabSeparator onClick={() => handleTabs(1)}>
          {'>'}
        </StyledTabSeparator>
      ) : (
        <StyledTabSeparator> </StyledTabSeparator>
      )}
    </StyledGalleryTabs>
  )
}

const _getContainerDimensions = (idx: number, items: number) => {
  if (idx === 0 || idx === items - 1) return CONTAINER_DIMENSIONS_LG
  else if (idx % 2 === 0) return CONTAINER_DIMENSIONS_MD
  else return CONTAINER_DIMENSIONS_SM
}

const _getImgDimensions = (idx: number, items: number) => {
  if (idx === 0 || idx === items - 1) return IMG_DIMENSIONS_LG
  else if (idx % 2 === 0) return IMG_DIMENSIONS_MD
  else return IMG_DIMENSIONS_SM
}

/**
 * CustomImageGallery
 * @description CustomImageGallery component - a stateless (controlled by parent) component that renders an array of images and displays them in a grid
 * @param props
 * @returns JSX.Element
 */
export const CustomImageGallery = (props: {
  project: Project
  images: string[]
  activeIndex: number | undefined
  setActiveIndex: (index: number) => void
  handleModal: (content: JSX.Element) => void
  styles: any
  getWindowHeight: () => number
  getWindowWidth: () => number
  getActiveDimensions: () => any
  getModalContent: (index: number, imgs: string[]) => JSX.Element
  handleImageBrowse: (idx: number, direction: 'left' | 'right') => void
  redesign?: boolean
  handleTabs?: (index: number) => void
  activeTab?: number
  responsive?: boolean
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

  const handleClick = (idx: number) => {
    if (idx === activeIndex) return props.setActiveIndex?.(-1)
    props.setActiveIndex?.(idx)
    console.log('idx', idx)
    console.log('images', images)
    props.handleModal?.(props.getModalContent(idx, images))
  }

  const handleTabs = (index: number) => {
    props.handleTabs && props.handleTabs(index)
  }

  const renderRedesignTabs = () => {
    if (props.responsive) return <MobileTabs handleTabs={handleTabs} />
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
              {idx === 0 ? (
                <StyledTabSeparator>{'|'}</StyledTabSeparator>
              ) : null}
            </>
          )
        })}
      </StyledGalleryTabs>
    )
  }

  /** @TODO fix the "grow on hover" dimensions for meduim and large images */

  return (
    <StyledGalleryContainer>
      <StyledGalleryHeader>gallery</StyledGalleryHeader>
      <p className={styles.instruction}>click or tap on images to expand</p>
      {props.redesign ? renderRedesignTabs() : null}
      <StyledImageGrid $portrait={project.title === 'P!ZZA'}>
        {images.map((img: string, idx: number) => {
          const imgDimensions = _getImgDimensions(idx, images.length - 1)
          const containerDimensions = _getContainerDimensions(
            idx,
            images.length - 1
          )
          if (idx !== activeIndex)
            return (
              <DemoImg
                key={`${img}-demo`}
                index={idx}
                source={img}
                project={project.title}
                activeIndex={activeIndex}
                onClick={handleClick}
                handleImageBrowse={props.handleImageBrowse}
                getWindowWidth={getWindowWidth}
                imgDimensions={
                  getWindowWidth() < 800
                    ? imgDimensions.mobile
                    : imgDimensions.desktop
                }
                containerDimensions={
                  getWindowWidth() < 800
                    ? containerDimensions.mobile
                    : containerDimensions.desktop
                }
                // imgDimensions={_getImgDimensions(idx, images.length - 1)}
                // containerDimensions={_getContainerDimensions(
                //   idx,
                //   images.length - 1
                // )}
              />
            )
        })}
      </StyledImageGrid>
    </StyledGalleryContainer>
  )
}
