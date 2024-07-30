/** @TODO aliases? */
import Link from '../../../reuseable/Link'
import { Project } from '../../Projects'
import { StyledGithubLink } from '../styles'

export const GithubLink = ({ link }: { link: Project['github'] }) => {
  return (
    <Link to={link} popOut>
      <StyledGithubLink>Github Repo</StyledGithubLink>
    </Link>
  )
}
