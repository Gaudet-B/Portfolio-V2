import { Project } from '../../Projects'
import DemoImg from '../DemoImg'
import { StyledHeroImage } from '../styles'

export const HeroImage = ({
  mobile,
  project,
  getHeroImage,
  getActiveDimensions,
  getWindowHeight,
  getWindowWidth,
}: {
  mobile: boolean
  project: Project
  getHeroImage: (title: string) => string
  getActiveDimensions: () => { height: number; width: number }
  getWindowHeight: () => number
  getWindowWidth: () => number
}) => {
  return (
    <StyledHeroImage $responsive={mobile}>
      <DemoImg
        index={-1}
        source={getHeroImage(project.title)}
        project={project.title}
        activeIndex={-1}
        activeHeight={getActiveDimensions().height / 3}
        activeWidth={getActiveDimensions().width / 3}
        getWindowHeight={getWindowHeight}
        getWindowWidth={getWindowWidth}
        hideScrollbar
        noMask
        hideLink
      />
    </StyledHeroImage>
  )
}
