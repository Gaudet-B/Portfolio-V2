import { ProjectSummary } from './ProjectSummary'
import { ProjectDetails } from './ProjectDetails'
import { ProjectDemoSection } from './ProjectDemoSection'
import {
  DemoBanner,
  HeroImage,
  ImageGallery,
  ModalContent,
} from '../components'
import { Project } from '../../Projects'
import { StyledImgContainer, StyledPageBody, StyledSeparator } from '../styles'
import { ProjectControls } from './ProjectControls'

export type ImageProps = {
  images: string[] | string[][]
  activeTab?: number
  activeIndex?: number
  handleTabs: (index: number) => void
  handleModal: (content: ModalContent) => void
  setActiveIndex: (index: number) => void
  getModalContent: (index: number, imgs: string[]) => ModalContent
  getWindowWidth: () => number
  getWindowHeight: () => number
  getActiveDimensions: () => { height: number; width: number }
  handleImageBrowse: (index: number, direction: 'left' | 'right') => void
  getImagesToDisplay: (images: any[]) => string[]
}

export type DemoProps = {
  source: string
  video?: string
  show: boolean
  draftDemoGifs?: string[]
  showDraftDemo: number
  handleDemoClick: () => void
  getActiveDimensions: () => { height: number; width: number }
  handleDraftDemoClick: (index: number) => void
  getWindowHeight: () => number
  getWindowWidth: () => number
  getTotalTime: (title: string) => number
  restartDemo: () => void
}

export type ControlsProps = {
  projectsLength: number
  prevProject: string
  nextProject: string
  mobile: boolean
  handleShow: (show: boolean) => void
  handleNavigateProjects: (direction: number, projectsLength: number) => void
}

export const ProjectPageBody = ({
  mobile,
  project,
  isPersonal,
  handlePizza,
  getHeroImage,
  imageProps,
  demoProps,
  controlsProps,
}: {
  mobile: boolean
  project: Project
  isPersonal: boolean
  handlePizza: () => void
  getHeroImage: (title: string) => string
  imageProps: ImageProps
  demoProps: DemoProps
  controlsProps: ControlsProps
}) => {
  return (
    <StyledPageBody>
      {project.title === 'P!ZZA' ? (
        <DemoBanner
          handleClick={handlePizza}
          text={'this project has an interactive demo!'}
        />
      ) : null}

      {isPersonal ? (
        <ImageGallery
          {...{
            ...imageProps,
            mobile,
            project,
          }}
        />
      ) : (
        <StyledImgContainer>
          <HeroImage
            mobile={mobile}
            project={project}
            getHeroImage={getHeroImage}
            getActiveDimensions={imageProps.getActiveDimensions}
            getWindowHeight={imageProps.getWindowHeight}
            getWindowWidth={imageProps.getWindowWidth}
          />
        </StyledImgContainer>
      )}

      <StyledSeparator />

      {isPersonal ? (
        <ProjectDetails
          details={project.details}
          title={project.title}
          responsive={mobile}
          redesign={project.title === 'MyDraft Partner'}
        />
      ) : (
        <ProjectSummary
          type={'professional'}
          project={project}
          getWindowWidth={imageProps.getWindowWidth}
        />
      )}

      <StyledSeparator />

      {isPersonal ? (
        <ProjectDemoSection
          {...{
            ...demoProps,
            project,
          }}
        />
      ) : null}

      <ProjectControls
        {...{
          ...controlsProps,
        }}
      />
    </StyledPageBody>
  )
}
