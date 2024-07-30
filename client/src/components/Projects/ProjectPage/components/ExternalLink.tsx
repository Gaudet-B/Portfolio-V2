import { Project } from '../../Projects'
import { StyledProjectLink } from '../styles'

export const ExternalLink = ({ project }: { project: Project }) => {
  return (
    <StyledProjectLink>
      {/** @TODO add icon to communicate "new tab" to user (w3 might have SVG) */}
      {/** @TODO use the actual `<Link/>` component ??? */}
      <a href={project.externalLink} target={'_blank'}>
        {project.externalLink}
      </a>
    </StyledProjectLink>
  )
}
