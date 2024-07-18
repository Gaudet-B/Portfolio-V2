import { ProjectCaseStudy } from './ProjectCaseStudy'
import {
  StyledCaseStudyContainer,
  StyledCaseStudyGrid,
  StyledCaseStudyHeader,
} from './styles'
import { Project } from '../../../Projects'

export const ProjectCaseStudySection = ({
  caseStudies,
  getWindowWidth,
  project,
}: {
  caseStudies: string[]
  getWindowWidth: () => number
  project: Project
}) => {
  return (
    <StyledCaseStudyContainer>
      <StyledCaseStudyHeader>
        Primary Projects/Initiatives Contributed to:
      </StyledCaseStudyHeader>
      <StyledCaseStudyGrid>
        {/** @TODO replace this `_` underscore with the actual case study data */}
        {caseStudies.map((_, idx) => {
          return ProjectCaseStudy({ idx, project, getWindowWidth })
        })}
      </StyledCaseStudyGrid>
    </StyledCaseStudyContainer>
  )
}
