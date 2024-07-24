import { ImageProps } from './ProjectPageBody'
import { Project } from '../../Projects'
import { HeroImage, ImageGallery } from '../components'
import { ProjectSummary } from './ProjectSummary'
import { CaseStudies } from '../../../../scripts/getCaseStudy'
import { StyledImgContainer, StyledProjectHeroContainer } from '../styles'
import { StyledCompanySummaryContainer } from './ProjectCaseStudy/styles'

export const ProjectHeroContent = ({
  mobile,
  project,
  isPersonal,
  caseStudies,
  getHeroImage,
  imageProps,
  hasCaseStudy,
}: {
  mobile: boolean
  project: Project
  isPersonal: boolean
  caseStudies?: CaseStudies
  getHeroImage: (title: string) => string
  imageProps: ImageProps
  hasCaseStudy: boolean
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
            {caseStudies?.summary}
          </StyledCompanySummaryContainer>
        ) : (
          <ProjectSummary type={'professional'} project={project} />
        )}
      </StyledProjectHeroContainer>
    )
}
