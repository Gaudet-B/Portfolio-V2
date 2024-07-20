import { ProjectCaseStudy } from './ProjectCaseStudy'
import {
  StyledCaseStudyContainer,
  StyledCaseStudyGrid,
  StyledCaseStudyHeader,
} from './styles'
import { Project } from '../../../Projects'
import { CaseStudies } from '../../../../../scripts/getCaseStudy'

export const ProjectCaseStudySection = ({
  caseStudies,
  getWindowWidth,
  project,
}: {
  caseStudies?: CaseStudies
  getWindowWidth: () => number
  project: Project
}) => {
  return (
    <StyledCaseStudyContainer>
      <StyledCaseStudyHeader>
        Primary Projects/Initiatives Contributed to:
      </StyledCaseStudyHeader>
      <StyledCaseStudyGrid>
        {caseStudies &&
          caseStudies.cases.map((caseStudy, idx) => {
            return ProjectCaseStudy({ caseStudy, idx, project, getWindowWidth })
          })}
      </StyledCaseStudyGrid>
    </StyledCaseStudyContainer>
  )
}
