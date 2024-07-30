import { ProjectInfo } from './ProjectInfo'
import { ExternalLink, HeroImage } from '../components'
import { StyledHeroContainer } from '../styles'
import { Project } from '../../Projects'

export const ProjectHero = ({
  mobile,
  project,
  getHeroImage,
  getWindowWidth,
  getWindowHeight,
  getActiveDimensions,
}: {
  mobile: boolean
  project: Project
  getHeroImage: (title: string) => string
  getWindowWidth: () => number
  getWindowHeight: () => number
  getActiveDimensions: () => { height: number; width: number }
}) => {
  return (
    <StyledHeroContainer $responsive={mobile}>
      <HeroImage
        mobile={mobile}
        project={project}
        getHeroImage={getHeroImage}
        getActiveDimensions={getActiveDimensions}
        // getWindowHeight={getWindowHeight}
        getWindowWidth={getWindowWidth}
      />
      <ProjectInfo mobile={mobile} project={project} />
      {/** @TODO should this render here AND inside `<ProjectInfo />` ??? */}
      {project.externalLink && mobile ? (
        <ExternalLink project={project} />
      ) : null}
    </StyledHeroContainer>
  )
}
