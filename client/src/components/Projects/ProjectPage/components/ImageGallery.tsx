import { Project } from '../../Projects'
import { CustomImageGallery } from './CustomImageGallery'
import { StyledDetailsGrid, StyledGalleryContainer } from '../styles'
import { ProjectRole } from './ProjectRole'
import { ProjectTech } from './ProjectTech'

/** @TODO REMOVE THIS !!! */
import styles from '../../../../styles/carousel.style.module.css'

export type ModalContent = JSX.Element

export const ImageGallery = ({
  images,
  mobile,
  project,
  activeTab,
  activeIndex,
  handleTabs,
  handleModal,
  setActiveIndex,
  getModalContent,
  getWindowWidth,
  getWindowHeight,
  getActiveDimensions,
  handleImageBrowse,
  getImagesToDisplay,
}: {
  images: string[] | string[][]
  mobile: boolean
  project: Project
  activeTab?: number
  activeIndex?: number
  handleTabs?: (index: number) => void
  handleModal: (content: ModalContent) => void
  setActiveIndex: (index: number) => void
  getModalContent: (index: number, imgs: string[]) => ModalContent
  getWindowWidth: () => number
  getWindowHeight: () => number
  getActiveDimensions: () => { height: number; width: number }
  handleImageBrowse: (index: number, direction: 'left' | 'right') => void
  getImagesToDisplay: (images: any[]) => string[]
}) => {
  const imagesToDisplay: string[] = getImagesToDisplay(images)
  return (
    <StyledGalleryContainer>
      <CustomImageGallery
        project={project}
        images={imagesToDisplay}
        styles={styles}
        getWindowHeight={getWindowHeight}
        getWindowWidth={getWindowWidth}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        handleModal={handleModal}
        getModalContent={getModalContent}
        getActiveDimensions={getActiveDimensions}
        handleImageBrowse={handleImageBrowse}
        redesign={project.title === 'MyDraft Partner'}
        activeTab={activeTab}
        handleTabs={handleTabs}
        responsive={mobile}
      />
      <StyledDetailsGrid $responsive={mobile}>
        <ProjectRole role={project.myRole} mobile={mobile} />
        <ProjectTech
          tech={project.technologies}
          mobile={mobile}
          redesign={project.title === 'MyDraft Partner'}
        />
      </StyledDetailsGrid>
    </StyledGalleryContainer>
  )
}
