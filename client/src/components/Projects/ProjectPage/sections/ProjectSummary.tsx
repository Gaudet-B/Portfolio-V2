import { ProjectCaseStudy } from '../ProjectCaseStudy'
import { Project } from '../../Projects'
import {
  StyledProfessionalContainer,
  StyledProfessionalSummary,
  StyledProjectSummary,
  StyledSummaryContainer,
} from '../styles'

export const ProjectSummary = ({
  type,
  project,
  getWindowWidth,
}: {
  type: string
  project: Project
  getWindowWidth: () => number
}) => {
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
      {project.title === 'MetTel' || project.title === 'Viasat'
        ? ProjectCaseStudy({ project, getWindowWidth })
        : null}
      <StyledProjectSummary>{project.summary || ''}</StyledProjectSummary>
    </StyledSummaryContainer>
  )
}
