import { ExternalLink } from '../components'
import { Project } from '../../Projects'
import { StyledInfoContainer } from '../styles'
import { ProjectRole, ProjectTech } from '../components'

export const ProjectInfo = ({
  mobile,
  project,
}: {
  mobile: boolean
  project: Project
}) => {
  return (
    <StyledInfoContainer $redesign $responsive={mobile}>
      <ProjectRole role={project.myRole} mobile={mobile} professional />
      <ProjectTech tech={project.technologies} mobile={mobile} />
      {project.externalLink && !mobile ? (
        <>
          <div></div>
          <ExternalLink project={project} />
        </>
      ) : null}
    </StyledInfoContainer>
  )
}
