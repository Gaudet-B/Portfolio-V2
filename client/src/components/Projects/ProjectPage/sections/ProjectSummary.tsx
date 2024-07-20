// import { ProjectCaseStudy } from './ProjectCaseStudy'
import { Project } from '../../Projects'
import {
  StyledProfessionalContainer,
  StyledProfessionalSummary,
  StyledProjectSummary,
  StyledSummaryContainer,
} from '../styles'
// import {
//   StyledCaseStudyContainer,
//   StyledCaseStudyGrid,
//   StyledCaseStudyHeader,
// } from './ProjectCaseStudy/styles'

// /** @TODO import some JSON for the case studies */
// export const CASE_STUDIES = {
//   MetTel: ['MetTel', 'MetTel'],
//   Viasat: ['Viasat', 'Viasat'],
// } as const

export const ProjectSummary = ({
  type,
  project,
}: // hasCaseStudy,
// getWindowWidth,
{
  type: string
  project: Project
  // hasCaseStudy: boolean
  // getWindowWidth: () => number
}) => {
  // const caseStudies = hasCaseStudy
  //   ? CASE_STUDIES[project.title as keyof typeof CASE_STUDIES]
  //   : []

  const summary = project.summary?.slice() || ''
  const splitIndex = summary.indexOf('~')
  if (splitIndex > 0) {
    const firstHalf = summary.slice(0, splitIndex)
    const secondHalf = summary.slice(splitIndex + 1)
    return (
      <StyledProfessionalContainer $bottomMargin={type === 'personal'}>
        <StyledProfessionalSummary>{firstHalf}</StyledProfessionalSummary>
        <StyledProfessionalSummary>{secondHalf}</StyledProfessionalSummary>
      </StyledProfessionalContainer>
    )
  }
  return (
    <StyledSummaryContainer>
      {/* {hasCaseStudy ? ( */}
      {/* <StyledCaseStudyContainer>
          <StyledCaseStudyHeader>
            Primary Projects/Initiatives Contributed to:
          </StyledCaseStudyHeader>
          <StyledCaseStudyGrid> */}
      {/** @TODO replace this `_` underscore with the actual case study data */}
      {/* {caseStudies.map((_, idx) => {
              return ProjectCaseStudy({ idx, project, getWindowWidth })
            })}
          </StyledCaseStudyGrid>
        </StyledCaseStudyContainer> */}
      {/* ) : ( */}
      {/* <StyledProjectSummary>{project.summary || ''}</StyledProjectSummary> */}
      {/* )} */}
      <StyledProjectSummary>{project.summary || ''}</StyledProjectSummary>
    </StyledSummaryContainer>
  )
}
