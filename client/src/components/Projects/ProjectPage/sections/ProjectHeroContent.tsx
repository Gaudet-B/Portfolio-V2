import { ImageProps } from './ProjectPageBody'
import { Project } from '../../Projects'
import { HeroImage, ImageGallery } from '../components'
import { ProjectSummary } from './ProjectSummary'
import { CaseStudies } from '../../../../scripts/getCaseStudy'
import { StyledImgContainer, StyledProjectHeroContainer } from '../styles'
import { StyledCompanySummaryContainer } from './ProjectCaseStudy/styles'

const BORDER_INDEX = 7

export const ProjectHeroContent = ({
  mobile,
  project,
  isPersonal,
  caseStudies,
  getHeroImage,
  imageProps,
  hasCaseStudy,
  handleProjectClick,
}: {
  mobile: boolean
  project: Project
  isPersonal: boolean
  caseStudies?: CaseStudies
  getHeroImage: (title: string) => string
  imageProps: ImageProps
  hasCaseStudy: boolean
  handleProjectClick: (index: number) => void
}) => {
  if (isPersonal) {
    return (
      <ImageGallery
        {...{
          ...imageProps,
          mobile,
          project,
        }}
      />
    )
  } else
    return (
      <StyledProjectHeroContainer>
        <StyledImgContainer>
          <HeroImage
            mobile={mobile}
            project={project}
            getHeroImage={getHeroImage}
            getActiveDimensions={imageProps.getActiveDimensions}
            // getWindowHeight={imageProps.getWindowHeight}
            getWindowWidth={imageProps.getWindowWidth}
          />
        </StyledImgContainer>

        {hasCaseStudy ? (
          <StyledCompanySummaryContainer>
            {caseStudies?.summary(() => handleProjectClick(BORDER_INDEX))}
          </StyledCompanySummaryContainer>
        ) : (
          <ProjectSummary type={'professional'} project={project} />
        )}
      </StyledProjectHeroContainer>
    )
}
