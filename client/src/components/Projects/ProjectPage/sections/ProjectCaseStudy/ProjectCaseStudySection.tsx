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
  project,
  getWindowWidth,
  handleProjectClick,
}: {
  caseStudies?: CaseStudies
  project: Project
  getWindowWidth: () => number
  handleProjectClick: (index: number) => void
}) => {
  return (
    <StyledCaseStudyContainer>
      <StyledCaseStudyHeader>
        Primary Projects/Initiatives Contributed to:
      </StyledCaseStudyHeader>
      <StyledCaseStudyGrid>
        {caseStudies &&
          caseStudies.cases.map((caseStudy, idx) => {
            return ProjectCaseStudy({
              caseStudy,
              idx,
              project,
              getWindowWidth,
              handleProjectClick,
            })
          })}
      </StyledCaseStudyGrid>
    </StyledCaseStudyContainer>
  )
}
