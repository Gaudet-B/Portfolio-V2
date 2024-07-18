import { CASE_STUDIES, ImageProps } from './ProjectPageBody'
import { Project } from '../../Projects'
import { HeroImage, ImageGallery } from '../components'
import { StyledImgContainer, StyledProjectHeroContainer } from '../styles'
import { CompanySummary } from './ProjectCaseStudy'
import { ProjectDetails } from './ProjectDetails'
import { ProjectSummary } from './ProjectSummary'

// const CASE_STUDIES = ['MetTel', 'Viasat'] as const

export const ProjectHeroContent = ({
  mobile,
  project,
  isPersonal,
  getHeroImage,
  imageProps,
  title,
  hasCaseStudy,
}: {
  mobile: boolean
  project: Project
  isPersonal: boolean
  getHeroImage: (title: string) => string
  imageProps: ImageProps
  title: keyof typeof CASE_STUDIES
  hasCaseStudy: boolean
}) => {
  // const title = project.title as (typeof CASE_STUDIES)[number]
  // console.log('title:', title)
  // const hasCaseStudy = CASE_STUDIES.includes(title)
  // console.log('hasCaseStudy:', hasCaseStudy)
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
      // {isPersonal ? (
      //     <ImageGallery
      //       {...{
      //         ...imageProps,
      //         mobile,
      //         project,
      //       }}
      //     />
      //   ) : (
      <StyledProjectHeroContainer>
        <StyledImgContainer $hasWhiteBackground={project.title === 'Viasat'}>
          <HeroImage
            mobile={mobile}
            project={project}
            getHeroImage={getHeroImage}
            getActiveDimensions={imageProps.getActiveDimensions}
            getWindowHeight={imageProps.getWindowHeight}
            getWindowWidth={imageProps.getWindowWidth}
          />
        </StyledImgContainer>
        {/* )} */}

        {hasCaseStudy ? (
          <CompanySummary title={title} logo={imageProps.heros.borderSm} />
        ) : (
          <ProjectSummary
            type={'professional'}
            project={project}
            // hasCaseStudy={hasCaseStudy}
            getWindowWidth={imageProps.getWindowWidth}
          />
        )}

        {/* <StyledSeparator /> */}

        {/* {isPersonal ? (
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
          hasCaseStudy={hasCaseStudy}
          getWindowWidth={imageProps.getWindowWidth}
        />
      )} */}
        {/* </> */}
      </StyledProjectHeroContainer>
    )
}
