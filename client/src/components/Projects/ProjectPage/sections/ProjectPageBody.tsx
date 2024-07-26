import { ProjectDetails } from './ProjectDetails'
import { ProjectDemoSection } from './ProjectDemoSection'
import { DemoBanner, ModalContent } from '../components'
import { Project, HeroImages } from '../../Projects'
import { StyledPageBody, StyledSeparator } from '../styles'
import { ProjectControls } from './ProjectControls'
import { ProjectCaseStudySection } from './ProjectCaseStudy'
import { ProjectHeroContent } from './ProjectHeroContent'
import { getCaseStudy } from '../../../../scripts/getCaseStudy'

const CASE_STUDIES = [
  'MetTel',
  'Viasat',
  'Border',
  'Epoch IT Solutions',
  'Estimatica Redesign',
  'Vapyr Analytics',
]

export type HasCaseStudy = (typeof CASE_STUDIES)[number]

export type ImageProps = {
  heros: HeroImages
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
  handleProjectClick: (index: number) => void
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
  const title = project.title as HasCaseStudy
  const hasCaseStudy = CASE_STUDIES.includes(title)

  const caseStudies = hasCaseStudy ? getCaseStudy(title) : undefined

  return (
    <StyledPageBody>
      {project.title === 'P!ZZA' ? (
        <DemoBanner
          handleClick={handlePizza}
          text={'this project has an interactive demo!'}
        />
      ) : null}

      <ProjectHeroContent
        {...{
          mobile,
          project,
          isPersonal,
          caseStudies,
          getHeroImage,
          imageProps,
          title,
          hasCaseStudy,
          handleProjectClick: controlsProps.handleProjectClick,
        }}
      />

      <StyledSeparator />

      {hasCaseStudy ? (
        <ProjectCaseStudySection
          caseStudies={caseStudies}
          project={project}
          getWindowWidth={imageProps.getWindowWidth}
          handleProjectClick={controlsProps.handleProjectClick}
        />
      ) : null}

      {isPersonal ? (
        <ProjectDetails
          details={project.details}
          title={project.title}
          responsive={mobile}
          redesign={project.title === 'MyDraft Partner'}
        />
      ) : null}

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
