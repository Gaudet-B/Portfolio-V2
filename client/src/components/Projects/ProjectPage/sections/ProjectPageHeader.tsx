import { ProjectSummary } from './ProjectSummary'
import { StyledPageHeader, StyledProjectType, StyledTitle } from '../styles'
import { Project } from '../../Projects'

export const ProjectPageHeader = ({
  project,
  projectType,
  mobile,
  getWindowWidth,
}: {
  project: Project
  projectType: string
  mobile: boolean
  getWindowWidth: () => number
}) => {
  return (
    <StyledPageHeader>
      <StyledTitle $responsive={mobile}>{project.title}</StyledTitle>

      <StyledProjectType $responsive={mobile}>{projectType}</StyledProjectType>

      {projectType === 'Personal Project' ? (
        <ProjectSummary
          type={'personal'}
          project={project}
          getWindowWidth={getWindowWidth}
        />
      ) : null}
    </StyledPageHeader>
  )
}
