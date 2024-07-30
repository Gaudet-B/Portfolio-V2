import { MobileCaseStudy, ProjectCaseStudy } from './ProjectCaseStudy'
import {
  StyledCaseStudyContainer,
  StyledCaseStudyGrid,
  StyledCaseStudyHeader,
  StyledMobileGrid,
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
      <StyledCaseStudyHeader $mobile={getWindowWidth() < 800}>
        Primary Contributions:
      </StyledCaseStudyHeader>
      {getWindowWidth() < 800 ? (
        <StyledMobileGrid>
          {caseStudies &&
            caseStudies.cases.map((caseStudy, idx) => {
              const props = {
                caseStudy,
                idx,
                project,
                getWindowWidth,
                handleProjectClick,
              }
              return MobileCaseStudy({ ...props })
            })}
        </StyledMobileGrid>
      ) : (
        <StyledCaseStudyGrid>
          {caseStudies &&
            caseStudies.cases.map((caseStudy, idx) => {
              const props = {
                caseStudy,
                idx,
                project,
                getWindowWidth,
                handleProjectClick,
              }
              return ProjectCaseStudy({ ...props })
            })}
        </StyledCaseStudyGrid>
      )}
    </StyledCaseStudyContainer>
  )
}
